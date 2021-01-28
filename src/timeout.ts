import * as log from "./log"

export async function monitorTimeout(s: number): Promise<void> {
  return new Promise(async () => {
    await sleep(s * 1000)
    log.fail("timeout expired")
    process.exit(1)
  })
}

export async function sleep(ms: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}
