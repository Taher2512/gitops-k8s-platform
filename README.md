killall kubectl

kind delete cluster -n local

kind create cluster --config clusters.yml -n local

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml

kubectl create namespace argocd

kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d

kubectl apply -f argocd/application.yaml

kubectl port-forward svc/argocd-server -n argocd 8080:443

kubectl port-forward --namespace=ingress-nginx service/ingress-nginx-controller 8081:80 &

git add .
git commit -m ""
git pull --rebase origin main
git push
