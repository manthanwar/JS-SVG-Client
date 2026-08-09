// #region header
/*
// =============================================================================
// File Name     : prescription.cjs
// Date Created  : 2026-08-08 15:16 UTC +05:30
// description   : route prescription
// -----------------------------------------------------------------------------
// Author        : Amit Manohar Manthanwar
// WebURL        : https://manthanwar.github.io
// -----------------------------------------------------------------------------
// Copyright     : (c) 2026 Amit Manohar Manthanwar
// License       : LICENSE.md
// =============================================================================
// Revision Log  | Author  | Description
// --------------+---------+----------------------------------------------------
// 13-Oct-2025   | AMM     | Initial Version
// --------------+---------+----------------------------------------------------
// 08-Aug-2026   | AMM     | Added Medical Prescription
// --------------+---------+----------------------------------------------------
// =============================================================================
*/
// #endregion header

// #region const
const path = require('path');
// const fs = require('fs').promises;
const fs = require('node:fs');
const { exec } = require('node:child_process');
const { execSync } = require('node:child_process');
const { execFile } = require('node:child_process');
const { spawn } = require('node:child_process');
const { spawnSync } = require('node:child_process');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const cookieParser = require('cookie-parser');
const util = require('./Utility.cjs');
// #endregion const

// #region mutter disk storage
const storage = multer.diskStorage({
 destination: (req, file, cb) => {
  const filePath = path.join(__dirname, '../data-certificates/');
  cb(null, filePath);
 },
 filename: (req, file, cb) => {
  const today = new Date();
  const isoDt = today.toISOString().substring(0, 10).replaceAll('-', '');
  const fileO = file.originalname;
  // const fileB = path.basename(fileO, path.extname(fileO));
  // const fileE = path.extname(fileO);
  const email = req.body.email.replace(/[^a-zA-Z0-9]/g, '');
  const fileName = 'prescription-' + isoDt + '-' + email + '-' + fileO;
  cb(null, fileName);
 }
});
const upload = multer({ storage: storage });
// #endregion mutter disk storage

// #region router.get /
router.get('/', (req, res) => {
 res.redirect('/demo-pub-doc-automation.html');
});
// #endregion router.get /

// #region router.post /printOne
router.post('/printOne', (req, res, next) => {
 const data = {
  nameT: req.body.nameT, // name Title
  nameF: req.body.nameF, // name first
  nameM: req.body.nameM, // name middle
  nameL: req.body.nameL, // name last
  nameN: req.body.nameN, // name number = id
  examN: req.body.examN, // exam name
  examD: req.body.examD, // exam date
  examR: req.body.examR, // exam result
  certU: req.body.certU, // cert University
  certN: req.body.certN, // cert number
  certD: req.body.certD, // cert date
  color: req.body.color.slice(1) // certificate color
 };

 //  const name = data.nameF + ' ' + data.nameM + ' ' + data.nameL;
 const name = data.nameF;
 const examDate = new Date(data.examD);
 const examYYY = examDate.getFullYear();
 const examMMM = examDate.toLocaleString('default', { month: 'long' });
 const examDMY = examMMM + ' ' + examYYY;

 const certDate = new Date(data.certD);
 const certYYY = certDate.getFullYear();
 const certMMM = certDate.toLocaleString('default', { month: 'long' });
 const certDDD = certDate.getDate();
 const certDMY = certDDD + ' ' + certMMM + ' ' + certYYY;
 const certDFN = data.certD.replaceAll('-', '');

 const fileName = data.nameL + '-' + data.nameN + '-' + certDFN + '.tex';
 const filePath = path.join(__dirname, '../data-certificates/' + fileName);
 //  const classPath = '../src-tex/certificate/amm-pst-certificate';
 const tex = fileName.slice(0, -4);

 const pdf = tex + '.pdf';
 //  \\RequirePackage\{../src-tex/pst-art-logo\}%
 //  \\documentclass\{${classPath}\}%
 const fileContent = `\\documentclass\{amm-pst-certificate\}%
\\begin{document\}%
\\defineColor\{${data.color}\}%
\\defineCertificate\{${data.certU}\}\{${data.certN}\}\{${certDMY}\}%
\\defineStudent\{${data.nameT}\}\{${data.nameF}\}\{${data.nameM}\}\{${data.nameL}\}\{${data.nameN}\}%
\\defineExam\{${data.examN}\}\{${examDMY}\}\{${data.examR}\}%
\\end{document\}
 `;

 util.writeFile(filePath, fileContent);

 const src = path.join(__dirname, '../data-certificates');
 //  const mak = path.join(__dirname, '/src-tex/makefile');
 // const cmd = `cd ${src} && make -f ${mak} latexruns file=${tex}`;
 //  const cmd = `cd ${src} && make -f ../src-tex/makefile latexruns file=${tex}`;
 const cmd = `cd ${src} && \
 latex ${tex}.tex && latex ${tex}.tex && \
 dvips -q ${tex}.dvi && ps2pdf -dNOSAFER -dALLOWPSTRANSPARENCY ${tex}.ps && \
 rm ${tex}.aux ${tex}.dvi ${tex}.log ${tex}.ps ${tex}.out.ps`;
 exec(cmd, (error, stdout, stderr) => {
  if (error) {
   const message =
    'Error generating your certificate. Resubmit with correct data.';
   console.log(`my error: ${error.message}`);
   // console.log('error = ' + error.message);
   // res.write('welcome, ' + req.body.nameF + '\n' + message);
   return;
  }
  if (stderr) {
   const message =
    'Error generating your certificate. Resubmit with correct data.';
   console.log(`my stderr: ${stderr}`);
   // console.log('error = ' + error.message);
   // res.write('welcome, ' + req.body.nameF + '\n' + message);
   return;
  }
  // res.write('Thank you ' + req.body.nameF + '. Your card is loading...');
  if (stdout) {
   const message = `
   <h3><a href="data-certificates/${pdf}" target="_blank">Here is your certificate</a></h3>
   `;
   // res.write('Thank you ' + req.body.nameF + '. Your card is' + message);
   // res.redirect(`/pub-business-card-pdf?pdf=${pdf}`);
  }
 }); //exec

 res.redirect(`printOnePdf?pdf=${pdf}&name=${name}`);
 //  res.send(JSON.stringify(data) + filePath + '\\n\\n' + fileContent);
});
//#endregion router.post /printOne

