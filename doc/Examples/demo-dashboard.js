import * as mySvg from '../../dist/svg.min.js';
// import dolphinData from './demo-dolphin-data.js';
// import Dolphin from './demo-dolphin.js';
import dataTemplate from './demo-data-template.js';

window.onload = (event) => {
 document.title = 'SVG';
 dataTemplate.renderBody('demo-dashboard.html');

 const main = document.getElementsByTagName('main')[0];
 main.innerHTML = `
 <div id="plot-Container">
 <div id="pie-basic"><main><h1>Pie Basic</h1><article></article></main></div>
 <div id="pie-wedge"><main><h1>Pie Wedge</h1><article></article></main></div>
 <div id="pie-donut"><main><h1>Pie Donut</h1><article></article></main></div>
 <div id="pie-2-pie"><main><h1>Pie 2 Pie</h1><article></article></main></div>
 <div id="pie-2-bar"><main><h1>Pie 2 Bar</h1><article></article></main></div>

 <div id="bar-xaxis"><main><h1>Bar xaxis</h1><article></article></main></div>
 <div id="bar-yaxis"><main><h1>Bar yaxis</h1><article></article></main></div>
 <div id="bar-xclub"><main><h1>Bar xclub</h1><article></article></main></div>
 <div id="bar-yclub"><main><h1>Bar yclub</h1><article></article></main></div>
 <div id="bar-xheap"><main><h1>Bar xheap</h1><article></article></main></div>
 <div id="bar-yheap"><main><h1>Bar yheap</h1><article></article></main></div>
 <div id="bar-xcent"><main><h1>Bar xcent</h1><article></article></main></div>
 <div id="bar-ycent"><main><h1>Bar ycent</h1><article></article></main></div>


<div id="plt-scats"><main><h1>Plot Scatter</h1><article></article></main></div>
<div id="plt-lines"><main><h1>Plot Lines</h1><article></article></main></div>
<div id="plt-stair"><main><h1>Plot Stairs</h1><article></article></main></div>
<div id="plt-areas"><main><h1>Plot Area</h1><article></article></main></div>
<div id="plt-times"><main><h1>Time Series</h1><article></article></main></div>
<div id="plt-blobs"><main><h1>Bubble Chart</h1><article></article></main></div>
<div id="plt-curve"><main><h1>Spline Chart</h1><article></article></main></div>
<div id="plt-error"><main><h1>Error Chart</h1><article></article></main></div>
<div id="plt-whisk"><main><h1>Box & Whisker</h1><article></article></main></div>

<div id="pol-lines"><main><h1>Polar Lines</h1><article></article></main></div>
<div id="pol-scats"><main><h1>Polar Scatter</h1><article></article></main></div>
<div id="pol-bars"><main><h1>Polar Bars</h1><article></article></main></div>
<div id="pol-radar"><main><h1>Radar Chart</h1><article></article></main></div>


<div id="gag-radial"><main><h1>Gauge Radial</h1><article></article></main></div>
<div id="gag-bar"><main><h1>Gauge Bar</h1><article></article></main></div>


</div>
`;
 // main.style.border = '2px solid red;';
};
