/*
// =============================================================================
// File Name     : report.cjs
// Date Created  : 2025-10-13 02:50 UTC +02:00
// description   : report route
// -----------------------------------------------------------------------------
// Author        : Amit Manohar Manthanwar
// WebURL        : https://manthanwar.github.io
// -----------------------------------------------------------------------------
// Copyright     : (c) 2025 Amit Manohar Manthanwar
// License       : LICENSE.md
// =============================================================================
// Revision Log  | Author  | Description
// --------------+---------+----------------------------------------------------
// 13-Oct-2025   | AMM     | Initial Version
// --------------+---------+----------------------------------------------------
// 22-Oct-2025   | AMM     | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================
*/

// #region require
const path = require('path');
const fs = require('fs');
const { exec } = require('node:child_process');
const { spawn } = require('node:child_process');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const cookieParser = require('cookie-parser');
const util = require('./Utility.cjs');
// #endregion require

// #region mutter upload
const storage = multer.diskStorage({
 destination: (req, file, cb) => {
  const filePath = path.join(__dirname, '../data-certificates/');
  // cb(null, '../data-certificates/');
  cb(null, filePath);
 },
 filename: (req, file, cb) => {
  const today = new Date();
  const isoDt = today.toISOString().substring(0, 10).replaceAll('-', '');
  const fileO = file.originalname;
  const fileB = path.basename(fileO, path.extname(fileO));
  const fileE = path.extname(fileO);
  const email = req.body.email.replace(/[^a-zA-Z0-9]/g, '');
  const fileName = 'dpr-' + email + '-' + isoDt + '-' + fileO;
  cb(null, fileName);
 }
});
const upload = multer({ storage: storage });
// #endregion mutter upload

// #region cookie
// maxAge: 3600000, // 1 hour in milliseconds
// httpOnly: false, // Allows client-side JavaScript to access this cookie
// secure: true, // Recommended for production to send only over HTTPS
// sameSite: 'lax' // Recommended for security
function setMyCookie(res, name, value, options = {}) {
 res.cookie(name, value, options);
}
// #endregion cookie

// #region get /
router.get('/', (req, res) => {
 res.send('Users home page');
});
// #endregion get /

// #region post /printOne
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

 fs.writeFile(filePath, fileContent, (err) => {
  if (err) {
   console.log(`error: ${error.message}`);
   return;
  }
  console.log(`File ${filePath} written successfully!`);
 });

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
// #endregion post /printOne

// #region get /printOnePdf
// name, delay, basename, xls
router.get('/printOnePdf', (req, res) => {
 res.render('report', {
  layout: false,
  nam: req.query.nam ? req.query.nam : '#',
  del: req.query.del ? req.query.del : 10,
  bas: req.query.bas ? req.query.bas : '#',
  xls: req.query.xls ? req.query.xls : '#'
 });
});
// #endregion get /printOnePdf

// #region runCommand
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
// #endregion /printOnePdf

// #region post /printMany
router.post('/printMany', upload.single('file'), (req, res, next) => {
 if (!req.file || Object.keys(req.file).length === 0) {
  return res.status(400).send('<h1>No files were uploaded.</h1>');
 }

 const nam = req.body.nameF;
 const eml = req.body.email;
 const dtm = util.dateFormat();
 const msg = `Name: ${nam}\nMail: ${eml}\nDate: ${dtm}`;
 const xls = req.file.filename; // basename.extension
 const ext = path.extname(xls); // extension
 const bas = path.parse(xls).name; // basename
 const src = path.join(__dirname, '../data-certificates');
 const pys = path.join(src, 'xls2dpr.py'); // python script path
 const pyt = path.join(src, 'testSpawn.py');
 const xlp = path.join(src, xls);
 const log = path.join(src, bas + '.nog');
 const txt = path.join(src, bas + '.txt');
 const tex = bas + '.tex';
 const pdf = bas + '.pdf';
 const del = 10; //delay
 const pyd = { file: { basename: bas, extname: ext }, message: msg };

 const isW = process.platform === 'win32';
 const cmd = isW ? 'python' : '/usr/bin/python3';
 const arg = ['-u', pys, xlp];
 const opt = { cwd: process.cwd() };

 const child = spawn(cmd, arg, opt);

 child.unref(); // Allows the parent process to exit independently
 res.redirect(`printOnePdf?pdf=${pdf}&name=${nam}&delay=${del}`);
 process.on('exit', () => child.kill());

 // req.app.set('spawnChildProcess', child);
 // res.sendFile(path.join(src, 'testSpawn.html'));

 // const child = spawn('python', [pyt]);

 // // Store the instance using a unique key in app locals
 // router.set('spawnChildProcess', child);

 // // Stream data as it arrives from stdout
 // child.stdout.on('data', (data) => {
 //  res.write(`<h1>${data}</h1><br>`);
 // });

 // // Optional: capture errors too
 // child.stderr.on('data', (data) => {
 //  res.write(`ERROR: ${data}`);
 // });

 // // End response when the process finishes

 const data = {
  nam: nam, // name
  eml: eml, // email
  msg: msg, // message
  del: del, // delay
  src: src, // source folder
  bas: bas, // basename
  xls: xls, // xls
  tex: tex, // tex
  pdf: pdf, // pdf
  txt: txt, // txt
  log: log // node log
 };

 child.on('close', (code) => {
  util.spawnTex(req, res, data);
  // res.send(`\nProcess exited with code ${code}`);
  // router.set('spawnChildProcess', null);
 });

 // res.send(`<h1> python spawned</h1>`);

 // res.send(`<html><body style="margijn:100px;">
 //  <h1>${nam}, Your File Uploaded. <a href='/report/tex?bas=${bas}&file=${xls}&name=${nam}&email=${eml}'>Proceed to Report</a></h1>
 //  <html><body>`);

 //
});
// #endregion post /printMany

