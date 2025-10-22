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

module.exports = Utility;
