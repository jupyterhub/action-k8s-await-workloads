# Changelog

## v3.0

### v3.0.0 - 2024-02-07

([full changelog](https://github.com/jupyterhub/action-k8s-await-workloads/compare/v2.0.0...v3.0.0))

#### Breaking Changes

- Update to use node 20, and ci/docs/linting details [#71](https://github.com/jupyterhub/action-k8s-await-workloads/pull/71) ([@consideRatio](https://github.com/consideRatio), [@manics](https://github.com/manics))

#### Maintenance and upkeep improvements

- build(deps): bump @actions/core from 1.10.0 to 1.10.1 [#63](https://github.com/jupyterhub/action-k8s-await-workloads/pull/63) ([@consideRatio](https://github.com/consideRatio))
- dependabot: monthly updates of github actions [#61](https://github.com/jupyterhub/action-k8s-await-workloads/pull/61) ([@consideRatio](https://github.com/consideRatio))

#### Contributors to this release

The following people contributed discussions, new ideas, code and documentation contributions, and review.
See [our definition of contributors](https://github-activity.readthedocs.io/en/latest/#how-does-this-tool-define-contributions-in-the-reports).

([GitHub contributors page for this release](https://github.com/jupyterhub/action-k8s-await-workloads/graphs/contributors?from=2022-12-29&to=2024-02-05&type=c))

@consideRatio ([activity](https://github.com/search?q=repo%3Ajupyterhub%2Faction-k8s-await-workloads+involves%3AconsideRatio+updated%3A2022-12-29..2024-02-05&type=Issues)) | @manics ([activity](https://github.com/search?q=repo%3Ajupyterhub%2Faction-k8s-await-workloads+involves%3Amanics+updated%3A2022-12-29..2024-02-05&type=Issues))

## v2.0

### v2.0.0 - 2022-12-29

([full changelog](https://github.com/jupyterhub/action-k8s-await-workloads/compare/v1.0.0...v2.0.0))

#### Breaking changes

The action is now executed using Node 16.

#### Maintenance and upkeep improvements

- Update to node16 [#60](https://github.com/jupyterhub/action-k8s-await-workloads/pull/60) ([@manics](https://github.com/manics))
- Release: update ./dist and package-lock.json [#58](https://github.com/jupyterhub/action-k8s-await-workloads/pull/58) ([@github-actions](https://github.com/github-actions))
- build(deps): bump @actions/core from 1.9.1 to 1.10.0 [#52](https://github.com/jupyterhub/action-k8s-await-workloads/pull/52) ([@dependabot](https://github.com/dependabot))
- build(deps): bump @actions/core from 1.9.0 to 1.9.1 [#51](https://github.com/jupyterhub/action-k8s-await-workloads/pull/51) ([@dependabot](https://github.com/dependabot))
- build(deps): bump @actions/core from 1.8.2 to 1.9.0 [#49](https://github.com/jupyterhub/action-k8s-await-workloads/pull/49) ([@dependabot](https://github.com/dependabot))
- build(deps): bump @actions/core from 1.8.0 to 1.8.2 [#44](https://github.com/jupyterhub/action-k8s-await-workloads/pull/44) ([@dependabot](https://github.com/dependabot))
- build(deps): bump @actions/core from 1.6.0 to 1.8.0 [#43](https://github.com/jupyterhub/action-k8s-await-workloads/pull/43) ([@dependabot](https://github.com/dependabot))
- build(deps): bump @actions/exec from 1.1.0 to 1.1.1 [#41](https://github.com/jupyterhub/action-k8s-await-workloads/pull/41) ([@dependabot](https://github.com/dependabot))
- build(deps): bump @actions/core from 1.4.0 to 1.6.0 [#37](https://github.com/jupyterhub/action-k8s-await-workloads/pull/37) ([@dependabot](https://github.com/dependabot))
- build(deps): bump @actions/core from 1.3.0 to 1.4.0 [#33](https://github.com/jupyterhub/action-k8s-await-workloads/pull/33) ([@dependabot](https://github.com/dependabot))
- build(deps): bump @actions/exec from 1.0.4 to 1.1.0 [#32](https://github.com/jupyterhub/action-k8s-await-workloads/pull/32) ([@dependabot](https://github.com/dependabot))
- build(deps): bump @actions/core from 1.2.6 to 1.3.0 [#31](https://github.com/jupyterhub/action-k8s-await-workloads/pull/31) ([@dependabot](https://github.com/dependabot))
- Let v1,v2,etc reference tags instead of branches [#48](https://github.com/jupyterhub/action-k8s-await-workloads/pull/48) ([@consideRatio](https://github.com/consideRatio))
- Relax dependabot config [#12](https://github.com/jupyterhub/action-k8s-await-workloads/pull/12) ([@consideRatio](https://github.com/consideRatio))
- Release: update ./dist and package-lock.json [#10](https://github.com/jupyterhub/action-k8s-await-workloads/pull/10) ([@github-actions](https://github.com/github-actions))

#### Documentation improvements

- Fix README.md and action documentation [#34](https://github.com/jupyterhub/action-k8s-await-workloads/pull/34) ([@macobo](https://github.com/macobo))

#### Continuous integration improvements

- ci: fix permissions for pull request creation in package-to-dist workflow [#57](https://github.com/jupyterhub/action-k8s-await-workloads/pull/57) ([@consideRatio](https://github.com/consideRatio))
- [pre-commit.ci] pre-commit autoupdate [#40](https://github.com/jupyterhub/action-k8s-await-workloads/pull/40) ([@pre-commit-ci](https://github.com/pre-commit-ci))
- build(deps): bump Actions-R-Us/actions-tagger from 2.0.2 to 2.0.3 [#56](https://github.com/jupyterhub/action-k8s-await-workloads/pull/56) ([@dependabot](https://github.com/dependabot))
- build(deps): bump jupyterhub/action-k3s-helm from 2 to 3 [#50](https://github.com/jupyterhub/action-k8s-await-workloads/pull/50) ([@dependabot](https://github.com/dependabot))
- build(deps): bump actions/setup-python from 3 to 4 [#47](https://github.com/jupyterhub/action-k8s-await-workloads/pull/47) ([@dependabot](https://github.com/dependabot))
- build(deps): bump Actions-R-Us/actions-tagger from 2.0.1 to 2.0.2 [#46](https://github.com/jupyterhub/action-k8s-await-workloads/pull/46) ([@dependabot](https://github.com/dependabot))
- ci: update ./dist rebuild workflow to use node16 [#54](https://github.com/jupyterhub/action-k8s-await-workloads/pull/54) ([@consideRatio](https://github.com/consideRatio))
- ci: dependabot for gha, update gha versions, fix intermittent issue in tests, replace deprecated action [#45](https://github.com/jupyterhub/action-k8s-await-workloads/pull/45) ([@consideRatio](https://github.com/consideRatio))
- ci: ensure workflows has the permissions to update branches/tags [#30](https://github.com/jupyterhub/action-k8s-await-workloads/pull/30) ([@consideRatio](https://github.com/consideRatio))
- ci: fix syntax error in dependabot.yml [#15](https://github.com/jupyterhub/action-k8s-await-workloads/pull/15) ([@consideRatio](https://github.com/consideRatio))
- ci: increase timeout for slow image pulling [#13](https://github.com/jupyterhub/action-k8s-await-workloads/pull/13) ([@consideRatio](https://github.com/consideRatio))

#### Contributors to this release

([GitHub contributors page for this release](https://github.com/jupyterhub/action-k8s-await-workloads/graphs/contributors?from=2021-01-31&to=2022-12-28&type=c))

[@consideRatio](https://github.com/search?q=repo%3Ajupyterhub%2Faction-k8s-await-workloads+involves%3AconsideRatio+updated%3A2021-01-31..2022-12-28&type=Issues) | [@macobo](https://github.com/search?q=repo%3Ajupyterhub%2Faction-k8s-await-workloads+involves%3Amacobo+updated%3A2021-01-31..2022-12-28&type=Issues)

## v1.0

### v1.0.0 - 2021-01-31

Initial release.
