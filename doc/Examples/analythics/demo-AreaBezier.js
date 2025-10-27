// =============================================================================
// File Name  : demo-AreaBezier.js
// Description: Calculate Area of shape under Bezier Curve
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
// 06-Nov-2024   | AMM | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

import AreaBezier from './AreaBezier.js';

window.onload = (event) => {
 document.title = 'Area Bezier Curve';
 console.log('hello');

 const area = new AreaBezier();

 const dol = document.getElementById('pathA');

 let valArr = [1.2, 3.0, 0.5, 5.0, 4.0, 4.6, 4.0, 4.6];

 valArr = [4.0, 4.6, 4.0, 4.6, 4.8, 5.4, 6.0, 5.0];

 valArr = valArr.map((x) => x * 10);

 console.log(valArr);
 let dStr = 'M ' + valArr.slice(0, 2).join(' ');
 dStr += ' C ' + valArr.slice(2, valArr.length).join(' ') + ' Z';

 //  dol.setAttribute('d', 'M 12 30 C 5 50 40 46 40 46');

  // dol.setAttribute('d', dStr);

 const d = dol.getAttribute('d');
 console.log('dddd = ' + d);

 const element = document.getElementById('number_of_points');
 element.addEventListener('change', function () {
  var svg = document.getElementById('svg');
  var bezier_points = area.getBezierPathPoints(svg, 'path');
  // in this example there is only one bezier curve
  bezier_points = bezier_points[0];

  // number of approximation points
  var approx_points_num = parseInt(this.value);
  var approx_points = area.getBezierApproxPoints(
   bezier_points,
   approx_points_num
  );

  var doc = svg.ownerDocument;

  // remove polygon
  var polygons;
  while ((polygons = doc.getElementsByTagName('polygon')).length > 0) {
   polygons[0].parentNode.removeChild(polygons[0]);
  }

  // remove old circles
  var circles;
  while ((circles = doc.getElementsByTagName('circle')).length > 0) {
   circles[0].parentNode.removeChild(circles[0]);
  }

  // add new circles and create polygon
  var polygon_points = [];
  for (var i = 0; i < approx_points.length; i++) {
   let circle = doc.createElementNS('http://www.w3.org/2000/svg', 'circle');
   circle.setAttribute('cx', approx_points[i][0]);
   circle.setAttribute('cy', approx_points[i][1]);
   //  circle.setAttribute('r', 1);
   circle.setAttribute('r', 10);
   circle.setAttribute('fill', '#449944');
   svg.appendChild(circle);
   polygon_points.push(approx_points[i][0], approx_points[i][1]);
  }

  var polygon = doc.createElementNS('http://www.w3.org/2000/svg', 'polygon');
  polygon.setAttribute('points', polygon_points.join(' '));
  polygon.setAttribute('stroke', 'transparent');
  polygon.setAttribute('fill', '#cccc00');
  polygon.setAttribute('opacity', '0.7');
  svg.appendChild(polygon);

  doc.querySelector("output[name='points']").innerHTML = approx_points_num;
  doc.querySelector("output[name='area']").innerHTML = (area
   .polyArea(approx_points)/1000)
   .toFixed(1);
 });

 var event = new Event('change');
 element.dispatchEvent(event);
};
