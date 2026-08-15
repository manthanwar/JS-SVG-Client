// Runs the platform check and sets process.env.PYTHON_PATH

const process = require('process');

if (process.platform === 'win32') {
 process.env.PYTHON_PATH = 'C:\\Python311\\python.exe';
} else {
 process.env.PYTHON_PATH = '/usr/bin/python3';
}

console.log('Python path:', process.env.PYTHON_PATH);

// How to Use
// require('./pypath');
