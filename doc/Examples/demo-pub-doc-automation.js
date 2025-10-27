import * as mySvg from './svg.min.js';

// import * as mySvg from './dist/svg.min.js';

// import * as mySvg from '../../dist/svg.min.js';
// import dolphinData from './demo-dolphin-data.js';
// import Dolphin from './demo-dolphin.js';
import dataTemplate from './demo-data-template.js';
import { Utils } from './Utils.js';

window.onload = (event) => {
 document.title = 'Document Automation';
 dataTemplate.renderBody('demo-pub-doc-automation.html');

 const main = document.getElementsByTagName('main')[0];
 const article = document.createElement('article');
 main.appendChild(article);

 article.innerHTML = `
<h3>Business Cards</h3>
<ul>
${Utils.createListItem(
 'demo-pub-branding-bizcard.html',
 'Create Business Card'
)}
</ul>

<h3>Certificates</h3>
<ul>
${Utils.createListItem(
 'demo-pub-certificate-personal.html',
 'Create Certificate'
)}
</ul>

<h3>Invoices and Quotations</h3>
<ul>
${Utils.createListItem('demo-pub-invoice.html', 'Create Invoice')}
</ul>

<h3>Project Reports and Other Publications</h3>
<ul>
${Utils.createListItem('demo-pub-doc-create.html', 'Create Project Report')}
${Utils.createListItem(
 'demo-pub-doc-faq.html',
 'Create Frequently Asked Questions'
)}
</ul>




 `;

 //
};
