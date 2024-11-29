// const config = require('./doc/Examples/config.js');
// const config = require('./config.js');
const express = require('express');
const handlebars = require('express-handlebars');
// const { engine } = require('express-handlebars');
const path = require('path');
// const fs = require('fs');

const app = express();

const hbsOptions = {
 defaultLayout: 'main',
 extname: '.hbs',
 layoutsDir: __dirname + '/views/layouts'
};

app.engine('hbs', handlebars.engine(hbsOptions));
app.set('view engine', 'hbs');
app.set('views', './views');

const PORT = process.env.PORT || 3000;

app.use(express.static('dist'));
app.use(express.static('doc'));
app.use(express.static('doc/Examples'));
app.use(express.static('doc/Examples/src-art'));
app.use(express.static('doc/Examples/src-gauge'));
app.use(express.static('doc/Examples/src-lib'));
app.use(express.static('doc/Examples/src-math'));
app.use(express.static('doc/Examples/src-plot'));
app.use(express.static('doc/Examples/src-tex'));

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

// app.listen(port, () => {
//  console.log(`Listening on port ${port}\n go to http://localhost:${port}`);
// });

app.listen(PORT);
console.log('Server started at http://localhost:' + PORT);
