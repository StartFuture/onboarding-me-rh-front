data "aws_s3_bucket" "default" {
  bucket = var.bucket_id
}

data "aws_route53_zone" "default" {
  name = var.domain_name
}

data "aws_iam_policy_document" "allow_access" {
  statement {
    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    actions = [
      "s3:GetObject"
    ]

    resources = [
      data.aws_s3_bucket.default.arn,
      "${data.aws_s3_bucket.default.arn}/*",
    ]

    condition {
      test     = "StringEquals"
      variable = "aws:SourceArn"
      values = [
        "${aws_cloudfront_distribution.s3_distribution.arn}"
      ]
    }
  }
}