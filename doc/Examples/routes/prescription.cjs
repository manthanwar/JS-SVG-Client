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
   // console.log(`my error: ${error.message}`);
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
 const tex = bas + '-main'; // tex file name
 const txt = path.join(__dirname, '../data-certificates', bas + '.txt');
 const log = path.join(__dirname, '../data-certificates', bas + '-log.txt');
 const err = path.join(__dirname, '../data-certificates', bas + '-err.txt');
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

 // util.writeFile(tfn, lin);

 fs.writeFile(tfn, lin, (error) => {
  if (error) {
   console.error('Error Code:', error.code);
   console.error('Error Message:', error.message);
   return res.status(500).send(`<h1>Error</h1><p>${error.message}</p>`);
   return;
  }

  // console.log('File written successfully!');
  // console.log('Continuing script...');

  // req.file.path contains the complete system path to the file
  const filePath = req.file.path;

  // Read file contents as a UTF-8 string (good for text, CSV, JSON, etc.)
  fs.readFile(filePath, 'utf8', (error, data) => {
   if (error) {
    return res.status(500).send('Error reading file.');
   }

   const html = `<html><head>
   <link rel="stylesheet" href="../css/dracula.css" />
   <script src="../js/highlightJSON.js"></script>
   </head><body style="margin:50px;">
   <h1 style="margin-bottom:20px;">Validate JSON</h1>
   <div style="max-width:90%; max-height:400px; overflow: auto; margin-bottom:40px;">
   <pre id="json-block" style="margin:0px; font-size: 1.5rem;"></pre>
   </div>

   <div>
   <a href="/prescription/texMake?name=${nam}&email=${eml}&file=${tex}" class="dracula-btn" type="submit">Proceed</a>&nbsp; &nbsp; <a href="javascript:history.back()" class="dracula-btn" type="reset">Go Back</a>
   </div>

   <script>

   const data = ${data};
   const jsonString = JSON.stringify(data, null, 2);
   const target = document.getElementById('json-block');
   target.innerHTML = highlightJSON(jsonString);
   // target.innerHTML = jsonString;


   </script></body></html>`;

   res.send(html);

   // <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/default.min.css">

   // <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/highlight.min.js"></script>

   // <code id="json-block" class="language-json"></code>

   //    const target = document.getElementById('json-block');
   // target.textContent = jsonString;
   // hljs.highlightElement(target);
   // hljs.highlightElement(target);
   //
  });

  //
 });

 //
});
// #endregion router.post /printFile

//#region router.get /texMake
router.get('/texMake', (req, res) => {
 const nam = req.query.name;
 const eml = req.query.email;
 const tex = req.query.file;
 const dtm = util.dateFormat();
 const msg = `Name: ${nam}\nMail: ${eml}\nDate: ${dtm}\n\n`;
 const src = path.join(__dirname, '../data-certificates');
 const log = path.join(src, tex + '.txt');
 const pdf = tex + '.pdf';
 const del = 10;

 const cmd = `cd ${src} && make nodeLatex file=${tex} n=1 && rm ${tex}.tex`;

 const child = spawn(cmd, { shell: true });
 child.unref(); // Allows the parent process to exit independently
 res.redirect(`printOnePdf?pdf=${tex}&name=${nam}&delay=${del}`);
 process.on('exit', () => child.kill());
 // console.log(`Child process spawned with PID: ${child.pid}`);

 const logFile = fs.openSync(log, 'w');
 fs.writeSync(logFile, msg);
 // fs.writeSync(logFile, '------\nCompiling file...\n');
 // fs.writeSync(logFile, tex);
 // fs.writeSync(logFile, '\n------\n\n');

 // 1. Capture standard output
 child.stdout.on('data', (data) => {
  // console.log(`stdout: ${data.toString()}`);
  const subString = 'This is pdfTeX';
  if (!data.toString().includes(subString)) {
   fs.writeSync(logFile, data.toString());
  }
 });

 // 2. Capture standard error output
 child.stderr.on('data', (data) => {
  // console.error(`stderr: ${data.toString()}`);
  // fs.writeSync(logFile, '------\nstderr...\n');
  // fs.writeSync(logFile, data.toString());
  // fs.writeSync(logFile, '\n------\n');
 });

 // 3. Handle process system errors (e.g., command not found)
 child.on('error', (error) => {
  // console.error(`[System Error] Failed to spawn: ${error.message}`);
  // fs.writeSync(logFile, '------\nerror...\n');
  // fs.writeSync(logFile, `[System Error] Failed to spawn: ${error.message}`);
  // fs.writeSync(logFile, '\n------\n');
 });

 // 4. Handle process termination (Returns code/signal)
 // child.on('exit', (code, signal) => {
 // console.log(`Process exited. Code: ${code}, Signal: ${signal}`);
 // });

 // 5. Handle stdio stream termination (Guarantees streams are empty)
 child.on('close', (code, signal) => {
  // console.log(`Streams closed. Code: ${code}, Signal: ${signal}`);
  // fs.writeSync(logFile, '\n\n------\nstdout...\n');
  // fs.writeSync(logFile, `Streams closed. Code: ${code}, Signal: ${signal}`);
  // fs.writeSync(logFile, '\n------\n');
  fs.closeSync(logFile); // Explicitly release the system resource
 });

 //
});
//#endregion router.get /texMake

//#region router.get /tex
router.get('/tex', (req, res) => {
 // util.writeFile(tfn, lin);

 const src = path.join(__dirname, '../data-certificates');
 const tex = req.query.file;
 const cmd = `cd ${src} && \
 latex -quiet ${tex}.tex && \
 latex -quiet ${tex}.tex && \
 dvips -q ${tex}.dvi && \
 ps2pdf -dNOSAFER -dALLOWPSTRANSPARENCY ${tex}.ps && \
 rm -f ${tex}.aux ${tex}.dvi ${tex}.log ${tex}.out ${tex}.ps \
 `;

 const nam = req.query.name;
 const pdf = tex + '.pdf';
 const del = 10;

 // && rm -f ${tex}.aux ${tex}.dvi ${tex}.log ${tex}.out ${tex}.ps ${tex}.out.ps
 const child = spawn(cmd, { shell: true });
 child.unref(); // Allows the parent process to exit independently
 res.redirect(`printOnePdf?pdf=${pdf}&name=${nam}&delay=${del}`);
 process.on('exit', () => child.kill());
 // console.log(`Child process spawned with PID: ${child.pid}`);
 //
});
//#endregion router.get /tex

//#region router.get /:id
router.get('/:id', (req, res) => {
 res.send(`User profile for ID: ${req.params.id}`);
});
//#endregion router.get /:id

module.exports = router;
