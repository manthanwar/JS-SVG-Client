/*
// =============================================================================
// File Name     : invoice.cjs
// Date Created  : 2025-10-13 02:50 UTC +02:00
// description   : invoice route
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
// 27-Oct-2025   | AMM     | Added Invoice
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
  const filePath = path.join(__dirname, '../data-invoices/');
  // cb(null, '../data-invoices/');
  cb(null, filePath);
 },
 filename: (req, file, cb) => {
  const today = new Date();
  const isoDt = today.toISOString().substring(0, 10).replaceAll('-', '');
  const fileO = file.originalname;
  const fileB = path.basename(fileO, path.extname(fileO));
  const fileE = path.extname(fileO);
  const email = req.body.email.replace(/[^a-zA-Z0-9]/g, '');
  const fileName = 'invoice-' + email + '-' + isoDt + '-' + fileO;
  cb(null, fileName);
 }
});
const upload = multer({ storage: storage });

router.get('/', (req, res) => {
 res.redirect('/demo-pub-doc-automation.html');
});

//region app.post /printOne
router.post('/printOne', (req, res, next) => {
 const data = {
  goods: req.body.goods, // description of goods    = \dogA
  hCode: req.body.hCode, // Harmonized System Code  = \hscA
  quant: req.body.quant, // quantity                = \qtyA
  price: req.body.price, // unit price              = \unpA
  nameT: req.body.nameT, // name Title              = \buyerNames +
  nameF: req.body.nameF, // name first              = \buyerNames +
  nameM: req.body.nameM, // name middle             = \buyerNames +
  nameL: req.body.nameL, // name last               = \buyerNames
  nameN: req.body.nameN, // name number             = \customerId
  email: req.body.email, // email                   = \buyerEmail
  phone: req.body.phone, // phone                   = \buyerPhone
  state: req.body.state, // country                 = \buyerState
  lineA: req.body.lineA, // address line 1 = house  = \buyerLineA
  lineB: req.body.lineB, // address line 2 = street = \buyerLineB
  lineC: req.body.lineC, // address line 3 = city   = \buyerLineC
  portL: req.body.portL, // port of loading         = \portOfLoad
  portD: req.body.portD, // port of discharge       = \portOfExit
  cityF: req.body.cityF // final destination        = \targetCity
 };

 const amount = data.quant * data.price;
 const charge = 48.5; // shipping charges
 const totAmt = amount + charge;

 const totAmtInt = parseInt(totAmt);
 const totAmtDec = parseFloat((totAmt - totAmtInt).toFixed(2)) * 100;
 const totAmtIntW = util.convertToWords(totAmtInt);
 const totAmtDecW = util.convertToWords(totAmtDec);
 const totW = totAmtIntW + ' AND CENTS ' + totAmtDecW;

 // const ans = totAmt + ' ' + totAmtIntW; //+ ' CEN ' + totAmtDecW;

 // res.send(
 //  `<h1 style="font-size:40px;"> hi === ${totAmt} === ${totAmtDec}  -- ${totAmtInt} +++ ${totAmtIntW} +++ ${totAmtDecW}</h1>`
 // );

 // res.send(`<h1 style="font-size:40px;"> ${ans}</h1>`);

 //  const name = data.nameF + ' ' + data.nameM + ' ' + data.nameL;
 const buyerNames = `${data.nameT} ${data.nameF} ${data.nameM} ${data.nameL}`;

 // const invoiceDate = new Date();
 // const invoiceYYY = invoiceDate.getFullYear();
 // const invoiceMMM = invoiceDate.toLocaleString('default', { month: 'long' });
 // const invoiceDDD = invoiceDate.getDate();
 // const invoiceDMY = invoiceDDD + ' ' + invoiceMMM + ' ' + invoiceYYY;
 // const invoiceDFN = data.certD.replaceAll('-', '');

 const stripEml = data.email.replace(/[^a-zA-Z0-9]/g, '');
 // const fileDate = new Date().getTime();
 // const tex = 'invoice-' + stripEml + '-' + fileDate.toString();

 const fileDate = new Date().toISOString().substring(0, 10);
 const stripDat = fileDate.replace(/[^a-zA-Z0-9]/g, '');
 const tex = 'invoice-' + stripEml + '-' + stripDat;
 const pdf = tex + '.pdf';
 const fileName = tex + '.tex';
 const filePath = path.join(__dirname, '../data-certificates/' + fileName);



 // const tex = fileName.slice(0, -4);
 //  \\RequirePackage\{../src-tex/pst-art-logo\}%
 //  \\documentclass\{${classPath}\}%
 // \\def\\modA\{JXB-182B\}%
 // \\def\\pakA\{5PCS/CTN\}%
 // \\def\\ddtA\{TBA\}%
 const fileContent = `\\documentclass[12pt]\{amm-pst-invoice\}%
\\usepackage\{amm-pst-invoice-bapatla\}%
\\begin{document\}%
\\def\\customerId\{${data.nameN}\}%
\\def\\buyerNames\{${buyerNames}\}%
\\def\\buyerLineA\{${data.lineA}\}%
\\def\\buyerLineB\{${data.lineB}\}%
\\def\\buyerLineC\{${data.lineC}\}%
\\def\\buyerState\{${data.state}\}%
\\def\\buyerPhone\{${data.phone}\}%
\\def\\buyerEmail\{${data.email}\}%
\\def\\portOfLoad\{${data.portL}\}%
\\def\\portOfExit\{${data.portD}\}%
\\def\\targetCity\{${data.cityF}\}% final Destination
\\def\\dogA\{${data.goods}\}%
\\def\\qtyA\{${data.quant}\}%
\\def\\unpA\{${data.price}\}%
\\def\\amtA\{${amount}\}%
\\def\\hscA\{${data.hCode}\}%
\\def\\totA\{${totAmt}\}%
\\def\\totW\{${totW}\}%
\\makeInvoice%
\\end\{document\}
 `;

 fs.writeFile(filePath, fileContent, (error) => {
  if (error) {
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
   const message = 'Error generating your invoice. Resubmit with correct data.';
   console.log(`my error: ${error.message}`);
   // console.log('error = ' + error.message);
   // res.write('welcome, ' + req.body.nameF + '\n' + message);
   return;
  }
  if (stderr) {
   const message = 'Error generating your invoice. Resubmit with correct data.';
   console.log(`my stderr: ${stderr}`);
   // console.log('error = ' + error.message);
   // res.write('welcome, ' + req.body.nameF + '\n' + message);
   return;
  }
  // res.write('Thank you ' + req.body.nameF + '. Your card is loading...');
  if (stdout) {
   const message = `
   <h3><a href="data-certificates/${pdf}" target="_blank">Here is your invoice</a></h3>
   `;
   // res.write('Thank you ' + req.body.nameF + '. Your card is' + message);
   // res.redirect(`/pub-business-card-pdf?pdf=${pdf}`);
  }
 }); //exec

 const delay = 10;
 res.redirect(`printOnePdf?pdf=${pdf}&name=${buyerNames}&delay=${delay}`);
 //  res.send(JSON.stringify(data) + filePath + '\\n\\n' + fileContent);
});
//endregion app.post /printOne

router.get('/printOnePdf', (req, res) => {
 res.render('invoice', {
  layout: false,
  name: req.query.name ? req.query.name : '#',
  pdf: req.query.pdf ? req.query.pdf : '#',
  delay: req.query.delay ? req.query.delay : 10
 });
});

router.get('/printManyPdf', (req, res) => {
 res.render('invoiceMany', {
  layout: false,
  name: req.query.name ? req.query.name : '#',
  pdf: req.query.pdf ? req.query.pdf : '#',
  delay: req.query.delay ? req.query.delay : 60
 });
});

function runCommand(cmd) {
 return new Promise((resolve, reject) => {
  exec(cmd, (error, stdout, stderr) => {
   if (error) {
    const message = 'Error processing invoice. Resubmit with correct data.';
    console.log(`error: ${error.message}`);
    reject(error);
    return { success: true, message: message, error: error };
   }
   if (stderr) {
    const message = 'Error compiling invoice. Resubmit with correct data.';
    console.log(`error-stderr: ${stderr}`);
    reject(stderr);
    return { success: true, message: message, error: stderr };
   }
   if (stdout) {
    const message = 'invoice compiled successfully.';
    resolve(message);
    return { success: true, message: message };
   }
  }); //exec
 }); //Promise
}

//region app.post /printMany
router.post('/printMany', upload.single('file'), (req, res, next) => {
 if (!req.file || Object.keys(req.file).length === 0) {
  return res.status(400).send('<h1>No files were uploaded.</h1>');
 }

 const nam = req.body.nameF;
 const eml = req.body.email;
 const dtm = new Date().toISOString(); // YYYY-MM-DDTHH:mm:ss.sssZ, 'Z' => UTC
 const msg = `Name: ${nam}\nMail: ${eml}\nDate: ${dtm}`;
 const typ = req.body.dataType;
 const row = req.body.dataRows;
 const lst = req.body.dataList;
 const lAr = lst.split(',');
 const csv = typ == 'indices' ? lst : row;
 const src = path.join(__dirname, '../data-invoices');
 const xls = req.file.filename;
 const ext = path.extname(xls);
 const idx = xls.lastIndexOf('.');
 const bas = xls.substring(0, idx);
 const pdf = bas + '.zip';
 const tfl = bas + '.txt';
 const log = bas + '.log';
 const txt = path.join(__dirname, '../data-invoices', tfl);
 const del = typ == 'indices' ? 10 * lAr.length : 10 * row; //delay
 const cmd = `cd ${src} && nohup ./xls2tex.py ${xls} ${typ} ${csv} > ${log} 2>&1 && rm ${xls} ${log} &`;
 util.writeFile(txt, msg);
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

// router.get('/:id', (req, res) => {
//  res.send(`User profile for ID: ${req.params.id}`);
// });

// router.get('/pub-invoice-one', (req, res) => {
//  res.send('Users home page');
// });

module.exports = router;
