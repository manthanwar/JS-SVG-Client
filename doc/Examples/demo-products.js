import * as mySvg from './svg.min.js';
import dataTemplate from './demo-data-template.js';

window.onload = (event) => {
 document.title = 'SVG';
 dataTemplate.renderBody('demo-products.html');

 const main = document.getElementsByTagName('main')[0];
 const article = document.createElement('article');
 main.appendChild(article);

 article.innerHTML = `

<h3>Vector Visualization Studio</h3>
<ul>
<li><a href="amm-pst-product-brochure.pdf" target="_blank">Product Brochure</a></li>
<li><a href="amm-pst-product-talk.pdf" target="_blank">Product Presentation</a></li>
</ul>

<h3>Art Designs</h3>
<ul>
<li><a href="amm-pst-art-dolphin.pdf" target="_blank">Dolphin Dynamic Art Design</a></li>
<li><a href="amm-pst-icons.pdf" target="_blank">Vector Icons and Artifacts</a></li>
<li><a href="pst-icon-sports-olympic-2024.pdf" target="_blank">Olympic Pictograms</a></li>
<li><a href="pst-icon-sports-olympic-2024-talk.pdf" target="_blank">Olympic Pictograms Presentation</a></li>
</ul>

<h3>E-Commerce Applications</h3>
<ul>
<li><a href="amm-pst-quotation.pdf" target="_blank">Quotation</a></li>
<li><a href="amm-pst-invoice.pdf" target="_blank">Invoice</a></li>
<li><a href="amm-pst-receipt.pdf" target="_blank">Receipt</a></li>
</ul>

<h3>Infrastructure Management</h3>
<ul>
<li><a href="pst-icons-river-krishna.pdf" target="_blank">River Krishna Network </a></li>
<li><a href="https://backend.delhimetrorail.com/documents/1030/smartcard.pdf" target="_blank">Delhi Metro Map</a><br><i style="font-size:16px"> This map drawn by Indian Railway needs redesigning to optimize quality and size</i></li>
</ul>

`;
};
