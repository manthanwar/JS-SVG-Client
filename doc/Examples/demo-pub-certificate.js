import * as mySvg from './svg.min.js';

// import * as mySvg from './dist/svg.min.js';

// import * as mySvg from '../../dist/svg.min.js';
// import dolphinData from './demo-dolphin-data.js';
// import Dolphin from './demo-dolphin.js';
import dataTemplate from './demo-data-template.js';
import { Utils } from './Utils.js';

window.onload = (event) => {
 document.title = 'SVG';
 dataTemplate.renderBody('demo-pub-branding.html');

 const main = document.getElementsByTagName('main')[0];
 const article = document.createElement('article');
 main.appendChild(article);

 article.innerHTML = `

<h3>Certificates and Awards</h3>
<ul>
${Utils.createListItemNoUrl('Degree Certificates or Marksheets')}
<ul>
${Utils.createListItem(
 'dolphin-certificate-university-pune-1999.pdf',
 'Certificate Design 1'
)}
${Utils.createListItem(
 'dolphin-certificate-maharashtra-hsc-1995.pdf',
 'Certificate Design 2'
)}
${Utils.createListItem(
 'dolphin-certificate-maharashtra-ssc-1993.pdf',
 'Certificate Design 3'
)}
${Utils.createListItem(
 'certificat-design-catalogue.pdf',
 'Certificate Design Catalogue'
)}
${Utils.createListItem(
 'demo-pub-certificate-personal.html',
 'Intelligent Certificate Generator'
)}
</ul>
${Utils.createListItem('certificate-shane.pdf', 'Training Certificate')}
${Utils.createListItem(
 'certificate-tcs-hackathon.pdf',
 'Competition Certificate'
)}

</ul>




<h3>Invitations</h3>
<ul>
${Utils.createListItem('pst-art-geometric.pdf', 'Geometric Art Invitation')}
</ul>






`;
};

// <h3>Honors and Recognitions</h3>
// <ul>
// ${Utils.createListItem('pst-art-geometric.pdf', 'Employee of the Month')}
// ${Utils.createListItem('pst-art-geometric.pdf', 'Service Excellence')}
// </ul>
