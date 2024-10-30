// =============================================================================
// File Name : Fan.js
// Description   : JS Class to draw Ceiling Fan/Propeller using JS-SVG-Client
// -----------------------------------------------------------------------------
// Author: Amit Manohar Manthanwar
// Mailer: manthanwar@hotmail.com
// WebURL: https://manthanwar.github.io
// -----------------------------------------------------------------------------
// Copyright : (c) 2024 Amit Manohar Manthanwar
// License   : MIT License
// ----------------------------------------------------------------------------
// This program can be redistributed and/or modified under the terms
// of the MIT License. For details see the file license.txt
// =============================================================================
// Revision Log  | Author  | Description
// --------------+---------+----------------------------------------------------
// 29-Oct-2024   | AMM | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

import * as mySvg from '../../dist/svg.min.js';

export default class Fan {
 constructor(data) {
  this.data = this.init();
  this.merge(this.data, data);

  this.obj = {};
  this.obj.divMainBox = this.divMainBox();
  this.obj.divMainObj = this.divMainObj();
  this.obj.divOptions = this.divOptions();
  this.obj.divMainSvg = this.divMainSvg();

  if (this.data.gridOn) {
   this.obj.grid = this.grid();
   this.data.width = this.obj.grid.objSvg.width;
   this.data.height = this.obj.grid.objSvg.height;
   this.data.idSvg = this.data.grid.box.idSvg;
  } else {
   this.data.width = parseInt(this.obj.divMainObj.data.width) - 20;
   this.data.height = parseInt(this.obj.divMainObj.data.height) - 20;
   this.data.idSvg = this.data.divMainSvg.id;
  }

  this.data.xScale = this.data.width / this.data.xMax;
  this.data.yScale = this.data.height / this.data.yMax;

  this.drawObject();
 } //constructor

