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

<li>HP Gas PAHAL (DBTL) Scheme Joining Form</li>
<ul>
${Utils.createListItem('https://myhpgas.in/myHPGas/HPGas/DBTLForms.aspx', 'HP Gas PAHAL Website')}
${Utils.createListItem('https://pmuy.gov.in/mylpg.html', 'My LPG Website')}
${Utils.createListItem('https://www.pmuy.gov.in/index.aspx', 'Pradhan Mantri Ujjwala Yojana')}
${Utils.createListItem('https://myhpgas.in/myHPGas/Resources/Unified_form_DBTL.PDF', 'Original form from HP Gas Website')}
${Utils.createListItem('hp-gas-pahal-dbtl-form-sample.pdf', 'Dolphin Generated Sample')}
${Utils.createListItem('hp-gas-pahal-dbtl-form-sample.json', 'Sample Data in JSON format')}
</ul>

<li>HP Gas Income Declaration</li>
<ul>
${Utils.createListItem('https://myhpgas.in/myHPGas/Resources/HIG_DECL_2016.pdf', 'Original form from HP Gas Website')}
${Utils.createListItem('hp-gas-declaration-income-sample.pdf', 'Dolphin Generated Sample')}
${Utils.createListItem('hp-gas-declaration-income-sample.json', 'Sample Data in JSON format')}
</ul>

<li>HP Gas Transfer Form</li>
<ul>
${Utils.createListItem('https://myhpgas.in/myHPGas/Resources/TransferOfLPGConnection.pdf', 'Original form from HP Gas Website')}
${Utils.createListItem('hp-gas-transfer-form-sample.pdf', 'Dolphin Generated Sample')}
${Utils.createListItem('hp-gas-transfer-form-sample.json', 'Sample Data in JSON format')}
</ul>

<li>HP Gas Transfer Declaration</li>
<ul>
${Utils.createListItem('https://myhpgas.in/myHPGas/Resources/LossOfSVTV.pdf', 'Original form from HP Gas Website')}
${Utils.createListItem('hp-gas-transfer-declaration-sample.pdf', 'Dolphin Generated Sample')}
${Utils.createListItem('hp-gas-transfer-declaration-sample.json', 'Sample Data in JSON format')}
</ul>

</ul>

`;
};

// ${Utils.createListItem('demo-form-hp-gas-kyc.html', 'Generate Your Own KYC Form Using Dolphin Document Automation')}