// #region get /childEventsStream
router.get('/childEventsStream', (req, res) => {
 // const nam = req.body.nameF;
 // const eml = req.body.email;
 // const dtm = util.dateFormat();
 // const msg = `Name: ${nam}\nMail: ${eml}\nDate: ${dtm}`;
 // const xls = req.file.filename; // basename.extension
 // const ext = path.extname(xls); // extension
 // const bas = path.parse(xls).name; // basename
 // const src = path.join(__dirname, '../data-certificates');
 // const pys = path.join(src, 'xls2dpr.py'); // python script path
 // const pyt = path.join(src, 'testSpawn.py');
 // const log = bas + '.nog';
 // const txt = bas + '.txt';
 // const pdf = bas + '.pdf';
 // const del = 10; //delay
 // const pyd = { file: { basename: bas, extname: ext }, message: msg };

 // const child = spawn('python', [pyt]);

 // Use req.app to access the global Express app instance
 // req.app.set('spawnChildProcess', child);

 const child = req.app.get('spawnChildProcess');

 if (!child) {
  return res.status(404).send('No active process found.');
 }

 // Crucial headers required for Server-Sent Events (SSE)
 res.setHeader('Content-Type', 'text/event-stream');
 res.setHeader('Cache-Control', 'no-cache');
 res.setHeader('Connection', 'keep-alive');
 res.flushHeaders(); // Establishes the stream with the client immediately

 // Send a message immediately upon connection
 res.write('data: Connected to live stream...\n\n');

 // Stream data as it arrives from stdout
 child.stdout.on('data', (data) => {
  console.log(`DATA: ${data}`);
  const lines = data.toString().split('\n');
  lines.forEach((line) => {
   const trimmed = line.trim();
   if (trimmed) {
    // Format matching the SSE spec: "data: <message>\n\n"
    res.write(`data: ${trimmed}\n\n`);
   }
  });
  // res.write(`DATA: ${data}\n\n`);
 });

 // Optional: capture errors too
 child.stderr.on('data', (data) => {
  console.log(`ERROR: ${data}`);
  res.write(`ERROR: ${data.toString()}\n\n`);
 });

 child.on('exit', (code) => {
  console.log(`\nProcess exited with code ${code}`);
  res.write(`[Processed Exited] with code: ${code}\n\n`);
 });

 // End response when the process finishes
 child.on('close', (code) => {
  if (code === 0) {
   console.log(`\nProcess closed successfully`);
   res.write(`[Processed Closed] successfully\n\n`);
  } else {
   console.log(`\nProcess closed with code ${code}`);
   res.write(`[Processed Closed] with code: ${code}\n\n`);
  }
  res.end();
  // req.app.set('spawnChildProcess', null);
 });

 // Clean up interval when client disconnects
 req.on('close', () => {
  res.end();
  console.log('Client disconnected, killing Python process...');
  child.kill();
 });

 //
});
// #endregion post /childEventsStream

