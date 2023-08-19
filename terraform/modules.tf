module "frontend_artifact_bucket" {
  source = "./modules/storage"

  bucket_name = var.frontend_bucket_name
}


module "frontend_build_bucket" {
  source = "./modules/storage"

  bucket_name = var.frontend_build_bucket_name
}


module "frontend_pipeline" {
  source = "./modules/codepipeline"

  codestar_connection_arn = data.aws_codestarconnections_connection.github_connection.arn
  repository_id           = var.frontend_repository_id
  codepipeline_bucket     = module.frontend_artifact_bucket.bucket
  codepipeline_bucket_arn = module.frontend_artifact_bucket.bucket_arn
  pipeline_name           = var.frontend_pipeline_name
  build_project_name      = var.frontend_codebuild_project_name
  branch_name             = var.frontend_branch_name
}


module "frontend_codebuild" {
  source = "./modules/codebuild"

  account_id             = local.account_id
  aws_region             = var.aws_region
  project_name           = var.frontend_codebuild_project_name
  environment            = var.environment
  subnet_ids             = module.networking.public_subnet_ids
  builder_image          = var.frontend_builder_image
  builder_compute_type   = var.frontend_builder_compute_type
  builder_type           = var.frontend_builder_type
  builder_project_source = var.frontend_builder_project_source
  builder_artifact_type  = var.frontend_builder_artifact_type
  build_bucket_arn       = module.frontend_build_bucket.bucket_arn
  pipeline_bucket_arn    = module.frontend_artifact_bucket.bucket_arn
}


# module "frontend_codedeploy" {
#   source = "./modules/codedeploy"

# }