/*
// =============================================================================
// File Name     : demo-education.js
// Date Created  : 2025-10-11 01:43 UTC +02:00
// description   : Education and Skill Development Page
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
// 11-Oct-2025   | AMM     | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================
*/

import * as mySvg from './svg.min.js';
import dataTemplate from './demo-data-template.js';
import { Utils } from './Utils.js';

window.onload = (event) => {
 document.title = 'Education and Training';
 dataTemplate.renderBody('demo-education.html');

 const main = document.getElementsByTagName('main')[0];
 const article = document.createElement('article');
 main.appendChild(article);

 article.innerHTML = `

<h3>Skill Development Courses</h3>
<ul style="margin-top: 30px;">
${Utils.createListItem(
 'dolphin-skill-101-op.pdf',
 'Learn to Create Design Intelligence'
)}
${Utils.createListItem(
 'dolphin-skill-102-op.pdf',
 'Learn to Create Geometric Art'
)}
</ul>

`;
};
