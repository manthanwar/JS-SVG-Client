// const config = require('./doc/Examples/config.js');
// const config = require('./config.js');
const PORT = process.env.PORT || 3000;
const path = require('path');
const fs = require('fs');
const { exec } = require('node:child_process');
const { spawn } = require('node:child_process');
const express = require('express');
// const { engine } = require('express-handlebars');
const handlebars = require('express-handlebars');
const router = express.Router();
const app = express();

//support parsing of application/x-www-form-urlencoded post data
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // to support JSON-encoded bodies
// app.use(express.urlencoded()); // to support URL-encoded bodies

const hbsOptions = {
 defaultLayout: 'main',
 extname: '.hbs',
 // layoutsDir: path.join(__dirname, 'views/layouts'),
 // partialsDir: path.join(__dirname, 'views/partials')
 layoutsDir: path.join('views/layouts'),
 partialsDir: path.join('views/partials')
};

// app.engine('hbs', handlebars.engine(hbsOptions));
// app.set('view engine', 'hbs');
// app.set('views', './views');

// Create Custom Helpers

//  Chain Helpers
// {{ helper1(helper2 text) }}
// {{#helper1}}{{helper2}}content{{/helper2}}{{/helper1}}
// {{url (concat 'samples/' this.name '/' this.class '/' this.id)}}

hbsOptions.helpers = {
 calculation: function (value) {
  return value * 10;
 },
 list: function (value, options) {
  let out = '<ul>';
  for (let i = 0; i < value.length; i++) {
   out = out + '<li>' + options.fn(value[i]) + '</li>';
  }
  return out + '</ul>';
 },
 pos: function (value, options) {
  return value + 28;
  // return options.name;
 },
 isEqual: function (v1, v2) {
  if (v1 === v2) {
   return true;
  }
  return false;
 },
 isGreaterThan: function (v1, v2) {
  if (v1 > v2) {
   return true;
  }
  return false;
 },
 isGreaterThanEqual: function (v1, v2) {
  if (v1 >= v2) {
   return true;
  }
  return false;
 },
 isLessThan: function (v1, v2) {
  if (v1 < v2) {
   return true;
  }
  return false;
 },
 isLessThanEqual: function (v1, v2) {
  if (v1 <= v2) {
   return true;
  }
  return false;
 },
 isEqualO: function (v1, v2, options) {
  if (v1 === v2) {
   return options.fn(this);
  }
  return options.inverse(this);
 },

 isEven: function (val) {
  if (val % 2 == 0) {
   return true;
  }
  return false;
 },
 isEvenO: function (conditional, options) {
  if (conditional % 2 == 0) {
   return options.fn(this);
  }
  return options.inverse(this);
 },

 concat: function () {
  // let str = ''
  // for (let i = 0; i < arguments.length - 1; i++) {
  //     str += arguments[i];
  // }
  // return str;

  // console.log('hihihiii  =', arguments.length);

  let str = [...arguments].slice(0, -1);
  return str.join('');
 }
};

const hbs = handlebars.create(hbsOptions);

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.use(express.static('dist'));
app.use(express.static('doc'));
app.use(express.static('doc/Examples'));
app.use(express.static('doc/Examples/src-art'));
app.use(express.static('doc/Examples/src-gauge'));
app.use(express.static('doc/Examples/src-lib'));
app.use(express.static('doc/Examples/src-math'));
app.use(express.static('doc/Examples/src-plot'));
app.use(express.static('doc/Examples/src-tex'));
app.use(express.static('doc/Examples/src-tex-data'));

// app.use('/src-gauge/', express.static(__dirname + 'doc/Examples/src-plot'));
// app.use(express.static('doc/Examples/src-gauge'));
// app.use(express.static('doc/Examples'));
// app.use('/src-plot', express.static('doc/Examples/src-plot'));
// app.use(express.static(path.join(__dirname, 'doc')));
// app.use('/src-plot', express.static(__dirname + 'doc/Examples/src-plot'));

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

app.get('/', function (req, res) {
 res.sendFile(path.join(__dirname, 'demo-home.html'));
});

// app.get('/demo-artDesign.html', function (req, res) {
//  res.sendFile(path.join(__dirname, './demo-artDesign.html'));
// });

https: app.get('/resp', function (req, res) {
 res.sendFile(path.join(__dirname, 'demo-responsive.html'));
});

app.get('/test', function (req, res) {
 // res.sendFile(path.join(__dirname, 'demo-home.html'));
 res.sendFile(path.join(__dirname, 'test.html'));
});

//region app.post /pub-business-card-spawn
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
     console.log(`stdout: ${stdout}`);
     console.log(message);
     console.log('mmmm = ' + message);
     res.setHeader('Content-type', 'text/html');
     res.send('welcome, ' + req.body.nameF + '\n' + message);
    }
   }
  );
 }); //fs.write

 // res.setHeader('Content-type', 'text/html');
 // res.send('welcome, ' + req.body.nameF + '\n' + message);
});
//endregion app.post /pub-business-card-spawn

//region app.post /pub-business-card
app.post('/pub-business-card', function (req, res, next) {
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
 const fileName = data.email.replace(/[@,.]/g, '-') + '.tex';
 const filePath = path.join(__dirname, '/src-tex-data/' + fileName);
 const tex = fileName.slice(0, -4);
 const pdf = tex + '.pdf';
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
  const cmd = `cd ${src} && latex -quiet ${tex}.tex && latex -quiet ${tex}.tex && dvips -q ${tex}.dvi && ps2pdf -dNOSAFER -dALLOWPSTRANSPARENCY ${tex}.ps && rm ${tex}.aux ${tex}.dvi ${tex}.log ${tex}.out ${tex}.ps`;
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

 // res.send(
 //  `<h3> ${name}, here is your card <a href="/pub-business-card-pdf?pdf=${pdf}&name=${name}">${pdf}</a></h3>`
 // );

 res.redirect(`/pub-business-card-pdf?pdf=${pdf}&name=${name}`);
});
//endregion app.post /pub-business-card

app.get('/pub-business-card-pdf', (req, res) => {
 res.render('pub-business-card-pdf', {
  layout: false,
  name: req.query.name ? req.query.name : '#',
  pdf: req.query.pdf ? req.query.pdf : '#'
 });
});



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

// app.listen(port, () => {
//  console.log(`Listening on port ${port}\n go to http://localhost:${port}`);
// });

app.listen(PORT);
console.log('Server started at http://localhost:' + PORT);
