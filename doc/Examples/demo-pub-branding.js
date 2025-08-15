import * as mySvg from './svg.min.js';

// import * as mySvg from './dist/svg.min.js';

// import * as mySvg from '../../dist/svg.min.js';
// import dolphinData from './demo-dolphin-data.js';
// import Dolphin from './demo-dolphin.js';
import dataTemplate from './demo-data-template.js';

window.onload = (event) => {
 document.title = 'SVG';
 dataTemplate.renderBody('demo-pub-branding.html');

 const main = document.getElementsByTagName('main')[0];
 const article = document.createElement('article');
 main.appendChild(article);

 // const artHead = document.createElement('h1');
 // article.appendChild(artHead);
 // artHead.innerHTML = 'Brand Identity';
 // main.style.border = '2px solid red;';


// <h3>Reports and Other Publications <i style="font-size:16px">coming soon...</i></h3>
// <ul>
// <li><a href="#" target="_blank">Reports</a></li>
// <li><a href="#" target="_blank">Newsletters</a></li>
// <li><a href="#" target="_blank">infographic</a> </li>
// </ul>

//<h3>Awards and Recognitions</h3>
//<ul>
//<li><a href="marksheet-pune-university.pdf" target="_blank">Employee of the Month</a></li>
//<li><a href="certificate-tcs-hackathon.pdf" target="_blank">Service Excellence</a></li>
//</ul>

 article.innerHTML = `

<h3>Brand Identity and House Style</h3>
<ul>
<li><a href="amm-pst-art-logo-jps.pdf" target="_blank">Logo Design Example 1</a></li>
<li><a href="amm-pst-art-logo-bapatla.pdf" target="_blank">Logo Design Example 2</a></li>
<li><a href="amm-pst-letter.pdf" target="_blank">Formal Letter</a></li>
<li><a href="amm-pst-talk.pdf" target="_blank">Presentation</a></li>
<li><a href="amm-pst-business-card.pdf" target="_blank">Business Card</a></li>
<li><a href="demo-pub-branding-bizcard.html">Business Card Personal</a></li>
</ul>


<h3>Awards and Certificates</h3>
<ul>
<li><a href="marksheet-pune-university.pdf" target="_blank">University Marksheet</a></li>
<li><a href="certificate-tcs-hackathon.pdf" target="_blank">Certificate of Award</a></li>
<li><a href="certificate-shane.pdf" target="_blank">Certificate of Training</a></li>
</ul>



`;
};
