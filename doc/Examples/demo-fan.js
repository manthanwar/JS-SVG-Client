// import * as mySvg from '../../dist/svg.min.js';
// import dolphinData from './demo-dolphin-data.js';
// import Dolphin from './demo-dolphin.js';
import dataTemplate from './demo-data-template.js';
import Fan from './Fan.js';

window.onload = (event) => {
 document.title = 'SVG';
 dataTemplate.renderBody('demo-fan.html');

 const main = document.getElementsByTagName('main')[0];
 // main.innerHTML = 'Hello World';

 // drawHtml();

 //  drawDolphin();
 //  drawDolphinUsingClass();

 //  drawFan();

 const data = {
  divMainBox: {
   containerId: 'main',
   id: 'divMainBox',
   transform: 'scale(1)'
  }
  // gridOn: false
 };

 const fan = new Fan(data);
 fan.plotTitle = 'aaaaaaaaaaaaaaaaaaa';

 // console.log('fan = ' + fan.data.divMain.containerId);
};
