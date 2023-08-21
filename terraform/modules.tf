module "frontend_build_bucket" {
  source = "./modules/storage"

  bucket_name = var.frontend_build_bucket_name
}

module "frontend_website" {
  source = "./modules/storage"

  bucket_name = var.frontend_bucket_name
}

module "frontend_codebuild" {
  source = "./modules/codebuild"

  account_id             = local.account_id
  aws_region             = var.aws_region
  environment            = var.environment
  project_name           = var.frontend_codebuild_project_name
  subnet_ids             = var.frontend_codebuild_subnet_ids
  builder_image          = var.frontend_builder_image
  builder_compute_type   = var.frontend_builder_compute_type
  builder_type           = var.frontend_builder_type
  builder_project_source = var.frontend_builder_project_source
  builder_artifact_type  = var.frontend_builder_artifact_type
  build_bucket_arn       = module.frontend_build_bucket.bucket_arn
}

module "frontend_pipeline" {
  source = "./modules/codepipeline"

  codestar_connection_arn = data.aws_codestarconnections_connection.github_connection.arn
  repository_id           = var.frontend_repository_id
  codepipeline_bucket     = module.frontend_build_bucket.bucket
  codepipeline_bucket_arn = module.frontend_build_bucket.bucket_arn
  deploy_bucket_name      = module.frontend_website.bucket_id
  deploy_bucket_arn       = module.frontend_website.bucket_arn
  pipeline_name           = var.frontend_pipeline_name
  build_project_name      = var.frontend_codebuild_project_name
  branch_name             = var.frontend_branch_name
}

module "cloudfront" {
  source = "./modules/cloudfront"

  bucket_id   = module.frontend_website.bucket_id
  aliases_cf  = var.aliases_cf
  domain_name = var.domain_name
  fqdn        = var.fqdn
  tags        = var.tags
  account_id  = data.aws_caller_identity.current.account_id
}
