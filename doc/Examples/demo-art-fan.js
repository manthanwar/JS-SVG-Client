// =============================================================================
// File Name : demo-fan.js
// Description   : Draw Ceiling Fan/Propeller using JS-SVG-Client
// -----------------------------------------------------------------------------
// Author: Amit Manohar Manthanwar
// WebURL: https://manthanwar.github.io
// -----------------------------------------------------------------------------
// Copyright : (c) 2024 Amit Manohar Manthanwar
// License   : MIT License
// ----------------------------------------------------------------------------
// This program can be redistributed and/or modified under the terms
// of the MIT License. For details see the file license.txt
// =============================================================================
// Revision Log  | Author  | Description
// --------------+---------+----------------------------------------------------
// 26-Oct-2024   | AMM | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

import dataTemplate from './demo-data-template.js';
import Fan from './Fan.js';

window.onload = (event) => {
 document.title = 'SVG';
const data ={};
data.title = 'amit'

 dataTemplate.renderBody('demo-art-fan.html');

 // const main = document.getElementsByTagName('main')[0];
 // main.innerHTML = 'Hello World';

 const dataFan = {
  divMainBox: {
   containerId: 'main',
   id: 'divMainBox'
  },
  gridOn: false,
  numB: 3,
  clrB: 'pink',
  clrH: 'maroon'
 };

 const fan = new Fan(dataFan);
};
