// =============================================================================
// File Name  : Bar.js
// Description: JS Class to draw Bar Chart using JS-SVG-Client
// -----------------------------------------------------------------------------
// Author     : Amit Manohar Manthanwar
// Mailer     : manthanwar@hotmail.com
// WebURL     : https://manthanwar.github.io
// -----------------------------------------------------------------------------
// Copyright  : (c) 2024 Amit Manohar Manthanwar
// License    : MIT License
// ----------------------------------------------------------------------------
// This program can be redistributed and/or modified under the terms
// of the MIT License. For details see the file license.txt
// =============================================================================
// Revision Log  | Author  | Description
// --------------+---------+----------------------------------------------------
// 02-Nov-2024   | AMM | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

import * as mySvg from '../../../dist/svg.min.js';

export default class Bar {
 constructor(data) {
  this.data = this.init(data);
  this.merge(this.data, data);

  this.obj = {};
  this.obj.divMainBox = this.divMainBox();
  this.obj.divMainObj = this.divMainObj();
  this.obj.divMainSvg = this.divMainSvg();
  // this.obj.divOptions = this.divOptions();

  if (this.data.gridOn) {
   this.obj.grid = this.grid();
   this.data.width = this.obj.grid.objSvg.width;
   this.data.height = this.obj.grid.objSvg.height;
   this.data.idSvg = this.data.grid.box.idSvg;
  } else {
   this.data.width = parseInt(this.obj.divMainObj.data.width);
   this.data.height = parseInt(this.obj.divMainObj.data.height);
   this.data.idSvg = this.data.divMainSvg.id;
  }

  this.drawObject();
  // this.drawLegend();
 } //constructor

 init(obj) {
  const data = {};
  data.dataHasHeader = true;
  data.cr = 3; // pie circle radius
  data.cx = 3; // pie circle center x coordinate
  data.cy = 3; // pie circle center y coordinate
  data.clr = [
   'DarkRed',
   'DarkGreen',
   'DarkBlue',
   'Purple',
   'Olive',
   'SaddleBrown',
   'MediumVioletRed',
   'Teal',
   'Maroon',
   'Magenta'
  ];

  const len = obj.data.split('\n').filter((n) => n).length;
  data.xMax = len; // x axis max
  data.yMax = 6; // y axis max
  data.xOff = 0; // x offset
  data.yOff = 0; // y offset
  data.gridOn = true;
  data.width = 800;

  data.divMainBox = {
   containerId: 'main',
   id: 'divMainBox',
   style: 'border: 2px solid red; padding:10px 10px;margin-top:0px;',
   width: 1520 + 'px',
   height: 420 + 'px',
   transform: 'scale(1)'
  };

  data.divMainObj = {
   containerId: data.divMainBox.id,
   id: data.divMainBox.id + '-divMainObj',
   style: 'border: 2px solid green; margin: 0 20px; padding:10px;',
   width: 800 + 'px',
   height: 400 + 'px',
   transform: 'scale(1)'
  };

  data.divMainSvg = {
   containerId: data.divMainObj.id,
   id: data.divMainObj.id + '-svgMain',
   width: '100%',
   height: '100%',
   viewBox: '0 0 100% 100% ',
   style: `border: 2px solid blue; background-color: rgba(0,200,0,0); padding:10px; box-sizing:border-box;`
  };

  data.divMainKey = {
   containerId: data.divMainBox.id,
   id: data.divMainBox.id + '-divMainKey',
   style: 'border: 0px solid cyan; margin: 0px; padding:10px;',
   width: 200 + 'px',
   height: 250 + 'px',
   transform: 'scale(1)'
  };

  data.divOptions = {
   containerId: data.divMainBox.id,
   id: data.divMainBox.id + '-divOptions',
   style:
    'border: 2px solid blue; border-radius:10px; padding:20px; margin:20px 50px;',
   width: '300px',
   height: '340px',
   transform: 'scale(1)'
  };

  data.grid = {
   containerId: data.divMainSvg.id,
   minorNumX: 5,
   minorNumY: 5,
   majorNumX: data.xMax,
   majorNumY: data.yMax,
   // titleOn: true,
   // axisLabelOnX: true,
   // axisLabelOnY: true,
   // axisNumOnX: true,
   // axisNumOnY: true,
   majorOnX: true,
   majorOnY: true,
   minorOnX: true,
   minorOnY: true,
   boxOn: false,
   axesOn: false
  };

  data.grid.minor = {
   stroke: 'gray',
   strokeWidth: '0.5',
   strokeOpacity: '1',
   strokeDasharray: '1 2'
  };

  data.grid.major = {
   stroke: 'gray',
   strokeWidth: '0.5'
  };

  data.grid.box = {
   stroke: 'red',
   strokeWidth: 1,
   strokeOpacity: 1,
   fill: 'none',
   idSvg: data.divMainSvg.id + '-svg',
   idBox: data.divMainSvg.id + '-box'
  };

  data.grid.padding = {
   left: 40,
   right: 10,
   top: 30,
   bottom: 40
  };

  data.grid.title = {
   text: 'Pie Chart',
   x: '50%',
   y: '15',
   dx: '20',
   dy: '0',
   fontFamily: 'inherit',
   fontSize: '20',
   fontWeight: 'normal',
   fill: 'black',
   fillOpacity: '1',
   stroke: 'black',
   strokeWidth: '0',
   strokeOpacity: '1'
  };

  data.grid.axisLabelX = {
   text: 'X Axis',
   x: '50%',
   y: '98%',
   dx: '20',
   dy: '0',
   fontFamily: 'inherit',
   fontSize: '16',
   fontWeight: 'normal',
   fill: 'black',
   fillOpacity: '1',
   stroke: 'black',
   strokeWidth: '0',
   strokeOpacity: '1'
  };

  data.grid.axisLabelY = {
   text: 'Y Axis',
   x: '50%',
   y: '50%',
   dx: '-73%',
   dy: '-47%',
   transform: 'rotate(-90, 0, 0)',
   fontFamily: 'inherit',
   fontSize: '16',
   fontWeight: 'normal',
   fill: 'black',
   fillOpacity: '1',
   stroke: 'black',
   strokeWidth: '0',
   strokeOpacity: '1'
  };

  return data;
 } //init

