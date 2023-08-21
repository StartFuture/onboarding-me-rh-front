variable "project_name" {
  description = "Project name"
  type        = string
}

variable "aws_region" {
  description = "AWS Region"
  type        = string
  default     = "us-east-1"
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "DEV"
}

variable "account_id" {
  description = "Account ID"
  type        = string
}

variable "subnet_ids" {
  description = "Subnet IDs"
  type        = list(any)
}

variable "builder_image" {
  description = "Frontend builder image"
  type        = string
  default     = "aws/codebuild/standard:5.0"
}

variable "builder_compute_type" {
  description = "Builder compute type"
  type        = string
  default     = "BUILD_GENERAL1_SMALL"
}

variable "builder_artifact_type" {
  description = "Builder artifact type"
  type        = string
  default     = "CODEPIPELINE"
}

variable "builder_type" {
  description = "Builder type"
  type        = string
}

variable "builder_project_source" {
  description = "Builder project source"
  type        = string
  default     = "CODEPIPELINE"
}

variable "build_bucket_arn" {
  description = "Build bucket ARN"
  type        = string
}
