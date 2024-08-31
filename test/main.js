// =============================================================================
// File Name     : main.js
// Description   : Main client side JavaScript
// -----------------------------------------------------------------------------
// Author        : Amit Manohar Manthanwar
// Mailer        : manthanwar@hotmail.com
// Mobile        : +91.853.081.3398
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
// 23-Aug-2024   | AMM     | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

// import data from './data.js';
import html from './html.js';

// import { Circle, Rectangle } from './SvgMaster.js';

import * as mySvg from './SvgMain.js';

window.onload = (event) => {
 // htmlTags();

 drawSvg();
};

function htmlTags() {
 var data = {};
 data.title = 'My SVG';
 data.head1 = 'Create SVG using JavaScript';

 document.title = data.title;

 html.newHead(document.body, data.head1);
 // const items = `amit
 // ream
 // sia
 // gita  `;
 // html.newUl(document.body, items);
 // console.log(document.title);
 // html.aaa(document.body);
}

function drawSvg() {
 document.body.id = 'body';

 drawDiv();

 drawSvgMain();


 // drawRectangle();
 // drawCircle();
 // drawEllipse();

 // drawLine();
 // drawPolyline();

 // drawPolygon();

 // drawPath();

 // drawText();

 // drawTextPath();

 drawGrid();

 drawTriangle();

 // drawNestedDiv();
}

function drawDiv() {
 var data = {};
 data.containerId = 'body';
 data.id = 'svgDiv';
 data.width = '848px';
 data.height = '448px';
 data.style = 'border: 2px solid red; padding: 10px;box-sizing:border-box; transform: scale(1, 1);';
 var div = new mySvg.Div(data);
}

function drawSvgMain() {
 let data = {};
 data.containerId = 'svgDiv';
 data.id = 'svgText';
 data.width = '100%';
 data.height = '100%';
 data.viewbox = '0 0 100% 100% ';
 // data.viewbox = '0 0 100 100';
 data.style =
  'background-color: rgba(0,200,0,0); border: 2px solid green; padding:10px; box-sizing:border-box;';
 var svgText = new mySvg.Svg(data);

 data.containerId = 'svgText';
 data.id = 'svgMain';
 data.x = '10%';
 data.y = '10%';
 data.width = '80%';
 data.height = '80%';
 data.style =
  'background-color: rgba(200,0,0,0.2); border: 0px solid blue; padding:0px; box-sizing:border-box;';
 var svgMain = new mySvg.Svg(data);

 // console.log(svgText.getSizeSvg('svgDiv'));
  // console.log(svgText.getSizeSvg('svgText'));
  // console.log(svgMain.getSizeSvg('svgMain'));


 data.containerId = 'svgMain';
 data.strokeWidth = 0.1;
 data.x = data.strokeWidth;
 data.y = data.x;
 data.width = 640 - 2 * data.x;
 data.height = 320 - 2 * data.x;
 data.stroke = 'red';
 // data.strokeWidth = 2 * data.x;
 data.strokeOpacity = 1;
 data.fill = 'yellow';
 data.fillOpacity = '0.04';
 var rectangle1 = new mySvg.Rectangle(data);


}

function drawRectangle() {
 var data = {};
 data.containerId = 'svgMain';
 data.x = 2;
 data.y = data.x;
 data.width = 640 - 2 * data.x;
 data.height = 320 - 2 * data.x;
 data.stroke = 'red';
 data.strokeWidth = 2 * data.x;
 data.strokeOpacity = '1';
 data.fill = 'pink';
 data.fillOpacity = '0.3';
 var rectangle1 = new mySvg.Rectangle(data);

 data.x = '100';
 data.y = '0';
 data.rx = '0';
 data.ry = '0';
 data.width = '40';
 data.height = '40';
 data.strokeWidth = '0';
 data.fill = 'red';
 data.fillOpacity = '1';
 var rectangle12 = new mySvg.Rectangle(data);
}

function drawCircle() {
 var data = {};
 data.containerId = 'svgMain';
 data.href = 'http://google.com';
 data.id = 'link';
 var link = new mySvg.Link(data);

 data.containerId = 'link';
 data.cx = 320;
 data.cy = 160;
 data.r = 60;
 data.fillOpacity = '1';
 data.strokeOpacity = '0.8';
 var circ1 = new mySvg.Circle(data);
}

function drawEllipse() {
 var data = {};
 data.containerId = 'svgMain';
 data.href = 'http://google.com';
 data.id = 'link';
 var link = new mySvg.Link(data);

 var data = {};
 data.containerId = 'link';
 data.cx = 640 / 2;
 data.cy = 320 / 2;
 data.rx = 150;
 data.ry = 100;
 data.stroke = 'red';
 data.strokeWidth = 4;
 var ellipse1 = new mySvg.Ellipse(data);
}

function drawLine() {
 var data = {};
 data.containerId = 'svgMain';
 data.x1 = 0;
 data.y1 = 0;
 data.x2 = 100;
 data.y2 = '100%';
 data.stroke = 'blue';
 data.strokeWidth = 10;
 var line1 = new mySvg.Line(data);

 // console.log(line1.obj);

 // line1.x1 = 0;
 // line1.y1 = 0;
 // line1.x2 = 100;
 // line1.y2 = 100;
 // line1.stroke = 'blue';
 // line1.strokeLinecap = 'square';
 // console.log(line1.x1);
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

 // console.log('data = ' + polyline1.data);
 // console.log(polyline1.data);
 // console.log(polyline1.obj);
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

 var text1 = new mySvg.Text(data);

 // console.log(text1.obj);
 // text1.transform = 'rotate(40 400,200)';
 // text1.fill = 'red';
 // text1.stroke = 'blue';
 // text1.strokeWidth = '1px';
 // text1.fontSize = '120';
 // text1.fontWeight = 'bold';

 // text1.fontSize = '100';
 // text1.fill = 'lime';

 // console.log(text1.fontSize);
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
 data.style = {};
 data.style.path = 'fill:none; stroke:green ; stroke-width:2';
 data.style.textPath =
  'fill:pink; stroke:blue; stroke-width:2; font-weight:bold;';
 var text1 = new mySvg.TextPath(data);

 // text1.setTextLength(300);
 // text1.setTextLengthAdjust('spacingAndGlyphs');

 // text1.objTextPath.removeAttribute('path');
 // text1.setTextHref('#papa');
}

function drawGrid() {
 var grid = {};
 grid.containerId = 'svgMain';

 grid.minorNumX = 5;
 grid.minorNumY = 5;
 // grid.minorStroke = 'blue';
 // grid.minorStrokeWidth = '1';
 // grid.minorStrokeOpacity = '0.5';

 grid.majorNumX = 10;
 grid.majorNumY = 10;
 // grid.majorStroke = 'red';
 // grid.majorStrokeWidth = '1';
 // grid.majorStrokeOpacity = '1';

 var gridLine = new mySvg.Grid(grid);

 // gridLine.majorX[3].style = 'stroke:green; stroke-width:4;';
 // gridLine.minorX[1].style = 'stroke:green; stroke-width:4;';
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

function drawTriangle() {
 const width = 640;
 const height = 320;
 const x1 = 0.3 * width;
 const y1 = 0.4 * height;
 const x2 = 0.7 * width;
 const y2 = 0.4 * height;
 const x3 = 0.5 * width;
 const y3 = 0.9 * height;

 const points = ` ${x1}, ${y1}, ${x2}, ${y2}, ${x3}, ${y3}`;
 const triangle = new mySvg.Triangle(x1, y1, x2, y2, x3, y3);

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
 data.containerId = 'svgMain';
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
