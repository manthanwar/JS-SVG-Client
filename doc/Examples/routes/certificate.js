/*
// =============================================================================
// File Name     : certificate.js
// Date Created  : 2025-10-13 02:50 UTC +02:00
// description   : certificate route
// -----------------------------------------------------------------------------
// Author        : Amit Manohar Manthanwar
// Mailer        : manthanwar@hotmail.com
// WebURL        : https://manthanwar.github.io
// -----------------------------------------------------------------------------
// Copyright     : (c) 2025 Amit Manohar Manthanwar
// License       : LICENSE.md
// =============================================================================
// Revision Log  | Author  | Description
// --------------+---------+----------------------------------------------------
// 13-Oct-2025   | AMM     | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================
*/

const path = require('path');
const fs = require('fs');
const { exec } = require('node:child_process');
const { spawn } = require('node:child_process');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const cookieParser = require('cookie-parser');

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
  const fileName = 'cert-' + email + '-' + isoDt + '-' + fileO;
  cb(null, fileName);
 }
});
const upload = multer({ storage: storage });

// maxAge: 3600000, // 1 hour in milliseconds
// httpOnly: false, // Allows client-side JavaScript to access this cookie
// secure: true, // Recommended for production to send only over HTTPS
// sameSite: 'lax' // Recommended for security
function setMyCookie(res, name, value, options = {}) {
 res.cookie(name, value, options);
}

router.get('/', (req, res) => {
 res.send('Users home page');
});

//region app.post /printOne
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
 latex -quiet ${tex}.tex && latex -quiet ${tex}.tex && \
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
//endregion app.post /printOne

router.get('/printOnePdf', (req, res) => {
 res.render('certificate', {
  layout: false,
  name: req.query.name ? req.query.name : '#',
  pdf: req.query.pdf ? req.query.pdf : '#',
  delay: req.query.delay ? req.query.delay : 10
 });
});

router.get('/printManyPdf', (req, res) => {
 res.render('certificateMany', {
  layout: false,
  name: req.query.name ? req.query.name : '#',
  pdf: req.query.pdf ? req.query.pdf : '#',
  delay: req.query.delay ? req.query.delay : 60
 });
});

// function sleep(ms) {
//  return new Promise((resolve) => setTimeout(resolve, ms));
// }

// Helper function for artificial delay
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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

// const data = {
//  file: req.file.filename,
//  name: req.body.nameF,
//  mail: req.body.email,
//  rows: req.body.dataRows,
//  type: req.body.dataType,
//  list: req.body.dataList
// };