// #region router.get /printOnePdf
router.get('/printOnePdf', (req, res) => {
 res.render('prescription', {
  layout: false,
  name: req.query.name ? req.query.name : '#',
  pdf: req.query.pdf ? req.query.pdf : '#',
  delay: req.query.delay ? req.query.delay : 10
 });
});
// #endregion router.get /printOnePdf

//#region function runCommand
function runCommand(cmd) {
 return new Promise((resolve, reject) => {
  exec(cmd, (error, stdout, stderr) => {
   if (error) {
    const message = 'Error processing certificate. Resubmit with correct data.';
    console.log(`error: ${error.message}`);
    reject(error);
    return { success: true, message: message, error: error };
   }
   if (stderr) {
    const message = 'Error compiling certificate. Resubmit with correct data.';
    console.log(`error-stderr: ${stderr}`);
    reject(stderr);
    return { success: true, message: message, error: stderr };
   }
   if (stdout) {
    const message = 'Certificate compiled successfully.';
    resolve(message);
    return { success: true, message: message };
   }
  }); //exec
 }); //Promise
}
//#endregion function runCommand

// #region router.post /printFile
router.post('/printFile', upload.single('file'), (req, res, next) => {
 if (!req.file || Object.keys(req.file).length === 0) {
  return res.status(400).send('<h1>No files were uploaded.</h1>');
 }

 const nam = req.body.nameF;
 const eml = req.body.email;
 const dtm = new Date().toISOString(); // YYYY-MM-DDTHH:mm:ss.sssZ, 'Z' => UTC
 const msg = `Name: ${nam}\nMail: ${eml}\nDate: ${dtm}\n\n`;
 const src = path.join(__dirname, '../data-certificates');
 const dat = req.file.filename; //original data file .json
 const ext = path.extname(dat);
 const bas = dat.substring(0, dat.lastIndexOf('.'));
 const pdf = bas + '-main.pdf';
 const log = bas + '-main-log.txt';
 const tex = bas + '-main'; // tex file name
 const txt = path.join(__dirname, '../data-certificates', bas + '.txt');
 const tfn = path.join(__dirname, '../data-certificates', tex + '.tex');
 const scr = path.join(__dirname, '../data-certificates', 'script.sh');
 const mak = path.join(__dirname, '../data-certificates/makefile');
 const del = 20; //delay
 const lin = `\\documentclass[11pt,a5,margin=15]{prescription}
\\begin{document}
\\JSONParseFromFile{\\medReqData}{${dat}}%
\\input{prescription-design-001.tex}
\\end{document}
`;

 res.redirect(`printOnePdf?pdf=${pdf}&name=${nam}&delay=${del}`);

 // util.writeFile(txt, msg);
 // util.writeFile(tfn, lin);

 try {
  // Blocks the execution thread until writing finishes
  fs.writeFileSync(tfn, lin);
  // fs.writeFileSync(txt, msg);

  // Executes right after writing finishes
  console.log('File written! Continuing script...');

  const logFile = fs.openSync(txt, 'w');
  fs.writeSync(logFile, msg);
  fs.writeSync(logFile, '------\nCompiling file...\n');
  fs.writeSync(logFile, tex);
  fs.writeSync(logFile, '\n------\n\n');

  // Spawn the process and direct stdout (index 1) to the file descriptor
  // const cmd = 'ls';
  // const arg = ['-sh', 'pres*'];

  // const cmd = 'latex';
  // const arg = ['--version'];

  // const cmd = 'sh';
  // const arg = ['script.sh', tex];

  // const arg = ['--version'];
  // const arg = ['-f', mak, `file=${tex}`, 'n=1', 'runlatex'];
  // const arg = ['nodeLatex', 'file=zzz', 'n=1'];

  // console.log(arg);

  // const arg = ['nodeLatexT', `file=${tex}`, 'n=1'];

  // stdio: ['ignore', logFile, 'pipe'] // stdin, stdout, stderr
  // const env = {
  //  ...process.env, // 1. Copy all existing environment variables
  //  // NODE_ENV: 'test', // 2. Add or overwrite specific variables
  //  // API_KEY: '12345',
  //  file: tex
  // };

  // stdin, stdout, stderr
  // shell: true // Helpful on Windows systems


  const cmd = 'make';
  const arg = [`file=${tex}`, 'n=1', 'nodelatex'];
  const opt = { cwd: src, stdio: [logFile, logFile, logFile] };
  const child = spawnSync(cmd, arg, opt);

  // const child = spawn('ls', ['-lh', ''], {
  //  stdio: ['ignore', logFile, 'pipe'] // stdin, stdout, stderr
  // });

  // Optional: Handle errors or process exit

  // child.unref(); // Allows the parent process to exit independently

  // child.stdout.on('data', (data) => {
  // console.log(`stdout: ${data}`);
  // fs.writeSync(logFile, '------\nstdout...\n');
  // fs.writeSync(logFile, data);
  // fs.writeSync(logFile, '\n------\n');
  // });

  // child.stderr.on('data', (data) => {
  // console.error(`stderr: ${data}`);
  // fs.writeSync(logFile, '------\nstderr...\n');
  // fs.writeSync(logFile, data);
  // fs.writeSync(logFile, '\n------\n');
  // });

  // child.on('error', (error) => {
  // console.error(`Failed to start subprocess: ${error.message}`);
  // fs.writeSync(logFile, '------\nerror...\n');
  // fs.writeSync(logFile, error);
  // fs.writeSync(logFile, '\n------\n');
  // });

  child.on('close', (code) => {
   console.log(`Child process exited with code ${code}`);
   fs.writeSync(logFile, '\n\n------\nstdout...\n');
   fs.writeSync(logFile, code + ' = closed successfully');
   fs.writeSync(logFile, '\n------\n');
   fs.closeSync(logFile); // Explicitly release the system resource
  });
 } catch (err) {
  console.error(`error fs.writeFileSync: ${err}`);
 }

 // 1. Write the file synchronously (blocks code until fully written)
 // try {
 //  fs.writeFileSync(tfn, lin);
 //  console.log('File successfully written.');
 // } catch (err) {
 //  console.error('Error writing file:', err);
 //  process.exit(1);
 // }

 // res.redirect(`printOnePdf?pdf=${pdf}&name=${nam}&delay=${del}`);

 // // 2. Spawn Python synchronously after the file is saved
 // const pythonResult = spawnSync('python', ['testUtility.py', tex], {
 //  cwd: src,
 //  stdio: 'inherit'
 // });

 // if (pythonResult.error) {
 //  console.error('Failed to start Python script:', pythonResult.error);
 // } else {
 //  console.log(`Python exited with code ${pythonResult.status}`);
 // }

 // async function processData() {
 //  // const filePath = path.join(__dirname, 'data.json');
 //  // const sampleData = JSON.stringify({ message: 'Hello from Node.js!' });

 //  try {
 //   console.log('Writing file...');
 //   // 1. Wait completely for the file write operation to finish disk I/O
 //   await fs.writeFile(tfn, lin, 'utf8');
 //   console.log('File written successfully. Starting Python script...');

 //   // 2. Call the Python script and pass the file path as a terminal argument
 //   const pythonProcess = spawn('python', ['testUtility.py', tex], { cwd: src });

 //   // Handle standard output from Python
 //   pythonProcess.stdout.on('data', (data) => {
 //    console.log(`Python Output: ${data.toString()}`);
 //   });

 //   // Handle errors from Python
 //   pythonProcess.stderr.on('data', (data) => {
 //    console.error(`Python Error: ${data.toString()}`);
 //   });

 //   // Detect when Python finishes executing
 //   pythonProcess.on('close', (code) => {
 //    console.log(`Python process finished with exit code ${code}`);
 //   });
 //  } catch (error) {
 //   console.error(`An error occurred: ${error.message}`);
 //  }
 // }

 // processData();

 // const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

 // async function run() {
 //  console.log('Waiting...');

 //  // Pause execution for 10,000 milliseconds
 //  await sleep(5000);

 //  console.log('5 seconds have passed!');
 // }

 // run();

 // function sleepSync(ms) {
 //  const end = Date.now() + ms;
 //  while (Date.now() < end) {
 //   // This loop burns CPU cycles and blocks the entire thread
 //  }
 // }

 // console.log('Starting 3-second freeze...');
 // sleepSync(3000); // 3000 milliseconds = 3 seconds
 // console.log('3 seconds have passed!');

 // const cmds = `cd ${src} && python testUtility.py ${tex}`;

 // const cmds = `cd ${src} && pwd && python --version`;
 // const cmds = `cd ${src} && pwd && python testPython.py ${tfn} >> zzz.log`;

 // const cmds = `cd ${src} && pwd >> zzz.log && python --version >> zzz.log`;

 // const cmds = `cd ${src} && pwd >> zzz.log && python testPython.py ${tex}.tex >> zzz.log`;

 // const cmds = `pwd >> zzz.log && python testPython.py ${tfn} >> zzz.log`;

 // const cmds = `pwd >> zzz.log && python testPython.py ${tfn} >> zzz.log`;

 // console.log(cmds);
 // const child = spawn(cmds, { cwd: src, shell: true });

 // const child = exec(cmds, { cwd: src, shell: true });
 // const child = exec(cmds, { shell: true });

 // const child = spawn('python', ['testUtility.py', tex], { cwd: src });
 // const child = spawn('python', ['testPython.py', tex], { cwd: src });

 // const child = spawn('latex', ['-quiet', tex], { cwd: src });
 //
 // const child = spawn('python', ['testUtility.py', tex], { cwd: src });

 // exec(cmds, (error, stdout, stderr) => {
 //  if (error) {
 //   console.error(`Execution error: ${error.message}`);
 //   return;
 //  }
 //  if (stderr) {
 //   console.error(`Standard Error: ${stderr}`);
 //   return;
 //  }
 //  console.log(`Output:\n${stdout}`);
 // });

 // child.unref(); // Allows the parent process to exit independently
 //
 // child.stdout.on('data', (data) => {
 //  console.log(`stdout: ${data}`);
 // });

 // child.stderr.on('data', (data) => {
 //  console.error(`stderr: ${data}`);
 // });

 // child.on('error', (error) => {
 //  console.error(`Failed to start subprocess: ${error.message}`);
 // });

 // child.on('close', (code) => {
 //  console.log(`Child process exited with code ${code}`);
 // });

 // process.on('exit', () => child.kill());
 // console.log(`Child process spawned with PID: ${child.pid}`);

 // latex -quiet ${tex}.tex && latex -quiet ${tex}.tex && \
 // const cmd = `cd ${src} && latex ${tex}.tex && latex ${tex}.tex && \
 // dvips -q ${tex}.dvi && ps2pdf -dNOSAFER -dALLOWPSTRANSPARENCY ${tex}.ps && \
 // rm ${tex}.aux ${tex}.dvi ${tex}.log ${tex}.ps ${tex}.out.ps ${dat} ${tex}.tex`;

 // const cmd = `latex ${tex}.tex && latex ${tex}.tex && dvips -q ${tex}.dvi && ps2pdf -dNOSAFER -dALLOWPSTRANSPARENCY ${tex}.ps`;

 // const cmd = `cd ${src} && latex ${tex}.tex`;
 // const child = spawn(cmd, { cwd: src, shell: true });

 // const child = spawn('cat', [`${tex}.tex`], { cwd: src });

 // const child = spawn('latex', [`${tex}.tex`], { cwd: src });

 // const child = spawn('python', ['testUtility.py', tex], { cwd: src });

 // try {
 //  execSync(cmd, { cwd: src, stdio: 'inherit' });
 //  console.log('Build successful');
 // } catch (error) {
 //  console.error('Build failed', error.message);
 // }

 // const child = spawn(cmd, { shell: true });
 // child.unref(); // Allows the parent process to exit independently
 // res.redirect(`printOnePdf?pdf=${pdf}&name=${nam}&delay=${del}`);
 // process.on('exit', () => child.kill());
 // console.log(`Child process spawned with PID: ${child.pid}`);

 // util.writeAndRun(tfn, lin, src, tex).catch(console.error);

 // const cmda = `cd ${src} && pwd && python --version`;
 // const cmda = `ls`;
 //
 // const result = util.runCommand(cmda);

 // console.log(result);

 // latex -quiet ${tex}.tex && latex -quiet ${tex}.tex && \
 // const cmd = `cd ${src} && latex ${tex}.tex && \
 // dvips -q ${tex}.dvi && ps2pdf -dNOSAFER -dALLOWPSTRANSPARENCY ${tex}.ps && \
 // rm ${tex}.aux ${tex}.dvi ${tex}.log ${tex}.ps ${tex}.out.ps ${dat} ${tex}.tex`;

 // console.log(`src ===> \n${src}`);
 // console.log(`tfn ===> \n${tfn}`);
 // console.log(`tex ===> \n${tex}`);

 // const cmda = `cd ${src} && pwd && latex ${tex}.tex`;
 // const cmda = `pwd && ls ${tfn}`;

 // const cmda = `cd ${src} && pwd && Latex ${tex}.tex`;

 // const cmda = `cd ${src} && pwd && python --version`;

 // const cmda = `cd ${src} && python ./testUtility.py ${tex}`;
 // console.log(`\ncmd ===> \n${cmda}\n`);

 // const options = {
 //  cwd: src,
 //  // shell: '/bin/bash',
 //  shell: true,
 //  // stdio: 'inherit',
 //  env: {
 //   ...process.env, // Retains all current environment variables
 //   MY_CUSTOM_VAR: '123' // Adds or overrides a variable
 //  }
 // };

 // const child = spawn(cmda, options);

 // const child = spawn('python', ['testUtility.py', tex], { cwd: src });

 // const child = spawn('python', ['testUtility.py', tex], { shell: true });

 // console.log(`\n----\n${tex}\n------\n`);
 // const pyProcess = spawn('python', ['testUtility.py', tex], { cwd: src });

 // const pyProcess = spawn('python', ['testPython.py', tex], { cwd: src });

 // const cmda = `cd ${src} && pwd && python --version`;
 // const cmda = `cd ${src} && python testPython.py ${tex}`;
 // const cmda = `cd ${src} && python testPython.py ${tex}`;
 // const child = spawn(cmda, { shell: true });
 // const child = spawn('latex', ['--version'], { cwd: src, shell: true });
 // const child = spawn('latex', ['--version'], { cwd: src });

 // child.stdout.on('data', (data) => {
 //  console.log(`stdout: ${data}`);
 // });

 // child.stderr.on('data', (data) => {
 //  console.error(`stderr: ${data}`);
 // });

 // // 1. The 'exit' event fires as soon as the process ends
 // child.on('exit', (code, signal) => {
 //  console.log(`exit: Process exited. Code: ${code}, Signal: ${signal}`);
 // });

 // // 2. The 'close' event fires when the process ends AND stdio streams close
 // child.on('close', (code) => {
 //  if (code === 0) {
 //   console.log('close 0: PDF generated successfully via system CLI.\n');
 //  } else {
 //   console.log(`close 1: pdflatex process exited with code ${code}\n`);
 //  }
 // });

 //
});
// #endregion router.post /printFile

//#region router.get /:id
router.get('/:id', (req, res) => {
 res.send(`User profile for ID: ${req.params.id}`);
});
//#endregion router.get /:id

module.exports = router;
