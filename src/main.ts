/*
  Good to know about a javascript based actions:

  - They can rely on a toolkit described more in detail at
    https://github.com/actions/toolkit.

  - This action relies on:
    - @actions/core: https://github.com/actions/toolkit/tree/main/packages/core
    - @actions/exec: https://github.com/actions/toolkit/tree/main/packages/exec
*/

import * as core from "@actions/core"

import * as log from "./log"
import * as input from "./input"
import * as kubectl from "./kubectl"
import * as rollout from "./rollout"
import * as restart from "./restart"
import * as timeout from "./timeout"

export async function run(): Promise<void> {
  try {
    // parse input
    const inWls = core.getInput("workloads")
    const inNs = core.getInput("namespace")
    const inTimeout = input.parseIntegerInput("timeout", -1)
    const inMax = input.parseIntegerInput("max-restarts", -1)

    // print settings
    log.log("Awaiting workloads", {level: 1})
    core.info("Settings:")
    core.info(`- workloads: ${inWls}`)
    core.info(`- namespace: ${inNs}`)
    core.info(`- timeout: ${inTimeout}`)
    core.info(`- max-restarts: ${inMax}`)

    // print workloads
    log.log("Workload overview", {level: 2})
    await kubectl.printWorkloads(inNs)

    // decide on workloads to await
    let wls: string[] = []
    if (inWls) {
      wls = input.normWorkloads(inWls.split(","))
    } else {
      wls = input.normWorkloads(await kubectl.getWorkloads(inNs))
    }

    if (inMax !== -1) {
      restart.monitorRestarts(wls, inNs, inMax)
    }
    if (inTimeout > 0) {
      timeout.monitorTimeout(inTimeout)
    }
    await rollout.monitorRollouts(wls, inNs)
    if (inMax !== -1) {
      // await once to ensure we don't exit before
      await restart.checkRestarts(wls, inNs, inMax)
    }
    process.exit(0)
  } catch (error) {
    log.fail("unknown", `${error}`)
    process.exit(1)
  }
}

run()
