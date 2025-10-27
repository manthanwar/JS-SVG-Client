// =============================================================================
// File Name  : Line.js
// Description: JS Class to draw Line Chart using JS-SVG-Client
// -----------------------------------------------------------------------------
// Author     : Amit Manohar Manthanwar
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
// 07-Nov-2024   | AMM | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================
import * as mySvg from './svg.min.js';
import Color from './Color.js';

export default class Line {
 constructor(data) {
  this.containerId = data.containerId;
  this.title = data.title;
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
  this.drawLegend();
 } //constructor

 init(data) {
  this.data = {};
  // this.data.xMax = 9; // grid x axis max
  // this.data.yMax = 6; // grid y axis max
  this.data.xOff = 0; // x offset
  this.data.yOff = 0; // y offset

  this.data.divMainBox = {
   // containerId: 'main',
   // id: 'divMainBox',
   containerId: this.containerId,
   id: this.containerId + '-divMainBox',
   style: `border: 0px solid red; padding:10px 10px;margin-top:0px;
   box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;`,
   width: 1520 + 'px',
   height: 420 + 'px',
   height: 520 + 'px',
   transform: 'scale(1)'
  };

  this.data.divMainObj = {
   containerId: this.data.divMainBox.id,
   id: this.data.divMainBox.id + '-divMainObj',
   style: `border: 0px solid green; margin: 0 20px; padding:10px;`,
   width: 800 + 'px',
   height: 400 + 'px',
   width: 1000 + 'px',
   height: 500 + 'px',
   transform: 'scale(1)'
  };

  this.data.divMainSvg = {
   containerId: this.data.divMainObj.id,
   id: this.data.divMainObj.id + '-svgMain',
   width: '100%',
   height: '100%',
   // viewBox: '0 0 100% 100% ',
   style: `border: 0px solid blue; background-color: rgba(0,200,0,0); padding:10px; box-sizing:border-box;`
  };

  this.data.divMainKey = {
   containerId: this.data.divMainBox.id,
   id: this.data.divMainBox.id + '-divMainKey',
   style: 'border: 0px solid cyan; margin: 0px; padding:10px;',
   width: 355 + 'px',
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
   left: 60,
   right: 30,
   top: 10,
   bottom: 45
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

  this.data.option = {
   xOff: 0, // x offset
   yOff: 0, // y offset,
   hasHeader: true,
   markerOn: true,
   marker: {
    size: Array(3).fill(6),
    fill: ['pink', 'lime', 'cyan'],
    stroke: ['blue', 'black', 'red'],
    strokeWidth: [2, 4, 4],
    strokeOpacity: [1, 1, 1],
    fillOpacity: [0.5, 0.5, 0.5]
   }
  };

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
   this.data.colors = color.getDistinct(this.data.dataObj.matrix[0].length);
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

 createDataObjO() {
  const dataArr = this.data.csv.split('\n').filter((n) => n);
  const dataLen = dataArr.length;
  const hasHead = this.data.option.hasHeader;

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

 createDataObj() {
  const dArr = this.data.csv.split('\n').filter((n) => n);
  delete this.data.csv;

  const obj = {};

  if (this.data.option.hasHeader) {
   obj.head = dArr[0].split(',').map((x) => x.trim());
   dArr.splice(0, 1);
  } else obj.head = dArr[0].split(',').map((v, i) => 'Column ' + i);

  obj.key = obj.head.slice(1, obj.head.length);

  const rows = dArr.length;
  const cols = dArr[0].split(',').length;
  // obj.matrix = new Array(cols).fill(0).map(() => new Array(rows).fill(0));
  // obj.matrix = [...Array(cols)].map((_) => Array(rows));
  obj.matrix = [...Array(cols)].map((_) => Array(rows).fill(0));
  obj.matrixScaled = [...Array(cols)].map((_) => Array(rows).fill(0));

  for (const ix in dArr) {
   const vxArr = dArr[ix].split(',');
   for (const iy in vxArr) obj.matrix[iy][ix] = parseFloat(vxArr[iy]);
  }

  const xGin = 0; // minimum of x grid
  const yGin = 0; // minimum of y grid
  const xGax = this.data.grid.majorNumX; // maximum x grid
  const yGax = this.data.grid.majorNumY; // maximum of y grid

  obj.vMin = []; // value minimum
  obj.vMax = []; // value maximum
  const vDel = []; // value delta
  const vNel = []; // value delta new = vDelN
  const vNax = []; // value max new = vMaxN

  for (const row of obj.matrix) {
   obj.vMin.push(Math.floor(Math.min(...row)));
   obj.vMax.push(Math.ceil(Math.max(...row)));
  }
  if (!this.data.option.axisMin) this.data.option.axisMin = obj.vMin;
  if (!this.data.option.axisMax) this.data.option.axisMax = obj.vMax;

  let xAxisMin = obj.vMin[0];
  let xAxisMax = obj.vMax[0];
  let yAxisMin = Math.min(...obj.vMin.slice(1, obj.vMin.length));
  let yAxisMax = Math.max(...obj.vMax.slice(1, obj.vMax.length));

  if (this.data.option.axisLimit) {
   xAxisMin = this.data.option.axisLimit[0];
   xAxisMax = this.data.option.axisLimit[1];
   yAxisMin = this.data.option.axisLimit[2];
   yAxisMax = this.data.option.axisLimit[3];
  }

  const dx = (xAxisMax - xAxisMin) / xGax;
  const dy = (yAxisMax - yAxisMin) / yGax;

  obj.xLab = [...Array(xGax + 1)].map((_, i) => (xAxisMin + i * dx).toFixed(1));
  obj.yLab = [...Array(yGax + 1)].map((_, i) => (yAxisMin + i * dy).toFixed(1));

  obj.matrixScaled[0] = this.linearScaleArray(
   obj.matrix[0],
   xAxisMin,
   xAxisMax,
   xGin,
   xGax
  );

  for (let i = 1; i < obj.vMin.length; i++) {
   obj.matrixScaled[i] = this.linearScaleArray(
    obj.matrix[i],
    yAxisMin,
    yAxisMax,
    yGin,
    yGax
   );
  }

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
  let tableStr = '<b>Key</b><table id="legend-key">';
  tableStr += '<table id="legend-key">';
  // tableStr += '<th><td>' + 'sport' + '</td><td>' + 'val' + '</th>';
  data.forEach((v, i) => {
   const cls = 'class = "legend"';
   const sty = 'style="background-color:' + this.data.colors[i] + '"';
   const div = '<div ' + cls + ' ' + sty + '></div>';
   tableStr += '<tr><td>' + div + '</td><td>' + v + '</td>';
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
  if (this.data.option.xAxisLabelOn) this.drawLabelAxisX();
  if (this.data.option.yAxisLabelOn) this.drawLabelAxisY();
  // this.drawLineSafety();
 } //drawObject

 drawDataPoints() {
  const noLines = this.data.dataObj.matrix.length - 1;
  const noMarks = this.data.dataObj.matrix[0].length;

  this.obj.marker = [...Array(noLines)].map((_) => Array(noMarks));
  this.obj.line = [];

  for (let i = 0; i < this.data.dataObj.matrix.length - 1; i++) {
   const style = {
    fill: this.data.option.marker.fill[i],
    fillOpacity: this.data.option.marker.fillOpacity[i],
    stroke: this.data.option.marker.stroke[i],
    strokeWidth: this.data.option.marker.strokeWidth[i],
    strokeOpacity: this.data.option.marker.strokeOpacity[i]
   };

   const matX = this.data.dataObj.matrix[0];
   const matY = this.data.dataObj.matrix[i + 1];

   const objX = this.data.dataObj.matrixScaled[0];
   const objY = this.data.dataObj.matrixScaled[i + 1];

   const ptA = [];
   const rrr = this.data.option.marker.size[i];
   const div = this.createDivEventMouseOver();

   for (let j = 0; j < objY.length; j++) {
    const pxy = this.scalePoints([objX[j], objY[j]]);
    ptA.push(pxy);

    if (this.data.option.markerOn) {
     this.obj.marker[i][j] = this.drawCircle(pxy, rrr, i, style);

     // <h4 style="margin:0">Values</h4>
     const str = `<table><tr><td>x:</td>   <td>${matX[j].toFixed(1)}</td></tr>
     <tr><td>y:</td> <td>${matY[j].toFixed(1)}</td></tr></table>`;
     this.eventMouseOver(div, this.obj.marker[i][j].obj, str, style.fill);
    }
   }

   const styleLine = {};
   // styleLine.fill = this.data.option.line.fill[i];
   styleLine.fill = 'none';
   styleLine.stroke = this.data.option.line.stroke[i];
   styleLine.strokeWidth = this.data.option.line.strokeWidth[i];
   styleLine.strokeOpacity = this.data.option.line.strokeOpacity[i];
   styleLine.strokeDasharray = this.data.option.line.strokeDasharray[i];

   const ptS = ptA.join(',');
   this.obj.line[i] = this.drawPolyline(ptS, i, styleLine);
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

 createDivEventMouseOver() {
  const div = document.createElement('div');
  div.innerHTML = '';
  div.style.display = 'none';
  // div.id = 'divShowValue';
  div.classList.add('divShowValue');
  document.body.appendChild(div);
  return div;
 }

 eventMouseOver(div, element, data, color) {
  div.innerHTML = data;
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

 drawCircle(cxy, rrr, id, style) {
  const data = {};
  data.containerId = this.data.idSvg;
  data.id = data.containerId + '-circle-' + id;
  data.transform = this.transform();
  data.cx = cxy[0];
  data.cy = cxy[1];
  data.r = rrr;
  data.fill = style.fill;
  data.fillOpacity = style.fillOpacity;
  data.stroke = style.stroke;
  data.strokeWidth = style.strokeWidth;
  data.strokeOpacity = style.strokeOpacity;
  data.class = 'marker';
  return new mySvg.Circle(data);
 }

 drawPolyline(points, id, style) {
  const data = {};
  data.containerId = this.data.idSvg;
  data.id = data.containerId + '-line-' + id;
  data.transform = this.transform();
  data.points = points;
  data.fill = style.fill;
  data.fillOpacity = style.fillOpacity;
  data.stroke = style.stroke;
  data.strokeWidth = style.strokeWidth;
  data.strokeOpacity = style.strokeOpacity;
  data.strokeDasharray = style.strokeDasharray;
  data.class = 'line';
  return new mySvg.Polyline(data);
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
  this.data.dataObj.xLab.forEach((v, i) => {
   this.obj.xLab[i] = this.drawTextLabX(this.scalePoints([i, 0]), v, i);
  });
 }

 drawLabelAxisY() {
  this.obj.yLab = []; // y axis labels
  for (let i = this.data.grid.majorNumY; i > -1; i--) {
   const yVal = this.data.dataObj.yLab[i];
   const data = this.scalePoints([0, this.data.grid.majorNumY - i]);
   this.obj.yLab[i] = this.drawTextLabY(data, yVal, i);
  }
 }

 // text label x axis
 drawTextLabX(xy, text, id) {
  const data = {};
  data.x = xy[0] + +this.data.grid.padding.left;
  data.y = xy[1] + this.data.height + this.data.grid.padding.top + 16;
  data.text = text.toString();
  data.fontFamily = 'inherit';
  data.fontSize = '16';
  data.fontWeight = 'normal';
  data.containerId = this.data.divMainSvg.id;
  data.id = data.containerId + '-txt-axisLabelX-' + id;
  data.fill = 'gray';
  data.fillOpacity = 1;
  data.stroke = 'none';
  data.strokeWidth = '0';
  data.class = '';
  return new mySvg.Text(data);
 }

 // text label y axis
 drawTextLabY(xy, text, id) {
  const data = {};
  data.x = xy[0] + this.data.grid.padding.left - 20;
  data.y = xy[1] + this.data.grid.padding.top + 6;
  data.text = text.toString();
  data.fontFamily = 'inherit';
  data.fontSize = '16';
  data.fontWeight = 'normal';
  data.containerId = this.data.divMainSvg.id;
  data.id = data.containerId + '-txt-axisLabelY-' + id;
  data.fill = 'gray';
  data.fillOpacity = '1';
  data.stroke = 'none';
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

// module.exports = Line;

// export default
