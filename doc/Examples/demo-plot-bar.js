// =============================================================================
// File Name  : demo-plot-bar.js
// Description: Draw bar chart using JS-SVG-Client
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
// 02-Nov-2024   | AMM | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

import dataTemplate from './demo-data-template.js';
import Bar from './src-plot/Bar.js';

window.onload = (event) => {
 document.title = 'SVG';
 dataTemplate.renderBody('demo-plot-bar-axisY.html');

 const data = {
  divMainBox: {
   containerId: 'main',
   id: 'divMainBox'
  }
 };

 // data.colors = ['red', 'green', 'blue', 'teal', 'purple', 'maroon'];

 data.data = `Sport,Votes
Polo,5
Hockey,15
Cricket,30
Football,20
Basketball,20
Volleyball,10
`;

 data.title = 'Survey of favorite sport';
 data.notes = 'Imagine a survey of favorite sport of 100 people';

 const main = document.getElementsByTagName('main')[0];
 main.innerHTML = '<h3 style="text-align:center">' + data.title + '</h3>';

 const bar = new Bar(data);
};
