// =============================================================================
// File Name  : GaugeParent.js
// Description: JS Class to draw Gauges using JS-SVG-Client
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
// 17-Nov-2024   | AMM | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================
import * as mySvg from './svg.min.js';
import Color from './Color.js';

export default class GaugeParent {
 constructor(data) {
  this.init(data);

  this.obj = {};
  this.obj.divMainBox = this.divMainBox();
  this.obj.divMainObj = this.divMainObj();
  this.obj.svgMainSvg = this.svgMainSvg();

  if (this.data.gridOn) {
   this.obj.grid = this.drawGrid();
   this.data.width = this.obj.grid.objSvg.width;
   this.data.height = this.obj.grid.objSvg.height;
   this.data.idSvg = this.data.grid.box.idSvg;
  } else {
   this.data.width = parseInt(this.obj.divMainObj.data.width);
   this.data.height = parseInt(this.obj.divMainObj.data.height);
   this.data.idSvg = this.data.svgMainSvg.id;
  }

  // this.obj.divOptions = this.divOptions();
  // this.drawObject();
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
   width: 150 + 20 * 2 + 4 * 2 + 'px',
   height: 75 + 20 * 2 + 4 * 2 + 'px',
   transform: 'scale(1)'
  };

  this.data.divMainObj = {
   containerId: this.data.divMainBox.id,
   id: this.data.divMainBox.id + '-divMainObj',
   style: 'border: 2px solid green; padding:10px; margin: 0px;',
   width: 150 + 20 + 4 + 'px',
   height: 75 + 20 + 4 + 'px'
  };

  this.data.svgMainSvg = {
   containerId: this.data.divMainObj.id,
   id: this.data.divMainObj.id + '-svgMain',
   width: '100%',
   height: '100%',
   style: `border: 2px solid blue; background-color: rgba(0,200,0,0); padding:10px; box-sizing:border-box;`
  };

  this.data.gridOn = false;
  this.data.grid = {
   containerId: this.data.svgMainSvg.id,
   minorNumX: 5,
   minorNumY: 5,
   majorNumX: 4,
   majorNumY: 2
   // titleOn: false,
   // axisLabelOnX: false,
   // axisLabelOnY: false,
   // axisNumOnX: true,
   // axisNumOnY: true,
   // majorOnX: true,
   // majorOnY: true,
   // minorOnX: true,
   // minorOnY: true,
   // boxOn: false,
   // axesOn: false
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
   idSvg: this.data.svgMainSvg.id + '-svg',
   idBox: this.data.svgMainSvg.id + '-box'
  };

  this.data.grid.padding = {
   // left: 40,
   // right: 30,
   // top: 30,
   // bottom: 50
   left: 0,
   right: 0,
   top: 0,
   bottom: 0
  };

  this.data.grid.title = {
   text: 'Gauge',
   x: '50%',
   y: '15',
   dx: '10',
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
   dx: '10',
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

  // this.data.divMainKey = {
  //  containerId: this.data.divMainBox.id,
  //  id: this.data.divMainBox.id + '-divMainKey',
  //  style: 'border: 0px solid cyan; margin: 0px; padding:10px;',
  //  width: 355 + 'px',
  //  height: 250 + 'px',
  //  transform: 'scale(1)'
  // };

  // this.data.divOptions = {
  //  containerId: this.data.divMainBox.id,
  //  id: this.data.divMainBox.id + '-divOptions',
  //  style: 'border: 2px solid blue; padding:20px; margin:20px 50px;',
  //  width: '300px',
  //  height: '340px',
  //  transform: 'scale(1)'
  // };

  // this.data.option = {
  //  xOff: 0, // x offset
  //  yOff: 0, // y offset,
  //  //  isAscending: false,
  //  hasHeader: true,
  //  markerOn: true,
  //  marker: {
  //   size: Array(3).fill(6),
  //   fill: ['pink', 'lime', 'cyan'],
  //   stroke: ['blue', 'black', 'red'],
  //   strokeWidth: [2, 4, 4],
  //   strokeOpacity: [1, 1, 1],
  //   fillOpacity: [0.5, 0.5, 0.5]
  //  }
  // };

  this.merge(this.data, data);
  // this.data.dataObj = this.createDataObj();
  // this.createColors();
 } //init

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

 svgMainSvg() {
  return new mySvg.Svg(this.data.svgMainSvg);
 }

 clipPath() {
  this.obj.svgMainSvg.obj.innerHTML += `
  <defs>
  <clipPath id='cut-bottom'>
  <rect x='0' y='0' width='100%' height='50%' />
  </clipPath>
  </defs>
  `;
  // this.obj.svgMainSvg.obj.innerHTML += `
  // <rect x='0' y='0' width='100%' height='80%' fill='cyan' />
  // `;
  // console.log(this.obj.svgMainSvg.obj);
 }

 createColors() {
  if (!this.data.colors) {
   const color = new Color();
   this.data.colors = color.getDistinct(this.data.dataObj.matrix[0].length);
  }
 }

 divMainKey() {
  return new mySvg.Div(this.data.divMainKey);
 }

