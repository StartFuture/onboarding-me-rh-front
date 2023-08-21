variable "bucket_id" {
  description = "Bucket ID"
  type        = string
}

variable "aliases_cf" {
  description = "Aliases for CloudFront"
  type        = list(string)
  default     = []
}

variable "tags" {
  description = "AWS tags for CloudFront distribution"
  type        = map(string)
  default = {
    Environment = "dev"
  }
}

variable "domain_name" {
  description = "Domain name"
  type        = string
}

variable "fqdn" {
  description = "FQDN"
  type        = string
}

variable "account_id" {
  description = "Account ID"
  type        = string
}