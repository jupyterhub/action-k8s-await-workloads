import * as log from "./log"
import {sleep} from "./timeout"
import * as kubectl from "./kubectl"

export async function checkRestarts(
  wls: string[],
  ns: string,
  max: number,
): Promise<void> {
  const restartedPods = await kubectl.getRestartedPods(wls, ns, max)

  if (restartedPods.length) {
    log.fail("max restarts", `- ${restartedPods.join("\n- ")}`)
    process.exit(1)
  }
}

export async function monitorRestarts(
  wls: string[],
  ns: string,
  max: number,
): Promise<void> {
  const pollDelay = 2000

  return new Promise(async () => {
    while (true) {
      await checkRestarts(wls, ns, max)
      await sleep(pollDelay)
    }
  })
}
