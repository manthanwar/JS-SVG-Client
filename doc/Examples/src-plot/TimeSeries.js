// =============================================================================
// File Name  : TimeSeries.js
// Description: JS Class to draw Time Series Plot using JS-SVG-Client
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
// 12-Nov-2024   | AMM | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================
import * as mySvg from './svg.min.js';
import Color from './Color.js';

export default class TimeSeries {
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
  this.drawLegend();
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
   // height: 520 + 'px',
   transform: 'scale(1)'
  };

  this.data.divMainObj = {
   containerId: this.data.divMainBox.id,
   id: this.data.divMainBox.id + '-divMainObj',
   style: 'border: 2px solid green; margin: 0 20px; padding:10px;',
   width: 800 + 'px',
   height: 400 + 'px',
   // width: 1000 + 'px',
   // height: 500 + 'px',
   transform: 'scale(1)'
  };

  this.data.divMainSvg = {
   containerId: this.data.divMainObj.id,
   id: this.data.divMainObj.id + '-svgMain',
   width: '100%',
   height: '100%',
   // vieBox: '0 0 100 100 ',
   style: `border: 2px solid blue; background-color: rgba(0,200,0,0); padding:10px; box-sizing:border-box;`
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
   //  isAscending: false,
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

 createDataObjOld() {
  const dArr = this.data.csv.split('\n').filter((n) => n);
  delete this.data.csv;

  const obj = {};

  if (this.data.option.hasHeader) {
   obj.head = dArr[0].split(',').map((x) => x.trim());
   dArr.splice(0, 1);
  } else obj.head = dArr[0].split(',').map((v, i) => 'Column ' + i);

  const rows = dArr.length;
  const plot = this.data.option.columnsToPlot;
  const cols = plot.length + 1;

  obj.key = [];
  for (const i of plot) obj.key.push(obj.head[i]);

  // obj.key = obj.head.slice(1, obj.head.length);
  // const cols = dArr[0].split(',').length;
  // obj.matrix = new Array(cols).fill(0).map(() => new Array(rows).fill(0));
  // obj.matrix = [...Array(cols)].map((_) => Array(rows));

  obj.timeSeriesX = [...Array(rows)].fill(0);
  obj.matrix = [...Array(cols)].map((_) => Array(rows).fill(0));
  obj.matrixScaled = [...Array(cols)].map((_) => Array(rows).fill(0));

  const dtf = this.data.option.dateFormat.split(/[\/-]/g);
  const dto = { mm: '', dd: '', yyyy: '' };
  obj.dateSeparator = this.data.option.dateFormat.replace(/[a-z]/g, '')[0];

  for (const ix in dArr) {
   let vxArr = dArr[ix].split(',');
   const dtArr = vxArr[0].split(/[\/\.-]/);
   for (let i = 0; i < 3; i++) dto[dtf[i]] = dtArr[i];
   obj.timeSeriesX[ix] = parseInt(dto.yyyy + dto.mm + dto.dd);
   // obj.matrix[cols][ix] = parseInt(dto.yyyy + dto.mm + dto.dd);
  }

  // console.log('aaa = ' + obj.timeSeriesX[0], obj.timeSeriesX[1]);
  // const dateDiff = obj.timeSeriesX[0] - obj.timeSeriesX[1];

  // console.log('ddd = ' + dateDiff);

  // if (this.data.option.orderAscending) {
  //  dArr.reverse();
  // }
  // console.log('hh = ' + obj.head);
  // console.log('aa = ' + dArr[0]);

  // for (const ix in dArr) {
  //  let vxArr = dArr[ix].split(',');
  //  const dtArr = vxArr[0].split(/[\/\.-]/);
  //  for (let i = 0; i < 3; i++) dto[dtf[i]] = dtArr[i];
  //  obj.matrix[0][ix] = parseInt(dto.yyyy + dto.mm + dto.dd);
  //  for (let i = 1; i < cols; i++)
  //   obj.matrix[i][ix] = parseFloat(vxArr[plot[i - 1]]);
  // }

  for (const ix in dArr) {
   let vxArr = dArr[ix].split(',');
   // const dtArr = vxArr[0].split(/[\/\.-]/);
   // for (let i = 0; i < 3; i++) dto[dtf[i]] = dtArr[i];
   obj.matrix[0][ix] = parseInt(ix);
   for (let i = 1; i < cols; i++)
    obj.matrix[i][ix] = parseFloat(vxArr[plot[i - 1]]);
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

  obj.axisLimit = [xAxisMin, xAxisMax, yAxisMin, yAxisMax];

  const dx = (xAxisMax - xAxisMin) / xGax;
  const dy = (yAxisMax - yAxisMin) / yGax;

  obj.xIdx = [...Array(xGax + 1)].map((_, i) => (xAxisMin + i * dx).toFixed());
  obj.yLab = [...Array(yGax + 1)].map((_, i) => (yAxisMin + i * dy).toFixed(1));
  obj.xLab = obj.xIdx.map((v) => obj.timeSeriesX[parseInt(v)]);

  console.log('xid = ' + obj.xIdx);
  console.log('xLb = ' + obj.xLab);
  console.log('xmin = ' + xAxisMin + ' xmax = ' + xAxisMax);
  if (xAxisMin < 0) {
   console.log('xIdxMin = ' + obj.xIdx[0]);
   console.log('xLabMin = ' + obj.xLab[1]);
   //  console.log('xTimMin = ' + obj.timeSeriesX[0]);
   //  const dtStr = obj.xLab[1].replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3');
   //  const ddd = new Date(dtStr);
   //  console.log('date = ' + ddd);
  }

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

 //  sortObjArrayByKey(objArray, key) {
 //   return objArray.sort(function (a, b) {
 //    return a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;
 //   });
 //  }

 sortObjArrayByKey(objArray, key) {
  return objArray.sort((a, b) => a[key] - b[key]);
 }

 sortObjArrayByTwoKeys(objArray, key1, key2) {
  return objArray.sort((a, b) => a[key1] - b[key1] || a[key2] - b[key2]);
 }

 /**
  * Sort by ascending order
  */
 sortObjArrayByThreeKeys(objArray, key1, key2, key3) {
  return objArray.sort(
   (a, b) => a[key1] - b[key1] || a[key2] - b[key2] || a[key3] - b[key3]
  );
 }

 /**
  * Sort by descending order
  */
 sortObjArrayByThreeKeysDesc(objArray, key1, key2, key3) {
  return objArray.sort(
   (a, b) => b[key1] - a[key1] || b[key2] - a[key2] || b[key3] - a[key3]
  );
 }

 dateRangeArray(startDate, endDate, steps = 1) {
  const dateArray = [];
  let currentDate = new Date(startDate);

  while (currentDate <= new Date(endDate)) {
   dateArray.push(new Date(currentDate));
   // Use UTC date to prevent problems with time zones and DST
   currentDate.setUTCDate(currentDate.getUTCDate() + steps);
  }

  return dateArray;
 }

 dateRangeObjArray(startDate, endDate, steps = 1) {
  const dateArray = [];
  let currentDate = new Date(startDate);

  while (currentDate <= new Date(endDate)) {
   const cy = currentDate.getUTCFullYear();
   const cm = currentDate.getUTCMonth() + 1;
   const cd = currentDate.getUTCDate();
   dateArray.push({ yyyy: parseInt(cy), mm: parseInt(cm), dd: parseInt(cd) });
   // Use UTC date to prevent problems with time zones and DST
   currentDate.setUTCDate(currentDate.getUTCDate() + steps);
  }

  return dateArray;
 }

 filterObjByObj(obj, objFilter) {
  return obj.filter((item) => {
   for (var key in objFilter) {
    if (item[key] === undefined || item[key] != objFilter[key]) return false;
   }
   return true;
  });
 }

 /**
  * filter the array of objects matching filter object
  * returns array
  */
 filterObjByDate(obj, f) {
  return obj.filter((o) => o.yyyy == f.yyyy && o.mm == f.mm && o.dd == f.dd);
 }

 getDateStr(dateStringGiven) {
  const dta = dateStringGiven.split(/[\/\.-]/g);
  const dtf = this.data.option.dateFormat.split(/[\/-]/g);
  const dto = {};
  for (let i = 0; i < 3; i++) dto[dtf[i]] = parseInt(dta[i]);
  return [dto.yyyy, dto.mm, dto.dd].join('-');
 }

 deepMergeJson(obj1, obj2) {
  const jsonString1 = JSON.stringify(obj1);
  const jsonString2 = JSON.stringify(obj2);

  const mergedJsonString = JSON.stringify({
   ...JSON.parse(jsonString1),
   ...JSON.parse(jsonString2)
  });
  const deepMergedObjJSON = JSON.parse(mergedJsonString);
  return deepMergedObjJSON;
 }

 deepMergeObjects(obj1, obj2) {
  for (let key in obj2) {
   if (obj2.hasOwnProperty(key)) {
    if (obj2[key] instanceof Object && obj1[key] instanceof Object) {
     obj1[key] = this.deepMerge(obj1[key], obj2[key]);
    } else {
     obj1[key] = obj2[key];
    }
   }
  }
  return obj1;
 }

 /**
  * Deep merge array of objects
  * returns object
  */
 deepMergeObjArr(source, target) {
  for (const obf of target) {
   const res = this.filterObjByDate(source, obf);
   if (res.length === 0) source.push(obf);
  }
  return source;
 }

 createDataObj() {
  const dArr = this.data.csv.split('\n').filter((n) => n);
  delete this.data.csv;

  const obj = {};

  if (this.data.option.hasHeader) {
   obj.head = dArr[0].split(',').map((x) => x.trim());
   dArr.splice(0, 1);
  } else obj.head = dArr[0].split(',').map((v, i) => 'column' + i);

  const nr = dArr.length; //number of rows
  const nc = dArr[0].split(',').length; //number of columns

  obj.jar = [...Array(nr)]; // json object array
  obj.dsp = this.data.option.dateFormat.replace(/[a-z]/g, '')[0]; // date Sep

  const dtf = this.data.option.dateFormat.split(/[\/-]/g);

  for (let ix = 0; ix < nr; ix++) {
   const vx = dArr[ix].split(',');
   const dt = vx[0].split(/[\/\.-]/g);
   const dto = {};
   for (let id = 0; id < 3; id++) dto[dtf[id]] = parseInt(dt[id]);
   obj.jar[ix] = dto;
   //  obj.jar[ix].date = new Date(dto.yyyy, dto.mm, dto.dd);
   for (let y = 1; y < nc; y++) obj.jar[ix][obj.head[y]] = parseFloat(vx[y]);
  }

  obj.jar = this.sortObjArrayByThreeKeys(obj.jar, 'yyyy', 'mm', 'dd');

  const xAxisLimit = this.data.option.xAxisLimit;
  const plotHeader = this.data.option.plotHeader;

  let xAxisMin = 0;
  let xAxisMax = 0;

  if (xAxisLimit) {
   xAxisMin = this.getDateStr(xAxisLimit[0]);
   xAxisMax = this.getDateStr(xAxisLimit[1]);
  } else {
   const jarF = obj.jar[0];
   const jarL = obj.jar[nr - 1];
   xAxisMin = jarF.yyyy + '-' + jarF.mm + '-' + jarF.dd;
   xAxisMax = jarL.yyyy + '-' + jarL.mm + '-' + jarL.dd;
  }

  const dates = this.dateRangeObjArray(xAxisMin, xAxisMax);
  obj.jar = this.deepMergeObjArr(obj.jar, dates);
  obj.jar = this.sortObjArrayByThreeKeys(obj.jar, 'yyyy', 'mm', 'dd');
  obj.key = plotHeader.map((v) => obj.head[v]); // keys for legend

  // const xArr = obj.jar.map((o) => parseInt(o.yyyy + '' + o.mm + '' + o.dd));

  obj.xArr = [...Array(obj.jar.length).keys()];
  obj.yArr = obj.jar.map((o) => o[obj.key[0]]);
  const xGin = 0; // minimum of x grid
  const yGin = 0; // minimum of y grid
  const xGax = this.data.grid.majorNumX + 1; // maximum x grid
  const yGax = this.data.grid.majorNumY + 1; // maximum of y grid
  const xMin = Math.floor(Math.min(...obj.xArr));
  const xMax = Math.ceil(Math.max(...obj.xArr));
  const yMin = Math.floor(Math.min(...obj.yArr.filter((x) => x)));
  const yMax = Math.ceil(Math.max(...obj.yArr.filter((x) => x)));
  const xDel = (xMax + 1 - xMin) / xGax;
  const yDel = (yMax - yMin) / yGax;

  // console.log(obj.xArr);
  // console.log(xMax, xMin, xGax, xDel, yMax, yMin, yGax, yDel);

  const xLab = obj.jar.map(
   (o) => o[dtf[0]] + obj.dsp + o[dtf[1]] + obj.dsp + o[dtf[2]]
  );

  obj.xIdx = [...Array(xGax)].map((v, i) => Math.round(i * xDel));
  obj.xIdx[obj.xIdx.length - 1] = obj.xArr[obj.xArr.length - 1];
  obj.xLab = obj.xIdx.map((v) => xLab[v]);
  obj.yLab = [...Array(yGax)].map((_, i) => (yMin + i * yDel).toFixed(0));

  const matR = obj.yArr.length;
  const matC = obj.key.length + 1;
  obj.matrix = [...Array(matC)].map((_) => Array(matR));
  obj.matrixScaled = [...Array(matC)].map((_) => Array(matR));
  // obj.matrixScaled = [...Array(cols)].map((_) => Array(rows).fill(0));

  obj.matrix[0] = obj.xArr;
  obj.matrix[1] = obj.yArr;

  obj.matrixScaled[0] = this.linearScaleArray(
   obj.matrix[0],
   xMin,
   xMax,
   xGin,
   xGax
  );

  for (let i = 1; i < matC; i++) {
   obj.matrixScaled[i] = this.linearScaleArray(
    obj.matrix[i],
    yMin,
    yMax,
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
  this.drawLabelAxisX();
  this.drawLabelAxisY();
  // this.drawLineSafety();
 } //drawObject

 drawDataPoints() {
  const noLines = this.data.dataObj.key.length;
  const noMarks = this.data.dataObj.matrix[0].length;

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

   let matX = this.data.dataObj.matrix[0];
   let matY = this.data.dataObj.matrix[1];

   //  let matX = this.data.dataObj.xArr;

   let objX = this.data.dataObj.matrixScaled[0];
   let objY = this.data.dataObj.matrixScaled[i + 1];

   console.log(matY);

   //  matY = matY.map((v,i) => {
   //   if(x){
   //     matX[i]
   //   }

   //  })



   const keep = [];
   for (let i = 0; i < noMarks; i++) if (matY[i]) keep.push(i);

   console.log('keep == ' + keep);
   matX = keep.map((v) => matX[v]);
   matY = keep.map((v) => matY[v]);
   objX = keep.map((v) => objY[v]);
   objY = keep.map((v) => objY[v]);

   console.log('new mx = ' + matX);
   console.log('new my = ' + matY);
   console.log('new ox = ' + objX);
   console.log('new oy = ' + objY);


   //  matY = matY.filter(function (el) {
   //   return toRemove.indexOf(el) < 0;
   //  });

   //  for (let i = 0; i < rem.length; i++) {
   //   matX.splice(rem[i], 1);
   //   matY.splice(rem[i], 1);
   //   objX.splice(rem[i], 1);
   //   objY.splice(rem[i], 1);
   //  }

   console.log(matY);

   const ptA = [];
   const rrr = this.data.option.marker.size[i];
   const div = this.createDivEventMouseOver();

   for (let j = 0; j < objY.length; j++) {
    const pxy = this.scalePoints([objX[j], objY[j]]);
    ptA.push(pxy);

    if (this.data.option.markerOn) {
     this.obj.marker[i][j] = this.drawCircle(pxy, rrr, j, style);

     // const col = this.data.dataObj.matrix.length - 1;
     // const dat = this.data.dataObj.matrix[col][j].toFixed();
     //  const dat = this.data.dataObj.timeSeriesX[j].toFixed();
     //  const sep = this.data.dataObj.dateSeparator;
     //  const dap = [dat.slice(0, 4), dat.slice(4, 6), dat.slice(6, 8)].join(sep);

     const dap = this.data.dataObj.xArr;

     //  console.log('oy = ' + matY[j]);

     // <h4 style="margin:0">Values</h4>
     // const str = `<table><tr><td>x:</td><td>${matX[j].toFixed(1)}</td></tr>
     //  <tr><td>y:</td> <td>${matY[j].toFixed(4)}</td></tr></table>`;
     const str = `<table><tr><td>x:</td><td>${dap}</td></tr>
     <tr><td>y:</td> <td>${matY[j].toFixed(4)}</td></tr></table>`;
     this.eventMouseOver(div, this.obj.marker[i][j].obj, str, style.fill);
    }
   }

   const line = this.data.option.line;
   const styleL = {};
   styleL.fill = 'none';
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