// #region get /childEventsStreamTimer
router.get('/childEventsStreamTimer', (req, res) => {
 // Crucial headers required for Server-Sent Events (SSE)
 res.setHeader('Content-Type', 'text/event-stream');
 res.setHeader('Cache-Control', 'no-cache');
 res.setHeader('Connection', 'keep-alive');
 res.flushHeaders(); // Establishes the stream with the client immediately

 // Send a message immediately upon connection
 res.write('data: Connected to live stream\n\n');

 // Send data stream intervals every 3 seconds
 const intervalId = setInterval(() => {
  const timeStamp = new Date().toLocaleTimeString();
  res.write(`data: Server Time is ${timeStamp}\n\n`); // Double newline '\n\n' is mandatory in SSE
 }, 3000);

 // Clean up interval when client disconnects
 req.on('close', () => {
  clearInterval(intervalId);
  res.end();
 });

 //
});
// #endregion post /childEventsStreamTimer

// #region post /sendTextStream
router.post('/childTextStream', upload.single('file'), (req, res, next) => {
 if (!req.file || Object.keys(req.file).length === 0) {
  return res.status(400).send('<h1>No files were uploaded.</h1>');
 }

 const nam = req.body.nameF;
 const eml = req.body.email;
 const dtm = util.dateFormat();
 const msg = `Name: ${nam}\nMail: ${eml}\nDate: ${dtm}`;
 const xls = req.file.filename; // basename.extension
 const ext = path.extname(xls); // extension
 const bas = path.parse(xls).name; // basename
 const src = path.join(__dirname, '../data-certificates');
 const pys = path.join(src, 'xls2dpr.py'); // python script path
 const pyt = path.join(src, 'testSpawn.py');
 const log = bas + '.nog';
 const txt = bas + '.txt';
 const pdf = bas + '.pdf';
 const del = 10; //delay
 const pyd = { file: { basename: bas, extname: ext }, message: msg };

 const child = spawn('python', [pyt]);

 // Store the instance using a unique key in app locals
 router.set('spawnChildProcess', child);

 // Set headers for plain text streaming
 // res.setHeader('Content-Type', 'text/plain; charset=utf-8');
 res.setHeader('Content-Type', 'text/html; charset=utf-8');
 res.setHeader('Transfer-Encoding', 'chunked');

 // res.setHeader('Content-Type', 'text/event-stream');
 // res.setHeader('Cache-Control', 'no-cache');
 // res.setHeader('Connection', 'keep-alive');

 // Stream data as it arrives from stdout
 child.stdout.on('data', (data) => {
  res.write(`<h1>${data}</h1><br>`);
 });

 // Optional: capture errors too
 child.stderr.on('data', (data) => {
  res.write(`ERROR: ${data}`);
 });

 // End response when the process finishes
 child.on('close', (code) => {
  res.end(`\nProcess exited with code ${code}`);
  router.set('spawnChildProcess', null);
 });

 // res.send(`<h1> python spawned</h1>`);

 // res.send(`<html><body style="margin:100px;">
 //  <h1>${nam}, Your File Uploaded. <a href='/report/tex?bas=${bas}&file=${xls}&name=${nam}&email=${eml}'>Proceed to Report</a></h1>
 //  <html><body>`);

 //
});
// #endregion post /sendTextStream

