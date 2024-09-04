/*
// =============================================================================
// File Name     : mainTest.js
// Date Created  : 2024-09-04 04:02 UTC +02:00
// description   : Testing of Package js-svg-client
// -----------------------------------------------------------------------------
// Author        : Amit Manohar Manthanwar
// Mailer        : manthanwar@hotmail.com
// WebURL        : https://manthanwar.github.io
// -----------------------------------------------------------------------------
// Copyright     : (c) 2024 Amit Manohar Manthanwar
// License       : LICENSE.md
// =============================================================================
// Revision Log  | Author  | Description
// --------------+---------+----------------------------------------------------
// 04-Sep-2024   | AMM     | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================
*/

import * as mySvg from '../dist/svg.min.js';

window.onload = (event) => {
 drawHtml();

 drawDiv();
 drawSvgMain();
 // drawSvg();
 // drawCircle();
 // drawCircleWithLink();
 // drawEllipseWithLink();
 // drawLine();
 // drawPolyline();
 // drawPolygon();
 // drawPath();
 // drawText();
 // drawTextPath();
 var grid = drawGrid();

 drawTriangle(grid.objSvg.width, grid.objSvg.height);
};

function drawHtml() {
 var html = new mySvg.Html();
 html.newHead(document.body, 'Draw Using JS-SVG-Client');
}

function drawDiv() {
 const data = {};
 data.containerId = 'body';
 data.id = 'svgDiv';
 data.width = '822px';
 data.height = '422px';
 data.transform = 'scale(1, 1)';
 data.style =
  'border: 2px solid red; padding: 0px;box-sizing:border-box;background-color: rgba(100,100,0,0);';
 return new mySvg.Div(data);
}

function drawNestedDiv() {
 const data = {};

 // data.containerId = 'svgDiv';
 data.containerId = 'body';
 data.id = 'svgMain';
 data.width = '400';
 data.height = '400';
 data.style = 'border: 2px solid blue;';
 var svgMain = new mySvg.Svg(data);

 // data.containerId = 'svgMain';
 // data.x = '0';
 // data.y = '0';
 // data.width = '10';
 // data.height = '10';
 // data.style = 'fill: lime';

 data.containerId = 'svgMain';
 var rect1 = new mySvg.Rectangle(data);
 rect1.x = '0';
 rect1.y = '0';
 rect1.rx = '10';
 rect1.ry = '10';
 rect1.width = '50';
 rect1.height = '50';
 rect1.style = 'fill: lime';

 // rect1.attr('x', '0')
 //  .attr('y', '0')
 //  .attr('width', '20')
 //  .attr('height', '20')
 //  .attr('style', 'fill: lime;');

 data.containerId = 'svgMain';
 var svg = new mySvg.Svg(data);
 svg
  .attr('x', '50')
  .attr('y', '50')
  .attr('width', '100')
  .attr('height', '100')
  .attr('id', 'svg');

 data.containerId = 'svg';
 var rect2 = new mySvg.Rectangle(data);
 rect2
  .attr('x', '00')
  .attr('y', '0')
  .attr('width', '10')
  .attr('height', '10')
  .attr('style', 'fill: pink;');

 // console.log(svg.data.containerId);

 // document.body.innerHTML = `
 // <svg width = "400" height = "400" style="border:2px solid red;">
 // <rect x="10" y="10" height="100" width="100" fill = "red"/>
 //   <svg x="0" y="140" height="200" width="200" fill = "red" style="background-color=pink;">
 //   <rect width="100%" height="100%" fill = "green"/>
 //   </svg>
 // </svg>

 // `;
}

function drawSvgMain() {
 const data = {};
 data.containerId = 'svgDiv';
 data.id = 'svgMain';
 data.width = 822;
 data.height = 422;
 data.viewBox = '0 0 100% 100% ';
 // data.viewbox = '0 0 10 100';
 data.style =
  'background-color: rgba(0,200,0,0); border: 0px solid green; padding:10px; box-sizing:border-box;';
 return new mySvg.Svg(data);
}

