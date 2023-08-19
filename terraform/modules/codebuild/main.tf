resource "aws_codebuild_project" "terraform_codebuild_project" {
  name         = var.project_name
  service_role = aws_iam_role.codebuild.arn

  artifacts {
    type = var.builder_artifact_type
  }

  environment {
    compute_type    = var.builder_compute_type
    image           = var.builder_image
    type            = var.builder_type
    privileged_mode = true
  }

  logs_config {
    cloudwatch_logs {
      status      = "ENABLED"
      group_name  = "${var.project_name}-log-group"
      stream_name = "${var.project_name}-log-stream"
    }
  }

  source {
    type      = var.builder_project_source
    buildspec = "buildspec.yml"
  }
}