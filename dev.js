const { resolve } = require('path')
const { spawn } = require('child_process')
const { watch } = require('chokidar')

let processId = null
let timeOutId = null

const startElectron = () => {
  processId && process.kill(processId)
  const electronProcess = spawn('electron', [resolve(__dirname, './src/main')])
  processId = electronProcess.pid
  electronProcess.stdout.on('data', data => console.log(data.toString()))
  electronProcess.on('close', () => processId = null)
}

watch(resolve(__dirname, './src')).on('all', () => {
  timeOutId && clearTimeout(timeOutId)
  timeOutId = setTimeout(startElectron, 300)
})
