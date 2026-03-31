# Lab 06: Linear Regression ML Service - Execution Flow

------------------------
STEP 1: Start Minikube
------------------------

minikube start --driver=docker

# verify
minikube status
kubectl cluster-info


------------------------
STEP 2: Use Minikube Docker
------------------------

eval $(minikube docker-env)


------------------------
STEP 3: Build Docker Image
------------------------

# inside project folder
docker build -t lr-service .

# verify image
docker images


------------------------
STEP 4: Deploy Application
------------------------

kubectl apply -f deployment.yaml

# verify deployment
kubectl get deployments

# check pods
kubectl get pods


------------------------
STEP 5: Expose Service
------------------------

# option 1 (recommended in exam)
kubectl expose deployment lr-app --type=NodePort --port=3000

# OR option 2
kubectl apply -f service.yaml

# verify
kubectl get services


------------------------
STEP 6: Describe Resources (IMPORTANT)
------------------------

kubectl describe deployment lr-app
kubectl describe service lr-service


------------------------
STEP 7: Start Service
------------------------

minikube service lr-service

# NOTE:
# keep this terminal OPEN


------------------------
STEP 8: Test Prediction (new terminal)
------------------------

curl -X POST http://127.0.0.1:<PORT>/predict \
-H "Content-Type: application/json" \
-d '{"input": 5}'


------------------------
EXPECTED OUTPUT
------------------------

{"prediction":11}


------------------------
DEBUG (if needed)
------------------------

kubectl get pods
kubectl logs <pod-name>
kubectl get services
