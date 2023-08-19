resource "aws_iam_role" "codebuild" {
  name               = "codebuild-${lower(var.environment)}-role-${var.project_name}"
  assume_role_policy = data.aws_iam_policy_document.assume_role.json

  inline_policy {
    name   = "${var.project_name}-policy"
    policy = data.aws_iam_policy_document.codebuild.json
  }
}