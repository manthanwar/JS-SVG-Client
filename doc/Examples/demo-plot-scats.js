// =============================================================================
// File Name  : demo-plot-scats.js
// Description: Draw Scatter Chart using JS-SVG-Client and Scatter.js Class
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
// 04-Nov-2024   | AMM | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

import dataTemplate from './demo-data-template.js';
// import Scatter from './src-plot/Scatter.js';
import Scatter from './Scatter.js';

window.onload = (event) => {
 document.title = 'SVG';
 dataTemplate.renderBody('demo-plot-scats.html');

 const data = {
  divMainBox: {
   containerId: 'main',
   id: 'divMainBox'
  }
 };

 // data.colors = ['red', 'green', 'blue', 'teal', 'purple', 'maroon'];

 data.grid = {};
 data.grid.majorNumX = 15;
 data.grid.majorNumY = 6;
 data.xOff = 0;
 data.dotSize = 8;
 data.yLabOff = 0;

 // data.hasHeader = false;

 //region dataset 1
 data.csvDataSet_1 = `x	,	y
10	,	8.04
8	,	6.95
13	,	7.58
9	,	8.81
11	,	8.33
14	,	9.96
6	,	7.24
4	,	4.26
12	,	10.84
7	,	4.82
5	,	5.68
`;
 //endregion

 //region dataset 2
 data.csvDataSet_2 = `x	,	y
10	,	9.14
8	,	8.14
13	,	8.74
9	,	8.77
11	,	9.26
14	,	8.1
6	,	6.13
4	,	3.1
12	,	9.13
7	,	7.26
5	,	4.74
`;
 //endregion

 //region dataset 3
 data.csvDataSet_3 = `x	,	y
10	,	7.46
8	,	6.77
13	,	12.74
9	,	7.11
11	,	7.81
14	,	8.84
6	,	6.08
4	,	5.39
12	,	8.15
7	,	6.42
5	,	5.73
`;
 //endregion

 //region dataset 4
 data.csvDataSet_4 = `x	,	y
8	,	6.58
8	,	5.76
8	,	7.71
8	,	8.84
8	,	8.47
8	,	7.04
8	,	5.25
19	,	12.5
8	,	5.56
8	,	7.91
8	,	6.89
`;
 //endregion

 //region dataset random
 data.randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
 };

 data.randomFloat = (min, max) => {
  return Math.random() * (max - min) + min;
 };

 let dataset = [];
 for (let i = 0; i < 30; i++) {
  // const x = data.randomInteger(1, 14);
  // const y = data.randomInteger(1, 5);
  const x = data.randomFloat(1, 14);
  const y = data.randomFloat(1, 5);
  dataset.push([x, y]);
 }
 data.csvDataSet_5 = dataset.map((item) => item.join(',')).join('\n');
 //endregion

 data.csv = data.csvDataSet_1;

 data.title =
  "<a href='https://en.wikipedia.org/wiki/Anscombe%27s_quartet' target='_blank'>Dataset of Anscombe's quartet</a>";
 data.notes = "Anscombe's quartet";

 const main = document.getElementsByTagName('main')[0];
 main.innerHTML += '<h3 style="text-align:center">' + data.title + '</h3>';

 const bar = new Scatter(data);
};
