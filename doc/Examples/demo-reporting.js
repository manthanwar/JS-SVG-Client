import * as mySvg from './svg.min.js';

// import * as mySvg from './dist/svg.min.js';

// import * as mySvg from '../../dist/svg.min.js';
// import dolphinData from './demo-dolphin-data.js';
// import Dolphin from './demo-dolphin.js';
import dataTemplate from './demo-data-template.js';

window.onload = (event) => {
 document.title = 'SVG';
 dataTemplate.renderBody('demo-reporting.html');

 const main = document.getElementsByTagName('main')[0];
 const article = document.createElement('article');
 const artHead = document.createElement('h1');
 main.appendChild(article);
 article.appendChild(artHead);

 artHead.innerHTML = 'Brand Identity';

 // main.style.border = '2px solid red;';
};
