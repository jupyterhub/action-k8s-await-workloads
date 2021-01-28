# Making a release

Releases are automated through
[.github/workflows/release-updates.yaml](https://github.com/jupyterhub/action-k8s-await-workloads/blob/main/.github/workflows/release-updates.yaml).

To cut a release, visit the projects [releases
page](https://github.com/jupyterhub/action-k8s-await-workloads/releases) where
you create a new GitHub release. Enter a _tag name_ and _release name_ of
"vX.Y.Z". Doing so will automatically update the "vX" branch allowing users to
reference this action with `jupyterhub/action-k8s-await-workloads@vX`.
