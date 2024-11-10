console.log('hello express');

const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('dist'));
app.use(express.static('doc'));
app.use(express.static('doc/Examples'));
app.use(express.static('doc/Examples/src-plot'));

// app.use(express.static('doc/Examples'));
// app.use('/src-plot', express.static('doc/Examples/src-plot'));

// app.use(express.static(path.join(__dirname, 'doc')));
// app.use('/src-plot', express.static(__dirname + 'doc/Examples/src-plot'));

app.get('/hello', (req, res) => {
 res.send('Hello World!');
});

app.get('/', function (req, res) {
 res.sendFile(path.join(__dirname, 'demo-home.html'));
});

// app.get('/"demo-dashboard.html', function (req, res) {
//  res.sendFile(path.join(__dirname, '"demo-dashboard.html'));
// });

app.get('/resp', function (req, res) {
 res.sendFile(path.join(__dirname, 'demo-responsive.html'));
});

app.get('/test', function (req, res) {
 // res.sendFile(path.join(__dirname, 'demo-home.html'));
 res.sendFile(path.join(__dirname, 'test.html'));
});

// app.listen(port, () => {
//  console.log(`Listening on port ${port}\n go to http://localhost:${port}`);
// });

app.listen(port);
console.log('Server started at http://localhost:' + port);
