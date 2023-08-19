variable "project_name" {
  description = "Project name"
  type        = string
}

variable "aws_region" {
  description = "AWS Region"
  type        = string
}

variable "environment" {
  description = "Environment name"
  type        = string
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
}

variable "builder_compute_type" {
  description = "Builder compute type"
  type        = string
}

variable "builder_artifact_type" {
  description = "Builder artifact type"
  type        = string
}

variable "builder_type" {
  description = "Builder type"
  type        = string
}

variable "builder_project_source" {
  description = "Builder project source"
  type        = string
}

variable "pipeline_bucket_arn" {
  description = "Pipeline bucket ARN"
  type        = string
}

variable "build_bucket_arn" {
  description = "Build bucket ARN"
  type        = string
}