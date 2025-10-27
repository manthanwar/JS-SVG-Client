/*
// =============================================================================
// File Name     : demo-pub-doc-faq-view.js
// Date Created  : 2025-10-26 13:57 UTC +01:00
// description   : works with /views/faq.hbs
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
 const delay = urlParams.get('delay');
 const name = urlParams.get('name');
 const pdf = urlParams.get('pdf');
 const bas = Utils.fileNameNoExt(pdf);
 // const zip = bas + '.zip';
 // const txt = bas + '.txt';
 const ppp = document.getElementById('ppp');
 let time = 0;
 const interval = setInterval(() => {
  if (time <= delay) {
   let elp = delay - time;
   ppp.innerHTML = `${name}, your document with faqs is printing in ${elp} seconds`;
   time++;
  } else {
   ppp.innerHTML = `${name}, here is your document with faqs <a
   href="/data-certificates/${pdf}">${pdf}</a>.
   <iframe
    src="/data-certificates/${pdf}"
    width="90%"
    height="600px"
    style="margin: 40px; border: none;"
   ></iframe>

   `;
   clearInterval(interval);
  }
 }, 1000);
}

   // <p style='margin: 40px 0px;'>
   //  Generated file bundle <a href='/data-certificates/${zip}'>${zip}</a>.
   // </p>;
// Compilation Statistics <a href="/data-certificates/${txt}">${txt}</a>.
