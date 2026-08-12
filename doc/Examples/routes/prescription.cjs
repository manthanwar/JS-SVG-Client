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

// #region router.get /printOnePdf
router.get('/printOneJson', (req, res) => {
 res.render('prescriptionJson', {
  layout: false,
  name: req.query.name ? req.query.name : '#',
  jsonString: req.query.jsonString ? req.query.jsonString : '#',
  json: req.query.json ? req.query.json : '#'
  // delay: req.query.delay ? req.query.delay : 10
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

 fs.writeFile(tfn, lin, (error) => {
  if (error) {
   console.error('Error Code:', error.code);
   console.error('Error Message:', error.message);
   return res.status(500).send(`<h1>Error</h1><p>${error.message}</p>`);
   return;
  }

  console.log('File written successfully!');
  console.log('Continuing script...');

  // res.redirect(`printOnePdf?pdf=${pdf}&name=${nam}&delay=${del}`);
  // res.redirect(`printOneJson?json=${dat}&name=${nam}&jsonStrin=${del}`);

  // req.file.path contains the complete system path to the file
  const filePath = req.file.path;

  console.log('\n----\n' + filePath);

  // Read file contents as a UTF-8 string (good for text, CSV, JSON, etc.)
  fs.readFile(filePath, 'utf8', (error, data) => {
   if (error) {
    return res.status(500).send('Error reading file.');
   }

   // console.log('File content:', data);
   // res.send('File content read successfully.');
   // res.send(JSON.stringify(data, null, 2));

   // const data = { name: 'Alice', roles: ['admin', 'user'], active: true };
   const htmlA = `<html>
   <head>
   <link rel="stylesheet" href="../css/dracula.css" />
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/default.min.css">

   <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/highlight.min.js"></script>

   </head>
   <body>
   <h1>Check if JSON data below is correct</h1>
   <pre id="json-output" style="font-size: 1.5rem;">
   <code id="json-block" class="language-json"></code>
   </pre>
   <a href="https://yourcustomlink.com" class="my-custom-btn"">Proceed </a> <a href="javascript:history.back()" class="my-custom-btn">Go Back</a>

   <br><br><br><br>
   <script>
   const data = ${data};
   const jsonString = JSON.stringify(data, null, 2);
   const target = document.getElementById('json-block');
   target.textContent = jsonString;
   hljs.highlightElement(target);
   document.getElementById('vanilla-json').innerHTML = syntaxHighlightJson(data);
   </script></body></html>`;

   res.send(htmlA);

   // <script src="../css/highlight.js" defer></script>
   // target.textContent = syntaxHighlightJson(jsonString);
   // //hljs.highlightElement(target);
   //document.getElementById('vanilla-json').innerHTML = syntaxHighlightJson(data);

   //   // Use textContent to safely prevent XSS injections
   // document.getElementById("json-output").textContent = JSON.stringify(data, null, 2);

   //
  });

  //
 });

 //
});
// #endregion router.post /printFile

//#region router.get /:id
router.get('/:id', (req, res) => {
 res.send(`User profile for ID: ${req.params.id}`);
});
//#endregion router.get /:id

module.exports = router;
