import * as mySvg from '../../dist/svg.min.js';

window.onload = (event) => {
 createDiv();
 createSvg();
 createCircle();
};

function createDiv() {
 var data = {
  containerId: 'body',
  id: 'svgDiv'
 };
 var svgDiv = new mySvg.Div(data);
}

function createSvg() {
 var data = {
  containerId: 'svgDiv',
  id: 'svgMain',
  width: 200,
  height: 200,
  style: 'border: 2px solid red'
 };
 var svgMain = new mySvg.Svg(data);
}

function createCircle() {
 var data = {
  containerId: 'svgMain',
  id: 'circle',
  cx: 100,
  cy: 100,
  r: 50,
  stroke: 'blue',
  strokeWidth: 10,
  fill: 'pink'
 };
 var circle = new mySvg.Circle(data);

 // circle.attr('fill', 'lime');
 // circle.stroke = 'green';

 // console.log(circle.fill);
 // console.log(circle.obj)
}
