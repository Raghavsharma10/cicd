# Docker Lab - Execution Flow

------------------------
TASK 1: Docker Commands
------------------------

# check docker
docker --version

# pull image
docker pull ubuntu

# list images
docker images

# run container
docker run -it ubuntu

# list containers
docker ps
docker ps -a

# stop container
docker stop <container_id>

# remove container
docker rm <container_id>


------------------------
TASK 2: Dockerfile
------------------------

# Step 1: Create Dockerfile
# (write Dockerfile in folder)

# Step 2: Build image
docker build -t raghav-container .

# Step 3: Run container
docker run raghav-container


------------------------
TASK 3: Node App + Docker
------------------------

# Step 1: Create files
# app.js
# package.json
# Dockerfile

# Step 2: Build image
docker build -t node-app .

# Step 3: Run container with port mapping
docker run -p 3000:3000 node-app

# Step 4: Open browser
http://localhost:3000


------------------------
DEBUG (if needed)
------------------------

docker ps
docker logs <container_id>
