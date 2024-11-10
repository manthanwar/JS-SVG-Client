// =============================================================================
// File Name  : Bubble.js
// Description: JS Class to draw Bubble Chart using JS-SVG-Client
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

import * as mySvg from './svg.min.js';
// import * as mySvg from '../../../dist/svg.min.js';
import Color from './Color.js';

export default class Bubble {
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
   left: 50,
   right: 10,
   top: 30,
   bottom: 40
  };

  this.data.grid.title = {
   text: 'Bubble Chart',
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
  this.data.dataObj = this.createDataObj();
  this.createColors();
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
   this.data.colors = color.getDistinct(this.data.dataObj.xVal.length);
  }
 }

 /**
  * Linear Scaling using 2 point equation of line
  * xx = data value
  * x1 = data minimum
  * x2 = data maximum
  * y1 = grid minimum
  * y2 = grid maximum
  * yy = data scaled
  */
 linearScale(x, x1, x2, y1, y2) {
  return ((x - x1) * (y2 - y1)) / (x2 - x1) + y1;
 }

 linearScaleArray(dataArray, x1, x2, y1, y2) {
  return dataArray.map((x) => this.linearScale(x, x1, x2, y1, y2));
 }

 createDataObj() {
  const dataArr = this.data.csv.split('\n').filter((n) => n);
  const dataLen = dataArr.length;
  const hasHead = this.data.hasHeader;

  delete this.data.csv;

  const obj = {};
  obj.head = []; // data header row
  obj.xVal = []; // val = x column values
  obj.yVal = []; // Val = y column values
  obj.zVal = []; // Val = z column values
  obj.aVal = []; // Val = a column values
  obj.bVal = []; // Val = b column values
  obj.xSca = []; // x Values linearly scaled
  obj.ySca = []; // y Values linearly scaled
  obj.zSca = []; // z Values linearly scaled
  obj.sLim = [65, 50]; // safe limit [fat, sugar] intake in gram
  obj.sSca = []; // scaled safe limit [fat, sugar] intake in gram

  if (hasHead) {
   obj.head = dataArr[0].split(',').map((x) => x.trim());
   dataArr.splice(0, 1);
  } else obj.head = ['x', 'y', 'z', 'a', 'b'];

  for (const val of dataArr) {
   const valArr = val.split(',');
   obj.xVal.push(parseFloat(valArr[0]));
   obj.yVal.push(parseFloat(valArr[1]));
   obj.zVal.push(parseFloat(valArr[2]));
   obj.aVal.push(valArr[3].trim());
   obj.bVal.push(valArr[4].trim());
  }

  const xMinG = 1; // minimum of x grid
  const yMinG = 1; // minimum of y grid
  const xMaxG = this.data.grid.majorNumX - 1; // maximum x grid
  const yMaxG = this.data.grid.majorNumY - 1; // maximum of y grid
  const zMinB = this.data.bubbleMin; // minimum bubble size
  const zMaxB = this.data.bubbleMax; // maximum bubble size
  const xMin = Math.floor(Math.min(...obj.xVal));
  const xMax = Math.ceil(Math.max(...obj.xVal));
  const yMin = Math.floor(Math.min(...obj.yVal));
  const yMax = Math.ceil(Math.max(...obj.yVal));
  const zMin = Math.floor(Math.min(...obj.zVal));
  const zMax = Math.ceil(Math.max(...obj.zVal));
  const xDel = (xMax - xMin) / (xMaxG - 1);
  const yDel = (yMax - yMin) / (yMaxG - 1);
  const xDelN = Math.ceil(xDel);
  const xMaxN = xMin + xDelN * (xMaxG - 1);
  const yDelN = Math.ceil(yDel);
  const yMaxN = yMin + yDelN * (yMaxG - 1);

  const xLim = this.linearScale(obj.sLim[0], xMin, xMaxN, xMinG, xMaxG);
  const yLim = this.linearScale(obj.sLim[1], yMin, yMaxN, yMinG, yMaxG);

  obj.sSca = [xLim, yLim];
  obj.xSca = this.linearScaleArray(obj.xVal, xMin, xMaxN, xMinG, xMaxG);
  obj.ySca = this.linearScaleArray(obj.yVal, yMin, yMaxN, yMinG, yMaxG);
  obj.zSca = this.linearScaleArray(obj.zVal, zMin, zMax, zMinB, zMaxB);
  obj.xLab = new Array(xMaxG + 2).fill(0).map((x, i) => xMin + (i - 1) * xDelN);
  obj.yLab = new Array(yMaxG + 2).fill(0).map((x, i) => yMin + (i - 1) * yDelN);

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
  this.drawLineSafety();
  this.drawDataPoints();
  this.drawLabelAxisX();
  this.drawLabelAxisY();
 } //drawObject

 drawDataPoints() {
  this.obj.circ = []; // data points drawn as circles
  const obj = this.data.dataObj;
  for (let i = 0; i < obj.xSca.length; i++) {
   const cxy = this.scalePoints([obj.xSca[i], obj.ySca[i]]);
   const rrr = obj.zSca[i];
   const dat = [obj.bVal[i], obj.xVal[i], obj.yVal[i], obj.zVal[i]];
   const str = `<h4 style="margin:0">${dat[0]}</h4><table >
  <tr><td>Fat intake:</td>   <td>${dat[1].toFixed(2)}</td><td>g</td></tr>
  <tr><td>Sugar intake:</td> <td>${dat[2].toFixed(2)}</td><td>g</td></tr>
  <tr><td>Obesity:</td>      <td>${dat[3].toFixed(2)}</td><td>%</td></tr>
  </table>`;
   this.obj.circ[i] = this.drawCircle(cxy, rrr, i, this.data.colors[i]);
   this.eventMouseOver(this.obj.circ[i].obj, str, this.data.colors[i]);
  }
 }

 drawLineSafety() {
  const dataObj = this.data.dataObj;
  const xMaxVal = this.data.grid.majorNumX;
  const yMaxVal = this.data.grid.majorNumY;
  const axisLim = this.scalePoints([0, 0, xMaxVal, yMaxVal]);
  const safeLim = this.scalePoints(dataObj.sSca);
  const xySafeX = [safeLim[0], axisLim[1], safeLim[0], axisLim[3]];
  const xySafeY = [axisLim[0], safeLim[1], axisLim[2], safeLim[1]];
  const txtPosX = this.scalePoints([1.25, 1.15]);
  const txtPosY = this.scalePoints([xMaxVal - 1.4, 2.2]);
  const moSafeX = `limit ${dataObj.sLim[0].toFixed()} grams`;
  const moSafeY = `limit ${dataObj.sLim[1].toFixed()} grams`;
  const txtStrX = 'Safe fat \u2B62';
  const txtStrY =
   '<span style="display:inline-block; transform: scale(-1, 1) translate(-2px,-8px);">\u2B5C</span>\u2500 Safe sugar';
  this.obj.safeLineX = this.drawLine(xySafeX, 'safeLineX', 'blue');
  this.obj.safeLineY = this.drawLine(xySafeY, 'safeLineY', 'red');
  this.obj.safeTextX = this.drawDivSafe(txtPosX, txtStrX, 'safeX', 'dimgray');
  this.obj.safeTextY = this.drawDivSafe(txtPosY, txtStrY, 'safeY', 'dimgray');
  this.eventMouseOver(this.obj.safeTextX, moSafeX, 'dimgray');
  this.eventMouseOver(this.obj.safeTextY, moSafeY, 'dimgray');
 }

 eventMouseOver(element, data, color) {
  const div = document.createElement('div');
  div.innerHTML = data;
  div.style.display = 'none';
  div.classList.add('divShowValue');
  document.body.appendChild(div);

  element.onmouseover = (e) => {
   // const left = e.clientX + 15 + 'px';
   // const top = e.clientY + 120 + 'px';
   const left = e.pageX + 10 + 'px';
   const top = e.pageY + 10 + 'px';
   div.style.left = left;
   div.style.top = top;
   div.style.display = 'block';
   element.style.fill = 'red';
   element.style.color = 'teal';
  };

  element.onmouseout = (e) => {
   div.style.display = 'none';
   element.style.fill = color;
   element.style.color = color;
  };
 }

 drawCircle(cxy, rrr, id, clr) {
  const data = {};
  data.containerId = this.data.idSvg;
  data.id = data.containerId + '-circle-' + id;
  data.transform = this.transform();
  data.cx = cxy[0];
  data.cy = cxy[1];
  data.r = rrr;
  data.stroke = 'blue';
  data.strokeWidth = 2;
  // data.fill = 'pink';
  data.fill = clr;
  data.fillOpacity = '0.5';
  data.strokeOpacity = '1';
  data.class = 'bar';
  const eye = new mySvg.Circle(data);
  return eye;
 }

 drawLine(xy, id, clr) {
  const data = {};
  data.containerId = this.data.idSvg;
  data.id = data.containerId + '-line-' + id;
  data.transform = this.transform();
  data.x1 = xy[0];
  data.y1 = xy[1];
  data.x2 = xy[2];
  data.y2 = xy[3];
  data.stroke = clr;
  data.strokeWidth = 4;
  data.strokeOpacity = '1';
  data.strokeLinecap = 'round'; // butt (default) | round | square
  data.strokeDasharray = '0, 10';
  // data.strokeLinejoin = ''; // arcs| bevel|miter (default)|miter-clip|round
  data.fill = 'none';
  data.fillOpacity = '1';
  data.class = '';
  return new mySvg.Line(data);
 }

 drawLabelAxisX() {
  this.obj.xLab = []; // x axis labels
  this.data.dataObj.xLab.forEach((val, idx) => {
   this.obj.xLab[idx] = this.drawTextLabX(this.scalePoints([idx, 0]), val, idx);
  });
 }

 drawLabelAxisY() {
  this.obj.yLab = []; // y axis labels
  for (let i = this.data.grid.majorNumY; i > -1; i--) {
   const yVal = this.data.dataObj.yLab[i];
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
  data.x = xy[0] + 35;
  data.y = xy[1] - this.data.yLabOff + 6;
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

 drawDivSafe(xy, text, id, clr) {
  const div = document.createElement('div');
  this.obj.divMainObj.obj.appendChild(div);
  div.id = this.data.divMainObj.id + '-div-txt-' + id;
  div.style.color = clr;
  div.style.textAlign = 'center';
  div.style.position = 'absolute';
  div.style.left = xy[0] + 'px';
  div.style.top = this.data.height + this.data.grid.padding.top - xy[1] + 'px';
  div.innerHTML = text;
  return div;
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
