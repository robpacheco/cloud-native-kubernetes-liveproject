# Creating and Managing Cloud Native Services in Kubernetes

Welcome to the "Creating and Managing Cloud Native Services in Kubernetes" liveProject. This full content for this liveProject can be found here: <fill in URL here>

## Starting Point

This liveProject is broken up into five milestones, each with a corresponding branch in this repository. The master branch is the starting point for the liveProject.

As you're getting started on the first milestone, it may help to take a look at the [Kubernetes Notes](notes/KUBERNETES.md) to get starting setting up a cluster and deploying
the initial version of the application.

## Project Layout

* api - API Documention for the SecurityNewsSource services using Swagger.
* k8s - Kubernetes YAML files and other related Kubernetes resources for the SecurityNewsSource services and deployment.
* payments - The source for the `payment` service. This includes the Dockerfile and related files.

Directories for additional services should be added to this top-level directory. Additional Kubernetes YAML files should
be added to the `k8s/manifests` directory. Additional Kubernetes files that are not YAML manifests can be added anywhere
in the `k8s` directory.

# Additional Notes 

## Miletone 2 - Starting Point

For those learners who may be unfamiliar with Javascript and Node.js, there is a provided starting point that will provide the bae service implementation along with comments for where implementation from the learner should be added. This is an optional starting point.

This starting point can be found on the branch `milestone2/base`: https://github.com/robpacheco/cloud-native-kubernetes-liveproject/tree/milestone2/base

## Milestone Solutions

* Solution for Milestone 1 - branch `milestone1/solution` - https://github.com/robpacheco/cloud-native-kubernetes-liveproject/tree/milestone1/solution
* Solution for Milestone 2 - branch `milestone2/solution` - https://github.com/robpacheco/cloud-native-kubernetes-liveproject/tree/milestone2/solution
* Solution for Milestone 3 - branch `milestone3/solution` - https://github.com/robpacheco/cloud-native-kubernetes-liveproject/tree/milestone3/solution
* Solution for Milestone 4 - branch `milestone4/solution` - https://github.com/robpacheco/cloud-native-kubernetes-liveproject/tree/milestone4/solution
* Solution for Milestone 5 - branch `milestone5/solution` - https://github.com/robpacheco/cloud-native-kubernetes-liveproject/tree/milestone5/solution

