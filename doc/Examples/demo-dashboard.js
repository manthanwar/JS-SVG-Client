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
 pieWedge();
 pieDonut();
 pieToPie();
 pieToBar();

 barAxisX();
 barAxisY();
 barClubX();
 barClubY();
 barHeapX();
 barHeapY();
 barCentX();
 barCentY();

 pltScats();
 pltLines();
 pltSteps();
 pltAreas();
 pltTimes();
 pltBlobs();
 pltCurve();
 pltError();
 pltWhisk();

 polLines();
 polScats();
 polBarsR();
 polRadar();

 gagRound();
 gagBarsX();
 gagBarsY();
};

function doubleClick(article) {
 const div = article.parentNode.parentNode;
 article.ondblclick = function (e) {
  div.classList.toggle('divStyleToggle');
 };
}
function pieBasic() {
 const article = document.getElementById('pie-basic');
 article.innerHTML = 'pie-basic';
 doubleClick(article);
}
function pieWedge() {
 const article = document.getElementById('pie-wedge');
 article.innerHTML = 'pie-wedge';
  doubleClick(article);
}
function pieDonut() {
 const article = document.getElementById('pie-donut');
 article.innerHTML = 'pie-donut';
}
function pieToPie() {
 const article = document.getElementById('pie-2-pie');
 article.innerHTML = 'pie-2-pie';
}
function pieToBar() {
 const article = document.getElementById('pie-2-bar');
 article.innerHTML = 'pie-2-bar';
}
function barAxisX() {
 const article = document.getElementById('bar-axisX');
 article.innerHTML = 'bar-axisX';
}
function barAxisY() {
 const article = document.getElementById('bar-axisY');
 article.innerHTML = 'bar-axisY';
}
function barClubX() {
 const article = document.getElementById('bar-clubX');
 article.innerHTML = 'bar-clubX';
}
function barClubY() {
 const article = document.getElementById('bar-clubY');
 article.innerHTML = 'bar-clubY';
}
function barHeapX() {
 const article = document.getElementById('bar-heapX');
 article.innerHTML = 'bar-heapX';
}
function baryheap() {
 const article = document.getElementById('bar-heapY');
 article.innerHTML = 'bar-heapY';
}
function barCentX() {
 const article = document.getElementById('bar-centX');
 article.innerHTML = 'bar-centX';
}
function barCentY() {
 const article = document.getElementById('bar-centY');
 article.innerHTML = 'bar-centY';
}
function pltScats() {
 const article = document.getElementById('plt-scats');
 article.innerHTML = 'plt-scats';
}
function pltLines() {
 const article = document.getElementById('plt-lines');
 article.innerHTML = 'plt-lines';
}
function pltSteps() {
 const article = document.getElementById('plt-steps');
 article.innerHTML = 'plt-steps';
}
function pltAreas() {
 const article = document.getElementById('plt-areas');
 article.innerHTML = 'plt-areas';
}
function pltTimes() {
 const article = document.getElementById('plt-times');
 article.innerHTML = 'plt-times';
}
function pltBlobs() {
 const article = document.getElementById('plt-blobs');
 article.innerHTML = 'plt-blobs';
}
function pltCurve() {
 const article = document.getElementById('plt-curve');
 article.innerHTML = 'plt-curve';
}
function pltError() {
 const article = document.getElementById('plt-error');
 article.innerHTML = 'plt-error';
}
function pltWhisk() {
 const article = document.getElementById('plt-whisk');
 article.innerHTML = 'plt-whisk';
}
function polLines() {
 const article = document.getElementById('pol-lines');
 article.innerHTML = 'pol-lines';
}
function polScats() {
 const article = document.getElementById('pol-scats');
 article.innerHTML = 'pol-scats';
}
function polBarsR() {
 const article = document.getElementById('pol-barsR');
 article.innerHTML = 'pol-bar-r';
}
function polRadar() {
 const article = document.getElementById('pol-radar');
 article.innerHTML = 'pol-radar';
}
function gagRound() {
 const article = document.getElementById('gag-round');
 article.innerHTML = 'gag-round';
}
function gagBarsX() {
 const article = document.getElementById('gag-barsX');
 article.innerHTML = 'gag-bar-x';
}
function gagBarsY() {
 const article = document.getElementById('gag-barsY');
 article.innerHTML = 'gag-bar-y';
}