function drawSvg() {
 const data = {};
 data.containerId = 'svgMain';
 data.id = 'svg';
 data.x = 800 * 0.1;
 data.y = 400 * 0.1;
 data.width = 800;
 data.height = 400;
 const svg = new mySvg.Svg(data);
 drawRectangleInSvg();
}

function drawRectangleInSvg() {
 const data = {};
 data.containerId = 'svg';
 data.x = 1;
 data.y = data.x;
 data.width = 800 * 0.8 - 2 * data.x;
 data.height = 400 * 0.8 - 2 * data.y;
 data.stroke = 'red';
 data.strokeWidth = 2 * data.x;
 data.strokeOpacity = '1';
 data.fill = 'pink';
 data.fillOpacity = '0.3';
 const rectangleSvg = new mySvg.Rectangle(data);
}

function drawCircle() {
 const data = {};
 data.containerId = 'svg';
 data.cx = 150;
 data.cy = 150;
 data.r = 50;
 data.stroke = 'blue';
 data.strokeWidth = 4;
 data.fill = 'pink';
 data.fillOpacity = '1';
 data.strokeOpacity = '0.8';
 const circle = new mySvg.Circle(data);
}

function drawCircleWithLink() {
 var data = {};
 data.containerId = 'svg';
 data.href = 'http://google.com';
 data.id = 'link';
 const link = new mySvg.Link(data);

 data = {};
 data.containerId = 'link';
 data.class = 'link';
 data.cx = 300;
 data.cy = 150;
 data.r = 50;
 data.fill = 'red';
 data.fillOpacity = '1';
 data.strokeOpacity = '0.8';
 const circle = new mySvg.Circle(data);
}

function drawEllipseWithLink() {
 var data = {};
 data.containerId = 'svg';
 data.href = 'http://google.com';
 data.id = 'link';
 var link = new mySvg.Link(data);

 data = {};
 data.containerId = 'link';
 data.cx = 640 / 2;
 data.cy = 320 / 2;
 data.rx = 150;
 data.ry = 100;
 data.stroke = 'red';
 data.strokeWidth = 4;
 data.class = 'link';
 var ellipse1 = new mySvg.Ellipse(data);
}

function drawLine() {
 var data = {};
 data.containerId = 'svgMain';
 data.x1 = 0;
 data.y1 = 0;
 data.x2 = '100%';
 data.y2 = '100%';
 data.stroke = 'blue';
 data.strokeWidth = 10;
 var line1 = new mySvg.Line(data);
}

function drawPolyline() {
 var data = {};
 data.containerId = 'svgMain';
 data.points = '0,0 200,200 200,200 200,100 600,200';
 data.stroke = 'red';
 data.strokeWidth = 4;
 data.strokeDasharray = '20 20';
 data.fill = 'yellow';
 // data.strokeLinejoin = 'round';
 var polyline1 = new mySvg.Polyline(data);
}

function drawPolygon() {
 var data = {};
 data.containerId = 'svgMain';
 data.points = '20,100 600,300 400,40';
 data.fillOpacity = '0.3';
 data.strokeOpacity = '0.8';
 // data.style = 'fill: pink; stroke: green; stroke-width: 2;';
 var polygon1 = new mySvg.Polygon(data);
}

function drawPath() {
 var data = {};
 data.containerId = 'svgMain';
 data.d = 'M100 20 l150 50 h200 v100 l-100 100 Z';
 data.fillOpacity = '0.3';
 data.id = 'papa';
 // data.strokeOpacity = '0.8';
 // data.style = 'fill: pink; stroke:green; stroke-width:4,fill-opacity:0.1';
 var path1 = new mySvg.Path(data);
}

