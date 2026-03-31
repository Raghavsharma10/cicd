## Theory

### 1. Terraform for Kubernetes

Terraform is an Infrastructure as Code (IaC) tool used to define and provision infrastructure using configuration files. In this lab, Terraform is used to create Kubernetes resources such as deployments.

The Kubernetes provider in Terraform allows interaction with a Kubernetes cluster using a configuration file (kubeconfig). The main components of a Terraform configuration include:

- Provider: Specifies the platform (Kubernetes)
- Resource: Defines the infrastructure (e.g., deployment)
- Metadata: Contains resource name and labels
- Spec: Describes the desired state such as replicas and container details

Terraform follows three main steps:
- `terraform init` → initializes the working directory
- `terraform plan` → shows execution plan
- `terraform apply` → creates resources

---

### 2. MongoDB Database

MongoDB is a NoSQL database that stores data in JSON-like documents. It is schema-less, flexible, and widely used in modern applications.

Basic operations in MongoDB include:
- Creating a database using `use <dbname>`
- Inserting data using `insertOne()` and `insertMany()`
- Retrieving data using `find()`
- Deleting data using `deleteOne()`
- Dropping collections using `drop()`

In this lab, MongoDB is used to store B.Tech success stories as documents.

---

### 3. CI/CD using GitHub Actions

CI/CD (Continuous Integration and Continuous Deployment) automates the process of building, testing, and deploying applications.

GitHub Actions is a CI/CD tool that allows automation through workflows defined in YAML files. These workflows are stored in the `.github/workflows/` directory.

Key components:
- Workflow: Defined in `.yml` file
- Trigger: Events like `push` or `pull_request`
- Jobs: Set of tasks executed on a runner
- Steps: Individual commands executed in sequence

In this lab, GitHub Actions is used to automatically run Terraform commands when code is pushed to the repository, enabling automated infrastructure deployment.

---

### Conclusion

This lab demonstrates how Terraform can be used to provision Kubernetes resources, how MongoDB manages NoSQL data, and how GitHub Actions automates deployment through CI/CD pipelines. Together, these tools form a complete DevOps workflow for modern applications.
