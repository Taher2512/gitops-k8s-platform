module "networking" {
    source = "./modules/networking"

    cluster_name = var.cluster_name
    environment = var.environment
}

module "eks" {
    source = "./modules/eks"
    
    cluster_name = var.cluster_name
    environment = var.environment
    vpc_id = module.networking.vpc_id
    subnet_ids = module.networking.private_subnet_ids
}