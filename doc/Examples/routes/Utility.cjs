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

// #region constants
const fs = require('node:fs');
const path = require('node:path');
const { exec } = require('node:child_process');
const { execFile } = require('node:child_process');
const { spawn } = require('node:child_process');
// #endregion constants

// #region class Utility
class Utility {
 // Set the inactivity timeout to 30 minutes (30 * 60 * 1000 milliseconds)
 static inactivityTimeout = 30 * 60 * 1000;
 static timeoutId;
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

 static async writeAndRun(filePath, content, src, tex) {
  // const filePath = './output.txt';

  // 1. Create the write stream
  const stream = fs.createWriteStream(filePath);

  stream.write(content);

  // 2. Safely close the stream
  stream.end();

  // 3. Wait for the stream to fully finish writing to disk
  await new Promise((resolve, reject) => {
   stream.on('finish', resolve);
   stream.on('error', reject);
  });

  console.log('File is completely written. Spawning child process...');

  // 4. Spawn your process safely
  // const child = spawn('cat', [filePath]); // Replace 'cat' with your command

  const cmd = `cd ${src} && latex ${tex}.tex`;
  const child = spawn(cmd, { cwd: src, shell: true });
  child.stdout.on('data', (data) => {
   console.log(`Child output: ${data}`);
  });
 }

 static appendFile(filePath, dataToAppend) {
  fs.appendFile(filePath, dataToAppend, (err) => {
   if (err) {
    console.error('Error appending to file:', err);
   } else {
    // console.log('Data appended successfully!');
   }
  });
 }
}
// #endregion class Utility

// #region Utility.runCommand
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
// #endregion Utility.runCommand

// #region Helper function for artificial delay
Utility.delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// #endregion Helper function for artificial delay

// #region Utility.convertToWords
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
// #endregion Utility.convertToWords

// #region Utility.traffic
/**
 * @description Middleware to log incoming requests
 */
Utility.traffic = (router, logFile) => {
 router.use((req, res, next) => {
  const now = new Date().toISOString(); //Date.now();
  const cip = req.clientIp;
  const uag = req.headers['user-agent'].replace('Mozilla/5.0 ', '');
  const ref = req.headers['referer'];
  const log = `${now} ${cip} ${uag} ${ref} ${req.url} ${req.method}\n`;
  Utility.appendFile(path.join(__dirname, logFile), log);
  next();
 });
};
// #endregion Utility.traffic

// #region Utility.resetTimer
/**
 * @description Function to reset the inactivity timer
 */
Utility.resetTimer = (server) => {
 console.log('Activity detected. Resetting inactivity timer.');
 clearTimeout(Utility.timeoutId);
 Utility.timeoutId = setTimeout(() => {
  console.log('30 minutes of inactivity. Shutting down the server.');
  server.close(() => {
   console.log('Server has been gracefully shut down.');
   process.exit(0); // Exit the process after the server closes
  });
 }, Utility.inactivityTimeout);
};
// #endregion Utility.resetTimer

// #region Utility.dateFormat

// # region Utility.dateFormat
/**
 * Function to format date
 * @returns { string } Output: YYYY-MM-DD HH:MM:SS TZ
 */
Utility.dateFormat = () => {
 // const dtm = new Date().toISOString(); // YYYY-MM-DDTHH:mm:ss.sssZ
 const date = new Date();
 const formatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
  timeZoneName: 'short' // Outputs 'GMT+5' or similar offset
  // timeZone: 'America/New_York',
  // dateStyle: 'full',
  // timeStyle: 'long'
 });
 // Format into parts to re-arrange into the desired string
 const parts = formatter.formatToParts(date).reduce((acc, part) => {
  acc[part.type] = part.value;
  return acc;
 }, {});

 // Construct the custom string: YYYY-MM-DD HH:mm:ss TZ
 const formattedDate = `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}:${parts.second} ${parts.timeZoneName}`;

 // console.log(formattedDate);
 // Output: 2026-08-13 19:12:00 GMT+5:30
 return formattedDate;
};
// #endregion Utility.dateFormat

// #region Utility.highlightJSON
Utility.highlightJSONA = (json) => {
 return 'HHHHHHHHHHHHHHHH';
};
Utility.highlightJSON = (json) => {
 if (!json) return '';

 // Convert object to pretty-printed JSON string if it isn't already
 if (typeof json !== 'string') {
  json = JSON.stringify(json, null, 4);
 }

 // Escape HTML characters to prevent XSS injection
 json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

 // Regex to match keys, strings, numbers, booleans, and nulls
 const regex =
  /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g;

 return json.replace(regex, function (match) {
  let className = 'json-number';

  if (/^"/.test(match)) {
   if (/:$/.test(match)) {
    className = 'json-key';
   } else {
    className = 'json-string';
   }
  } else if (/true|false/.test(match)) {
   className = 'json-boolean';
  } else if (/null/.test(match)) {
   className = 'json-null';
  }

  return `<span class="${className}">${match}</span>`;
 });
};
// #endregion Utility.highlightJSON
//
module.exports = Utility;
