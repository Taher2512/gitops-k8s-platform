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

variable "vpc_id" {
  description = "ID of the VPC"
  type        = string
}

variable "subnet_ids" {
  description = "List of subnet IDs"
  type        = list(string)
}
