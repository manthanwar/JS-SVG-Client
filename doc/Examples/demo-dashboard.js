// =============================================================================
// File Name  : demo-dashboard.js
// Description: Draw visualization dashboard using JS-SVG-Client
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
// 31-Oct-2024   | AMM | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

import * as mySvg from './svg.min.js';
import dataTemplate from './demo-data-template.js';
import Pie from './Pie.js';
import Bar from './Bar.js';
import Scatter from './Scatter.js';
import Line from './Line.js';

window.onload = (event) => {
 document.title = 'SVG';
 dataTemplate.renderBody('demo-dashboard.html');

 const main = document.getElementsByTagName('main')[0];
 main.innerHTML = dataTemplate.plotContainerInnerHTML;
 // main.style.border = '2px solid red;';

 pieBasic();
 pieBasic2();
 //  pieWedge();
 //  pieDonut();
 //  pieToPie();
 //  pieToBar();

 //  barAxisX();
 barAxisY();
 //  barClubX();
 //  barClubY();
 //  barHeapX();
 //  barHeapY();
 //  barCentX();
 //  barCentY();

 pltScats();
 pltLines();
 // pltSteps();
 // pltAreas();
 // pltTimes();
 // pltBlobs();
 //  pltCurve();
 //  pltError();
 //  pltWhisk();

 //  polLines();
 //  polScats();
 //  polBarsR();
 //  polRadar();

 //  gagRound();
 //  gagBarsX();
 //  gagBarsY();
};

function onclick(article, url) {
 const div = article.parentNode.parentNode;
 article.onclick = function (e) {
  // div.classList.toggle('divStyleToggle');
  window.location.href = url;
 };
}

//region piBasic
function pieBasic() {
 const article = document.getElementById('pie-basic');
 onclick(article, 'demo-plot-pie.html');
 // article.innerHTML = 'pie-basic';
 const data = {};
 data.containerId = 'pie-basic';
 data.divMainBox = {
  width: 400 + 'px',
  height: 400 + 'px',
  transform: 'scale(0.6)',
  style: `border: 0px solid red; padding: 0px;
   margin: -100px 0 0 -90px; box-shadow:none;`
 };

 data.divMainObj = {
  style: 'border: 0px solid green;  box-shadow:none;'
 };

 data.divMainKey = { style: 'display: none' };

 // data.dataHasHeader = false;
 data.data = `Sport,Votes
Polo,5
Hockey,35
Cricket,30
Football,20
Basketball,20
Volleyball,10
`;

 data.title = ' ';

 const pie = new Pie(data);

 // console.log(pie.data.divMainBox.containerId);
 // console.log(pie.data.divMainBox.id);
 // console.log(pie.data.grid.box.idSvg);

 // article.style.border = 'none';
 // article.parentNode.style.border = 'none';
 // article.parentNode.parentNode.style.border = 'none';
}
//endregion pieBasic

//region pieBasic2
function pieBasic2() {
 const article = document.getElementById('pie-basic2');
 onclick(article, 'demo-plot-pie.html');

 const data = {};
 data.containerId = 'pie-basic2';
 data.divMainBox = {
  width: 400 + 'px',
  height: 400 + 'px',
  transform: 'scale(0.6)',
  style: `border: 0px solid red; padding: 0px;
  margin: -100px 0 0 -90px;
  box-shadow:none;
 `
 };

 data.divMainObj = { style: 'box-shadow:none;' };
 data.divMainKey = { style: 'display: none' };
 data.title = ' ';
 //  data.data = `Sport,Votes
 // Polo,5
 // Hockey,35
 // Cricket,30
 // Football,20
 // Basketball,20
 // Volleyball,10
 // `;

 data.data = `Subject,Marks
Mathematics, 98
Science, 88
English, 65
Hindi, 70
`;

 data.clr = ['#ff0000ff', '#ff000099', '#ff000066', '#ff000033'];

 const pie2 = new Pie(data);

 // article.style.border = 'none';
 // article.parentNode.style.border = 'none';
 // article.parentNode.parentNode.style.border = 'none';
}
//endregion pieBasic2

function pieWedge() {
 const article = document.getElementById('pie-wedge');
 article.innerHTML = 'pie-wedge';
 onclick(article, 'demo-plot-pie.html');
}
function pieDonut() {
 const article = document.getElementById('pie-donut');
 article.innerHTML = 'pie-donut';
 onclick(article, 'demo-plot-pie.html');
}
function pieToPie() {
 const article = document.getElementById('pie-2-pie');
 article.innerHTML = 'pie-2-pie';
 onclick(article, 'demo-plot-pie.html');
}
function pieToBar() {
 const article = document.getElementById('pie-2-bar');
 article.innerHTML = 'pie-2-bar';
 onclick(article, 'demo-plot-pie.html');
}

