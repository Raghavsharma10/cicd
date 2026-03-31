# Lab 07: GPS Microservice + Prometheus + CI/CD

## Execution Flow

1. Start Minikube
minikube start --driver=docker
kubectl cluster-info

2. Use Minikube Docker
eval $(minikube docker-env)

3. Build Docker Image
docker build -t gps-service .
docker images

4. Deploy Application
kubectl apply -f deployment.yaml

5. Verify Deployment
kubectl get pods
kubectl get deployments

6. Expose Service
kubectl expose deployment gps-app --type=NodePort --port=3000
kubectl get services

7. Run Service
minikube service gps-app
(keep terminal open)

8. Test API
curl http://127.0.0.1:<PORT>/location

Expected Output:
{"latitude":13.0827,"longitude":80.2707}


## Monitoring using Prometheus

1. Enable metrics
minikube addons enable metrics-server

2. Install Prometheus
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
helm install prometheus prometheus-community/prometheus

3. Access Prometheus
kubectl port-forward svc/prometheus-server 9090:80

Open in browser:
http://localhost:9090


## CI/CD using GitHub Actions

Workflow file location:
.github/workflows/main.yml

# cd your-repo-name
# mkdir -p .github/workflows
# paste the cojtent of main.yml into this location

Purpose:
- Automates build process
- Runs when code is pushed to GitHub
- Builds Docker image automatically

Flow:
1. Push code to GitHub
git add .
git commit -m "add github actions workflow"
git push
2. GitHub Actions triggers workflow
3. Code is checked out
4. Docker image is built


## Useful Commands

kubectl get pods
kubectl logs <pod-name>
kubectl describe deployment gps-app
kubectl get services
