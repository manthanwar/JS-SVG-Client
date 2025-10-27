import * as mySvg from './svg.min.js';

// import * as mySvg from './dist/svg.min.js';

// import * as mySvg from '../../dist/svg.min.js';
// import dolphinData from './demo-dolphin-data.js';
// import Dolphin from './demo-dolphin.js';
import dataTemplate from './demo-data-template.js';
import { Utils } from './Utils.js';

dataTemplate.navMenu.push({
 link: 'Business Card Personal',
 page: 'Billing and Trade Automation',
 href: 'demo-pub-invoice.html'
});

// function setHeader(file) {
window.onload = (event) => {
 dataTemplate.renderBody('demo-pub-invoice.html');

 const nav = document.getElementsByTagName('nav')[0];
 const aaa = nav.getElementsByTagName('a');
 nav.removeChild(aaa[aaa.length - 1]);

 const main = document.getElementsByTagName('main')[0];
 const article = document.createElement('article');
 main.appendChild(article);

 const url = 'demo-pub-invoice-form.html';
 Utils.fetchUrl(url, article);

 //
}; // end window.onload