function barAxisX() {
 const article = document.getElementById('bar-axisX');
 article.innerHTML = 'bar-axisX';
 onclick(article, 'demo-plot-bar-axisX.html');
}

//region barAxisY
function barAxisY() {
 const article = document.getElementById('bar-axisY');
 // article.innerHTML = 'bar-axisY';
 onclick(article, 'demo-plot-bar-axisY.html');

 const data = {};
 data.containerId = 'bar-axisY';
 data.divMainBox = {
  width: 400 + 'px',
  height: 400 + 'px',
  transform: 'scale(0.3)',
  style: `border: 0px solid red; padding: 0px;
  margin: -100px 0 0 -160px;
  box-shadow:none;
 `
 };

 data.gridOn = false;

 data.divMainObj = { style: 'box-shadow:none;' };
 data.divMainSvg = { style: 'border: none;' };
 data.divMainKey = { style: 'display: none' };
 data.title = ' ';
 data.data = `Sport,Votes
Polo,15
Hockey,35
Cricket,30
Football,20
`;
 // Basketball,20
 // Volleyball,10

 const bar = new Bar(data);

 // bar.obj.divMainBox.parentNode.style.border = 'none';
 article.style.border = 'none';
 // article.parentNode.style.border = 'none';
 // article.parentNode.parentNode.style.border = 'none';
}
//endregion barAxisY

function barClubX() {
 const article = document.getElementById('bar-clubX');
 article.innerHTML = 'bar-clubX';
 onclick(article, 'demo-plot-pie.html');
}
function barClubY() {
 const article = document.getElementById('bar-clubY');
 article.innerHTML = 'bar-clubY';
 onclick(article, 'demo-plot-pie.html');
}
function barHeapX() {
 const article = document.getElementById('bar-heapX');
 article.innerHTML = 'bar-heapX';
 onclick(article, 'demo-plot-pie.html');
}
function barHeapY() {
 const article = document.getElementById('bar-heapY');
 article.innerHTML = 'bar-heapY';
 onclick(article, 'demo-plot-pie.html');
}
function barCentX() {
 const article = document.getElementById('bar-centX');
 article.innerHTML = 'bar-centX';
 onclick(article, 'demo-plot-pie.html');
}
function barCentY() {
 const article = document.getElementById('bar-centY');
 article.innerHTML = 'bar-centY';
 onclick(article, 'demo-plot-pie.html');
}

//region plotScatter
function pltScats() {
 const article = document.getElementById('plt-scats');
 // article.innerHTML = 'plt-scats';
 onclick(article, 'demo-plot-scatter.html');

 const data = {};
 data.containerId = 'plt-scats';

 data.divMainBox = {
  width: '560px',
  height: '410px',
  transform: 'scale(0.6)',
  style: `border: 0px solid red; padding:0px;
  margin: -100px 0 0 -180px; box-shadow:none;
  `
 };

 data.divMainObj = {
  width: '560px',
  height: '410px',
  style: `border: 0px solid green; padding:0px;box-shadow:none; `
 };

 data.divMainSvg = {
  style: `border: 0px solid blue; padding:0px; box-shadow:none;`
 };

 data.dotSize = 18;
 data.gridOn = false;
 data.xOff = 0;
 data.yOff = -0.5;

 data.csv = `x	,	y
10	,	8.04
8	,	6.95
13	,	7.58
9	,	8.81
11	,	8.33
14	,	9.96
6	,	7.24
4	,	4.26
12	,	10.84
7	,	4.82
5	,	5.68
`;
 data.title = ' ';

 data.style = {
  fill: '#ff0000ff',
  fillOpacity: 1,
  stroke: 'blue',
  strokeWidth: 4,
  strokeOpacity: 1,
  size: 10
 };

 const scatter = new Scatter(data);
}
//endregion plotScatter