// #region get /tex
router.get('/tex', (req, res) => {
 const nam = req.query.name;
 const eml = req.query.email;
 const xls = req.query.file;
 const bas = req.query.bas;
 const dtm = util.dateFormat();
 const msg = `Name: ${nam}\nMail: ${eml}\nDate: ${dtm}\n\n`;
 const src = path.join(__dirname, '../data-certificates');
 const pys = 'xls2dpr.py';
 const log = bas + '.npg';
 const pdf = bas + '.pdf';
 const del = 10;

 const isWindows = process.platform === 'win32';
 const shellTrue = isWindows ? true : '/bin/bash';
 // const pythonExe = isWindows
 //  ? path.resolve('.venv', 'Scripts', 'python.exe')
 //  : path.resolve('.venv', 'bin', 'python');

 // const pythonExe = isWindows
 //  ? path.join(__dirname, '../../../.venv/Scripts/python.exe')
 //  : path.join(__dirname, '../../../.venv/bin/python');

 const cmd = `cd ${src} && python ${pys} ${xls}`;
 const child = spawn(cmd, { shell: shellTrue });

 // const cmd = `cd ${src} && ${pythonExe} ${pys} ${xls}`;
 // const pythonExe = isWindows
 //  ? path.join(__dirname, '../../../.venv/Scripts/python.exe')
 //  : path.join(__dirname, '../../../.venv/bin/python');
 // const child = spawn(cmd, { cwd: src, shell: shellTrue });
 // const pythonExe = isWindows
 //  ? path.join(ven, 'Scripts', 'python.exe')
 //  : path.join(ven, 'bin', 'python');

 // const cmd = pythonExe;
 // const arg = [pys, xxx];
 // const child = spawn(cmd, { cwd: src });

 // console.log('\n---------------\n');
 // console.log(pythonExe);
 console.log('\n---------------\n');
 console.log(cmd);
 console.log('\n---------------\n');

 child.unref(); // Allows the parent process to exit independently
 child.stdout.on('data', (data) => console.log(`Child stdout: ${data}`));
 child.stderr.on('data', (data) => console.error(`Child stderr: ${data}`));
 child.on('error', (error) => console.error('Child error: ', error.message));
 child.on('close', (code) => console.log(`Child closed with code: ${code}`));
 process.on('exit', () => child.kill());

 res.redirect(`printOnePdf?pdf=${pdf}&name=${nam}&delay=${del}`);

 // region spawn nohup ------------------
 // const cmd = `cd ${src} && python3 xls2dpr.py ${xls} && rm ${xls}`;
 // const cmd = `cd ${src} && python3 xls2dpr.py ${xls}`;
 // const child = spawn(cmd, { shell: true });
 //

 // const cmd = 'python';
 // const arg = ['xls2dpr.py', xls];
 // const opt = { cwd: src };
 // const child = spawn(cmd, arg, opt);

 // const cmd = `cd ${src} && python3 ${pys} ${xlp}`;
 // const child = spawn(cmd, { cwd: src, shell: true });

 // Define the path to the virtual environment python interpreter
 // Use .venv/Scripts/python.exe for Windows, or .venv/bin/python for macOS/Linux
 //
});
// #endregion get /tex

// #region get /spawn
router.get('/spawn', (req, res) => {
 const logFile = fs.openSync(log, 'w');
 fs.writeSync(logFile, msg);
 fs.writeSync(logFile, 'txt File written successfully.');
 fs.writeSync(logFile, '\n------\nCompiling file...\n');
 fs.writeSync(logFile, xls);
 fs.writeSync(logFile, '\n------\n\n');

 // 1. Capture standard output
 child.stdout.on('data', (data) => {
  console.log(`stdout: ${data.toString()}`);
  const subString = 'This is pdfTeX';
  if (!data.toString().includes(subString)) {
   fs.writeSync(logFile, data.toString());
  }
 });

 // 2. Capture standard error output
 child.stderr.on('data', (data) => {
  console.error(`[stderr:] ${data.toString()}`);
  // fs.writeSync(logFile, '------\nstderr...\n');
  fs.writeSync(logFile, `[stderr:] ${data.toString()}`);
  // fs.writeSync(logFile, '\n------\n');
 });

 // 3. Handle process system errors (e.g., command not found)
 child.on('error', (error) => {
  console.error(`[System Error] Failed to spawn: ${error.message}`);
  // fs.writeSync(logFile, '------\nerror...\n');
  fs.writeSync(logFile, `[System Error] Failed to spawn: ${error.message}`);
  // fs.writeSync(logFile, '\n------\n');
 });

 // 4. Handle process termination (Returns code/signal)
 child.on('exit', (code, signal) => {
  console.log(`Child Process exited. Code: ${code}, Signal: ${signal}`);
  fs.writeSync(logFile, `Process Exited. Code: ${code}, Signal: ${signal}\n`);
 });

 // 5. Handle stdio stream termination (Guarantees streams are empty)
 child.on('close', (code, signal) => {
  console.log(`Streams closed. Code: ${code}, Signal: ${signal}`);
  // fs.writeSync(logFile, '\n\n------\nstdout...\n');
  fs.writeSync(
   logFile,
   `I/O Streams closed. Code: ${code}, Signal: ${signal}\n`
  );
  // fs.writeSync(logFile, '\n------\n');
  fs.closeSync(logFile); // Explicitly release the system resource
 });

 // res.redirect(`printOnePdf?pdf=${pdf}&name=${nam}&delay=${del}`);

 // if (ext != '.xlsx' || ext != '.xls') {
 //  res.send(`<div style="margin:100px;">
 //  <h1 style="color:maroon;">File Error</h1><h1>Upload .xlsx or .xls file.</h1></div>`);
 // }

 // res.send(pdf)

 //
});

// #endregion get /spawn

// #region get /:id
router.get('/:id', (req, res) => {
 res.send(`User profile for ID: ${req.params.id}`);
});
// #endregion get /:id

// #region get /pub-certificate-one
router.get('/pub-certificate-one', (req, res) => {
 res.send('Users home page');
});
// #endregion get /pub-certificate-one

module.exports = router;
