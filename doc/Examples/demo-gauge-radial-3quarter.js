// =============================================================================
// File Name  : demo-gauge-radial-3quarter.js
// Description: Draw Radial Gauge 3 Quarter using JS-SVG-Client and Gauge.js
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
// 22-Nov-2024   | AMM | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

import dataTemplate from './demo-data-template.js';
import GaugeRadial3Q from './GaugeRadial3Q.js';
import gaugeRadial3qData from './demo-gauge-radial-3quarter-data.js';

window.onload = (event) => {
 dataTemplate.renderBody('demo-gauge-radial-3quarter.html');
 const main = document.getElementsByTagName('main')[0];

 const data = gaugeRadial3qData;
 main.innerHTML += '<h3 style="text-align:center">' + data.title + '</h3>';
 const gauge = new GaugeRadial3Q(data);
 // gauge.drawObject(80);

 function getValue() {
  const [min, max] = [0, 270];
  const val = Math.floor(Math.random() * (max - min + 1)) + min;
  gauge.drawObject(val);
 }

 setInterval(getValue, 1000);
};