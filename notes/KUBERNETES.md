# Kubernetes Notes: Creating and Managing Cloud Native Services in Kubernetes

## Minikube

Minikube (https://minikube.sigs.k8s.io/docs/) is a common local Kubernetes environment. The SecurityNewsSource application 
should run in any Kubernetes 1.17+ cluster with the following features enabled:

* RBAC
* Storage (a `StorageClass` for use with `PersistentVolumeClaims`)

This liveProject may work with older versions of Kubernetes, but as of the time of this project, 1.17 is the most commonly
supported version among cloud vendors.

## Starting Minikube

```
minikube start -p sns --kubernetes-version v1.17.12 --vm-driver hyperkit --memory 4096 --cpus 2
```

## Using Minikube Docker Environment

Since Minikube under most operating systems runs Kubernetes and all related components in a VM separate from the
host operating system, in order for Minikube to access Docker images built locally they will need to be built
using the Docker daemon from Minikube. On unix-based operating systems this command will set the shell to use
the Minikube Docker daemon. See Minikube documentation for other operating systems.

```
eval $(minikube -p sns docker-env)
```

## Building Docker Images

```
docker build -t sns-payment:latest .
```

```
docker build -t sns-subscription:latest .
```

## Using kubectl to Deploy

```
cd k8s/manifest
kubectl apply -k .
```

These manifests have been setup using Kustomize. The `-k` flag to `kubectl` indicates that is should look for a Kustomize fie. All of 
the YAML files are listed under `resources` in `k8s/manifests/kustomization.yaml`. There are a lot of ways to structure yaml files 
using Kustomize, but we'll keep in simple for this project.

## Image Pull Policy

The `imagePullPolicy` is set to `Never` in the `payment service` YAML file. The reason for this is that when running Minikube, Microk8s, 
or another Kubernetes distribution without an image registry, if the pull policy is set to another value, it may try and pull the image.
Without pointing to a registry, the pull will fail. This is true even if you wollow the steps for pointing a local docker client to 
build images using Minikube's Docker daemon. The image will exist locally to the Minikube node, but will not be available in a registry
to pull from.

If you are using a registry such as DockerHub, Quay, GKE Container Registry, etc feel free to set the value of imagePullPolicy to `Always`.
