const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

// Open the log file in append mode ('a') or write mode ('w')

const logPath = path.join(__dirname, 'zlog.txt');
const logFile = fs.openSync(logPath, 'w');

// console.log(logPath);
// process.exit(0);

// Spawn the process and direct stdout (index 1) to the file descriptor
// const cmd = 'ls';
// const arg = ['-sh', 'pres*'];

const cmd = 'make';
const arg = [
 'nodeLatex',
 'file=prescription-20260809-aaabbbcom-prescription-main',
 'n=1'
];

const opt = {
 // stdio: ['ignore', logFile, 'pipe'] // stdin, stdout, stderr
 stdio: [logFile, logFile, logFile] // stdin, stdout, stderr
};

const child = spawn(cmd, arg, opt);

// const child = spawn('ls', ['-lh', ''], {
//  stdio: ['ignore', logFile, 'pipe'] // stdin, stdout, stderr
// });

// Optional: Handle errors or process exit
child.on('close', (code) => {
 console.log(`Child process exited with code ${code}`);
 // fs.closeSync(logFile); // Explicitly release the system resource
});
