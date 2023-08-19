variable "codestar_connection_arn" {
  description = "CodeStar Connection ARN"
  type        = string
}

variable "repository_id" {
  description = "Repository ID"
  type        = string
}

variable "codepipeline_bucket" {
  description = "CodePipeline Artifact Bucket"
  type        = string
}

variable "codepipeline_bucket_arn" {
  description = "Bucket ARN"
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