 // get width() {
 //  return this.data.divMainObj.width;
 // }

 get plotTitle() {
  return this.data.grid.title.text;
 }
 set plotTitle(text) {
  this.data.grid.title.text = text;
  document.getElementById(this.data.divMainSvg.id).remove();
  this.obj.divMainSvg = this.divMainSvg();
  this.obj.grid = this.grid();
 }

 merge(current, updates) {
  for (const key of Object.keys(updates)) {
   if (!current.hasOwnProperty(key) || typeof updates[key] !== 'object')
    current[key] = updates[key];
   else this.merge(current[key], updates[key]);
  }
  return current;
 } //merge

 divMainBox() {
  return new mySvg.Div(this.data.divMainBox);
 }

 divMainObj() {
  return new mySvg.Div(this.data.divMainObj);
 }

 divMainKey() {
  return new mySvg.Div(this.data.divMainKey);
 }

 drawLegend() {
  this.obj.divMainKey = this.divMainKey();
  const div = document.getElementById(this.data.divMainKey.id);
  const data = this.data.dataObj.key;
  // let tableStr = '<b>Key</b><table id="legend-key">';
  let tableStr = '<table id="legend-key">';
  // tableStr += '<th><td>' + 'sport' + '</td><td>' + 'val' + '</th>';
  data.forEach((v, i) => {
   const cls = 'class = "legend"';
   const sty = 'style="background-color:' + this.data.clr[i] + '"';
   const div = '<div ' + cls + ' ' + sty + '></div>';
   tableStr += '<tr><td>' + div + '</td><td>' + v + '</td>';
   tableStr += '<td>' + this.data.dataObj.val[i] + '</td>';
   tableStr += '<td>' + this.data.dataObj.per[i].toFixed(0) + '%</td>';
  });
  tableStr += '</tr></table>';
  div.innerHTML = tableStr;
 }

