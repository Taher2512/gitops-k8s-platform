variable "aws_region" {
  description = "AWS region to deploy to"
  type = string
  default = "ap-south-1"
}

variable "cluster_name" {
    description = "EKS cluster name"
    type = string
    default = "gitops-k8s-platform"
}

variable "environment" {
  description = "Environment"
  type = string
  default = "dev"
}