import * as core from "@actions/core"

const colorGreen = "32"
const colorRed = "31"
const dividerH1 =
  "================================================================================"
const dividerH2 =
  "--------------------------------------------------------------------------------"

export function log(message: string, {level = 3, error = false} = {}): void {
  let color = colorGreen
  if (error) {
    color = colorRed
  }
  switch (level) {
    case 1:
      core.info(
        `\n\u001b[${color};1m${message}\n\u001b[${color};1m${dividerH1}\u001b[0m`,
      )
      break
    case 2:
      core.info(
        `\n\u001b[${color};1m${message}\n\u001b[${color};1m${dividerH2}\u001b[0m`,
      )
      break
    case 3:
      core.info(`\n${message}`)
      break
    default:
      throw new Error("level not a 1, 2, or 3")
  }
}

/*
  Logs an error, sets the actions failure message, and exit.
*/
export function fail(title: string, content = ""): void {
  core.setFailed(`Action failure: ${title}\n${content}`)
}
