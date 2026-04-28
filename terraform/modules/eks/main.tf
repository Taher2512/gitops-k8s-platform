module "eks" {
    source = "terraform-aws-modules/eks/aws"
    version = "~> 20.0"

    cluster_name = var.cluster_name
    cluster_version = "1.29"

    vpc_id = var.vpc_id
    subnet_ids = var.subnet_ids

    cluster_endpoint_public_access = true

    eks_managed_node_groups = {
        default = {
            min_size = 1
            max_size = 3
            desired_size = 2
            instance_types = ["t3.small"]
        }
    }

    tags = {
        Environment = var.environment
    }
}