# Lab 08: Terraform + MongoDB + CI/CD

------------------------
TASK 1: Terraform Kubernetes Resource
------------------------

# Step 1: Start Minikube
minikube start --driver=docker

# Step 2: Initialize Terraform
terraform init

# Step 3: Plan
terraform plan

# Step 4: Apply
terraform apply

# confirm
kubectl get deployments
kubectl get pods


------------------------
TASK 2: MongoDB (Local)
------------------------

# start mongodb
mongod

# open shell
mongosh

# create database
use btech

# insert records
db.stories.insertOne({
  name: "Raghav",
  achievement: "Completed labs",
  year: 2026
})

db.stories.insertMany([
  { name: "Student1", achievement: "Internship", year: 2025 },
  { name: "Student2", achievement: "Project", year: 2026 }
])

# read
db.stories.find()

# delete
db.stories.deleteOne({ name: "Student1" })

# drop collection
db.stories.drop()


------------------------
TASK 3: CI/CD using GitHub Actions
------------------------

# push code
git add .
git commit -m "terraform setup"
git push

# github auto runs workflow

# check in GitHub → Actions tab


------------------------
DEBUG
------------------------

kubectl get pods
kubectl logs <pod-name>
terraform destroy
