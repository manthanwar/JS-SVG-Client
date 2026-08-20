// #region required
// const config = require('./doc/Examples/config.js');
// const config = require('./config.js');
const PORT = process.env.PORT || 3000;
const path = require('path');
const fs = require('fs');
const { exec } = require('node:child_process');
const { spawn } = require('node:child_process');
const express = require('express');
const handlebars = require('express-handlebars');
const router = express.Router();
const app = express();
const requestIp = require('request-ip');
const util = require('./routes/Utility.cjs');
const hbsOptions = require('./routes/hbsOptions.cjs');
const certificate = require('./routes/certificate.cjs');
const report = require('./routes/report.cjs');
const invoice = require('./routes/invoice.cjs');
const faq = require('./routes/faq.cjs');
const prescription = require('./routes/prescription.cjs');

const hbs = handlebars.create(hbsOptions);
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.use(requestIp.mw()); // Middleware to populate req.clientIp
util.traffic(app, '../data-certificates/traffic.log');
// #endregion required

// #region use Static
//parse application/x-www-form-urlencoded post data
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // to support JSON-encoded bodies

app.use(express.static('dist'));
app.use(express.static('doc'));
app.use(express.static('doc/Examples'));
app.use(express.static('doc/Examples/amit'));
app.use(express.static('doc/Examples/data'));
app.use(express.static('doc/Examples/forms'));
app.use(express.static('doc/Examples/css'));
app.use(express.static('doc/Examples/js'));
app.use(express.static('doc/Examples/pdf'));
app.use(express.static('doc/Examples/src-art'));
app.use(express.static('doc/Examples/src-gauge'));
app.use(express.static('doc/Examples/src-lib'));
app.use(express.static('doc/Examples/src-math'));
app.use(express.static('doc/Examples/src-plot'));
app.use(express.static('doc/Examples/src-tex'));
app.use(express.static('doc/Examples/src-tex-data'));
app.use(express.static('doc/Examples/data-certificates'));
// #endregion use Static

// #region routes
app.use('/certificate', certificate);
app.use('/report', report);
app.use('/invoice', invoice);
app.use('/faq', faq);
app.use('/prescription', prescription);
// #endregion routes

// #region get /
app.get('/', function (req, res) {
 res.sendFile(path.join(__dirname, 'demo-home.html'));
});
// #endregion get /

// #region get /pub
app.get('/pub', function (req, res) {
 res.sendFile(path.join(__dirname, 'pub.html'));
});
// #endregion get /pub

// #region app.post /pub-business-card-spawn
app.post('/pub-business-card-spawn', (req, res, next) => {
 const data = {
  nameF: req.body.nameF,
  nameM: req.body.nameM,
  nameL: req.body.nameL,
  rankT: req.body.rankT,
  email: req.body.email,
  wSite: 'www.dolphin.com',
  phone: req.body.phone,
  place: req.body.place.split('\n')
 };

 const name = data.nameF + ' ' + data.nameM[0] + ' ' + data.nameL;
 const rank = data.rankT;
 const mail = data.email;
 const site = data.wSite;
 const call = data.phone;
 const addA = data.place[0] ? data.place[0].trim() : ' ';
 const addB = data.place[1] ? data.place[1].trim() : ' ';

 // console.log(data.place);

 // console.log('reqIP = ', data);
 // console.log('len = ' + data.place.length);

 const fileName = data.email.replace(/[@,.]/g, '-') + '.tex';
 const filePath = path.join(__dirname, '/src-tex-data/' + fileName);
 // console.log(fileName);
 // console.log(filePath);

 const fileContent = `\\documentclass{../src-tex/amm-pst-business-card}
\\RequirePackage\{../src-tex/pst-art-logo\}%
\\begin{document}%
\\thispagestyle\{empty\}%
\\makeCard\{${name}\}%
\{${rank}\}%
\{${mail}\}%
\{${call}\}%
\{${site}\}%
\{${addA}\}%
\{${addB}\}%
\\end{document\}
 `;

 // console.log(fileContent);
 let message = '';
 // let pdf = '';

 fs.writeFile(filePath, fileContent, (err) => {
  if (err) {
   res.write('Error generating your card. Resubmit with correct data.');
   console.log(`error: ${error.message}`);
   return;
  }
  // res.write('Thank you ' + req.body.nameF + '. Your card is loading...');

  const tex = fileName.slice(0, -4);
  const pdf = tex + '.pdf';
  const src = path.join(__dirname, '/src-tex-data/');
  const mak = path.join(__dirname, '/src-tex/makefile');

  const ls = spawn('ls', ['-lh', '/usr']);

  const cd = spawn('cd', [src]);
  const make = spawn('make', ['-f', mak, 'latexruns', `file=${tex}`]);

  cd.stdout.on('data', (data) => {
   grep.stdin.write(data);
  });

  ps.stderr.on('data', (data) => {
   console.error(`ps stderr: ${data}`);
  });

  ps.on('close', (code) => {
   if (code !== 0) {
    console.log(`ps process exited with code ${code}`);
   }
   grep.stdin.end();
  });

  exec(
   `cd ${src} && make -f ${mak} latexruns file=${tex}`,
   (error, stdout, stderr) => {
    if (error) {
     message = 'Error generating your card. Resubmit with correct data.';
     console.log(`error: ${error.message}`);
     return;
    }
    if (stderr) {
     message = 'Error generating your card. Resubmit with correct data.';
     console.log(`stderr: ${stderr}`);
     return;
    }
    // res.write('Thank you ' + req.body.nameF + '. Your card is loading...');
    if (stdout) {
     message = `<a href="${pdf}" target="_blank">Here is your business card</a>`;
     // res.send(message);
     // console.log(`stdout: ${stdout}`);
     // console.log(message);
     // console.log('mmmm = ' + message);
     res.setHeader('Content-type', 'text/html');
     res.send(
      '<div style="font-size:30px;"> welcome, ' +
       req.body.nameF +
       '\n' +
       message +
       '</div>'
     );
    }
   }
  );
 }); //fs.write

 // res.setHeader('Content-type', 'text/html');
 // res.send('welcome, ' + req.body.nameF + '\n' + message);
});
// #endregion app.post /pub-business-card-spawn