function drawText() {
 var data = {};
 data.containerId = 'svgMain';
 data.x = 640 / 2;
 data.y = 320 / 2;
 data.dx = 0;
 data.dy = 0;
 data.rotate = '0';
 data.textLength = 600;
 data.lengthAdjust = 'spacingAndGlyphs';
 data.text = 'I love SVG!';
 data.fontSize = 80;
 data.fill = 'pink';
 data.stroke = 'blue';
 var text1 = new mySvg.Text(data);
}

function drawTextPath() {
 var data = {};
 data.containerId = 'svgMain';
 data.d = 'M60 100 c400 -100 200 200 600 200';
 data.x = '0';
 data.y = '0';
 data.dx = '0';
 data.dy = '0';
 data.rotate = '0';
 data.text = 'I love SVG very much!';
 data.fontSize = '60';
 data.textLength = 600;
 data.lengthAdjust = 'spacingAndGlyphs';
 data.id = {};
 data.id.path = 'amit';
 data.style = {};
 data.style.path = 'fill:none; stroke:green; stroke-width:2';
 data.style.textPath =
  'fill:pink; stroke:blue; stroke-width:2; font-weight:bold;';
 var textPath = new mySvg.TextPath(data);
}

function drawGrid() {
 var grid = {};
 grid.containerId = 'svgMain';
 grid.minorNumX = 5;
 grid.minorNumY = 5;
 grid.majorNumX = 10;
 grid.majorNumY = 10;

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

function drawTriangle(width, height) {
 const x1 = 0.3 * width;
 const y1 = 0.3 * height;
 const x2 = 0.6 * width;
 const y2 = 0.3 * height;
 const x3 = 0.4 * width;
 const y3 = 0.9 * height;

 const points = ` ${x1}, ${y1}, ${x2}, ${y2}, ${x3}, ${y3}`;
 const triangle = new mySvg.Triangle(x1, y1, x2, y2, x3, y3);

 // Print Values of Triangle
 // console.log(points);
 // console.log('aa = ' + triangle.a);
 // console.log('bb = ' + triangle.b);
 // console.log('cc = ' + triangle.c);
 // console.log('pp = ' + triangle.P);
 // console.log('ss = ' + triangle.s);
 // console.log('AA = ' + triangle.area);
 // console.log('aA = ' + triangle.angA);
 // console.log('aB = ' + triangle.angB);
 // console.log('aC = ' + triangle.angC);
 // console.log('cx = ' + triangle.inCx);
 // console.log('cy = ' + triangle.inCy);
 // console.log('r = ' + triangle.inR);
 // console.log('Cx = ' + triangle.outCx);
 // console.log('Cy = ' + triangle.outCy);
 // console.log('R = ' + triangle.outR);

 const data = {};
 data.containerId = 'svgMain-svg';
 data.transform = 'matrix(1 0 0 -1 0 ' + height + ')';

 // Point A
 data.cx = x1;
 data.cy = y1;
 data.r = 8;
 data.stroke = 'black';
 data.strokeWidth = '2';
 data.fill = 'pink';
 const p1 = new mySvg.Circle(data);

 // Point B
 data.cx = x2;
 data.cy = y2;
 data.fill = 'lime';
 const p2 = new mySvg.Circle(data);

 // Point C
 data.cx = x3;
 data.cy = y3;
 data.fill = 'cyan';
 const p3 = new mySvg.Circle(data);

 // Triangle
 data.points = points;
 data.stroke = 'green';
 data.strokeWidth = 5;
 data.fill = 'none';
 const polygon = new mySvg.Polygon(data);

 // In Circle
 data.cx = triangle.inCx;
 data.cy = triangle.inCy;
 data.r = triangle.inR;
 data.stroke = 'blue';
 data.strokeDasharray = `${data.strokeWidth} ${data.strokeWidth}`;
 const inCircle = new mySvg.Circle(data);

 // Out Circle
 data.cx = triangle.outCx;
 data.cy = triangle.outCy;
 data.r = triangle.outR;
 data.stroke = 'red';
 data.fill = 'none';
 const outCircle = new mySvg.Circle(data);
}
