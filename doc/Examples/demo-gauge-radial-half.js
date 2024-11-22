// =============================================================================
// File Name  : demo-gauge-radial-half.js
// Description: Draw Radial Gauge Half Circle using JS-SVG-Client and Gauge.js
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
// 21-Nov-2024   | AMM | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

import dataTemplate from './demo-data-template.js';
// import GaugeParent from './GaugeParent.js';
// import dataGauge from './data-gaugeParent.js';
import GaugeRadialHalf from './GaugeRadialHalf.js';
import gaugeRadialHalfData from './demo-gauge-radial-half-data.js';

window.onload = (event) => {
 dataTemplate.renderBody('demo-gauge-radial-half.html');
 const main = document.getElementsByTagName('main')[0];

 const data = gaugeRadialHalfData;
 main.innerHTML += '<h3 style="text-align:center">' + data.title + '</h3>';
 const gauge = new GaugeRadialHalf(data);
 gauge.drawObject(80);

 function getValue() {
  const [min, max] = [0, 180];
  const val = Math.floor(Math.random() * (max - min + 1)) + min;
  gauge.drawObject(val);
 }

 setInterval(getValue, 1000);
};
