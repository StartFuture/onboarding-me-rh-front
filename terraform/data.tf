data "aws_acm_certificate" "amazon_issued" {
  domain      = var.domain_name
  types       = ["AMAZON_ISSUED"]
  most_recent = true
}

data "aws_codestarconnections_connection" "github_connection" {
  arn = var.codestar_connection_arn
}

data "aws_caller_identity" "current" {}

locals {
  account_id = data.aws_caller_identity.current.account_id
}