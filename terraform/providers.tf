terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }

  backend "s3" {
    bucket         = "terraform-state-startfuture-turma-3"
    key            = "rh/terraform.tfstate"
    dynamodb_table = "terraform-remote-state-table"
    region         = "us-east-1"
  }
}

provider "aws" {
  region  = var.aws_region
  profile = "startfuture-prd"
}
