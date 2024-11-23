// import * as mySvg from '../../dist/svg.min.js';
import * as mySvg from './svg.min.js';
import dolphinData from './demo-dolphin-data.js';

import Dolphin from './demo-dolphin.js';

window.onload = (event) => {
 document.title = 'SVG';

 // drawHtml();

 //  drawDolphin();
 drawDolphinUsingClass();

 //  drawFan();
};

function drawDolphinUsingClass() {
 const data = {};
 data.dolphin = dolphinData;
 data.containerId = 'body';
 data.divMain = {
  containerId: 'body',
  id: 'divMainBox',
  style: 'border: 1px solid red; border-radius:10px; padding:10px;',
  width: '1140px',
  height: '450px',
  transform: 'scale(1.2)'
 };

 data.divDolphin = {
  // containerId: 'divMainBox',
  // id: 'divDolphin',
  style: 'border: 1px solid green; border-radius:10px; padding:10px;',
  width: 700 + 'px',
  height: 700 * (3 / 5) + 'px',
  transform: 'scale(1)'
 };
 data.divOptions = {
  // containerId: 'divMainBox',
  // id: 'divOptions',
  style:
   'border: 1px solid blue; border-radius:10px; padding:20px; margin:20px 50px;',
  width: '300px',
  height: '300px',
  transform: 'scale(1)'
 };
 data.svgMain = {
  // containerId: 'divDolphin',
  // id: 'divDolphin-svgMain',
  width: '100%',
  height: '100%',
  viewBox: '0 0 100% 100% ',
  style: `border: 1px solid green; background-color: rgba(0,200,0,0); padding:10px; box-sizing:border-box;`
 };
 data.gridOn = false;
 data.grid = {
  // containerId: 'divDolphin-svgMain',
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

  title: {
   text: 'Dolphin'
  },

  axisLabelX: {
   text: 'X Axis'
  },

  axisLabelY: {
   text: 'Y Axis'
  }
 };
 const dol = new Dolphin(data);

 //  data.divMain.containerId = 'dol2';
 //  const dol2 = new Dolphin(data);
}

function drawHtml() {
 var html = new mySvg.Html();
 let h1 = html.newHead(document.body, 'Draw Using JS-SVG-Client');
 h1.style.color = 'teal';
 h1.style.backgroundColor = 'whiteSmoke';
}

function drawDolphin() {
 const divMain = drawDivDolphinMain();
 const divDolp = drawDivDolphin();
 const divSlid = drawDivDolphinSlider();

 drawSvgMain();
 const grid = drawGrid();

 // console.log(grid.objSvg.width, grid.objSvg.height); 428 218

 const wd = grid.objSvg.width;
 const ht = grid.objSvg.height;
 // const wd = 500;
 // const ht = 300;
 const xMax = 10;
 const yMax = 6;
 const xOff = 0;
 const yOff = 0;

 // dolphinFinTop(wd, ht, xMax, yMax, xOff, yOff);
 // dolphinFinBottom(wd, ht, xMax, yMax, xOff, yOff);
 // dolphinBody(wd, ht, xMax, yMax, xOff, yOff);

 dolphinBodyOne(wd, ht, xMax, yMax, xOff, yOff);
 dolphinEye(wd, ht, xMax, yMax, xOff, yOff);
}

function drawDivDolphinMain() {
 var data = {
  containerId: 'body',
  id: 'divMainBox',
  style: 'border: 2px solid red; border-radius:10px; padding:10px;',
  width: '1140px',
  height: '450px',
  transform: 'scale(1.2)'
 };
 return new mySvg.Div(data);
}

function drawDivDolphin() {
 const wd = 700;
 const ht = wd * (3 / 5);
 var data = {
  containerId: 'divMainBox',
  id: 'divDolphin',
  style: 'border: 2px solid green; border-radius:10px; padding:10px;',
  width: wd + 'px',
  height: ht + 'px'
  // transform: 'scale(1.5)'
 };
 return new mySvg.Div(data);
}

