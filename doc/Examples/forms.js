import * as mySvg from '../svg.min.js';
import { Utils } from '../Utils.js';
import dataTemplate from '../demo-data-template.js';
window.onload = (event) => {
 const title = 'Intelligent Forms';
 dataTemplate.renderBody('pub.html');
 document.title = title;
 document.getElementById('page').innerHTML = title;

 const main = document.getElementsByTagName('main')[0];
 const article = document.createElement('article');
 main.appendChild(article);

 article.innerHTML = `

<h3>Utility Documents: LPG Cooking Gas</h3>

<ul>

${Utils.createListItem('https://myhpgas.in/myHPGas/HPGas/DownloadSection.aspx', 'HP Gas Link o All Original Forms')}

<li>HP Gas KYC Form</li>
<ul>
${Utils.createListItem('https://myhpgas.in/myHPGas/Resources/KYC_new.pdf', 'Original form from HP Gas Website')}
${Utils.createListItem('hp-gas-kyc-form-sample.pdf', 'Dolphin Generated Sample')}

${Utils.createListItem('hp-gas-kyc-form-sample.json', 'Sample Data in JSON format')}
${Utils.createListItem('Savitribai+Phule.png', 'Sample Passport Photo (jpg or png format, preferred eps')}

</ul>


</ul>

`;
};

// ${Utils.createListItem('demo-form-hp-gas-kyc.html', 'Generate Your Own KYC Form Using Dolphin Document Automation')}
