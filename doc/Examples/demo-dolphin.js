// =============================================================================
// File Name     : Dolphin.js
// Description   : JS Class to draw Dolphin using JS-SVG-Client
// -----------------------------------------------------------------------------
// Author        : Amit Manohar Manthanwar
// Mailer        : manthanwar@hotmail.com
// WebURL        : https://manthanwar.github.io
// -----------------------------------------------------------------------------
// Copyright     : (c) 2024 Amit Manohar Manthanwar
// License       : MIT License
// ----------------------------------------------------------------------------
// This program can be redistributed and/or modified under the terms
// of the MIT License. For details see the file license.txt
// =============================================================================
// Revision Log  | Author  | Description
// --------------+---------+----------------------------------------------------
// 25-Oct-2024   | AMM     | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

import * as mySvg from './svg.min.js';

// import * as mySvg from '../../dist/svg.min.js';

export default class Dolphin {
 constructor(data) {
  this.init();
  this.merge(this.data, data);

  this.obj = {};
  this.obj.divMainBox = this.divMain();
  this.obj.divDolphin = this.divDolphin();
  this.obj.divOptions = this.divOptions();

  this.obj.svgMain = this.svgMain();

  if (this.data.gridOn) {
   this.obj.grid = this.grid();
   this.data.width = this.obj.grid.objSvg.width;
   this.data.height = this.obj.grid.objSvg.height;
   this.data.idSvg = this.data.grid.box.idSvg;
  } else {
   this.data.width = parseInt(this.obj.divDolphin.data.width);
   this.data.height = parseInt(this.obj.divDolphin.data.height);
   this.data.idSvg = this.data.svgMain.id;
  }

  this.drawDolphin();
 }

 init() {
  this.data = {
   divMain: {
    containerId: 'body',
    id: 'divMainBox',
    style: 'border: 2px solid red; border-radius:10px; padding:10px;',
    width: '1140px',
    height: '450px',
    transform: 'scale(1.2)'
   },
   divDolphin: {
    containerId: 'divMainBox',
    id: 'divMainBox-divDolphin',
    style: 'border: 2px solid green; border-radius:10px; padding:10px;',
    width: 700 + 'px',
    height: 700 * (3 / 5) + 'px',
    transform: 'scale(1)'
   },
   divOptions: {
    containerId: 'divMainBox',
    id: 'divMainBox-divOptions',
    style:
     'border: 2px solid blue; border-radius:10px; padding:20px; margin:20px 50px;',
    width: '300px',
    height: '300px',
    transform: 'scale(1)'
   },
   svgMain: {
    containerId: 'divMainBox-divDolphin',
    id: 'divMainBox-divDolphin-svgMain',
    width: '100%',
    height: '100%',
    viewBox: '0 0 100% 100% ',
    style: `background-color: rgba(0,200,0,0); border: 1px solid green; padding:10px; box-sizing:border-box;`
   },

   gridOn: true,

   grid: {
    containerId: 'divMainBox-divDolphin-svgMain',
    minorNumX: 5,
    minorNumY: 5,
    majorNumX: 10,
    majorNumY: 6,
    titleOn: true,
    axisLabelOnX: true,
    axisLabelOnY: true,
    axisNumOnX: true,
    axisNumOnY: true,
    majorOnX: true,
    majorOnY: true,
    minorOnX: true,
    minorOnY: true,
    boxOn: false,
    axesOn: false,

    box: {
     stroke: 'red',
     strokeWidth: 1,
     strokeOpacity: 1,
     fill: 'none',
     idSvg: 'divDolphin-svgMain-svg',
     idBox: 'divDolphin-svgMain-box'
    },

    padding: {
     left: 36,
     right: 10,
     top: 20,
     bottom: 36
    },

    title: {
     text: 'Dolphin',
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
    },

    axisLabelX: {
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
    },

    axisLabelY: {
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
    }
   }
  };

  this.data.divDolphin.containerId = this.data.divMain.id;
  this.data.divOptions.containerId = this.data.divMain.id;
  this.data.divDolphin.id = this.data.divDolphin.containerId + '-divDolphin';
  this.data.svgMain.containerId = this.data.divDolphin.id;
  this.data.svgMain.id = this.data.divDolphin.id + '-svgMain';
  this.data.grid.containerId = this.data.svgMain.id;
  this.data.grid.box.idSvg = this.data.svgMain.id + '-svg';
  this.data.grid.box.idBox = this.data.svgMain.id + '-box';
 }

 divMain() {
  return new mySvg.Div(this.data.divMain);
 }

 divDolphin() {
  return new mySvg.Div(this.data.divDolphin);
 }

 divOptions() {
  const divSlider = new mySvg.Div(this.data.divOptions);
  divSlider.obj.innerHTML =
   '<div id="slideContainer"> <input type="range" min="-1" max="2.0" step="0.1" value="1.2"  id="sliderX" /> <div id="sliderValueX" class="sliderValue">Point 1 x = </div></div>';

  divSlider.obj.innerHTML +=
   '<br style="margin-top:10px;"><div id="slideContainer"> <input type="range" min="4" max="6" step="0.1" value="4.8"  id="sliderY" /> <div id="sliderValueY" class="sliderValue">Point 1 y = </div></div>';

  // divSlider.obj.innerHTML +=
  //  '<br style="margin-top:30px;"> <input type="text" id="fname" name="fname"><br><br><input type="color" id="favcolor" name="favcolor" value="#ff0000">';

  divSlider.obj.innerHTML +=
   '<br style="margin-top:30px;"> <button type="button" id="submitBtn">Submit</button> ';

  divSlider.obj.innerHTML += '<div id="alertBox"></div>';

  return divSlider;
 }