function drawDivDolphinSlider() {
 var data = {
  containerId: 'divMainBox',
  id: 'divDolphinSlider',
  style:
   'border: 2px solid blue; border-radius:10px; padding:20px; margin:20px 50px;',
  width: '300px',
  height: '300px'
  // transform: 'scale(1.5)'
 };

 const divSlider = new mySvg.Div(data);
 divSlider.obj.innerHTML =
  '<div id="slideContainer"> <input type="range" min="-1" max="2.0" step="0.1" value="1.2"  id="sliderX" /> <div id="sliderValueX" class="sliderValue">Point 1 x = </div></div>';

 divSlider.obj.innerHTML +=
  '<br style="margin-top:10px;"><div id="slideContainer"> <input type="range" min="4" max="6" step="0.1" value="4.8"  id="sliderY" /> <div id="sliderValueY" class="sliderValue">Point 1 y = </div></div>';

 divSlider.obj.innerHTML +=
  '<br style="margin-top:30px;"> <button type="button" id="submitBtn">Submit</button> ';

 divSlider.obj.innerHTML += '<div id="alertBox"></div>';

 return divSlider;
}

function drawSvgMain() {
 const data = {};
 data.containerId = 'divDolphin';
 data.id = 'divDolphin-svgMain';
 data.width = '100%';
 data.height = '100%';
 data.viewBox = '0 0 100% 100% ';
 // data.viewbox = '0 0 10 100';
 data.style =
  'background-color: rgba(0,200,0,0); border: 1px solid green; padding:10px; box-sizing:border-box;';
 return new mySvg.Svg(data);
}

function drawGrid() {
 var grid = {};
 grid.containerId = 'divDolphin-svgMain';
 grid.minorNumX = 5;
 grid.minorNumY = 5;
 grid.majorNumX = 10;
 grid.majorNumY = 6;

 // grid.box = {};
 // grid.boxOn = true;
 // grid.axesOn = true;
 grid.titleOn = true;
 grid.axisLabelOnX = true;
 grid.axisLabelOnY = true;
 grid.axisNumOnX = true;
 grid.axisNumOnY = true;
 grid.majorOnX = true;
 grid.majorOnY = true;
 grid.minorOnX = true;
 grid.minorOnY = true;

 // grid.box = {};
 // grid.box.stroke = 'red';
 // grid.box.strokeWidth = 1;
 // grid.box.strokeOpacity = 1;
 // grid.box.fill = 'none';
 // grid.box.idSvg = 'svg';
 // grid.box.idBox = 'box';

 // grid.padding = {};
 // grid.padding.left = 36;
 // grid.padding.right = 10;
 // grid.padding.top = 20;
 // grid.padding.bottom = 36;

 grid.title = {};
 grid.title.text = 'Dolphin';
 grid.title.x = '50%';
 grid.title.y = '15';
 grid.title.dx = '0';
 grid.title.dy = '0';
 grid.title.fontFamily = 'inherit';
 grid.title.fontSize = '24';
 grid.title.fontWeight = 'normal';
 grid.title.fill = 'black';
 grid.title.fillOpacity = '1';
 grid.title.stroke = 'black';
 grid.title.strokeWidth = '0';
 grid.title.strokeOpacity = '1';

 grid.axisLabelX = {};
 grid.axisLabelX.text = 'X Axis';
 grid.axisLabelX.x = '50%';
 grid.axisLabelX.y = '98%';
 grid.axisLabelX.dx = '0';
 grid.axisLabelX.dy = '0';
 grid.axisLabelX.fontFamily = 'inherit';
 grid.axisLabelX.fontSize = '16';
 grid.axisLabelX.fontWeight = 'normal';
 grid.axisLabelX.fill = 'black';
 grid.axisLabelX.fillOpacity = '1';
 grid.axisLabelX.stroke = 'black';
 grid.axisLabelX.strokeWidth = '0';
 grid.axisLabelX.strokeOpacity = '1';

 grid.axisLabelY = {};
 grid.axisLabelY.text = 'Y Axis';
 grid.axisLabelY.x = '50%';
 grid.axisLabelY.y = '50%';
 grid.axisLabelY.dx = '20';
 grid.axisLabelY.dy = '-85%';
 grid.axisLabelY.transform = 'rotate(-90, 350 200)';
 grid.axisLabelY.fontFamily = 'inherit';
 grid.axisLabelY.fontSize = '16';
 grid.axisLabelY.fontWeight = 'normal';
 grid.axisLabelY.fill = 'black';
 grid.axisLabelY.fillOpacity = '1';
 grid.axisLabelY.stroke = 'black';
 grid.axisLabelY.strokeWidth = '0';
 grid.axisLabelY.strokeOpacity = '1';

 return new mySvg.Grid(grid);

 // gridLine.majorX[3].style = 'stroke:green; stroke-width:4;';
 // gridLine.minorX[1].style = 'stroke:green; stroke-width:4;';
}