// #region app.post /pub-business-card
app.post('/pub-business-card', function (req, res, next) {
 const data = {
  nameF: req.body.nameF,
  nameM: req.body.nameM,
  nameL: req.body.nameL,
  rankT: req.body.rankT,
  email: req.body.email,
  wSite: '\\href\{https://desiign.in\}\{www.dolphin.com\}',
  phone: req.body.phone,
  place: req.body.place.split('\n')
 };

 // res.write('Thank you ' + req.body.nameF + '. Your card is loading...');

 const name = data.nameF + ' ' + data.nameM[0] + ' ' + data.nameL;
 const rank = data.rankT;
 const mail = data.email;
 const site = data.wSite;
 const call = data.phone;
 const addA = data.place[0] ? data.place[0].trim() : ' ';
 const addB = data.place[1] ? data.place[1].trim() : ' ';
 const fileName = data.email.replace(/[@,.]/g, '-') + '.tex';
 const filePath = path.join(__dirname, '/src-tex-data/' + fileName);
 const tex = fileName.slice(0, -4);
 const pdf = tex + '.pdf';
 const log = tex + '.txt';
 const dtm = util.dateFormat();
 const msg = `Name: ${name}\nMail: ${mail}\nDate: ${dtm}`;

 const fileContent = `\\documentclass{../src-tex/amm-pst-business-card}
\\RequirePackage\{../src-tex/pst-art-logo\}%
\\begin{document}%
\\thispagestyle\{empty\}%
\\makeCard\{${name}\}%
\{${rank}\}%
\{${mail}\}%
\{${call}\}%
\{${site}\}%
\{${addA}\}%
\{${addB}\}%
\\end{document\}
 `;

 fs.writeFile(filePath, fileContent, (err) => {
  if (err) {
   // res.write('Error generating your card. Resubmit with correct data.');
   console.log(`error: ${error.message}`);
   return;
  }
  // res.write('Thank you ' + req.body.nameF + '. Your card is printing...');

  const src = path.join(__dirname, '/src-tex-data/');
  const mak = path.join(__dirname, '/src-tex/makefile');
  // const cmd = `cd ${src} && make -f ${mak} latexruns file=${tex}`;
  // const cmd = `cd ${src} && make -f ../src-tex/makefile latexruns file=${tex}`;

  const cmda = `cd ${src} && \
  latex -interaction=batchmode ${tex}.tex && \
  latex -interaction=batchmode ${tex}.tex && \
  dvips -q ${tex}.dvi && \
  ps2pdf -dNOSAFER -dALLOWPSTRANSPARENCY ${tex}.ps > ${log} 2>&1 && \
  rm ${tex}.aux ${tex}.dvi ${tex}.log ${tex}.out ${tex}.ps`;

  const cmd = `cd ${src} && (echo Name: ${name} && echo Mail: ${mail} && echo Date: ${dtm} && printf '\\n' && make -f ../data-certificates/makefile nodeLatex file=${tex} n=1) > ${log}`;
  
  exec(cmd, (error, stdout, stderr) => {
   if (error) {
    const message = 'Error generating your card. Resubmit with correct data.';
    console.log(`my error: ${error.message}`);
    // console.log('error = ' + error.message);
    // res.write('welcome, ' + req.body.nameF + '\n' + message);
    return;
   }
   if (stderr) {
    const message = 'Error generating your card. Resubmit with correct data.';
    console.log(`my stderr: ${stderr}`);
    // console.log('error = ' + error.message);
    // res.write('welcome, ' + req.body.nameF + '\n' + message);
    return;
   }
   // res.write('Thank you ' + req.body.nameF + '. Your card is loading...');
   if (stdout) {
    const message = `<a href="${pdf}" target="_blank">Here is your business card</a>`;
    // res.write('Thank you ' + req.body.nameF + '. Your card is' + message);
    // res.redirect(`/pub-business-card-pdf?pdf=${pdf}`);
   }
  }); //exec
 }); //fs.writeFile

 res.redirect(`/pub-business-card-pdf?bas=${tex}&pdf=${pdf}&name=${name}`);
});
// #endregion app.post /pub-business-card

