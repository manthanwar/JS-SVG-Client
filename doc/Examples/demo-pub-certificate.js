import * as mySvg from './svg.min.js';

// import * as mySvg from './dist/svg.min.js';

// import * as mySvg from '../../dist/svg.min.js';
// import dolphinData from './demo-data.js';
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
${Utils.createListItemNoUrl('Academic Certificates')}
<ul>
${Utils.createListItem('certificate-uop-1999.pdf', 'Design 1')}
${Utils.createListItem('certificate-hsc-1995.pdf', 'Design 2')}
${Utils.createListItem('certificate-ssc-1993.pdf', 'Design 3')}
${Utils.createListItem('certificate-cat-2025.pdf', 'Design Catalogue')}
${Utils.createListItem('demo-pub-certificate-personal.html', 'Design Personal')}
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
