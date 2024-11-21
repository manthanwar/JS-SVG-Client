// =============================================================================
// File Name  : demo-gauge-radial.js
// Description: Draw Radial Gauge using JS-SVG-Client and Gauge.js
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
// 17-Nov-2024   | AMM | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

import dataTemplate from './demo-data-template.js';
import GaugeParent from './GaugeParent.js';
import dataGauge from './data-gauge.js';

window.onload = (event) => {
 dataTemplate.renderBody('demo-gauge-radial.html');
 const main = document.getElementsByTagName('main')[0];
 // main.innerHTML = 'Hello World';
 const data = dataGauge;
 main.innerHTML += '<h3 style="text-align:center">' + data.title + '</h3>';
 const gauge = new GaugeParent(data);
 // console.log('data = ' + data);


 console.log('width  = ' + gauge.data.width);
 console.log('height = ' + gauge.data.height);



 // console.log('box = ' + gauge.obj.divMainBox.obj.offsetWidth);
 // console.log('obj = ' + gauge.obj.divMainObj.obj.offsetWidth);
 // console.log('svg = ' + gauge.obj.svgMainSvg.obj.getBBox().width);
 // console.log(gauge.obj.svgMainSvg.obj.width.animVal.value);
 // console.log(gauge.obj.svgMainSvg.obj.height.baseVal.value);
};
