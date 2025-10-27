// =============================================================================
// File Name  : demo-gauge-radial-progress.js
// Description: Draw Radial Gauge using JS-SVG-Client and Gauge.js
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
// 18-Nov-2024   | AMM | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

import dataTemplate from './demo-data-template.js';
// import GaugeParent from './GaugeParent.js';
// import dataGauge from './data-gaugeParent.js';
import GaugeRadialProgress from './GaugeRadialProgress.js';
import gaugeRadialProgressData from './demo-gauge-radial-progress-data.js';

window.onload = (event) => {
 dataTemplate.renderBody('demo-gauge-radial-progress.html');
 const main = document.getElementsByTagName('main')[0];

 const data = gaugeRadialProgressData;
 main.innerHTML += '<h3 style="text-align:center">' + data.title + '</h3>';
 const gauge = new GaugeRadialProgress(data);
 gauge.drawObject(5);

 function getValue() {
  const [min, max] = [0, 100];
  const val = Math.floor(Math.random() * (max - min + 1)) + min;
  gauge.drawObject(val);
 }

 setInterval(getValue, 1000);
};
