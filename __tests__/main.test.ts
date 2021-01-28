import * as process from "process"
import * as cp from "child_process"
import * as path from "path"
import * as main from "../src/main"

// FIXME: Add unit tests

// test("throws invalid number", async () => {
//   const input = parseInt("foo", 10)
//   await expect(wait(input)).rejects.toThrow("milliseconds not a number")
// })

// test("main.run", async () => {
//   await main.run()
// })

// shows how the runner will run a javascript action with env / stdout protocol
test("test runs", async () => {
  process.env["INPUT_WORKLOADS"] = ""
  process.env["INPUT_NAMESPACE"] = ""
  process.env["INPUT_TIMEOUT"] = "0"
  process.env["INPUT_MAX-RESTARTS"] = "0"
  const np = process.execPath
  const ip = path.join(__dirname, "..", "lib", "main.js")
  const options: cp.SpawnOptions = {
    env: process.env,
  }
  // console.log(cp.execFileSync(np, [ip], options).toString())

  let exitCode = await passthru(np, [ip], options)

  console.log(stdout)
  console.log(`exit code: ${exitCode}`)
})

let stdout = ""
let stderr = ""
async function passthru(exe: string, args: string[], options: cp.SpawnOptions) {
  return new Promise((resolve, reject) => {
    const env = Object.create(process.env)
    const child = cp.spawn(exe, args, {
      ...options,
      env: {
        ...env,
        ...options.env,
      },
    })
    child.stdout?.setEncoding("utf8")
    child.stderr?.setEncoding("utf8")
    child.stdout?.on("data", data => {
      stdout = `${stdout}${data}`
    })
    child.on("error", error => reject(error))
    child.on("close", exitCode => {
      resolve(exitCode)
    })
  })
}
