resource "aws_s3_bucket_policy" "allow_access" {
  bucket = data.aws_s3_bucket.default.id
  policy = data.aws_iam_policy_document.allow_access.json
}
