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
// import Bar from './src-plot/Bar.js';
import Bar from './Bar.js';

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

 // data.colors = [
 //  'rgba(255, 99, 132, 0.5)',
 //  'rgba(255, 159, 64, 0.5)',
 //  'rgba(255, 205, 86, 0.5)',
 //  'rgba(75, 192, 192, 0.5)',
 //  'rgba(54, 162, 235, 0.5)',
 //  'rgba(153, 102, 255, 0.5)',
 //  'rgba(201, 203, 207, 0.5)'
 // ];

 // data.strokes = [
 //  'rgb(255, 99, 132)',
 //  'rgb(255, 159, 64)',
 //  'rgb(255, 205, 86)',
 //  'rgb(75, 192, 192)',
 //  'rgb(54, 162, 235)',
 //  'rgb(153, 102, 255)',
 //  'rgb(201, 203, 207)'
 // ];

 // data.strokeWidth = 1;
 data.clrP = 'white';
 // data.clrV = 'black';

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
