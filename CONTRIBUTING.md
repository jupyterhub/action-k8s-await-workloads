## Setup for development

First, you'll need to have a reasonably modern version of `node` handy.

Install the dependencies

```bash
npm install
```

Compile typescript

```bash
# the build action is defined in package.json
npm run build
```

While you can run the tests in `npm run all`, there are no unit tests as this
moment and you are recommended to use the CI based system to test unless you
understand the code in the `__tests__` folder.

## Change action.yml

The action.yml contains defines the inputs and output of the action.

See the [action.yml documentation](https://help.github.com/en/articles/metadata-syntax-for-github-actions).

## Change the typescript source code

Most toolkit and CI/CD operations involve async operations so the action is run
in an async function.

```javascript
import * as core from '@actions/core';
...

async function run() {
  try {
      ...
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
```

See the [toolkit documentation](https://github.com/actions/toolkit/blob/master/README.md#packages) for the various packages.

## Release

Actions are run from GitHub repos, so we need the compiled code available. To
avoid various trouble we .gitignore the dist folder and manage it using
automation instead.

To publish a new version:

1. _Update the dist folder_

   You only need to run [this workflow][github-package-workflow] and a PR will
   be created or updated.

1. _Merge the PR you were tagged in_

   Ensure the tests succeed first.

1. _Create a GitHub Release_

   [Create a GitHub Release][github-create-release] where you create a tag like
   `vX.Y.Z`.

1. _Validate a release was made_

   The `vX` branch should have been updated.

[github-package-workflow]: https://github.com/jupyterhub/action-k8s-await-workloads/actions?query=workflow%3A%22Package+to+./dist%22
[github-create-release]: https://github.com/jupyterhub/action-k8s-await-workloads/releases/new
