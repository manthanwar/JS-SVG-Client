import * as mySvg from './svg.min.js';
import dataTemplate from './demo-data-template.js';
import { Utils } from './Utils.js';

window.onload = (event) => {
 const title = 'Intelligent Healthcare';
 dataTemplate.renderBody('demo-health.html');
 document.title = title;
 document.getElementById('page').innerHTML = title;

 const main = document.getElementsByTagName('main')[0];
 const article = document.createElement('article');
 main.appendChild(article);

 article.innerHTML = `
<h3>Disease Monitoring</h3>
<ul>
${Utils.createListItem('https://covid19.desiign.in/', 'Coronavirus Disease 2019 (COVID-19)')}
</ul>

<h3>Healthcare Documentation - AI Ready HL7 FHIR</h3>
<ul>
${Utils.createListItem('book-intelligent-medical-documentation.pdf', 'Intelligent Medical Documentation')}
${Utils.createListItemNoUrl('Medical Prescription')}
<ul>
${Utils.createListItem(' prescription.pdf', 'Sample Medical Prescription')}
${Utils.createListItem(' prescription-secured.pdf', 'Sample Medical Prescription - Secured')}
${Utils.createListItem(' prescription.json', 'Sample MedicalRequest JSON Data')}
${Utils.createListItem(' demo-health-prescription.html', 'Create Medical Prescription')}
</ul>
</ul>
`;
};