import * as core from "@actions/core"

import * as log from "./log"

/*
  parses and validates action integer input
*/
export function parseIntegerInput(input: string, default_ = 0): number {
  const value = core.getInput(input)
  if (!value) {
    return default_
  }
  const num = parseFloat(value)
  if (!Number.isInteger(num)) {
    log.fail("input", `"${input}" with value "${value}" was not an integer!`)
    process.exit(1)
  }
  return num
}

/*
  normalize a workload string

  Examples:
  - "StatefulSet/my-statefulset " become "sts/my-statefulset"
  - "Deployments/my-deploy " become "deploy/my-deploy"
  - "DaemonSet/my-ds " become "ds/my-ds"
*/
export function normWorkload(wl: string): string {
  // lower case, trim space
  let [type, name] = wl.toLowerCase().trim().split("/", 2)
  if (!name) {
    log.fail(
      "input",
      `workload "${wl}" missed resource type, did you mean "deploy/${type}"?`,
    )
    process.exit(1)
  }
  // shorten resource kinds
  if (type === "ds" || type.startsWith("daemonset")) {
    type = "ds"
  } else if (type === "deploy" || type.startsWith("deployment")) {
    type = "deploy"
  } else if (type === "sts" || type.startsWith("statefulset")) {
    type = "sts"
  } else {
    log.fail(
      "input",
      `workload "${wl}" must be of type: daemonset, deployment, or statefulset`,
    )
    process.exit(1)
  }
  return `${type}/${name}`
}

/*
  normalize multiple workload strings
*/
export function normWorkloads(workloads: string[]): string[] {
  return workloads.map(wl => normWorkload(wl))
}
