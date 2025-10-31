/*
// =============================================================================
// File Name     : test.cjs
// Date Created  : 2025-10-31 11:39 UTC +01:00
// description   : For testing only
// -----------------------------------------------------------------------------
// Author        : Amit Manohar Manthanwar
// WebURL        : https://manthanwar.github.io
// -----------------------------------------------------------------------------
// Copyright     : (c) 2025 Amit Manohar Manthanwar
// License       : LICENSE.md
// =============================================================================
// Revision Log  | Author  | Description
// --------------+---------+----------------------------------------------------
// 31-Oct-2025   | AMM     | Initial Version
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
const util = require('./Utility.cjs');

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
  const fileName = 'faqs-' + email + '-' + isoDt + '-' + fileO;
  cb(null, fileName);
 }
});
const upload = multer({ storage: storage });

router.get('/', (req, res) => {
 res.redirect('/demo-pub-doc-automation.html');
});

// app.get('/hello', (req, res) => {
//  res.send('Hello World!' + config.openWeather.API_KEY);
// });

app.get('/test-data-passing', (req, res) => {
 res.render('test-data-passing', {
  layout: false,
  name: 'hello there',
  API_KEY: process.env.API_KEY_openWeather
 });
});

app.get('/getServerData', function (req, res) {
 const obj = {
  name: 'amit',
  surname: 'Manthanwar'
 };
 res.json(obj);
});

app.get('/test', function (req, res) {
 // res.sendFile(path.join(__dirname, 'demo-home.html'));
 res.sendFile(path.join(__dirname, 'test.html'));
});

https: app.get('/resp', function (req, res) {
 res.sendFile(path.join(__dirname, 'demo-responsive.html'));
});

// app.get('/demo-artDesign.html', function (req, res) {
//  res.sendFile(path.join(__dirname, './demo-artDesign.html'));
// });

// console.log('reqIP = ', JSON.parse(req.body.weather));
// console.dir(req.body)
// console.log("ip = ", req.ip)
// console.log([1, 2, 3, 4])
// console.dir([1, 2, 3, 4])
// res.send('welcome, ' + req.body.firstName)
// res.json({ body: req.body, weather: JSON.parse(req.body.weather) });
// res.json({ body: JSON.parse(req.body.weather) })
// res.render('formPost', { layout: 'main' });
// res.json(data);

// res.setHeader('Content-type', 'text/html');
// res.send('welcome, ' + req.body.nameF);

// app.get('/pub-business-card', (req, res) => {
//  // res.render('pub-business-card', {
//  //  // layout: false,
//  //  title: 'Dolphin Business Card',
//  //  name: 'hello there',
//  //  file: 'demo-pub-branding-bizcard.html'
//  // });
//  // console.log(__dirname);
//  res.sendFile(path.join(__dirname, '/demo-pub-branding-bizcard.html'));
//  // res.sendFile('demo-pub-branding-bizcard.html', { root: __dirname });
// });

// app.use('/src-gauge/', express.static(__dirname + 'doc/Examples/src-plot'));
// app.use(express.static('doc/Examples/src-gauge'));
// app.use(express.static('doc/Examples'));
// app.use('/src-plot', express.static('doc/Examples/src-plot'));
// app.use(express.static(path.join(__dirname, 'doc')));
// app.use('/src-plot', express.static(__dirname + 'doc/Examples/src-plot'));


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

 util.writeFile(filePath, fileContent);

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
 res.render('faq', {
  layout: false,
  name: req.query.name ? req.query.name : '#',
  pdf: req.query.pdf ? req.query.pdf : '#',
  delay: req.query.delay ? req.query.delay : 10
 });
});

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

//region app.post /printFile
router.post('/printFile', upload.single('file'), (req, res, next) => {
 if (!req.file || Object.keys(req.file).length === 0) {
  return res.status(400).send('<h1>No files were uploaded.</h1>');
 }

 const nam = req.body.nameF;
 const eml = req.body.email;
 const dtm = new Date().toISOString(); // YYYY-MM-DDTHH:mm:ss.sssZ, 'Z' => UTC
 const msg = `Name: ${nam}\nMail: ${eml}\nDate: ${dtm}`;
 const src = path.join(__dirname, '../data-certificates');
 const dat = req.file.filename; //original data file .tex
 const ext = path.extname(dat);
 const bas = dat.substring(0, dat.lastIndexOf('.'));
 const pdf = bas + '-main.pdf';
 const log = bas + '-main.log';
 const tex = bas + '-main'; // tex file name
 const txt = path.join(__dirname, '../data-certificates', bas + '.txt');
 const tfn = path.join(__dirname, '../data-certificates', tex + '.tex');
 const del = 10; //delay
 const lin = `\\documentclass[12pt]{dolphin-faq}
\\usepackage{dolphin-faq}
\\begin{document}
\\makeCoverFront
\\input{${dat}}
\\makeCoverBack
\\end{document}
 `;

 // util.writeFile(txt, msg);
 util.writeFile(tfn, lin);

 const cmd = `cd ${src} && \
 latex -quiet ${tex}.tex && latex -quiet ${tex}.tex && \
 dvips -q ${tex}.dvi && ps2pdf -dNOSAFER -dALLOWPSTRANSPARENCY ${tex}.ps && \
 rm ${tex}.aux ${tex}.dvi ${tex}.log ${tex}.ps ${tex}.out.ps ${dat} ${tex}.tex`;

 const child = spawn(cmd, { shell: true });
 child.unref(); // Allows the parent process to exit independently
 process.on('exit', () => child.kill());
 console.log(`Child process spawned with PID: ${child.pid}`);
 res.redirect(`printOnePdf?pdf=${pdf}&name=${nam}&delay=${del}`);
});
//endregion app.post /printFile

router.get('/:id', (req, res) => {
 res.send(`User profile for ID: ${req.params.id}`);
});

router.get('/pub-certificate-one', (req, res) => {
 res.send('Users home page');
});

module.exports = router;
