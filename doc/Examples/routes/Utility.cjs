/*
// =============================================================================
// File Name     : Utility.cjs
// Date Created  : 2025-10-22 16:17 UTC +02:00
// description   : Utility Class for Node JS
// -----------------------------------------------------------------------------
// Author        : Amit Manohar Manthanwar
// WebURL        : https://manthanwar.github.io
// -----------------------------------------------------------------------------
// Copyright     : (c) 2025 Amit Manohar Manthanwar
// License       : LICENSE.md
// =============================================================================
// Revision Log  | Author  | Description
// --------------+---------+----------------------------------------------------
// 22-Oct-2025   | AMM     | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================
*/
const fs = require('node:fs');
// const fs = require('fs');
const path = require('path');


class Utility {
 constructor() {
  this.appName = 'Dolphin.js App';
  this.className = 'Utility';
 }
 greet = () => {
  console.log(`Hello, ${this.name}!`);
 };

 static writeFile(filePath, content) {
  fs.writeFile(filePath, content, (err) => {
   if (err) {
    console.error('Error writing to file:', err);
   } else {
    console.log('File written successfully!');
   }
  });
 }

 static appendFile(filePath, dataToAppend) {
  fs.appendFile(filePath, dataToAppend, (err) => {
   if (err) {
    console.error('Error appending to file:', err);
   } else {
    console.log('Data appended successfully!');
   }
  });
 }
}

Utility.runCommand = (cmd) => {
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
};

// Helper function for artificial delay
Utility.delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * @description JavaScript program to convert number into words by breaking it into groups of three
 */
Utility.convertToWords = (n) => {
 if (n === 0) return 'Zero';

 // Words for numbers 0 to 19
 const units = [
  '',
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
  'Eleven',
  'Twelve',
  'Thirteen',
  'Fourteen',
  'Fifteen',
  'Sixteen',
  'Seventeen',
  'Eighteen',
  'Nineteen'
 ];

 // Words for numbers multiple of 10
 const tens = [
  '',
  '',
  'Twenty',
  'Thirty',
  'Forty',
  'Fifty',
  'Sixty',
  'Seventy',
  'Eighty',
  'Ninety'
 ];

 const multiplier = ['', 'Thousand', 'Million', 'Billion'];

 let res = '';
 let group = 0;

 // Process number in group of 1000s
 while (n > 0) {
  if (n % 1000 !== 0) {
   let value = n % 1000;
   let temp = '';

   // Handle 3 digit number
   if (value >= 100) {
    temp = units[Math.floor(value / 100)] + ' Hundred ';
    value %= 100;
   }

   // Handle 2 digit number
   if (value >= 20) {
    temp += tens[Math.floor(value / 10)] + ' ';
    value %= 10;
   }

   // Handle unit number
   if (value > 0) {
    temp += units[value] + ' ';
   }

   // Add the multiplier according to the group
   temp += multiplier[group] + ' ';

   // Add the result of this group to overall result
   res = temp + res;
  }
  n = Math.floor(n / 1000);
  group++;
 }

 // Remove trailing space
 return res.trim();
};

/**
 * @description Middleware to log incoming requests
 */
Utility.traffic = (router, logFile) => {
 router.use((req, res, next) => {
  const now = new Date().toISOString(); //Date.now();
  const cip = req.clientIp;
  const uag = req.headers['user-agent'].replace('Mozilla/5.0 ', '');;
  const ref = req.headers['referer'];
  const log = `${now} ${cip} ${uag} ${ref} ${req.url} ${req.method}\n`;
  Utility.appendFile(path.join(__dirname, logFile), log);
  next();
 });
};

module.exports = Utility;
