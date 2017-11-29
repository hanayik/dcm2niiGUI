// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { spawn } = require('child_process');
const path = require('path')
var dcmDir
var platform = process.platform
if (platform == 'darwin') {
  dcm2niixPth = 'macOS'
} else if (platform == 'linux') {
  dcm2niixPth = 'linux'
}
//var dcm2nii = spawn(path.join(__dirname, 'dcm2niix'), ['-h']);

document.ondragover = document.ondrop = (ev) => {
  ev.preventDefault()
}

document.body.ondrop = (ev) => {
  dcmDir = ev.dataTransfer.files[0].path
  console.log(dcmDir)
  var dcm2nii = spawn(path.join(__dirname, dcm2niixPth, 'dcm2niix'), ['-h']);
  dcm2nii.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });
  ev.preventDefault()
}