function dolphinEye(wd, ht, xMax, yMax, xOff, yOff) {
 const data = {};
 data.containerId = 'divDolphin-svgMain-svg';
 data.transform = 'matrix(1 0 0 -1 0 ' + ht + ')';
 data.cx = (dolphinData.eye[0] + xOff) * (wd / xMax);
 data.cy = (dolphinData.eye[1] + yOff) * (ht / yMax);
 data.r = dolphinData.eye[2];
 data.stroke = 'blue';
 data.strokeWidth = 2;
 data.fill = dolphinData.eyeStyle.fill;
 data.fillOpacity = '1';
 data.strokeOpacity = '1';
 const circle = new mySvg.Circle(data);
}

function dolphinBodyOne(wd, ht, xMax, yMax, xOff = 0, yOff = 0) {
 const data = {};

 var sliderX = document.getElementById('sliderX');
 var sliderY = document.getElementById('sliderY');
 var outputX = document.getElementById('sliderValueX');
 var outputY = document.getElementById('sliderValueY');
 var submitB = document.getElementById('submitBtn');
 var alertBx = document.getElementById('alertBox');

 var varArray = dolphinData.bodyOne;

 var valX = 1.2;
 sliderX.value = valX.toFixed(1);
 varArray[2] = valX;
 outputX.innerHTML = 'Point 1 x = ' + sliderX.value;

 var valY = 4.8;
 sliderY.value = valY.toFixed(1);
 varArray[3] = valY;
 outputY.innerHTML = 'Point 1 y = ' + sliderY.value;

 data.d = drawBezier(varArray, wd, ht, xMax, yMax, xOff, yOff);
 data.containerId = 'divDolphin-svgMain-svg';
 data.id = 'divDolphin-svgMain-body';
 data.transform = 'matrix(1 0 0 -1 0 ' + ht + ')';
 data.fill = dolphinData.bodyOneStyle.fill;
 data.fillOpacity = dolphinData.bodyOneStyle.fillOpacity;
 data.stroke = dolphinData.bodyOneStyle.stroke;
 data.strokeWidth = dolphinData.bodyOneStyle.strokeWidth;

 let dolObj = new mySvg.Path(data);

 sliderX.oninput = function () {
  valX = parseFloat(this.value).toFixed(1);
  varArray[2] = valX;
  outputX.innerHTML = 'Point 1 x = ' + parseFloat(this.value).toFixed(1);
  data.d = drawBezier(varArray, wd, ht, xMax, yMax, xOff, yOff);
  document.getElementById(data.id).remove();
  dolObj = new mySvg.Path(data);
 };

 sliderY.oninput = function () {
  valY = parseFloat(this.value).toFixed(1);
  varArray[3] = valY;
  outputY.innerHTML = 'Point 1 y = ' + parseFloat(this.value).toFixed(1);
  data.d = drawBezier(varArray, wd, ht, xMax, yMax, xOff, yOff);
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

 //
}

function dolphinBody(wd, ht, xMax, yMax, xOff = 0, yOff = 0) {
 const data = {};
 data.d = drawBezier(dolphinData.body, wd, ht, xMax, yMax, xOff, yOff);
 data.containerId = 'divDolphin-svgMain-svg';
 data.id = 'divDolphin-svgMain-body';
 data.transform = 'matrix(1 0 0 -1 0 ' + ht + ')';
 data.fill = dolphinData.bodyStyle.fill;
 data.fillOpacity = dolphinData.bodyStyle.fillOpacity;
 data.stroke = dolphinData.bodyStyle.stroke;
 data.strokeWidth = dolphinData.bodyStyle.strokeWidth;
 const dolObj = new mySvg.Path(data);
}

function dolphinFinTop(wd, ht, xMax, yMax, xOff = 0, yOff = 0) {
 const data = {};
 data.d = drawBezier(dolphinData.finTop, wd, ht, xMax, yMax, xOff, yOff);
 data.containerId = 'divDolphin-svgMain-svg';
 data.id = 'divDolphin-svgMain-body';
 data.transform = 'matrix(1 0 0 -1 0 ' + ht + ')';
 data.fill = dolphinData.finStyle.fill;
 data.fillOpacity = dolphinData.finStyle.fillOpacity;
 data.stroke = dolphinData.finStyle.stroke;
 data.strokeWidth = dolphinData.finStyle.strokeWidth;
 const dolObj = new mySvg.Path(data);
}

function dolphinFinBottom(wd, ht, xMax, yMax, xOff = 0, yOff = 0) {
 const data = {};
 data.d = drawBezier(dolphinData.finBottom, wd, ht, xMax, yMax, xOff, yOff);
 data.containerId = 'divDolphin-svgMain-svg';
 data.id = 'divDolphin-svgMain-body';
 data.transform = 'matrix(1 0 0 -1 0 ' + ht + ')';
 data.fill = dolphinData.finStyle.fill;
 data.fillOpacity = dolphinData.finStyle.fillOpacity;
 data.stroke = dolphinData.finStyle.stroke;
 data.strokeWidth = dolphinData.finStyle.strokeWidth;
 const dolObj = new mySvg.Path(data);
}

function drawBezier(data, wd, ht, xMax, yMax, xOff = 0, yOff = 0) {
 const xxx = wd / xMax;
 const yyy = ht / yMax;
 const pts = data.map((v, i) => (i % 2 ? (v + yOff) * yyy : (v + xOff) * xxx));
 const len = data.length;
 return 'M' + pts.slice(0, 2).join(',') + ' C' + pts.slice(2, len).join(',');
}

// function drawFan() {
//  const data = {};
//  data.dolphin = dolphinData;
//  data.containerId = 'body';
//  data.divMain = {
//   containerId: 'body',
//   id: 'divMainBox',
//   style: 'border: 2px solid red; border-radius:10px; padding:10px;',
//   width: '1140px',
//   height: '450px',
//   transform: 'scale(1.5)'
//  };
//  data.divDolphin = {
//   // containerId: 'divMainBox',
//   // id: 'divDolphin',
//   style: 'border: 2px solid green; border-radius:10px; padding:10px;',
//   width: 700 + 'px',
//   height: 700 * (3 / 5) + 'px',
//   transform: 'scale(1)'
//  };
//  data.divOptions = {
//   // containerId: 'divMainBox',
//   // id: 'divOptions',
//   style:
//    'border: 2px solid blue; border-radius:10px; padding:20px; margin:20px 50px;',
//   width: '300px',
//   height: '300px',
//   transform: 'scale(1)'
//  };
//  data.svgMain = {
//   // containerId: 'divDolphin',
//   // id: 'divDolphin-svgMain',
//   width: '100%',
//   height: '100%',
//   viewBox: '0 0 100% 100% ',
//   style: `background-color: rgba(0,200,0,0); border: 1px solid green; padding:10px; box-sizing:border-box;`
//  };
//  data.gridOn = false;
//  data.grid = {
//   // containerId: 'divDolphin-svgMain',
//   minorNumX: 5,
//   minorNumY: 5,
//   majorNumX: 10,
//   majorNumY: 6,
//   titleOn: true,
//   axisLabelOnX: true,
//   axisLabelOnY: true,
//   axisNumOnX: true,
//   axisNumOnY: true,
//   majorOnX: true,
//   majorOnY: true,
//   minorOnX: true,
//   minorOnY: true,
//   boxOn: false,
//   axesOn: false,

//   title: {
//    text: 'Dolphin'
//   },

//   axisLabelX: {
//    text: 'X Axis'
//   },

//   axisLabelY: {
//    text: 'Y Axis'
//   }
//  };
//  const dol = new Dolphin(data);
// }

// region raw
// const dPts = [].concat(...dolphinData.body);
// const dPts = dolphinData.body;

// const dolArray = dolphinData.body;
// dolArray.forEach((array, idx) => (idx === 0 ? array : array.splice(0, 2)));

// function dolphin_body_B01(wd, ht, xMax, yMax, xOff = 0, yOff = 0) {
//  const dPts = [1.2, 3, 2.4, 6.4, 7.4, 3.8, 7.8, 2];
//  const dStr = drawBezier(dPts, wd, ht, xMax, yMax, xOff, yOff);
//  const data = {};
//  data.d = dStr;
//  data.containerId = 'svgMain-svg';
//  data.id = 'body-01';
//  data.transform = 'matrix(1 0 0 -1 0 ' + ht + ')';
//  data.fill = 'none';
//  data.fillOpacity = '0.3';
//  data.stroke = 'pink';
//  data.strokeWidth = '5';
//  new mySvg.Path(data);
// }

// function drawBezierPoly(data, width, height, xMax, yMax, xOff = 0, yOff = 0) {
//  const xxx = width / xMax;
//  const yyy = height / yMax;
//  const pts = data.map((v, i) => (i % 2 ? (v + yOff) * yyy : (v + xOff) * xxx));
//  return str;
// }

// function dolphinBody(wd, ht, xMax, yMax, xOff = 0, yOff = 0) {
//  const dolPath = [];
//  dolphinData.body.forEach((element, idx) => {
//   const dPts = element;
//   const dStr = drawBezier(dPts, wd, ht, xMax, yMax, xOff, yOff);
//   const data = {};
//   data.d = dStr;
//   data.containerId = 'svgMain-svg';
//   data.id = 'body-' + idx;
//   data.transform = 'matrix(1 0 0 -1 0 ' + ht + ')';
//   data.fill = 'none';
//   data.fillOpacity = '0.3';
//   data.stroke = 'blue';
//   data.strokeWidth = '2';
//   dolPath[idx] = new mySvg.Path(data);
//  });
// }

// function drawPathDolphinBody01(wd, ht) {
//  var data = {};
//  data.containerId = 'svgMain-svg';
//  data.id = 'body-01';
//  data.transform = 'matrix(1 0 0 -1 0 ' + ht + ')';
//  var p0x = 1.2 * (wd / 10);
//  var p1x = 2.4 * (wd / 10);
//  var p2x = 7.4 * (wd / 10);
//  var p3x = 7.8 * (wd / 10);
//  var p0y = 3 * (ht / 6);
//  var p1y = 6.4 * (ht / 6);
//  var p2y = 3.8 * (ht / 6);
//  var p3y = 2 * (ht / 6);

//  var dataString =
//   'M' +
//   p0x +
//   ',' +
//   p0y +
//   ' ' +
//   'C' +
//   p1x +
//   ',' +
//   p1y +
//   ' ' +
//   p2x +
//   ',' +
//   p2y +
//   ' ' +
//   p3x +
//   ',' +
//   p3y;

//  // data.d = 'M1.2,3  C2.4,6.4 7.4,3.8 7.8,2';
//  data.d = dataString;

//  data.fillOpacity = '0.3';
//  data.fill = 'none';
//  data.stroke = 'red';
//  data.strokeWidth = '5';

//  var path = new mySvg.Path(data);
// }

// const bezier = {};
// bezier.points = [1.2, 3, 2.4, 6.4, 7.4, 3.8, 7.8, 2];
// bezier.xMax = 10;
// bezier.yMax = 6;
// bezier.width = wd;
// bezier.height = ht;
// data.d = drawBezier(bezier);

// function drawBezier(data) {
//  const xxx = data.width / data.xMax;
//  const yyy = data.height / data.yMax;
//  const pts = data.points.map((v, i) => (i % 2 ? v * yyy : v * xxx));
//  return 'M' + pts.slice(0, 2).join(',') + ' C' + pts.slice(2, 8).join(',');
// }

// function drawPathDolphinBody01a(wd, ht) {
//  var data = {};
//  data.containerId = 'svgMain-svg';
//  data.id = 'body-01';
//  data.transform = 'matrix(1 0 0 -1 0 ' + ht + ')';
//  var p0x = 1.2 * (wd / 10);
//  var p1x = 2.4 * (wd / 10);
//  var p1x = 0.4 * (wd / 10);
//  var p2x = 7.4 * (wd / 10);
//  var p3x = 7.8 * (wd / 10);
//  var p0y = 3 * (ht / 6);
//  var p1y = 6.4 * (ht / 6);
//  var p2y = 3.8 * (ht / 6);
//  var p3y = 2 * (ht / 6);

//  var dataString =
//   'M' +
//   p0x +
//   ',' +
//   p0y +
//   ' ' +
//   'C' +
//   p1x +
//   ',' +
//   p1y +
//   ' ' +
//   p2x +
//   ',' +
//   p2y +
//   ' ' +
//   p3x +
//   ',' +
//   p3y;

//  // data.d = 'M1.2,3  C2.4,6.4 7.4,3.8 7.8,2';
//  data.d = dataString;

//  data.fillOpacity = '0.3';
//  data.fill = 'none';
//  data.stroke = 'green';
//  data.strokeWidth = '5';

//  var path = new mySvg.Path(data);
// }

// var data = {
//  containerId: 'svgMain-svg',
//  d: 'M100 20 l150 50 h200 v100 l-100 100 Z',
//  fillOpacity: '0.3',
//  stroke: 'red',
//  strokeWidth: '10',
//  id: 'body-01'
// };

// var points = {
//  P0: [1.2, 4],
//  P1: [2.4, 6.4],
//  P4: [7.4, 3.8],
//  P4: [7.8, 2]
// };
// endregion raw