// #region get /pub-business-card-pdf
app.get('/pub-business-card-pdf', (req, res) => {
 res.render('pub-business-card-pdf', {
  layout: false,
  name: req.query.name ? req.query.name : '#',
  pdf: req.query.pdf ? req.query.pdf : '#',
  bas: req.query.pdf ? req.query.bas : '#'
 });
});
// #endregion get /pub-business-card-pdf

// Whenever a connection is received, reset the timer.
// app.on('request', resetTimer);

// The 404 Catch-All Middleware (MUST be at the very bottom)
app.use((req, res, next) => {
 res.status(404).send('<h1>Oops! Page not found.</h1>');
});

//  Handling 503 Errors (Service Unavailable)
//  either undergoing maintenance or completely overloaded with traffic
app.use((req, res, next) => {
 if (serverIsOverloaded) {
  res.setHeader('Retry-After', '30'); // Suggests client retries in 30 seconds
  return res.status(503).send('<h1>Service Under Heavy Load</h1>');
 }
 next();
});

// Optional: Global 500 Internal Error Handler (Must have 4 arguments)
app.use((err, req, res, next) => {
 console.error('SYSTEM ERROR LOG:', err.stack);
 // res.status(500).send('<h1>Something went wrong on our end!</h1>');
 // const statusCode = err.statusCode || err.status || 500;

 // Default to 500 Internal Server Error if status is missing or outside 50x range

 // res.status(500).send(`<h1>Server Error: ${res.statusCode}</h1>`);

 // Handling 502 Errors (Bad Gateway)
 // Handle rejected promises that have no .catch() block
 process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
  // Optional: Perform synchronous cleanup here (e.g., close DB connections)
  // Optional: Gracefully shut down and let PM2 restart the app
 });

 // Handle synchronous or asynchronous errors thrown outside try/catch blocks
 process.on('uncaughtException', (error) => {
  console.error('💥 Uncaught Exception thrown:', error);

  // Application is now in an undefined state.
  // Log synchronously and force a clean exit to let your process manager (PM2/Docker) restart it.
  process.exit(1);
 });

 const statusCode =
  res.statusCode >= 500 && res.statusCode <= 504 ? res.statusCode : 500;

 res.status(statusCode);
 res.status(statusCode).send(`<h1>Server Error: ${statusCode}</h1>`);
});

const server = app.listen(PORT, () => {
 console.log('Server started at http://localhost:' + PORT);
});

// Handling 504 Errors (Gateway Timeout)
// 2. Set the global request timeout in milliseconds (e.g., 5000ms = 5 seconds)

// Configure explicit network timeouts (in milliseconds)
// server.headersTimeout = 60000; // 1 minute
// server.requestTimeout = 300000; // 5 minutes
// server.timeout = 30000;        // 30 seconds idle timeout
// server.setTimeout(55000);

// Set global server timeout to 5 minutes (in milliseconds)
server.setTimeout(5 * 60 * 1000);
