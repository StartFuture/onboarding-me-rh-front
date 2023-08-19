resource "aws_s3_bucket" "main" {
  bucket = var.bucket_name

  force_destroy = true
}
