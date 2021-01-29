# GitHub Action: Await k8s workloads
[![GitHub Action badge](https://github.com/jupyterhub/action-k8s-await-workloads/workflows/Test/badge.svg)](https://github.com/jupyterhub/action-k8s-await-workloads/actions)

GitHub Action to await Ready / Completed status of Kubernetes workloads, namely
Deployments, StatefulSets, DaemonSets, and Jobs. If a workload's pods have a
container that restarts, the wait will stop.

## Optional input parameters
- `accepted-container-restarts`: Aborts after this many container restarts for
  any given container. Defaults to `0`.
- `timeout`: Aborts after this time. Defaults to `""` and accepts strings like
  `"10m"`.
- `workload-timeout`: Aborts after this time awaiting an individual workload.
  Defaults to `""` and accepts strings like `"2m30s"`.

## Example

```yaml
name: Example workflow

on:
  pull_request:
  push:
  workflow_dispatch:

jobs:
  k8s-test:
    runs-on: ubuntu-20.04
    steps:
      # GitHub Action reference: https://github.com/jupyterhub/action-k3s-helm
      - name: Setup k8s
        uses: jupyterhub/action-k3s-helm@v1
        with:
          k3s-channel: v1.20    # https://update.k3s.io/v1-release/channels

      - name: Startup workloads
        run: |
          helm install ...

      # GitHub Action reference: https://github.com/jupyterhub/action-k8s-await-workloads
      - name: Setup k8s
        uses: jupyterhub/action-k8s-await-workloads@v1

      # GitHub Action reference: https://github.com/jupyterhub/action-k8s-await-workloads
      - name: Kubernetes namespace report
        uses: jupyterhub/action-k8s-await-workloads@v1
        if: always()
```