 drawLegend() {
  let colors = this.data.option.line.stroke;
  if (!this.data.option.line.stroke) colors = this.data.colors;
  this.obj.divMainKey = this.divMainKey();
  const div = document.getElementById(this.data.divMainKey.id);
  const data = this.data.dataObj.key;
  let tableStr = '<b>Key</b><table id="legend-key">';
  // tableStr += '<table id="legend-key">';
  // tableStr += '<th><td>' + 'sport' + '</td><td>' + 'val' + '</th>';
  data.forEach((v, i) => {
   const cls = 'class = "legend"';
   const sty = 'style="background-color:' + colors[i] + '"';
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

 drawGrid() {
  return new mySvg.Grid(this.data.grid);
 }

 drawObject() {
  // this.clipPath();
  // this.drawGaugeSkirt();
  // this.drawDataPoints();
  // this.drawLabelAxisX();
  // this.drawLabelAxisY();
  // this.drawLineSafety();
 } //drawObject

 drawGaugeSkirt() {
  const cxy = this.scalePoints([2, 0]);
  const rrr = cxy[0];
  const iii = 1;
  const sty = {
   fill: this.data.gaugeSkirt.fill,
   fillOpacity: this.data.gaugeSkirt.fillOpacity,
   stroke: this.data.gaugeSkirt.stroke,
   strokeWidth: this.data.gaugeSkirt.strokeWidth,
   strokeOpacity: this.data.gaugeSkirt.strokeOpacity,
   strokeDasharray: this.data.gaugeSkirt.strokeDasharray
  };
  this.obj.gaugeSkirt = this.drawCircle(cxy, rrr, iii, sty);
 }

 drawDataPoints() {
  const noLines = this.data.dataObj.key.length;
  const noMarks = this.data.dataObj.matrix[0].length;
  const sep = this.data.dataObj.dsp;

  this.obj.marker = [...Array(noLines)].map((_) => Array(noMarks));
  this.obj.line = [];

  for (let i = 0; i < noLines; i++) {
   const style = {
    fill: this.data.option.marker.fill[i],
    fillOpacity: this.data.option.marker.fillOpacity[i],
    stroke: this.data.option.marker.stroke[i],
    strokeWidth: this.data.option.marker.strokeWidth[i],
    strokeOpacity: this.data.option.marker.strokeOpacity[i]
   };

   let objX = this.data.dataObj.matrixScaled[0];
   let objY = this.data.dataObj.matrixScaled[i + 1];
   let jarO = this.data.dataObj.jar;

   const keep = [];
   for (let i = 0; i < noMarks; i++) if (objY[i]) keep.push(i);

   objX = keep.map((v) => objX[v]);
   objY = keep.map((v) => objY[v]);
   jarO = keep.map((v) => jarO[v]);

   const ptA = [];
   const rrr = this.data.option.marker.size[i];
   const div = this.createDivEventMouseOver();

   for (let j = 0; j < objY.length; j++) {
    const pxy = this.scalePoints([objX[j], objY[j]]);
    ptA.push(pxy);

    if (this.data.option.markerOn) {
     this.obj.marker[i][j] = this.drawCircle(pxy, rrr, j, style);

     const date = jarO[j].yyyy + sep + jarO[j].mm + sep + jarO[j].dd;
     const yVal = jarO[j][this.data.dataObj.head[1]];

     // <h4 style="margin:0">Values</h4>
     // const str = `<table><tr><td>x:</td><td>${matX[j].toFixed(1)}</td></tr>
     const str = `<table><tr><td>x:</td><td>${date}</td></tr>
     <tr><td>y:</td> <td>${yVal.toFixed(2)}</td></tr></table>`;
     this.eventMouseOver(div, this.obj.marker[i][j].obj, str, style.fill);
    }
   }

   const line = this.data.option.line;
   const styleL = {};
   styleL.fill = 'none';
   styleL.stroke = this.data.colors[i];
   if (line.stroke) styleL.stroke = line.stroke[i];
   if (line.strokeWidth) styleL.strokeWidth = line.strokeWidth[i];
   if (line.strokeOpacity) styleL.strokeOpacity = line.strokeOpacity[i];
   if (line.strokeDasharray) styleL.strokeDasharray = line.strokeDasharray[i];
   const ptS = ptA.join(',');
   this.obj.line[i] = this.drawPolyline(ptS, i, styleL);
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
  div.id = this.data.divMainBox.id + '-divShowValue';
  div.classList.add('divShowValue');
  document.body.appendChild(div);
  return div;
 }

 eventMouseOver(div, element, data, color) {
  element.onmouseover = (e) => {
   const left = e.pageX + 10 + 'px';
   const top = e.pageY + 10 + 'px';
   div.innerHTML = data;
   div.style.left = left;
   div.style.top = top;
   div.style.display = 'block';
   element.style.fill = 'red';
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
  data.strokeDasharray = style.strokeDasharray;
  data.class = 'marker';
  // data.clipPath = 'url(#cut-bottom)';
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
  data.y = xy[1] + this.data.height + this.data.grid.padding.top + 20;
  if (!text) text = ' ';
  data.text = text.toString();
  data.fontFamily = 'inherit';
  data.fontSize = '14';
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
  data.fontSize = '14';
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
