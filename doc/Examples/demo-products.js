/*
// =============================================================================
// File Name     : demo-products.js
// Date Created  : 2025-09-20 19:16 UTC +02:00
// description   : Products Page
// -----------------------------------------------------------------------------
// Author        : Amit Manohar Manthanwar
// Mailer        : manthanwar@hotmail.com
// WebURL        : https://manthanwar.github.io
// -----------------------------------------------------------------------------
// Copyright     : (c) 2025 Amit Manohar Manthanwar
// License       : LICENSE.md
// =============================================================================
// Revision Log  | Author  | Description
// --------------+---------+----------------------------------------------------
// 20-Sep-2025   | AMM     | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================
*/

import * as mySvg from './svg.min.js';
import dataTemplate from './demo-data-template.js';
import { Utils } from './Utils.js';

window.onload = (event) => {
 document.title = 'Products';
 dataTemplate.renderBody('demo-products.html');

 const main = document.getElementsByTagName('main')[0];
 const article = document.createElement('article');
 main.appendChild(article);

 article.innerHTML = `

<h3>Dolphin Design Intelligence Studio</h3>
<ul>
${Utils.createListItem('dolphin-DI-proposal.pdf', 'Product Proposal')}
${Utils.createListItem('amm-pst-product-brochure.pdf', 'Product Brochure')}
${Utils.createListItem('amm-pst-product-talk.pdf', 'Product Presentation')}
${Utils.createListItem('dolphin-DI-faqs.pdf', 'Frequently Asked Questions')}
</ul>

<h3>Software Libraries</h3>
<ul>
${Utils.createListItem(
 'https://www.npmjs.com/package/js-svg-client',
 'JavaScript Library'
)}
${Utils.createListItem('https://ctan.org/pkg/pst-flags', 'PostScript Library')}
</ul>

<h3>Art Design Applications</h3>
<ul>
${Utils.createListItem('amm-pst-art-dolphin.pdf', 'Dolphin Dynamic Art Design')}
${Utils.createListItem('amm-pst-icons.pdf', 'Vector Icons and Artifacts')}
${Utils.createListItem(
 'pst-icon-sports-olympic-2024.pdf',
 'Paris Olympic Pictograms Elements'
)}
${Utils.createListItem(
 'pst-icon-sports-olympic-2024-talk.pdf',
 'Paris Olympic Pictograms Presentation'
)}
${Utils.createListItem(
 'https://in.mirrors.cicku.me/ctan/graphics/pstricks/contrib/pst-flags/doc/pst-flags-doc.pdf',
 'National Flags of Countries'
)}
</ul>

<h3>Geometric Art Design Applications</h3>
<ul>
${Utils.createListItem(
 'pst-art-geometric-fold-04-construction.pdf',
 'Construction of Four Fold Geometric Art Patterns'
)}
${Utils.createListItem(
 'pst-art-geometric-fold-06-04-construction.pdf',
 'Construction of Combined Four and Six Fold Pattern'
)}
${Utils.createListItem(
 'pst-art-geometric-fold-04.pdf',
 'Examples of Auto-Generated Four Fold Patterns'
)}
${Utils.createListItem('pst-art-geometric.pdf', 'Use Cases of Geometric Art')}
</ul>

<h3>Infrastructure Management Solutions</h3>
<ul>
${Utils.createListItem('pst-icons-river-krishna.pdf', 'River Krishna Network')}
</ul>

<h3>Examples that can benefit from Dolphin Design Intelligence</h3>
<ul>
${Utils.createListItemNote(
 'https://indianculture.gov.in/kumbh-maps',
 'Maha Kumbh Map of the Indian Ministry of Culture',
 'The names of streets are illegible. This map needs redesigning to optimize quality and size'
)}
${Utils.createListItemNote(
 'https://backend.delhimetrorail.com/documents/1030/smartcard.pdf',
 'Delhi City Metro Map of the Indian Railways',
 'This map needs redesigning to optimize quality and size'
)}
</ul>




`;
};
