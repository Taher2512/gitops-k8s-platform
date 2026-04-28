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