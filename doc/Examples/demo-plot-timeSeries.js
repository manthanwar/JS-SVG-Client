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
// 12-Nov-2024   | AMM | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

import dataTemplate from './demo-data-template.js';
import TimeSeries from './TimeSeries.js';

// import dataMovies from './data-movies.js';
// import dataObesity from './data-Obesity.js';

// import dataUsdInr from './data-currency-usd-inr.js';
// import dataUsdJpy from './data-currency-usd-jpy.js';
// import dataUsdRub from './data-currency-usd-rub.js';
// import dataGbpUsd from './data-currency-gbp-usd.js';
// import dataEurUsd from './data-currency-eur-usd.js';

import dataMetalGold from './data-metal-gold.js';
// import dataMetalGoldLarge from './data-metal-gold-large.js';
// import dataMetalSilver from './data-metal-silver.js';
// import dataMetalPlatinum from './data-metal-platinum.js';
// import dataMetalCopper from './data-metal-copper.js';
// import dataMetalPalladium from './data-metal-palladium.js';

// import dataEnergyCrudeOil from './data-energy-crude-oil.js';
// import dataEnergyCrudeOilLarge from './data-energy-crude-oil-large.js';
// import dataEnergyGasoline from './data-energy-gasoline.js';
// import dataEnergyNaturalGas from './data-energy-natural-gas.js';
// import dataEnergyGasPrices from './data-energy-gas-prices.js';
// import dataEnergyGasPricesLarge from './data-energy-gas-prices-large.js';

window.onload = (event) => {
 dataTemplate.renderBody('demo-plot-lines.html');
 const main = document.getElementById('main');
 // main.innerHTML = 'Hello World';

 // const data = dataMovies;
 // const data = dataUsdInr;
 // const data = dataEnergyGasPrices;
 // const data = dataEnergyGasPricesLarge;
 const data = dataMetalGold;
 // const data = dataMetalGoldLarge;
 // const data = dataEnergyCrudeOil;
 // const data = dataEnergyCrudeOilLarge;
 // const data = dataEnergyGasPrices;

 // console.log(data.title);
 // console.log(data.csv);

 main.innerHTML += '<h3 style="text-align:center">' + data.title + '</h3>';

 const plot = new TimeSeries(data);

 const foot = document.createElement('div');
 main.appendChild(foot);

 foot.innerHTML = '<h1 style="text-align:center">' + data.notes + '</h1>';
 foot.innerHTML +=
  '<h6 style="text-align:center; font-weight:normal;">Data Source: ' +
  data.source +
  '</h6>';

 // const dataMin = plot.data.dataObj.vMin;
 // const dataMax = plot.data.dataObj.vMax;
 // const axisLim = plot.data.dataObj.axisLimit;
 // console.log('dataMin = ' + dataMin);
 // console.log('dataMax = ' + dataMax);
 // console.log('axisLim = ' + axisLim);

 console.log('xLim = ' + plot.data.dataObj.xAxisLimit);
 console.log('yLim = ' + plot.data.dataObj.yAxisLimit);
};
