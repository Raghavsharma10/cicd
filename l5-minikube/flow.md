# Minikube Lab - Execution Flow

eval $(minikube docker-env)
docker build -t ml-app .
kubectl apply -f deployment.yaml
kubectl expose deployment ml-app --type=NodePort --port=3000
minikube service ml-app

------------------------
TASK 1: Install & Start Minikube
------------------------

# start minikube (docker driver)
minikube start --driver=docker

# check status
minikube status

# check cluster
kubectl cluster-info

# open dashboard
minikube dashboard


------------------------
TASK 2: Deploy Application
------------------------

# Step 1: Use minikube docker
eval $(minikube docker-env)

# Step 2: Build image (inside this folder)
docker build -t my-app .

# Step 3: Create deployment.yaml
# (ensure image name = my-app and imagePullPolicy: Never)

# Step 4: Apply deployment
kubectl apply -f deployment.yaml

# Step 5: Verify
kubectl get deployments
kubectl get pods
kubectl describe pod <pod-name>


------------------------
TASK 3: ML as a Service
------------------------

# Step 1: Build ML image
docker build -t ml-app .

# Step 2: Deploy
kubectl apply -f deployment.yaml

# Step 3: Check pods
kubectl get pods

# Step 4: Expose service
kubectl expose deployment ml-app --type=NodePort --port=3000

# Step 5: Start service (KEEP TERMINAL OPEN)
minikube service ml-app

# Step 6: Test (new terminal)
curl -X POST http://127.0.0.1:<PORT>/predict \
-H "Content-Type: application/json" \
-d '{"input": 5}'


------------------------
EXPECTED OUTPUT
------------------------

{"prediction":10}


------------------------
DEBUG (if needed)
------------------------

kubectl get pods
kubectl logs <pod-name>
kubectl get services
