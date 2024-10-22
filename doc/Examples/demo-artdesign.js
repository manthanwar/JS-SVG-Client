import * as mySvg from '../../dist/svg.min.js';
import dolphinData from './demo-dolphin-data.js';

window.onload = (event) => {
 document.title = 'SVG';

 drawDolphin();

 // drawHtml();
};

function drawHtml() {
 var html = new mySvg.Html();
 let h1 = html.newHead(document.body, 'Draw Using JS-SVG-Client');
 h1.style.color = 'teal';
 h1.style.backgroundColor = 'whiteSmoke';
}

function drawDolphin() {
 // document.body.innerHTML += 'hi dolphi';

 drawDiv();
 drawSvgMain();
 const grid = drawGrid();

 const wd = grid.objSvg.width;
 const ht = grid.objSvg.height;
 const xMax = 10;
 const yMax = 6;
 const xOff = 0;
 const yOff = 0;
 dolphinEye(wd, ht);
 dolphinBody(wd, ht, xMax, yMax, xOff, yOff);
 dolphinBody_1D(wd, ht, xMax, yMax, xOff, yOff);
}

function drawDiv() {
 var data = {
  containerId: 'body',
  id: 'svgDivDolphin',
  style: 'border: 2px solid red; border-radius:10px; padding:10px;',
  width: '500px',
  height: '300px',
  transform: 'scale(1.5)'
 };
 var svgDiv = new mySvg.Div(data);
}

function drawSvgMain() {
 const data = {};
 data.containerId = 'svgDivDolphin';
 data.id = 'svgMain';
 data.width = '100%';
 data.height = '100%';
 data.viewBox = '0 0 100% 100% ';
 // data.viewbox = '0 0 10 100';
 data.style =
  'background-color: rgba(0,200,0,0); border: 0px solid green; padding:10px; box-sizing:border-box;';
 return new mySvg.Svg(data);
}

function drawGrid() {
 var grid = {};
 grid.containerId = 'svgMain';
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

 return new mySvg.Grid(grid);

 // gridLine.majorX[3].style = 'stroke:green; stroke-width:4;';
 // gridLine.minorX[1].style = 'stroke:green; stroke-width:4;';
}

function dolphinEye(wd, ht) {
 const data = {};
 data.containerId = 'svgMain-svg';
 data.transform = 'matrix(1 0 0 -1 0 ' + ht + ')';
 data.cx = 1.7 * (wd / 10);
 data.cy = 3.3 * (ht / 6);
 data.r = 2;
 data.stroke = 'black';
 data.strokeWidth = 4;
 data.fill = 'green';
 data.fillOpacity = '1';
 data.strokeOpacity = '0.8';
 const circle = new mySvg.Circle(data);
}

function drawBezier(data, width, height, xMax, yMax, xOff = 0, yOff = 0) {
 const xxx = width / xMax;
 const yyy = height / yMax;
 const pts = data.map((v, i) => (i % 2 ? (v + yOff) * yyy : (v + xOff) * xxx));
 const str =
  'M' + pts.slice(0, 2).join(',') + ' C' + pts.slice(2, data.length).join(',');

 return str;
}

// function drawBezierPoly(data, width, height, xMax, yMax, xOff = 0, yOff = 0) {
//  const xxx = width / xMax;
//  const yyy = height / yMax;
//  const pts = data.map((v, i) => (i % 2 ? (v + yOff) * yyy : (v + xOff) * xxx));
//  return str;
// }

function dolphinBody(wd, ht, xMax, yMax, xOff = 0, yOff = 0) {
 const dolPath = [];
 dolphinData.body.forEach((element, idx) => {
  const dPts = element;
  const dStr = drawBezier(dPts, wd, ht, xMax, yMax, xOff, yOff);
  const data = {};
  data.d = dStr;
  data.containerId = 'svgMain-svg';
  data.id = 'body-' + idx;
  data.transform = 'matrix(1 0 0 -1 0 ' + ht + ')';
  data.fill = 'none';
  data.fillOpacity = '0.3';
  data.stroke = 'blue';
  data.strokeWidth = '2';
  dolPath[idx] = new mySvg.Path(data);
 });
}

function dolphinBody_1D(wd, ht, xMax, yMax, xOff = 0, yOff = 0) {
 // const dol = [].concat(...dolphinData.body);
 // console.log(dol);

 const dolArray = dolphinData.body;

 // console.log(dolArray[0]);

 dolArray.forEach((array, idx) => (idx === 0 ? array : array.splice(0, 2)));

 console.log(dolArray[0]);
 console.log(dolArray[1]);
 console.log(dolArray[2]);

 const dol = [].concat(...dolArray);
 console.log(dol)

 // for (let i = 1; i< dolArray.length; i++){

 // }

 const dPts = dol;

 //   const dPts = [
 //    1.2, 3.0, 2.4, 6.4, 7.4, 3.8, 7.8, 2.0, //7.8, 2.0,
 // 7.8, 2.0, 9.0, 1.6, 8.8, 1.0,//8.8, 1.0,
 // 8.0, 1.6, 7.2, 0.4, 7.2, 0.4,//7.2, 0.4,
 // 6.8, 0.6, 7.4, 1.8, 7.4, 1.8,//7.4, 1.8,
 // 5.4, 3.4, 2.4, 3.4, 1.4, 2.5,//1.4, 2.5,
 // 1.0, 2.4, 1.0, 2.6, 1.2, 3.0
 // ];
 const dStr = drawBezier(dPts, wd, ht, xMax, yMax, xOff, yOff);
 const data = {};
 data.d = dStr;
 data.containerId = 'svgMain-svg';
 data.id = 'body-all';
 data.transform = 'matrix(1 0 0 -1 0 ' + ht + ')';
 data.fill = 'lime';
 data.fillOpacity = '0.3';
 data.stroke = 'red';
 data.strokeWidth = '2';
 const dolObj = new mySvg.Path(data);
}

function dolphin_body_B01(wd, ht, xMax, yMax, xOff = 0, yOff = 0) {
 const dPts = [1.2, 3, 2.4, 6.4, 7.4, 3.8, 7.8, 2];
 const dStr = drawBezier(dPts, wd, ht, xMax, yMax, xOff, yOff);
 const data = {};
 data.d = dStr;
 data.containerId = 'svgMain-svg';
 data.id = 'body-01';
 data.transform = 'matrix(1 0 0 -1 0 ' + ht + ')';
 data.fill = 'none';
 data.fillOpacity = '0.3';
 data.stroke = 'pink';
 data.strokeWidth = '5';
 new mySvg.Path(data);
}

// region raw
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
