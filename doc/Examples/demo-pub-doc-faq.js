import * as mySvg from './svg.min.js';

// import * as mySvg from './dist/svg.min.js';

// import * as mySvg from '../../dist/svg.min.js';
// import dolphinData from './demo-dolphin-data.js';
// import Dolphin from './demo-dolphin.js';
import dataTemplate from './demo-data-template.js';
import { Utils } from './Utils.js';

dataTemplate.navMenu.push({
 link: 'Document Automation Tool',
 page: 'Document Automation Tool',
 href: 'demo-pub-doc-faq.html'
});

// function setHeader(file) {
window.onload = (event) => {
 dataTemplate.renderBody('demo-pub-doc-faq.html');

 // dataTemplate.renderBody(file);

 const nav = document.getElementsByTagName('nav')[0];
 const aaa = nav.getElementsByTagName('a');
 nav.removeChild(aaa[aaa.length - 1]);

 const main = document.getElementsByTagName('main')[0];
 const article = document.createElement('article');
 main.appendChild(article);

 const url = 'demo-pub-doc-faq-form.html';
 Utils.fetchUrlNoToggle(url, article);

 //
}; // end window.onload
