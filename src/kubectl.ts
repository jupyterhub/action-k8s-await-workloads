import * as exec from "@actions/exec"

import * as log from "./log"
import * as input from "./input"

export async function getRestartedPods(
  wls: string[],
  ns: string,
  max: number,
): Promise<string[]> {
  let stderr = ""
  try {
    const restartedPods: string[] = []
    await exec.exec(
      "/bin/bash",
      [
        "-c",
        `
          kubectl get pods --output=json --namespace=${ns} | jq -r '  
              .items[]
              | select(
                  any(.status.initContainerStatuses[]?; .restartCount > ${max})
                  or
                  any(.status.containerStatuses[]?; .restartCount > ${max})
              )
              | select(any(.metadata.ownerReferences[]?; .kind | IN("DaemonSet","ReplicaSet","StatefulSet")))
              | .metadata.ownerReferences[0].kind + ":" + .metadata.ownerReferences[0].name + ":" + .metadata.name
          '
        `,
      ],
      {
        silent: true,
        listeners: {
          stdline: (line: string) => {
            // filter to pods owned by our workloads
            let [ownerType, ownerName, podName]: string[] = line.split(":")

            // assume ReplicaSets are owned by Deployment
            if (ownerType === "ReplicaSet") {
              ownerType = "deploy"
              ownerName = ownerName.split("-").slice(0, -1).join("-")
            }
            const wl = input.normWorkload(`${ownerType}/${ownerName}`)
            if (wls.includes(wl)) {
              restartedPods.push(podName)
            }
          },
          errline: (line: string) => {
            stderr = `${stderr}\n${line}`
          },
        },
      },
    )
    return restartedPods
  } catch (error) {
    log.fail(`get restarted pods`, stderr)
    process.exit(1)
  }
}

export async function getWorkloads(ns: string): Promise<string[]> {
  let stderr = ""
  try {
    const workloads: string[] = []
    await exec.exec(
      "kubectl",
      ["get", "ds,deploy,sts", "--output=name", `--namespace=${ns}`],
      {
        silent: true,
        listeners: {
          stdline: (line: string) => {
            workloads.push(line)
          },
          errline: (line: string) => {
            stderr = `${stderr}\n${line}`
          },
        },
      },
    )
    return workloads
  } catch (error) {
    log.fail(`get workloads`, stderr)
    process.exit(1)
  }
}

export async function printWorkloads(ns: string): Promise<void> {
  let stderr = ""
  try {
    await exec.exec("kubectl", ["get", "ds,deploy,sts", `--namespace=${ns}`], {
      listeners: {
        errline: (line: string) => {
          stderr = `${stderr}\n${line}`
        },
      },
    })
  } catch (error) {
    log.fail("print workloads", stderr)
    process.exit(1)
  }
}
