import * as mySvg from '../svg.min.js';
import { Utils } from '../Utils.js';
import dataTemplate from '../demo-data-template.js';
window.onload = (event) => {
 document.title = 'Products';
 dataTemplate.renderBody('pub.html');
 document.getElementById('page').innerHTML = 'Publications';

 const main = document.getElementsByTagName('main')[0];
 const article = document.createElement('article');
 main.appendChild(article);

 article.innerHTML = `

<h3>Articles</h3>
<ul>
${Utils.createListItem('', 'Fuel Cell Review - <i>Under Preparation</i>')}

${Utils.createListItem('PEMFC_Functional_Map_Part_1_Technique_v1.10.pdf', 'Fuel Cell Experimental Map: 1. Temperature Profiles')}

${Utils.createListItem('PEMFC_Map_P02_v3.pdf', 'Fuel Cell Experimental Map: 2. Temperature Profiles with Uncertainty')}

${Utils.createListItem('Spatially_resolved_oxygen_reaction_water.pdf', 'Fuel Cell Experimental Map: 3. Reactants, Water, and Temperature Profiles')}

${Utils.createListItem('Smart_H2Energy_v02_review_submitted.pdf', 'Smart Operational Strategies for Fuel Cell Energy System')}

${Utils.createListItem('PEM1kW_Model_Heat_Management_v2.pdf', 'Dynamic Model of Fuel Cell Energy System')}


${Utils.createListItem('ESCAPE25_PSE2015_Imperial_MKP_Paper_v2.pdf', 'Explicit Control of Mini Fuel Cell Vehicle')}



${Utils.createListItem('Robust-Control-Polytopic.pdf', 'Robust Control of Polytopically Uncertain Systems')}

${Utils.createListItem('Robust-Control-Hybrid.pdf', 'Robust Control: 1. Hybrid Uncertain Systems')}

${Utils.createListItem('Robust-Control-Hybrid-ESCAPE.pdf', 'Robust Control: 1. Hybrid Uncertain Systems 2')}

</ul>

<h3>Theses</h3>
<ul>
${Utils.createListItem('PhD_Thesis_Amit_M_Manthanwar_e2_submitted.pdf', 'Thesis Version 1')}
${Utils.createListItem('', 'Thesis Version 2 - <i>Under Preparation</i>')}

</ul>


<h3>Technical Reports</h3>
<ul>
${Utils.createListItem('PEMFC-Lab-Manual.pdf', 'Fuel Cell Lab Manual')}
</ul>

 `;
};
