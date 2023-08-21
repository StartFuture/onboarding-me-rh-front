variable "codestar_connection_arn" {
  description = "CodeStar Connection ARN"
  type        = string
}

variable "repository_id" {
  description = "Repository ID"
  type        = string
}

variable "codepipeline_bucket" {
  description = "CodePipeline artifact Bucket"
  type        = string
}

variable "codepipeline_bucket_arn" {
  description = "CodePipeline artifact bucket ARN"
  type        = string
}

variable "deploy_bucket_name" {
  description = "Deployment bucket name"
  type        = string
}

variable "deploy_bucket_arn" {
  description = "Deployment bucket ARN"
  type        = string
}

variable "pipeline_name" {
  description = "CodePipeline name"
  type        = string
}

variable "build_project_name" {
  description = "CodePipeline name"
  type        = string
}

variable "branch_name" {
  description = "Branch name"
  type        = string
}