//region plotLines
function pltLines() {
 const article = document.getElementById('plt-lines');
 // article.innerHTML = 'plt-lines';
 onclick(article, 'demo-plot-lines.html');

 const data = {};
 data.containerId = 'plt-lines';

 data.divMainBox = {
  width: '560px',
  height: '410px',
  transform: 'scale(0.6)',
  style: `border: 0px solid red; padding:0px;
  margin: -120px 0 0 -130px; box-shadow:none;
  `
 };

 data.divMainObj = {
  width: '560px',
  height: '410px',
  style: `border: 0px solid green; padding:0px;box-shadow:none; `
 };

 data.divMainSvg = {
  style: `border: 0px solid blue; padding:0px; box-shadow:none;`
 };

 data.divMainKey = {
  style: `display:none;`
 };

 data.dotSize = 18;
 data.gridOn = false;
 data.xOff = 0;
 data.yOff = -0.5;

 data.csv = `Day, 'Guardians of the Galaxy','The Avengers',
1,  37.8, 80.8
2,  30.9, 69.5
3,  25.4,   57
4,  11.7, 18.8
5,  11.9, 17.6
6,   8.8, 13.6
7,   7.6, 12.3
8,  12.3, 29.2
9,  16.9, 42.9
10, 12.8, 30.9
`;
 data.title = ' ';

 // data.style = {
 //  fill: '#ff0000ff',
 //  fillOpacity: 1,
 //  stroke: 'blue',
 //  strokeWidth: 4,
 //  strokeOpacity: 1,
 //  size: 10
 // };

 data.option = {
  xOff: 0,
  yOff: 0,
  axisLimit: [0, 15, -10, 90],
  // hasHeader: false,
  markerOn: true,
  xAxisLabelOn: false,
  yAxisLabelOn: false,
  marker: {
   size: Array(3).fill(8),
   fill: ['pink', 'lime', 'cyan'],
   stroke: ['blue', 'black', 'red'],
   strokeWidth: Array(3).fill(4),
   strokeOpacity: [1, 1, 1],
   fillOpacity: [1, 1, 0.5]
  },
  line: {
   stroke: ['blue', 'maroon', 'purple'],
   strokeWidth: Array(3).fill(6),
   strokeOpacity: [1, 1, 1],
   strokeDasharray: ['1', '1', '1']
  }
 };

 const lines = new Line(data);
}
//endregion plotLines

function pltSteps() {
 const article = document.getElementById('plt-steps');
 article.innerHTML = 'plt-steps';
 onclick(article, 'demo-plot-pie.html');
}
function pltAreas() {
 const article = document.getElementById('plt-areas');
 article.innerHTML = 'plt-areas';
 onclick(article, 'demo-plot-pie.html');
}
function pltTimes() {
 const article = document.getElementById('plt-times');
 article.innerHTML = 'plt-times';
 onclick(article, 'demo-plot-pie.html');
}
function pltBlobs() {
 const article = document.getElementById('plt-blobs');
 article.innerHTML = 'plt-blobs';
 onclick(article, 'demo-plot-pie.html');
}
function pltCurve() {
 const article = document.getElementById('plt-curve');
 article.innerHTML = 'plt-curve';
 onclick(article, 'demo-plot-pie.html');
}
function pltError() {
 const article = document.getElementById('plt-error');
 article.innerHTML = 'plt-error';
 onclick(article, 'demo-plot-pie.html');
}
function pltWhisk() {
 const article = document.getElementById('plt-whisk');
 article.innerHTML = 'plt-whisk';
 onclick(article, 'demo-plot-pie.html');
}
function polLines() {
 const article = document.getElementById('pol-lines');
 article.innerHTML = 'pol-lines';
 onclick(article, 'demo-plot-pie.html');
}
function polScats() {
 const article = document.getElementById('pol-scats');
 article.innerHTML = 'pol-scats';
 onclick(article, 'demo-plot-pie.html');
}
function polBarsR() {
 const article = document.getElementById('pol-barsR');
 article.innerHTML = 'pol-bar-r';
 onclick(article, 'demo-plot-pie.html');
}
function polRadar() {
 const article = document.getElementById('pol-radar');
 article.innerHTML = 'pol-radar';
 onclick(article, 'demo-plot-pie.html');
}
function gagRound() {
 const article = document.getElementById('gag-round');
 article.innerHTML = 'gag-round';
 onclick(article, 'demo-plot-pie.html');
}
function gagBarsX() {
 const article = document.getElementById('gag-barsX');
 article.innerHTML = 'gag-bar-x';
 onclick(article, 'demo-plot-pie.html');
}
function gagBarsY() {
 const article = document.getElementById('gag-barsY');
 article.innerHTML = 'gag-bar-y';
 onclick(article, 'demo-plot-pie.html');
}
