// =============================================================================
// File Name  : demo-plot-pie.js
// Description: Draw Pie Chart using JS-SVG-Client
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
// 01-Nov-2024   | AMM | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

import dataTemplate from './demo-data-template.js';
// import Pie from './src-plot/Pie.js';
import Pie from './Pie.js';

window.onload = (event) => {
 document.title = 'SVG';
 dataTemplate.renderBody('demo-plot-pie.html');

 // const main = document.getElementsByTagName('main')[0];
 // main.innerHTML = 'Hello World';

 const data = {
  containerId: 'main',
  // divMainBox: { transform: 'scale(1.5)' },
  // divMainObj: { style: 'border: 1px solid green;' },
  // divMainSvg: { style: 'border: 1px solid blue;' },
  // divMainKey: { style: 'border: 1px solid red;' },

  // gridOn: false,
  numB: 3,
  clrB: 'pink',
  clrH: 'maroon'
 };

 // data.dataHasHeader = false;
 data.data = `Sport,Votes
Polo,5
Hockey,35
Cricket,30
Football,20
Basketball,20
Volleyball,10
`;

 data.title = 'Favorite Sports Percentage';
 data.notes = 'Imagine a surveys of favorite Sports of 100 people';

 const pie = new Pie(data);
};
