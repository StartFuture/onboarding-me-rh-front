resource "aws_acm_certificate" "acm_website" {
  domain_name       = var.fqdn
  validation_method = "DNS"
}

resource "aws_acm_certificate_validation" "acm_validation" {
  certificate_arn         = aws_acm_certificate.acm_website.arn
  validation_record_fqdns = [for record in aws_route53_record.acm_validation_record : record.fqdn]
}
