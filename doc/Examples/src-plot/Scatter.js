// =============================================================================
// File Name  : Scatter.js
// Description: JS Class to draw Scatter Chart using JS-SVG-Client
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
// 04-Nov-2024   | AMM | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

import * as mySvg from '../../../dist/svg.min.js';
import Color from './Color.js';

export default class Scatter {
 constructor(data) {
  this.init(data);

  this.obj = {};
  this.obj.divMainBox = this.divMainBox();
  this.obj.divMainObj = this.divMainObj();
  this.obj.divMainSvg = this.divMainSvg();
  // this.obj.divOptions = this.divOptions();

  if (this.data.gridOn) {
   this.obj.grid = this.drawGrid();
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

 init(data) {
  this.data = {};
  // this.data.xMax = 9; // grid x axis max
  // this.data.yMax = 6; // grid y axis max
  this.data.xOff = 0; // x offset
  this.data.yOff = 0; // y offset

  this.data.divMainBox = {
   containerId: 'main',
   id: 'divMainBox',
   style: 'border: 2px solid red; padding:10px 10px;margin-top:0px;',
   width: 1520 + 'px',
   height: 420 + 'px',
   transform: 'scale(1)'
  };

  this.data.divMainObj = {
   containerId: this.data.divMainBox.id,
   id: this.data.divMainBox.id + '-divMainObj',
   style: 'border: 2px solid green; margin: 0 20px; padding:10px;',
   width: 800 + 'px',
   height: 400 + 'px',
   transform: 'scale(1)'
  };

  this.data.divMainSvg = {
   containerId: this.data.divMainObj.id,
   id: this.data.divMainObj.id + '-svgMain',
   width: '100%',
   height: '100%',
   viewBox: '0 0 100% 100% ',
   style: `border: 2px solid blue; background-color: rgba(0,200,0,0); padding:10px; box-sizing:border-box;`
  };

  this.data.divMainKey = {
   containerId: this.data.divMainBox.id,
   id: this.data.divMainBox.id + '-divMainKey',
   style: 'border: 0px solid cyan; margin: 0px; padding:10px;',
   width: 200 + 'px',
   height: 250 + 'px',
   transform: 'scale(1)'
  };

  this.data.divOptions = {
   containerId: this.data.divMainBox.id,
   id: this.data.divMainBox.id + '-divOptions',
   style: 'border: 2px solid blue; padding:20px; margin:20px 50px;',
   width: '300px',
   height: '340px',
   transform: 'scale(1)'
  };

  this.data.gridOn = true;
  this.data.grid = {
   containerId: this.data.divMainSvg.id,
   minorNumX: 5,
   minorNumY: 5,
   majorNumX: 9,
   majorNumY: 6,
   titleOn: true,
   axisLabelOnX: true,
   axisLabelOnY: true,
   // axisNumOnX: true,
   // axisNumOnY: true,
   majorOnX: true,
   majorOnY: true,
   minorOnX: true,
   minorOnY: true,
   boxOn: false,
   axesOn: false
  };

  this.data.grid.minor = {
   stroke: 'gray',
   strokeWidth: '0.5',
   strokeOpacity: '1',
   strokeDasharray: '1 2'
  };

  this.data.grid.major = {
   stroke: 'gray',
   strokeWidth: '0.5'
  };

  this.data.grid.box = {
   stroke: 'red',
   strokeWidth: 1,
   strokeOpacity: 1,
   fill: 'none',
   idSvg: this.data.divMainSvg.id + '-svg',
   idBox: this.data.divMainSvg.id + '-box'
  };

  this.data.grid.padding = {
   left: 40,
   right: 10,
   top: 30,
   bottom: 40
  };

  this.data.grid.title = {
   text: 'Scatter Plot',
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

  this.data.grid.axisLabelX = {
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

  this.data.grid.axisLabelY = {
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

  this.data.hasHeader = true;
  this.merge(this.data, data);
  this.createColors();
  this.data.dataObj = this.createDataObj();
 } //init

 merge(current, updates) {
  for (const key of Object.keys(updates)) {
   if (!current.hasOwnProperty(key) || typeof updates[key] !== 'object')
    current[key] = updates[key];
   else this.merge(current[key], updates[key]);
  }
  return current;
 } //merge

 createColors() {
  if (!this.data.colors) {
   const color = new Color();
   this.data.colors = color.getDistinct(this.data.grid.majorNumX);
  }
 }

 createDataObj() {
  const dataArr = this.data.csv.split('\n').filter((n) => n);
  const dataLen = dataArr.length;
  const hasHead = this.data.hasHeader;

  delete this.data.csv;

  const obj = {};
  obj.head = []; // data header row
  obj.xVal = []; // Key = x axis values
  obj.yVal = []; // Val = y axis values
  obj.xSca = []; // Values scaled to max val of grid x
  obj.ySca = []; // Values scaled to max val of grid y
  obj.xPer = []; // Percentage values of given data x
  obj.yPer = []; // Percentage values of given data y
  obj.xMix = 0; // minimum value of given data x
  obj.yMix = 0; // minimum value of given data y
  obj.xMax = 0; // maximum value of given data x
  obj.xMax = 0; // maximum value of given data y
  obj.xSum = 0; // sum of values of given data x
  obj.ySum = 0; // sum of values of given data y
  obj.rows = 0; // number of rows of data
  obj.cols = 0; // number of columns of data
  obj.xFac = 0; // x axis scaling factor
  obj.yFac = 0; // y axis scaling factor

  if (hasHead) {
   obj.head = dataArr[0].split(',');
   dataArr.splice(0, 1);
  } else obj.head = ['items', 'values'];

  for (const val of dataArr) {
   const valArr = val.split(',');
   obj.xVal.push(parseFloat(valArr[0]));
   obj.yVal.push(parseFloat(valArr[1]));
  }

  obj.rows = obj.xVal.length;
  obj.cols = obj.head.length;
  obj.xMin = Math.min(...obj.xVal);
  obj.xMax = Math.max(...obj.xVal);
  obj.yMin = Math.min(...obj.yVal);
  obj.yMax = Math.max(...obj.yVal);
  obj.xFac = Math.ceil(obj.xMax / this.data.grid.majorNumX);
  obj.yFac = Math.ceil(obj.yMax / this.data.grid.majorNumY);
  obj.xSca = obj.xVal.map((x) => x / obj.xFac);
  obj.ySca = obj.yVal.map((y) => y / obj.yFac);
  // obj.xSum = obj.xVal.reduce((a, b) => a + b, 0);
  // obj.ySum = obj.yVal.reduce((a, b) => a + b, 0);
  // obj.xPer = obj.xVal.map((x) => (x / obj.xSum) * 100);
  // obj.yPer = obj.yVal.map((y) => (y / obj.ySum) * 100);
  return obj;
 }

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
   const sty = 'style="background-color:' + this.data.colors[i] + '"';
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

 drawGrid() {
  return new mySvg.Grid(this.data.grid);
 }

 drawObject() {
  this.drawDataPoints();
  this.drawLabelAxisX();
  this.drawLabelAxisY();
 } //drawObject

 drawDataPoints() {
  this.obj.circ = []; // data points drawn as circles
  const obj = this.data.dataObj;
  for (let i = 0; i < obj.xSca.length; i++) {
   const circ = this.scalePoints([obj.xSca[i], obj.ySca[i]]);
   this.obj.circ[i] = this.drawCircles(circ, i, this.data.colors[i]);
   this.showValueOnHover(this.obj.circ[i], [obj.xVal[i], obj.yVal[i]]);
  }
 }

 showValueOnHover(element, data) {
  const div = document.createElement('div');
  document.body.appendChild(div);
  div.style.display = 'none';
  div.id = 'divShowValue';

  div.innerHTML = 'x = ' + data[0].toFixed(2) + '<br>';
  div.innerHTML += 'y = ' + data[1].toFixed(2);

  element.obj.onmouseover = (e) => {
   const left = e.clientX + 10 + 'px';
   const top = e.clientY + 100 + 'px';
   div.style.left = left;
   div.style.top = top;
   div.style.display = 'block';
   element.obj.style.fill = 'red';
  };

  element.obj.onmouseout = (e) => {
   div.style.display = 'none';
   element.obj.style.fill = 'pink';
  };
 }

 drawCircles(cxy, id, clr) {
  const data = {};
  data.containerId = this.data.idSvg;
  data.id = data.containerId + '-circle-' + id;
  data.transform = this.transform();
  data.cx = cxy[0];
  data.cy = cxy[1];
  data.r = this.data.dotSize;
  data.stroke = 'blue';
  data.strokeWidth = 2;
  data.fill = 'pink';
  data.fillOpacity = '1';
  data.strokeOpacity = '1';
  data.class = 'bar';
  const eye = new mySvg.Circle(data);
  return eye;
 }

 drawLabelAxisX() {
  this.obj.xLab = []; // y axis labels
  for (let i = 0; i < this.data.grid.majorNumX + 1 - this.data.xOff; i++) {
   const xVal = (i * this.data.dataObj.xFac).toFixed();
   const data = this.scalePoints([i, 0]);
   this.obj.xLab[i] = this.drawTextLabX(data, xVal, i);
  }
 }

 drawLabelAxisY() {
  this.obj.yLab = []; // y axis labels
  for (let i = this.data.grid.majorNumY; i > -1; i--) {
   const yVal = (i * this.data.dataObj.yFac).toFixed();
   const data = this.scalePoints([0, this.data.grid.majorNumY + 1 - i]);
   this.obj.yLab[i] = this.drawTextLabY(data, yVal, i);
  }
 }

 // text label x axis
 drawTextLabX(xy, text, id) {
  const data = {};
  data.x = xy[0] + +this.data.grid.padding.left;
  data.y = xy[1] + this.data.height + this.data.grid.padding.top + 16;
  data.text = text;
  data.fontFamily = 'inherit';
  data.fontSize = '16';
  data.fontWeight = 'normal';
  data.containerId = this.data.divMainSvg.id;
  data.id = data.containerId + '-txt-axisLabelX-' + id;
  data.fill = 'gray';
  data.fillOpacity = 1;
  data.stroke = 'blue';
  data.strokeWidth = '0';
  data.class = '';
  return new mySvg.Text(data);
 }

 // text label y axis
 drawTextLabY(xy, text, id) {
  const data = {};
  data.x = xy[0] + 25;
  data.y = xy[1] - this.data.yLabOff - 12;
  data.text = text;
  data.fontFamily = 'inherit';
  data.fontSize = '16';
  data.fontWeight = 'normal';
  data.containerId = this.data.divMainSvg.id;
  data.id = data.containerId + '-txt-axisLabelY-' + id;
  data.fill = 'gray';
  data.fillOpacity = 1;
  data.stroke = 'blue';
  data.strokeWidth = '0';
  data.class = '';
  return new mySvg.Text(data);
 }

 drawOptions() {}

 scalePoints(array) {
  const xxx = this.data.width / this.data.grid.majorNumX;
  const yyy = this.data.height / this.data.grid.majorNumY;
  const xOff = this.data.xOff;
  const yOff = this.data.yOff;
  return array.map((v, i) => (i % 2 ? (v + yOff) * yyy : (v + xOff) * xxx));
 }

 transform() {
  return 'matrix(1 0 0 -1 0 ' + this.data.height + ')';
 }

 get plotTitle() {
  return this.data.grid.title.text;
 }

 set plotTitle(text) {
  this.data.grid.title.text = text;
  document.getElementById(this.data.divMainSvg.id).remove();
  this.obj.divMainSvg = this.divMainSvg();
  this.obj.grid = this.grid();
 }
} //class
