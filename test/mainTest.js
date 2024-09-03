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
 drawTextPath();
};

function drawHtml() {
 var html = new mySvg.Html();
 html.newHead(document.body, 'Draw Using JS-SVG-Client');
}

function drawDiv() {
 const data = {};
 data.containerId = 'body';
 data.id = 'svgDiv';
 data.width = '848px';
 data.height = '448px';
 data.transform = 'scale(1, 1)';
 data.style = 'border: 2px solid red; padding: 10px;box-sizing:border-box;';
 return new mySvg.Div(data);
}

function drawSvgMain() {
 const data = {};
 data.containerId = 'svgDiv';
 data.id = 'svgMain';
 data.width = 824;
 data.height = 424;
 data.viewBox = '0 0 100% 100% ';
 // data.viewbox = '0 0 10 100';
 data.style =
  'background-color: rgba(0,200,0,0); border: 2px solid green; padding:10px; box-sizing:border-box;';
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
 console.log('---------------------------------');
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
 data.style.path = 'fill:none; stroke:green; stroke-width:20';
 // data.style.textPath =
 // 'fill:pink; stroke:blue; stroke-width:2; font-weight:bold;';
 var text1 = new mySvg.TextPath(data);
}
