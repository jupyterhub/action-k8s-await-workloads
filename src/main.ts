import * as core from "@actions/core"
import {wait} from "./wait"

async function run(): Promise<void> {
  try {
    const ms: string = core.getInput("milliseconds")
    core.debug(`Waiting ${ms} milliseconds ...`) // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true

    core.debug(new Date().toTimeString())
    await wait(parseInt(ms, 10))
    core.debug(new Date().toTimeString())

    core.setOutput("time", new Date().toTimeString())
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()

/*

- start timer to trigger abort after max time
- print overview: kubectl get ds,deploy,sts
- start monitoring of restarted containers to abort after max restarts

    PODS_RESTARTED=$(
        kubectl get pods -o json \
            | jq -r '
                .items[]
                | select(
                    any(.status.initContainerStatuses[]?; .restartCount > 0)
                    or
                    any(.status.containerStatuses[]?; .restartCount > 0)
                )
                | .metadata.name
        '
    )

- Capture info about all workloads: WORKFLOWS=$(kubectl get deploy,sts,ds -o name)
- For each workload in parallel:
    - kubectl rollout status $workload
    - report completion and a time relative to action start
- await all workloads rollout

*/
