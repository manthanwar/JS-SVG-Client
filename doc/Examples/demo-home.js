// import * as mySvg from '../../dist/svg.min.js';
import * as mySvg from './svg.min.js';
// import dolphinData from './demo-dolphin-data.js';
// import Dolphin from './demo-dolphin.js';
import dataTemplate from './demo-data-template.js';

window.onload = (event) => {
 document.title = 'SVG';
 dataTemplate.renderBody('demo-home.html');

 const main = document.getElementsByTagName('main')[0];
 main.classList.add('mainHome');
 // main.innerHTML = '<object data="demo-home-content.html"</object>';
 main.innerHTML = '<iframe src="demo-home-content.html"</iframe>';
 // main.style.border = '2px solid red;';
};
