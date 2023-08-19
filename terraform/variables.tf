variable "aws_region" {
  description = "AWS Region"
  type        = string
  default     = "us-east-1"
}

variable "environment" {
  description = "AWS Account Environment (also used for prefixes)"
  type        = string
  default     = "PRD"
}

variable "tags" {
  description = "Tags"
  type        = map(any)
  default = {
    "Owner" : "Start Future",
    "Website" : "onboarding-rh.startfuture.com.br"
  }
}

variable "frontend_app_name" {
  description = "App Name"
  type        = string
  default     = "rh"
}

variable "domain_name" {
  description = "Domain name"
  type        = string
  default     = "startfuture.com.br"
}

variable "codestar_connection_arn" {
  description = "CodeStar Connection ARN to the repository (must be already created)"
  type        = string
  default     = "arn:aws:codestar-connections:us-east-1:678604849177:connection/71bac765-abd7-4e3c-9f2a-077269558c26"
}

variable "frontend_bucket_name" {
  description = "Bucket name (globally unique)"
  type        = string
  default     = "turma-3-rh-frontend"
}

variable "frontend_build_bucket_name" {
  description = "Frontend builder bucket name"
  type        = string
  default     = "codebuild-turma-3-rh"
}

variable "frontend_pipeline_name" {
  description = "CodePipeline name"
  type        = string
  default     = "front-turma-3-rh"
}

variable "frontend_repository_id" {
  description = "Front-end repository ID"
  type        = string
  default     = "StartFuture/onboarding-me-rh-front"
}

variable "frontend_branch_name" {
  description = "Frontend branch name"
  type        = string
  default     = "feat/pipeline"
}

variable "frontend_codebuild_project_name" {
  description = "Frontend CodeBuild project name"
  type        = string
  default     = "build-turma-3-rh"
}

variable "frontend_codebuild_subnet_ids" {
  description = "Frontend CodeBuild subnet IDs"
  type        = list(string)
  default     = ["subnet-0c0d5121c978d878b", "subnet-05665abe21d607b51"]
}

variable "frontend_builder_image" {
  description = "Frontend builder image"
  type        = string
  default     = "aws/codebuild/standard:4.0"
}

variable "frontend_builder_type" {
  description = "Frontend builder type"
  type        = string
  default     = "LINUX_CONTAINER"
}

variable "frontend_builder_compute_type" {
  description = "Frontend builder type"
  type        = string
  default     = "BUILD_GENERAL1_SMALL"
}

variable "frontend_builder_artifact_type" {
  description = "Frontend builder type"
  type        = string
  default     = "CODEPIPELINE"
}

variable "frontend_builder_project_source" {
  description = "Builder project source"
  type        = string
  default     = "CODEPIPELINE"
}
