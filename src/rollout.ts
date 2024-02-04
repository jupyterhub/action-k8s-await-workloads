import * as core from "@actions/core"
import * as exec from "@actions/exec"

import * as log from "./log"

export async function monitorRollouts(
  wls: string[],
  ns: string,
): Promise<void> {
  const startTime = new Date().getTime()
  log.log("Workloads awaited", {level: 2})
  return new Promise(async resolve => {
    await Promise.all(wls.map(async wl => monitorRollout(wl, ns, startTime)))
    log.log("All workloads awaited!", {level: 2})
    resolve()
  })
}

export async function monitorRollout(
  wl: string,
  ns: string,
  startTime: number,
): Promise<void> {
  return new Promise(async resolve => {
    let stderr = ""
    try {
      await exec.exec(
        "kubectl",
        ["rollout", "status", wl, `--namespace=${ns}`],
        {
          silent: true,
          listeners: {
            errline: (line: string) => {
              stderr = `${stderr}\n${line}`
            },
          },
        },
      )
      const dur = ((new Date().getTime() - startTime) / 1000).toPrecision(2)
      core.info(`- ${wl} (${dur}s)`)
      resolve()
    } catch (error) {
      if (error instanceof Error) {
        log.fail(`rollout of ${wl}`, `${error.message}\n${stderr}`)
      } else {
        log.fail(`rollout of ${wl}`, `\n${stderr}`)
      }
      process.exit(1)
    }
  })
}
