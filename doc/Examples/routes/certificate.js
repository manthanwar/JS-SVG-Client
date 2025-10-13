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
// const fileUpload = require('express-fileupload');
const multer = require('multer');
// const upload = multer({ dest: '../data-certificates/' });

const storage = multer.diskStorage({
 destination: (req, file, cb) => {
  const filePath = path.join(__dirname, '../data-certificates/');
  // cb(null, '../data-certificates/');
  cb(null, filePath);
 },
 filename: (req, file, cb) => {
  // const certDatePrint = new Date().replaceAll('-', '');
  // const fileName = file.originalname + '-' + certDatePrint + '-' + '.tex';
  cb(null, Date.now() + '-' + file.originalname);
 }
});
const uploadStorage = multer({ storage: storage });

router.get('/', (req, res) => {
 res.send('Users home page');
});

//region app.post /printOne
router.post('/printOne', (req, res, next) => {
 const data = {
  nameF: req.body.nameF, // name first
  nameM: req.body.nameM, // name middle
  nameL: req.body.nameL, // name last
  nameN: req.body.nameN, // name number = id
  examN: req.body.examN, // exam name
  examD: req.body.examD, // exam date
  examR: req.body.examR, // exam result
  certN: req.body.certN, // cert number
  certD: req.body.certD // cert date
 };

 const certDate = new Date(data.certD);

 // const certY = certDate.getFullYear();
 // const certM = certDate.toLocaleString('default', { month: 'long' });
 // const certYM = (certY = certM);
 const certD = data.certD.replaceAll('-', '');

 const fileName = data.nameL + '-' + data.nameN + '-' + certD + '-' + '.tex';
 const filePath = path.join(__dirname, '../data-certificates/' + fileName);

 res.send(JSON.stringify(data) + filePath);
});
//endregion app.post /printOne

//region app.post /printMany
router.post('/printMany', uploadStorage.single('file'), (req, res, next) => {
 // res.send(req.file);

 if (!req.file || Object.keys(req.file).length === 0) {
  // return res.status(400).send('No files were uploaded.');
  // return res.redirect('/new-route');
  return res.redirect('/demo-pub-certificate.html');

   // res.render('certificate', {
   //  layout: false,
   //  name: 'hello there',
   //  API_KEY: process.env.API_KEY_openWeather
   // });
 }

 console.log(JSON.stringify(req.file));
 // return res.send('Single file' + JSON.stringify(req.file));


 // res.send(filePath);
});
//endregion app.post /printMany

router.get('/:id', (req, res) => {
 res.send(`User profile for ID: ${req.params.id}`);
});

router.get('/pub-certificate-one', (req, res) => {
 res.send('Users home page');
});

module.exports = router;
