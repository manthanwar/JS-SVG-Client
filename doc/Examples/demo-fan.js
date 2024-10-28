import * as mySvg from '../../dist/svg.min.js';
// import dolphinData from './demo-dolphin-data.js';
// import Dolphin from './demo-dolphin.js';
import dataTemplate from './demo-data-template.js';

window.onload = (event) => {
 document.title = 'SVG';
 dataTemplate.renderBody('demo-fan.html');

 const main = document.getElementsByTagName('main')[0];
 main.innerHTML = 'Hello World';

 // drawHtml();

 //  drawDolphin();
 //  drawDolphinUsingClass();

 //  drawFan();

 //  dataTemplate.createHeader();
 // dataTemplate.headerText;
 //  console.log(dataTemplate.header.home);

 // dataTemplate.renderTemplate();

 //  console.log(document.getElementById('footer').innerHTML)

 // console.log(document.getElementsByTagName('a')[0].innerHTML);
};
