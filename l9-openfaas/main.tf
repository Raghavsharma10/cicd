resource "null_resource" "deploy_function" {
  provisioner "local-exec" {
    command = "faas-cli deploy -f hello-fn.yml"
  }
}

resource "null_resource" "remove_function" {
  provisioner "local-exec" {
    when    = destroy
    command = "faas-cli remove hello-fn"
  }
}
