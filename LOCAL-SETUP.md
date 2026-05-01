killall kubectl

kind delete cluster -n local

kind create cluster --config clusters.yml -n local

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml

kubectl create namespace argocd

kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

kubectl apply -f argocd/application.yaml

kubectl port-forward svc/argocd-server -n argocd 8080:443

kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d

kubectl port-forward --namespace=ingress-nginx service/ingress-nginx-controller 8081:80 &

helm install monitoring prometheus-community/kube-prometheus-stack \
 --namespace monitoring \
 --create-namespace \
 --set grafana.adminPassword=yourpassword

kubectl get pods -n monitoring

kubectl port-forward svc/monitoring-grafana -n monitoring 3000:80

git add .
git commit -m ""
git pull --rebase origin main
git push

ArgoCD running on port: 8080
Frontend running on port: 8081
Backend running on port: 8081 (/api/data)
Grafana running on port: 3000
