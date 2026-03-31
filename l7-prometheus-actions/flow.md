
# Lab 07: GPS Microservice + Prometheus + CI/CD

------------------------
TASK 1: GPS Microservice (Minikube)
------------------------

# Step 1: Start Minikube
minikube start --driver=docker

# Step 2: Use Minikube Docker
eval $(minikube docker-env)

# Step 3: Build image
docker build -t gps-service .

# Step 4: Deploy
kubectl apply -f deployment.yaml

# Step 5: Check pods
kubectl get pods

# Step 6: Expose service
kubectl expose deployment gps-app --type=NodePort --port=3000

# Step 7: Run service (KEEP TERMINAL OPEN)
minikube service gps-app

# Step 8: Test
curl http://127.0.0.1:<PORT>/location


------------------------
EXPECTED OUTPUT
------------------------

{"latitude":13.0827,"longitude":80.2707}


------------------------
TASK 2: Prometheus Monitoring
------------------------

# enable metrics
minikube addons enable metrics-server

# install prometheus (helm required)
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update

helm install prometheus prometheus-community/prometheus

# check pods
kubectl get pods

# access prometheus
kubectl port-forward svc/prometheus-server 9090:80

# open browser
http://localhost:9090


------------------------
TASK 3: CI/CD (GitHub Actions)
------------------------

# push code to GitHub

git init
git add .
git commit -m "lab07 setup"
git branch -M main
git remote add origin https://github.com/<username>/repo.git
git push -u origin main

# GitHub Actions will auto run


------------------------
DEBUG
------------------------

kubectl get pods
kubectl logs <pod-name>
kubectl get services
