provider "kubernetes" {
  config_path = "~/.kube/config"
}

resource "kubernetes_deployment" "mongodb" {
  metadata {
    name = "mongodb"
    labels = {
      app = "mongodb"
    }
  }

  spec {
    replicas = 1

    selector {
      match_labels = {
        app = "mongodb"
      }
    }

    template {
      metadata {
        labels = {
          app = "mongodb"
        }
      }

      spec {
        container {
          name  = "mongodb"
          image = "mongo"

          port {
            container_port = 27017
          }
        }
      }
    }
  }
}
