import * as mySvg from '../dist/svg.min.js';

window.onload = (event) => {
 var html = new mySvg.Html();
 html.newHead(document.body, 'Amit M Manthanwar');

 drawDiv();

};

function drawDiv() {
 var data = {};
 data.containerId = 'body';
 data.container = document.getElementById(data.containerId);
 data.id = 'svgDiv';
 data.width = '848px';
 data.height = '448px';
 data.style =
  'border: 2px solid red; padding: 10px;box-sizing:border-box; transform: scale(1, 1);';
 var div = new mySvg.Div(data);
}

function drawSvgMain() {
 let data = {};
 data.containerId = 'svgDiv';
 data.id = 'svgMain';
 data.width = '100%';
 data.height = '100%';
 data.viewbox = '0 0 100% 100% ';
 // data.viewbox = '0 0 100 100';
 data.style =
  'background-color: rgba(0,200,0,0); border: 2px solid green; padding:10px; box-sizing:border-box;';
 var svgText = new mySvg.Svg(data);
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