 svgMain() {
  return new mySvg.Svg(this.data.svgMain);
 }

 drawDolphin() {
  const wd = this.data.width;
  const ht = this.data.height;
  const xMax = 10;
  const yMax = 6;
  const xOff = 0;
  const yOff = 0;

  // dolphinFinTop(wd, ht, xMax, yMax, xOff, yOff);
  // dolphinFinBottom(wd, ht, xMax, yMax, xOff, yOff);
  // dolphinBody(wd, ht, xMax, yMax, xOff, yOff);

  this.obj.body = this.dolphinBodyOne(wd, ht, xMax, yMax, xOff, yOff);
  this.obj.eye = this.dolphinEye(wd, ht, xMax, yMax, xOff, yOff);
 }

 drawBezier(data, wd, ht, xMax, yMax, xOff = 0, yOff = 0) {
  const xxx = wd / xMax;
  const yyy = ht / yMax;
  const pts = data.map((v, i) => (i % 2 ? (v + yOff) * yyy : (v + xOff) * xxx));
  const len = data.length;
  return 'M' + pts.slice(0, 2).join(',') + ' C' + pts.slice(2, len).join(',');
 }

 dolphinBodyOne(wd, ht, xMax, yMax, xOff = 0, yOff = 0) {
  const data = {};

  var sliderX = document.getElementById('sliderX');
  var sliderY = document.getElementById('sliderY');
  var outputX = document.getElementById('sliderValueX');
  var outputY = document.getElementById('sliderValueY');
  var submitB = document.getElementById('submitBtn');
  var alertBx = document.getElementById('alertBox');

  var varArray = this.data.dolphin.bodyOne;

  var valX = 1.2;
  sliderX.value = valX.toFixed(1);
  varArray[2] = valX;
  outputX.innerHTML = 'Point 1 x = ' + sliderX.value;

  var valY = 4.8;
  sliderY.value = valY.toFixed(1);
  varArray[3] = valY;
  outputY.innerHTML = 'Point 1 y = ' + sliderY.value;

  data.d = this.drawBezier(varArray, wd, ht, xMax, yMax, xOff, yOff);

  data.containerId = this.data.idSvg;
  data.id = 'divDolphin-svgMain-body';
  data.transform = 'matrix(1 0 0 -1 0 ' + ht + ')';
  data.fill = this.data.dolphin.bodyOneStyle.fill;
  data.fillOpacity = this.data.dolphin.bodyOneStyle.fillOpacity;
  data.stroke = this.data.dolphin.bodyOneStyle.stroke;
  data.strokeWidth = this.data.dolphin.bodyOneStyle.strokeWidth;

  let dolObj = new mySvg.Path(data);

  const self = this;

  sliderX.oninput = function () {
   valX = parseFloat(this.value).toFixed(1);
   varArray[2] = valX;
   outputX.innerHTML = 'Point 1 x = ' + parseFloat(this.value).toFixed(1);
   data.d = self.drawBezier(varArray, wd, ht, xMax, yMax, xOff, yOff);
   document.getElementById(data.id).remove();
   dolObj = new mySvg.Path(data);
  };

  sliderY.oninput = function () {
   valY = parseFloat(this.value).toFixed(1);
   varArray[3] = valY;
   outputY.innerHTML = 'Point 1 y = ' + parseFloat(this.value).toFixed(1);
   data.d = self.drawBezier(varArray, wd, ht, xMax, yMax, xOff, yOff);
   document.getElementById(data.id).remove();
   dolObj = new mySvg.Path(data);
  };

  submitB.onclick = () => {
   // alert('data = ' + varArray);
   if (alertBx.style.display === 'none') {
    alertBx.style.display = 'block';
    alertBx.innerHTML =
     '<b>Data</b><br style="margin-bottom:10px">' +
     varArray
      .slice(0, 2)
      .map((a) => a.toFixed(1))
      .join(', ') +
     ', <span style="background-color:teal;">' +
     sliderX.value +
     '</span>, <span style="background-color:maroon;">' +
     sliderY.value +
     '</span>, ' +
     varArray
      .slice(4, varArray.length)
      .map((a) => a.toFixed(1))
      .join(', ');

    submitB.innerHTML = 'Cancel';
   } else {
    alertBx.style.display = 'none';
    submitB.innerHTML = 'Submit';
   }
  };
 }

 dolphinEye(wd, ht, xMax, yMax, xOff, yOff) {
  const data = {};
  data.containerId = this.data.idSvg;
  data.transform = 'matrix(1 0 0 -1 0 ' + ht + ')';
  data.cx = (this.data.dolphin.eye[0] + xOff) * (wd / xMax);
  data.cy = (this.data.dolphin.eye[1] + yOff) * (ht / yMax);
  data.r = this.data.dolphin.eye[2];
  data.stroke = 'blue';
  data.strokeWidth = 2;
  data.fill = 'cyan';
  data.fillOpacity = '0.3';
  data.strokeOpacity = '1';
  const eye = new mySvg.Circle(data);
  return eye;
 }

 grid() {
  return new mySvg.Grid(this.data.grid);

  // gridLine.majorX[3].style = 'stroke:green; stroke-width:4;';
  // gridLine.minorX[1].style = 'stroke:green; stroke-width:4;';
 }

 merge(current, updates) {
  for (const key of Object.keys(updates)) {
   if (!current.hasOwnProperty(key) || typeof updates[key] !== 'object')
    current[key] = updates[key];
   else this.merge(current[key], updates[key]);
  }
  return current;
 }
}
