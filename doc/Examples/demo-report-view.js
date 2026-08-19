/*
// =============================================================================
// File Name     : demo-report-view.js
// Old File Name : demo-pub-doc-automation-view-report.js
// Date Created  : 2025-10-26 13:57 UTC +01:00
// description   : /views/report.hbs
// -----------------------------------------------------------------------------
// Author        : Amit Manohar Manthanwar
// WebURL        : https://manthanwar.github.io
// -----------------------------------------------------------------------------
// Copyright     : (c) 2025 Amit Manohar Manthanwar
// License       : LICENSE.md
// =============================================================================
// Revision Log  | Author  | Description
// --------------+---------+----------------------------------------------------
// 26-Oct-2025   | AMM     | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================
*/

import { Utils } from './Utils.js';

window.onload = (event) => {
 getFile();
};

// http://localhost:3000/report/printOnePdf?pdf=dpr-aaabbbcom-20251026-ap-msme-dpr.pdf&name=AAA&delay=15

function getFile() {
 const urlParams = new URLSearchParams(window.location.search);
 const del = urlParams.get('del');
 const nam = urlParams.get('nam');
 const bas = urlParams.get('bas');
 const xls = urlParams.get('xls');
 const pdf = bas + '.pdf';
 const txt = bas + '.txt';
 const zip = bas + '.zip';
 const ppp = document.getElementById('ppp');
 let time = 0;
 const interval = setInterval(() => {
  if (time <= del) {
   let elp = del - time;
   ppp.innerHTML = `${nam}, your report is printing in ${elp} seconds`;
   time++;
  } else {
   ppp.innerHTML = `${nam}, your report is ready<br>
   <ul style="display: flex; flex-direction: column; gap: 12px;">
   <li><a href="/data-certificates/${pdf}">PDF File</a></li>
   <li><a href="/data-certificates/${xls}">XLS File</a></li>
   <li><a href="/data-certificates/${txt}">LOG File</a></li>
   <li><a href="/data-certificates/${zip}">ZIP File</a></li>
   </ul>
   `;
   clearInterval(interval);
  }
 }, 1000);
}

// Compilation Statistics <a href="/data-certificates/${txt}">${txt}</a>.

// <iframe
//  src='/data-certificates/${pdf}'
//  width='90%'
//  height='600px'
//  style='margin: 40px; border: none;'
// ></iframe>;
