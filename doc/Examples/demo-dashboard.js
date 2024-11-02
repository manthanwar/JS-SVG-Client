// =============================================================================
// File Name  : demo-dashboard.js
// Description: Draw visualization dashboard using JS-SVG-Client
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
// 31-Oct-2024   | AMM | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

import * as mySvg from '../../dist/svg.min.js';
import dataTemplate from './demo-data-template.js';
import Pie from './src-plot/Pie.js';

window.onload = (event) => {
 document.title = 'SVG';
 dataTemplate.renderBody('demo-dashboard.html');

 const main = document.getElementsByTagName('main')[0];
 main.innerHTML = dataTemplate.plotContainerInnerHTML;
 // main.style.border = '2px solid red;';

 pieBasic();
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
 pltSteps();
 pltAreas();
 pltTimes();
 pltBlobs();
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
function pieBasic() {
 const article = document.getElementById('pie-basic');
 article.innerHTML = 'pie-basic';
 onclick(article, 'demo-plot-pie.html');
}
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
function barAxisY() {
 const article = document.getElementById('bar-axisY');
 article.innerHTML = 'bar-axisY';
 onclick(article, 'demo-plot-bar-axisY.html');
}
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
function pltScats() {
 const article = document.getElementById('plt-scats');
 article.innerHTML = 'plt-scats';
 onclick(article, 'demo-plot-pie.html');
}
function pltLines() {
 const article = document.getElementById('plt-lines');
 article.innerHTML = 'plt-lines';
 onclick(article, 'demo-plot-pie.html');
}
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
