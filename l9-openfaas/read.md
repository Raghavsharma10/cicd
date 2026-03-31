# Lab 09: OpenFaaS + Prometheus + CI/CD

------------------------
TASK 1: Install OpenFaaS (Minikube)
------------------------

# Step 1: Start Minikube
minikube start --driver=docker

# Step 2: Install arkade (CLI)
curl -sLS https://get.arkade.dev | sudo sh

# Step 3: Install OpenFaaS
arkade install openfaas

# Step 4: Get password
kubectl -n openfaas get secret basic-auth \
-o jsonpath="{.data.basic-auth-password}" | base64 --decode

# Step 5: Port forward gateway
kubectl port-forward svc/gateway -n openfaas 8080:8080

# open browser
http://127.0.0.1:8080


------------------------
TASK 1 (continued): Create Function
------------------------

# Step 6: Login
faas-cli login --username admin --password <password>

# Step 7: Create function
faas-cli new hello-fn --lang node

# Step 8: Build
faas-cli build -f hello-fn.yml

# Step 9: Deploy
faas-cli deploy -f hello-fn.yml

# Step 10: Invoke
faas-cli invoke hello-fn

# OR
curl http://127.0.0.1:8080/function/hello-fn


------------------------
TASK 1 (Monitoring with Prometheus)
------------------------

# OpenFaaS uses Prometheus internally

kubectl get pods -n openfaas

# port-forward Prometheus
kubectl port-forward svc/prometheus -n openfaas 9090:9090

# open
http://127.0.0.1:9090


------------------------
TASK 2: CI/CD using GitHub Actions + Terraform
------------------------

# push code
git add .
git commit -m "openfaas setup"
git push

# github auto runs workflow

# check in GitHub → Actions tab


------------------------
DEBUG
------------------------

kubectl get pods -n openfaas
kubectl logs <pod-name> -n openfaas
faas-cli list


NOTE : kubectl -n openfaas get secret basic-auth \
-o jsonpath="{.data.basic-auth-password}" | base64 --decode

op --> ex (abc123xyz)

use it here : faas-cli login --username admin --password abc123xyz



minikube service gps-app
op--> http://127.0.0.1:50019
use it here : curl http://127.0.0.1:50019/location

git remote add origin https://github.com/<username>/repo.git
replace : <username> → your GitHub username
repo → your repo name

terraform apply
may ask : Enter a value: yes