 divOptions() {
  const divSlider = new mySvg.Div(this.data.divOptions);
  divSlider.obj.innerHTML =
   '<div id="slideContainer"> <input type="range" min="2" max="4.0" step="0.1" value="3.5"  id="sliderX" /> <div id="sliderValueX">Point 1 x = 1.2 </div></div>';

  divSlider.obj.innerHTML +=
   '<div id="slideContainer"> <input type="range" min="0.5" max="5" step="0.1" value="1"  id="sliderY" /> <div id="sliderValueY">Point 1 y = 1 </div></div>';

  divSlider.obj.innerHTML +=
   '<div id="slideContainer"> <input type="range" min="1" max="40" step="1" value="3"  id="sliderN" /> <div id="sliderValueN">Number of Blades = 3 </div></div>';

  divSlider.obj.innerHTML +=
   '<div id="divBladeColor"><label for="bladeColor">Blade color: </label><input type="color" id="bladeColor" name="bladeColor" value="#ff0000"> </div>';

  divSlider.obj.innerHTML +=
   '<button type="button" id="submitBtn">Submit</button> ';

  divSlider.obj.innerHTML += '<div id="alertBox"></div>';

  return divSlider;
 }

 divMainSvg() {
  return new mySvg.Svg(this.data.divMainSvg);
 }

 grid() {
  return new mySvg.Grid(this.data.grid);
 }

 createDataObj() {
  const dataArr = this.data.data.split('\n').filter((n) => n);
  const dataObj = {};
  dataObj.key = []; // Key/item
  dataObj.val = []; // Value
  dataObj.per = []; // Percentage
  dataObj.sca = []; // Values scaled to max val = data.yMax
  dataObj.sum = 0; // Values sum
  dataObj.mix = 0; // Value min
  dataObj.max = 0; // Value max

  if (this.data.dataHasHeader) {
   dataObj.header = dataArr[0].split(',');
   dataArr.splice(0, 1);
   for (const val of dataArr) {
    const valArr = val.split(',');
    dataObj.key.push(valArr[0].trim());
    dataObj.val.push(parseFloat(valArr[1]));
   }
  } else dataObj.header = ['items', 'values'];

  dataObj.sum = dataObj.val.reduce((a, b) => a + b, 0); // Sum of all values
  dataObj.min = Math.min(...dataObj.val);
  dataObj.max = Math.max(...dataObj.val);
  dataObj.per = dataObj.val.map((x) => (x / dataObj.sum) * 100);
  dataObj.sca = dataObj.val.map((x) => x * (this.data.yMax / dataObj.max));

  // console.log(dataObj.val);
  // console.log(dataObj.sum, dataObj.min, dataObj.max);
  // console.log(dataObj.per);
  // console.log('sca = ' + dataObj.sca);

  return dataObj;
 }

 drawObject() {
  this.data.dataObj = this.createDataObj();
  this.obj.bar = [];
  this.obj.key = [];
  this.obj.val = [];
  this.obj.per = []; // Percentage
  const obj = this.createDataObj();

  const width = 0.6;
  const xxx = 1 - width / 2;

  for (let i = 0; i < obj.sca.length; i++) {
   const rect = this.scalePoints([i + xxx, 0, width, obj.sca[i]]);
   const dKey = this.scalePoints([i + 1, this.data.yMax]);
   const dVal = [dKey[0], rect[3]];
   const cent = obj.per[i].toFixed(0) + '%';
   this.obj.bar[i] = this.drawBar(rect, i, this.data.clr[i]);
   this.obj.key[i] = this.drawTextKey(dKey, obj.key[i], i, this.data.clr[i]);
   this.obj.val[i] = this.drawTextVal(dVal, obj.val[i], i, this.data.clr[i]);
   this.obj.per[i] = this.drawTextPer(dKey, cent, i, this.data.clr[i]);
  }
 } //drawObject

 drawBar(rect, id, clr) {
  const data = {};
  data.x = rect[0];
  data.y = rect[1];
  data.width = rect[2];
  data.height = rect[3];
  data.rx = '0';
  data.ry = '0';
  data.containerId = this.data.idSvg;
  data.id = data.containerId + '-bar-' + id;
  data.transform = this.transform();
  data.fill = clr;
  data.fillOpacity = 0.8;
  data.stroke = 'blue';
  data.strokeWidth = '0';
  data.class = 'bar';
  return new mySvg.Rectangle(data);
 }

