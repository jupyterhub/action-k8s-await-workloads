# GitHub Action: Await k8s workloads

[![GitHub Action badge](https://github.com/jupyterhub/action-k8s-await-workloads/workflows/Test/badge.svg)](https://github.com/jupyterhub/action-k8s-await-workloads/actions)

An action to help you await successful startup of Kubernetes workloads:
DaemonSets, Deployments, and StatefulSets.

- Await workloads in parallel.
- Reports time waited.
- Can abort on container restarts.
- Can abort on timeout.
- Can be complemented with
  [jupyterhub/action-k8s-namespace-report](https://github.com/jupyterhub/action-k8s-namespace-report)
  to provide `kubectl describe` / `kubectl logs` details of any chosen workloads
  or pods with issues.

## Optional input parameters

- `workloads`: Await a subset of the namespace's workloads. Example:
  `"deplpy/hub,sts/user-placeholder"`.
- `namespace` Await workloads within this namespace instead of the current
  contexts namespace.
- `timeout`: Aborts after this time in seconds. Defaults to `-1` which means
  infinite.
- `max-restarts`: Aborts after this many container restarts for any given
  container. Defaults to `0`. `-1` means infinite.

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
      - name: Setup k8s cluster
        uses: jupyterhub/action-k3s-helm@v1
        with:
          k3s-channel: v1.20 # https://update.k3s.io/v1-release/channels
          metrics-enabled: false
          traefik-enabled: false

      # Let's install the jupyterhub helm chart as an example
      - name: Install jupyterhub Helm chart
        run: |
          helm install jupyterhub jupyterhub \
              --repo https://jupyterhub.github.io/helm-chart/ \
              --version=0.11.1-n082.h437ed29d

      # GitHub Action reference: https://github.com/jupyterhub/action-k8s-await-workloads
      - name: Await jupyterhub
        uses: jupyterhub/action-k8s-await-workloads@main
        with:
          workloads: "" # all
          namespace: "" # default
          timeout: 60
          max-restarts: 0

      # GitHub Action reference: https://github.com/jupyterhub/action-k8s-namespace-report
      - name: Emit namespace report
        uses: jupyterhub/action-k8s-namespace-report@v1
        if: always()
```

## Preview

**Live examples**

The workflow above is executed
[here](https://github.com/jupyterhub/action-k8s-await-workloads/actions?query=workflow%3A%22Example+workflow%22).
Several tests of the action is also run
[here](https://github.com/jupyterhub/action-k8s-await-workloads/actions?query=workflow%3ATest)
to verify its behavior during various situations.

**Screenshot**

![](https://user-images.githubusercontent.com/3837114/106372814-e045ed00-6373-11eb-9c2a-8f7aae791776.png)