//region app.post /printMany
router.post('/printMany', upload.single('file'), (req, res, next) => {
 if (!req.file || Object.keys(req.file).length === 0) {
  return res.status(400).send('<h1>No files were uploaded.</h1>');
 }

 const nam = req.body.nameF;
 const typ = req.body.dataType;
 const csv = typ == 'indices' ? req.body.dataList : req.body.dataRows;
 const src = path.join(__dirname, '../data-certificates');
 const xls = req.file.filename;
 const ext = path.extname(xls);
 const idx = xls.lastIndexOf('.');
 const pdf = xls.substring(0, idx) + '.zip';
 const del = typ == 'indices' ? 60 : 10 * req.body.dataRows; //delay
 const cmd = `cd ${src} && nohup ./xls2tex.py ${xls} ${typ} ${csv} > output.log 2>&1 &`;

 // if (ext != '.xlsx' || ext != '.xls') {
 //  res.send(`<div style="margin:100px;">
 //  <h1 style="color:maroon;">File Error</h1><h1>Upload .xlsx or .xls file.</h1></div>`);
 // }

 // runCommand(cmd)
 //  .then(() => runCommand('command2 arg2'))
 //  .then(() => console.log('All commands executed successfully.'))
 //  .catch((error) =>
 //   console.error(`Failed to execute commands: ${error.message}`)
 //  );

 // region spawn nohup --------------------
 const child = spawn(cmd, { shell: true });
 child.unref(); // Allows the parent process to exit independently
 res.redirect(`printOnePdf?pdf=${pdf}&name=${nam}&delay=${del}`);
 process.on('exit', () => child.kill());
 console.log(`Child process spawned with PID: ${child.pid}`);
 // endregion spawn nohup ------------------

 // region spawn nohup log --------------------
 // const logFile = 'spawn-nohup.out'; // File to redirect output
 // const command = 'python';
 // const command = './xls2tex.py';
 // const xlsPath = path.join(src, xls);
 // const args = [xlsPath, xls, typ, csv]; // Array of arguments to pass

 // const child = spawn('nohup', [command, ...args, '>', logFile, '&'], {
 //  detached: true,
 //  // stdio: 'ignore' // or 'inherit' if you want to see nohup's output
 //  stdio: 'inherit'
 // });

 // const child = spawn(cmd, { shell: true });

 // child.unref(); // Allows the parent process to exit independently
 // res.redirect(`printOnePdf?pdf=${pdf}&name=${nam}&delay=${del}`);

 // endregion spawn nohup log ------------------

 // region send response early -------------
 // const child = spawn(cmd, { shell: true });
 // let stdoutData = 'SUCCESS';
 // let stderrData = '';
 // let cmderrData = '';

 // // res.redirect(`printOnePdf?pdf=${pdf}&name=${nam}&delay=${del}`);
 // res.redirect(`printManyPdf?pdf=${pdf}&name=${nam}&delay=${del}`);

 // child.on('error', (err) => {
 //  console.error(`Failed to start child process: ${err}`);
 //  cmderrData += err.toString();
 // });

 // child.stderr.on('data', (data) => {
 //  console.error(`stderr: ${data}`);
 //  stderrData += data.toString();
 // });

 // child.stdout.on('data', (data) => {
 //  console.log(`stdout: ${data}`);
 //  stdoutData += data.toString();
 // });

 // child.on('exit', (code) => {
 //  // console.log(`Child process exited with code ${code}`);
 //  // const oneDay = 24 * 60 * 60 * 1000; // milliseconds
 //  // setMyCookie(res, pdf, 'true', { maxAge: oneDay, httpOnly: false });
 // });

 // child.on('close', (code) => {
 //  console.log(`child process closed with code ${code}`);
 //  // Check the exit code and collected data to decide the redirect
 //  console.log('------  ' + stdoutData);
 //  if (code === 0 && stdoutData.includes('SUCCESS')) {
 //   // res.redirect('/success-page');
 //   // res.redirect(`printOnePdf?pdf=${pdf}&name=${nam}&delay=${del}`);
 //  } else if (stderrData.includes('PERMISSION_DENIED')) {
 //   // res.redirect('/error-page-permission');
 //  } else {
 //   // res.redirect('/error-page-generic');
 //   res.send('<h1>Error Occured. </h1>');
 //  }
 // });
 // end region send response early ----------------

 // region send response after close --------------
 // const child = spawn(cmd, { shell: true });

 // let stdoutData = 'SUCCESS';
 // let stderrData = '';
 // let cmderrData = '';

 // child.on('error', (err) => {
 //  console.error(`Failed to start child process: ${err}`);
 //  cmderrData += err.toString();
 // });

 // child.stderr.on('data', (data) => {
 //  console.error(`stderr: ${data}`);
 //  stderrData += data.toString();
 // });

 // child.stdout.on('data', (data) => {
 //  console.log(`stdout: ${data}`);
 //  stdoutData += data.toString();
 // });

 // child.on('exit', (code) => {
 //  // console.log(`Child process exited with code ${code}`);
 // });

 // child.on('close', (code) => {
 //  console.log(`child process closed with code ${code}`);
 //  // Check the exit code and collected data to decide the redirect
 //  console.log('------  ' + stdoutData);
 //  if (code === 0 && stdoutData.includes('SUCCESS')) {
 //   // res.redirect('/success-page');
 //   res.redirect(`printOnePdf?pdf=${pdf}&name=${nam}&delay=${del}`);
 //  } else if (stderrData.includes('PERMISSION_DENIED')) {
 //   // res.redirect('/error-page-permission');
 //   // res.redirect(`printOnePdf?pdf=${pdf}&name=${data}&delay=0`);
 //  } else {
 //   // res.redirect('/error-page-generic');
 //   res.send('<h1>Error Occured. </h1>');
 //  }
 // });
 // endregion send response after close -------------

 // region test spawn echo ---------------
 // const command2 = spawn('echo', ['Hello from another command!']);
 // command2.stdout.on('data', (data) => {
 //  console.log(`stdout (command 2): ${data}`);
 //  res.redirect(`printOnePdf?pdf=${pdf}&name=${data}&delay=0`);
 // });
 // endregion test spawn echo ------------

 // res.redirect(`printOnePdf?pdf=${pdf}&name=${nam}&delay=${del}`);

 //
});
//endregion app.post /printMany

router.get('/:id', (req, res) => {
 res.send(`User profile for ID: ${req.params.id}`);
});

router.get('/pub-certificate-one', (req, res) => {
 res.send('Users home page');
});

module.exports = router;
