const { spawn } = require('child_process');

// Spawns a command (e.g., 'ls' on Unix or 'dir' on Windows)
// The second argument is an array of flags/parameters passed to the command

// const cName = 'ls';
// const cArgs = ['-sh', 'pres*'];

const cName = 'make';
const cArgs = [
 'nodeLatex',
 'file=prescription-20260808-aaabbbcom-prescription-main'
];

const child = spawn(cName, cArgs);

// Listen for standard output data stream
child.stdout.on('data', (data) => {
 console.log(`stdout:\n${data}`);
});

// Listen for standard error data stream
child.stderr.on('data', (data) => {
 console.error(`stderr: ${data}`);
});

// Triggered when an error occurs while spawning or killing the process
child.on('error', (error) => {
 console.error(`error: ${error.message}`);
});

// Triggered when the process finishes execution
child.on('close', (code) => {
 console.log(`child process exited with code ${code}`);
});