 drawTextKey(xy, text, id, clr) {
  const data = {};
  data.x = xy[0] + this.data.grid.padding.left;
  data.y = xy[1] + 60;
  data.text = text;
  data.fontFamily = 'inherit';
  data.fontSize = '20';
  data.fontWeight = 'normal';
  data.containerId = this.data.divMainSvg.id;
  data.id = data.containerId + '-txt-' + id;
  // data.transform = this.transform();
  // data.transform = `rotate(20,${data.x},${data.y}) translate(20,-10)`;
  data.fill = clr;
  // data.fill = 'black';
  data.fillOpacity = 1;
  data.stroke = 'blue';
  data.strokeWidth = '0';
  data.class = '';
  return new mySvg.Text(data);
 }

 drawTextVal(xy, text, id, clr) {
  const data = {};
  data.x = xy[0] + this.data.grid.padding.left;
  data.y = this.data.height - xy[1] + this.data.grid.padding.top - 10;
  data.text = text;
  data.fontFamily = 'inherit';
  data.fontSize = '22';
  data.fontWeight = 'normal';
  data.containerId = this.data.divMainSvg.id;
  data.id = data.containerId + '-txt-' + id;
  // data.transform = this.transform();
  data.fill = clr;
  // data.fill = 'black';
  data.fillOpacity = 1;
  // data.stroke = 'black';
  data.stroke = clr;
  data.strokeWidth = '0';
  data.class = '';
  return new mySvg.Text(data);
 }

 drawTextPer(xy, text, id, clr) {
  const data = {};
  data.x = xy[0] + this.data.grid.padding.left;
  data.y = xy[1] + 10;
  data.text = text;
  data.fontFamily = 'inherit';
  data.fontSize = '20';
  data.fontWeight = 'normal';
  data.containerId = this.data.divMainSvg.id;
  data.id = data.containerId + '-txt-' + id;
  // data.transform = this.transform();
  // data.transform = `rotate(20,${data.x},${data.y}) translate(20,-10)`;
  // data.fill = clr;
  data.fill = 'white';
  data.fillOpacity = 1;
  data.stroke = 'white';
  data.strokeWidth = '0';
  data.class = '';
  return new mySvg.Text(data);
 }

 drawOptions() {
  const sliderX = document.getElementById('sliderX');
  const sliderY = document.getElementById('sliderY');
  const sliderN = document.getElementById('sliderN');
  const outputX = document.getElementById('sliderValueX');
  const outputY = document.getElementById('sliderValueY');
  const outputN = document.getElementById('sliderValueN');
  const colorIn = document.getElementById('bladeColor');
  const submitB = document.getElementById('submitBtn');
  const alertBx = document.getElementById('alertBox');

  colorIn.value = this.colorNameToHex(this.data.clrB);
  var valX = 3.2;
  sliderX.value = valX.toFixed(1);
  outputX.innerHTML = 'Point 1 x = ' + sliderX.value;

  var valY = 2;
  sliderY.value = valY.toFixed(1);
  outputY.innerHTML = 'Fan Speed = ' + (1 / sliderY.value).toFixed(2);

  var valN = this.data.numB;
  sliderN.value = valN.toFixed();
  outputN.innerHTML = 'Number of Blades = ' + sliderN.value;

  const vel = 3 + 's';
  const nnn = this.data.numB;
  let ang = 360 / nnn;
  document.documentElement.style.setProperty('--speed', vel);

  this.obj.blade = [];
  this.obj.screw = [];
  this.obj.joint = [];
  for (let i = 0; i < nnn; i++) {
   this.obj.joint[i] = this.joint(ang * i, i.toString());
   this.obj.screw[i] = this.screw(ang * i, i.toString());
   this.obj.blade[i] = this.blade(ang * i, i.toString());
  }
  this.obj.house01 = this.house01();
  this.obj.house02 = this.house02();

  const self = this;

  sliderX.oninput = function () {
   valX = parseFloat(this.value).toFixed(1);
   outputX.innerHTML = 'Point 1 x = ' + parseFloat(this.value).toFixed(1);
   self.data.valB = valX;
   for (let i = 0; i < self.data.numB; i++) {
    document.getElementById(self.obj.blade[i].id).remove();
    self.obj.blade[i] = self.blade(ang * i, i.toString());
   }
  };

  sliderY.oninput = function () {
   valY = parseFloat(this.value).toFixed(1);
   outputY.innerHTML = 'Fan Speed = ' + parseFloat(1 / this.value).toFixed(2);
   document.documentElement.style.setProperty('--speed', valY + 's');
  };

  sliderN.oninput = function () {
   valN = parseInt(this.value);
   outputN.innerHTML = 'Number of Blades = ' + this.value;
   for (let i = 0; i < self.data.numB; i++) {
    document.getElementById(self.obj.joint[i].id).remove();
    document.getElementById(self.obj.screw[i].id).remove();
    document.getElementById(self.obj.blade[i].id).remove();
   }
   self.data.numB = valN;
   ang = 360 / valN;
   for (let i = 0; i < self.data.numB; i++) {
    self.obj.joint[i] = self.joint(ang * i, i.toString());
    self.obj.screw[i] = self.screw(ang * i, i.toString());
    self.obj.blade[i] = self.blade(ang * i, i.toString());
   }
  };

  colorIn.oninput = function () {
   self.data.clrB = this.value;
   self.data.clrH = this.value;
   for (let i = 0; i < self.data.numB; i++) {
    document.getElementById(self.obj.blade[i].id).remove();
    self.obj.blade[i] = self.blade(ang * i, i.toString());
   }
  };

  submitB.onclick = () => {
   let clr = this.getKeyByValue(this.data.colors, colorIn.value);
   if (!clr) clr = colorIn.value;
   if (alertBx.style.display === 'none') {
    alertBx.style.display = 'block';
    alertBx.innerHTML = `
    <b>Data</b><br style="margin-bottom:10px">
    <table>
    <tr><td> Point 1 x     </td> <td>: ${sliderX.value} </td></tr>
    <tr><td> Blades Number </td> <td>: ${sliderN.value} </td></tr>
    <tr><td> Blade Color   </td> <td>: ${clr} </td></tr>
    <tr><td> Fan Speed </td> <td>: ${(1 / sliderY.value).toFixed(2)} </td></tr>
    </table>
    `;

    submitB.innerHTML = 'Cancel';
   } else {
    alertBx.style.display = 'none';
    submitB.innerHTML = 'Submit';
   }
  };
 }