 init() {
  const data = {};
  data.xMax = 8; // x axis max
  data.yMax = 8; // y axis max
  data.xOff = 0; // x offset
  data.yOff = 0; // y offset
  data.numB = 3; // Number of Blades
  data.valB = 3.5; // blade curve 2 value
  data.clrB = 'pink'; // blade fill color

  data.divMainBox = {
   containerId: 'main',
   id: 'divMainBox',
   style:
    'border: 2px solid red; border-radius:10px; padding:10px;margin-top:40px;',
   width: '1140px',
   height: '424px',
   transform: 'scale(1.2)'
  };

  data.divMainObj = {
   containerId: data.divMainBox.id,
   id: data.divMainBox.id + '-divMainObj',
   style:
    'border: 2px solid green; border-radius:10px; padding:10px; margin-left:100px;',
   width: 400 + 'px',
   height: 400 + 'px',
   transform: 'scale(1)'
  };

  data.divOptions = {
   containerId: data.divMainBox.id,
   id: data.divMainBox.id + '-divOptions',
   style:
    'border: 2px solid blue; border-radius:10px; padding:20px; margin:20px 50px;',
   width: '300px',
   height: '300px',
   transform: 'scale(1)'
  };

  data.divMainSvg = {
   containerId: data.divMainObj.id,
   id: data.divMainObj.id + '-svgMain',
   width: '100%',
   height: '100%',
   viewBox: '0 0 100% 100% ',
   style: `background-color: rgba(0,200,0,0); border: 0px solid blue; padding:10px; box-sizing:border-box;`
  };

  data.gridOn = true;
  data.grid = {
   containerId: data.divMainSvg.id,
   minorNumX: 5,
   minorNumY: 5,
   majorNumX: 8,
   majorNumY: 8,
   titleOn: true,
   //  axisLabelOnX: true,
   //  axisLabelOnY: true,
   axisNumOnX: true,
   axisNumOnY: true,
   majorOnX: true,
   majorOnY: true,
   minorOnX: true,
   minorOnY: true,
   boxOn: false,
   axesOn: false
  };

  data.grid.box = {
   stroke: 'red',
   strokeWidth: 1,
   strokeOpacity: 1,
   fill: 'none',
   idSvg: data.divMainSvg + '-svg',
   idBox: data.divMainSvg + '-box'
  };

  data.grid.padding = {
   left: 36,
   right: 10,
   top: 20,
   bottom: 36
  };

  data.grid.title = {
   text: 'Ceiling Fan',
   x: '50%',
   y: '15',
   dx: '0',
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
   dx: '0',
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
   dx: '20',
   dy: '-85%',
   transform: 'rotate(-90, 350 200)',
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

 get plotTitle() {
  return this.data.grid.title.text;
 }
 set plotTitle(text) {
  this.data.grid.title.text = text;
  document.getElementById(this.data.divMainSvg.id).remove();
  this.obj.divMainSvg = this.divMainSvg();
  this.obj.grid = this.grid();
 }

 redraw() {}

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

  // divSlider.obj.innerHTML +=
  //  '<br style="margin-top:30px;"> <button type="button" id="submitBtn">Submit</button> ';

  // divSlider.obj.innerHTML += '<div id="alertBox"></div>';

  return divSlider;
 }

 divMainSvg() {
  return new mySvg.Svg(this.data.divMainSvg);
 }

 grid() {
  return new mySvg.Grid(this.data.grid);
 }

 drawObject() {
  const sliderX = document.getElementById('sliderX');
  const sliderY = document.getElementById('sliderY');
  const sliderN = document.getElementById('sliderN');
  const outputX = document.getElementById('sliderValueX');
  const outputY = document.getElementById('sliderValueY');
  const outputN = document.getElementById('sliderValueN');
  const colorIn = document.getElementById('bladeColor');

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
   for (let i = 0; i < self.data.numB; i++) {
    document.getElementById(self.obj.blade[i].id).remove();
    self.obj.blade[i] = self.blade(ang * i, i.toString());
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

 transform(angle) {
  const origin = this.scalePoints([4, 4]);
  let str = 'matrix(1 0 0 -1 0 ' + this.data.height + ')';
  str += 'translate(' + origin.slice().join(',') + ')';
  str += 'rotate(' + angle + ')';
  return str;
 }

 getArString(data) {
  // A = [rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x, y];
  const radius = data.slice(0, 2);
  const points = data.slice(data.length - 2, data.length);
  const rScale = this.scalePoints(radius);
  const pScale = this.scalePoints(points);
  const dScaled = data.slice();
  dScaled.splice(0, 2, rScale);
  dScaled.splice(data.length - 3, 2, pScale);
  return 'A' + dScaled.slice().join(', ');
 }

 blade(angle, id) {
  const data = {};
  const move = [1, -0.4];
  const cur1 = [0.6, -0.4, 0.6, 0.4, 1, 0.4];
  const line = [3.2, 0.3];
  // const cur2 = [3.5, 0.3, 3.5, -0.3, 3.2, -0.3];
  const cur2 = [this.data.valB, 0.3, this.data.valB, -0.3, 3.2, -0.3];
  const moveS = this.scalePoints(move);
  const cur1S = this.scalePoints(cur1);
  const lineS = this.scalePoints(line);
  const cur2S = this.scalePoints(cur2);
  data.d = 'M' + moveS + 'C' + cur1S + 'L' + lineS + 'C' + cur2S + 'Z';
  data.containerId = this.data.idSvg;
  data.id = data.containerId + '-blade-' + id;
  data.transform = this.transform(angle);
  data.fill = this.data.clrB;
  data.fillOpacity = 0.8;
  data.stroke = 'blue';
  data.strokeWidth = 2;
  return new mySvg.Path(data);
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

 screw(angle, id) {
  const data = {};
  const origin = this.scalePoints([4, 4]);
  const center = this.scalePoints([0.9, 0]);
  data.cx = center[0];
  data.cy = center[1];
  data.r = 0.06 * (this.data.width / this.data.xMax);
  data.id = data.containerId + '-screw-' + id;
  data.containerId = this.data.idSvg;
  data.transform = this.transform(angle);
  data.stroke = 'blue';
  data.strokeWidth = '0';
  data.fill = 'blue';
  data.fillOpacity = '0.8';
  data.strokeOpacity = '1';
  return new mySvg.Circle(data);
 }

 house01() {
  const data = {};
  const center = this.scalePoints([0, 0]);
  data.cx = center[0];
  data.cy = center[1];
  data.r = 0.6 * (this.data.width / this.data.xMax);
  data.id = data.containerId + '-house02';
  data.containerId = this.data.idSvg;
  data.transform = this.transform(0);
  data.stroke = 'blue';
  data.strokeWidth = '0';
  data.fill = 'red';
  data.fillOpacity = '1';
  data.strokeOpacity = '1';
  return new mySvg.Circle(data);
 }

 house02() {
  const data = {};
  const center = this.scalePoints([0, 0]);
  data.cx = center[0];
  data.cy = center[1];
  data.r = 0.4 * (this.data.width / this.data.xMax);
  data.id = data.containerId + '-house02';
  data.containerId = this.data.idSvg;
  data.transform = this.transform(0);
  data.stroke = 'white';
  data.strokeWidth = 2;
  data.fill = 'pink';
  data.fillOpacity = '0.8';
  data.strokeOpacity = '1';
  return new mySvg.Circle(data);
 }
} //class
