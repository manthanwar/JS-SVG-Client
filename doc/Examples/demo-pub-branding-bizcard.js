import * as mySvg from './svg.min.js';

// import * as mySvg from './dist/svg.min.js';

// import * as mySvg from '../../dist/svg.min.js';
// import dolphinData from './demo-dolphin-data.js';
// import Dolphin from './demo-dolphin.js';
import dataTemplate from './demo-data-template.js';

dataTemplate.navMenu.push({
 link: 'Business Card Personal',
 page: 'Art Design: Create Personal Business Card',
 href: 'demo-pub-branding-bizcard.html'
});

// function setHeader(file) {
window.onload = (event) => {
 dataTemplate.renderBody('demo-pub-branding-bizcard.html');

 // dataTemplate.renderBody(file);

 const nav = document.getElementsByTagName('nav')[0];
 const aaa = nav.getElementsByTagName('a');
 nav.removeChild(aaa[aaa.length - 1]);

 const main = document.getElementsByTagName('main')[0];
 const article = document.createElement('article');
 main.appendChild(article);

 //  article.innerHTML = `
 // <object  type="text/html" data="demo-pub-branding-bizcard-form.html"></object>
 // `;

 article.innerHTML = `
<iframe scrolling="no" src='demo-pub-branding-bizcard-form.html'></iframe>
`;

 //
};
// }