 scalePoints(data) {
  const xxx = this.data.width / this.data.xMax;
  const yyy = this.data.height / this.data.yMax;
  const xOff = this.data.xOff;
  const yOff = this.data.yOff;
  return data.map((v, i) => (i % 2 ? (v + yOff) * yyy : (v + xOff) * xxx));
 }

 transform() {
  return 'matrix(1 0 0 -1 0 ' + this.data.height + ')';
 }

 transformRotate(angle) {
  // const origin = this.scalePoints([4, 4]);
  let str = 'matrix(1 0 0 -1 0 ' + this.data.height + ')';
  // str += 'translate(' + origin.slice().join(',') + ')';
  // str += 'rotate(' + angle + ')';
  return str;
 }

 getMoveString(data) {
  // M = [px, py];
  const scaled = this.scalePoints(data);
  return 'M' + scaled.slice().join(',');
 }

 getLineString(data) {
  // L = [px, py, ..., pnx, pny];
  const scaled = this.scalePoints(data);
  return 'L' + scaled.slice().join(',');
 }

 getArcsString(data) {
  // A = [rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x, y];
  const radius = data.slice(0, 2);
  const points = data.slice(data.length - 2, data.length);
  const rScale = this.scalePoints(radius);
  const pScale = this.scalePoints(points);
  const dScaled = data.slice();
  dScaled.splice(0, 2, rScale);
  dScaled.splice(data.length - 3, 2, pScale);
  return 'A' + dScaled.slice().join(',');
 }

 joint(angle, id) {
  const data = {};
  const move = [1, -0.1];
  const line = [0.5, -0.2, 0.5, 0.2, 1, 0.1];
  const arcs = [0.1, 0.1, 0, 0, 0, 1, -0.1];
  const moveS = this.scalePoints(move);
  const lineS = this.scalePoints(line);
  const arcsS = this.getArString(arcs);
  data.d = 'M' + moveS + 'L' + lineS + arcsS;
  data.containerId = this.data.idSvg;
  data.id = data.containerId + '-bracket-' + id;
  data.transform = this.transform(angle);
  data.fill = 'lime';
  data.fillOpacity = 0.5;
  data.stroke = 'green';
  data.strokeWidth = 2;
  return new mySvg.Path(data);
 }

 getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
 }
} //class
