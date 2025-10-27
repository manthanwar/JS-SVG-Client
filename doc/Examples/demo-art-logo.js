// =============================================================================
// File Name  : demo-art-logo.js
// Description: Draw Art Logo using JS-SVG-Client and Gauge.js
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
// 23-Nov-2024   | AMM | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

import dataTemplate from './demo-data-template.js';
import ArtLogo from './ArtLogo.js';
import artLogoData from './demo-art-logo-data.js';

window.onload = (event) => {
 dataTemplate.renderBody('demo-art-logo.html');
 const main = document.getElementsByTagName('main')[0];

 const data = artLogoData;
 main.innerHTML += '<h3 style="text-align:center">' + data.title + '</h3>';
 const logo = new ArtLogo(data);



 // function getValue() {
 //  const [min, max] = [0, 270];
 //  const val = Math.floor(Math.random() * (max - min + 1)) + min;
 //  gauge.drawObject(val);
 // }

 // setInterval(getValue, 1000);
};
