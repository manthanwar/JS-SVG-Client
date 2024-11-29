import * as mySvg from './svg.min.js';

// import * as mySvg from './dist/svg.min.js';

// import * as mySvg from '../../dist/svg.min.js';
// import dolphinData from './demo-dolphin-data.js';
// import Dolphin from './demo-dolphin.js';
import dataTemplate from './demo-data-template.js';

window.onload = (event) => {
 document.title = 'SVG';
 dataTemplate.renderBody('demo-pub-branding.html');

 const main = document.getElementsByTagName('main')[0];
 const article = document.createElement('article');
 main.appendChild(article);

 // const artHead = document.createElement('h1');
 // article.appendChild(artHead);
 // artHead.innerHTML = 'Brand Identity';
 // main.style.border = '2px solid red;';

 article.innerHTML = `
<h3>Brand Identity</h3>
<ul>
<li><a href="demo-art-logo.pdf" target="_blank">Logo Art Design</a></li>
<li><a href="#" target="_blank">Business Card</a> <i>coming soon...</i></li>
</ul>

<h3>E-Commerce</h3>
<ul>
<li><a href="amm-pst-quotation.pdf" target="_blank">Quotation</a></li>
<li><a href="amm-pst-invoice.pdf" target="_blank">Invoice</a></li>
<li><a href="amm-pst-receipt.pdf" target="_blank">Receipt</a></li>
</ul>

<h3>House Style</h3>
<ul>
<li><a href="amm-pst-letter.pdf" target="_blank">Formal Letter</a></li>
<li><a href="#" target="_blank">Presentation</a> <i>coming soon...</i></li>
<li><a href="#" target="_blank">Reports</a> <i>coming soon...</i></li>
<li><a href="#" target="_blank">Newsletters</a> <i>coming soon...</i></li>
<li><a href="#" target="_blank">infographic</a> <i>coming soon...</i></li>
</ul>

<h3>Awards and Recognitions</h3>
<ul>
<li><a href="#" target="_blank">Employee of the Month</a> <i>coming soon...</i></li>
<li><a href="#" target="_blank">Certificate of Award</a> <i>coming soon...</i></li>
<li><a href="#" target="_blank">Certificate of Training</a> <i>coming soon...</i></li>
</ul>
`;
};
