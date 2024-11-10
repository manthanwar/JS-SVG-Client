// =============================================================================
// File Name  : demo-plot-lines.js
// Description: Draw Line Plot using JS-SVG-Client and Plot.js
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
// 06-Nov-2024   | AMM | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

import dataTemplate from './demo-data-template.js';
import Line from './src-plot/Line.js';

window.onload = (event) => {
 document.title = 'SVG';
 dataTemplate.renderBody('demo-plot-bubble.html');

 // const main = document.getElementsByTagName('main')[0];
 // main.innerHTML = 'Hello World';

 const data = {
  divMainBox: {
   containerId: 'main',
   id: 'divMainBox'
  },
  // gridOn: false,
  numB: 3,
  clrB: 'pink',
  clrH: 'maroon'
 };

 data.grid = {};
 data.grid.majorNumX = 10;
 data.grid.majorNumY = 10;
 data.grid.axisLabelX = { text: 'Daily fat intake (g)' };
 data.grid.axisLabelY = { text: 'Daily sugar intake (g)' };
 data.grid.title = { text: 'Daily sugar and fat intake by country' };
 data.grid.title = {
  text: 'Daily sugar and fat intake per country'
 };

 data.bubbleMin = 5;
 data.bubbleMax = 30;
 data.xOff = 0;
 data.yLabOff = 0;

 // data.hasHeader = false;
 data.csv = `x	,	y	,	z	,	Alpha2	,	Country
63.4	,	 51.8	,	15.40	,	PT	,	Portugal
64.0	,	 82.9	,	31.30	,	NZ	,	New Zealand
65.4	,	 50.8	,	28.50	,	HU	,	Hungary
65.5	,	126.4	,	35.30	,	US	,	United States
68.6	,	 20.0	,	16.00	,	RU	,	Russia
69.2	,	 57.6	,	10.40	,	IT	,	Italy
71.0	,	 93.2	,	24.70	,	UK	,	United Kingdom
73.5	,	 83.1	,	10.00	,	NO	,	Norway
74.2	,	 68.5	,	14.50	,	FR	,	France
78.4	,	 70.1	,	16.60	,	ES	,	Spain
80.3	,	 86.1	,	11.80	,	SE	,	Sweden
80.4	,	102.5	,	12.00	,	NL	,	Netherlands
80.8	,	 91.5	,	15.80	,	FI	,	Finland
86.5	,	102.9	,	14.70	,	DE	,	Germany
95.0	,	 95.0	,	13.80	,	BE	,	Belgium
65.0	,	 95.0	,	3.80	,	BE	,	Belgium
`;

 data.title = `<a href="https://www.highcharts.com/demo/highcharts/bubble" target="_blank">Daily Sugar and fat intake per country</a> & <a href="https://www.everviz.com/chart-examples/bubble-and-scatter-plot-charts/sugar-and-fat-intake-per-country-bubble-chart/" target="_blank">also see</a>`;

 data.notes = 'Daily Sugar and fat intake per country';

 const main = document.getElementsByTagName('main')[0];
 main.innerHTML += '<h3 style="text-align:center">' + data.title + '</h3>';

 // const line = new Line(data);
};
