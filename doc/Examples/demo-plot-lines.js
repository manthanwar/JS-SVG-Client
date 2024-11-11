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
import Line from './Line.js';

// import dataMovies from './data-movies.js';
// import dataObesity from './data-Obesity.js';

// import dataUsdInr from './data-currency-usd-inr.js';
// import dataUsdJpy from './data-currency-usd-jpy.js';
// import dataUsdRub from './data-currency-usd-rub.js';
// import dataGbpUsd from './data-currency-gbp-usd.js';
// import dataEurUsd from './data-currency-eur-usd.js';

// import dataMetalGold from './data-metal-gold.js';
// import dataMetalSilver from './data-metal-silver.js';
// import dataMetalPlatinum from './data-metal-platinum.js';
// import dataMetalCopper from './data-metal-copper.js';
// import dataMetalPalladium from './data-metal-palladium.js';

// import dataEnergyCrudeOil from './data-energy-crude-oil.js';
// import dataEnergyGasoline from './data-energy-gasoline.js';
// import dataEnergyNaturalGas from './data-energy-natural-gas.js';
import dataGasPrices from './data-energy-gas-prices-small.js';

window.onload = (event) => {
 dataTemplate.renderBody('demo-plot-lines.html');
 const main = document.getElementsByTagName('main')[0];
 // main.innerHTML = 'Hello World';

 // data.csv = gasPrices.csv;

 // const data = dataMovies;

 // const data = dataUsdInr;

 const data = dataGasPrices;

 // console.log(data.title);
 // console.log(data.csv);

 main.innerHTML += '<h3 style="text-align:center">' + data.title + '</h3>';

 const line = new Line(data);

 console.log(line.data.dataObj.vMin, line.data.dataObj.vMax);
};
