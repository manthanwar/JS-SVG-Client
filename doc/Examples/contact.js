import * as mySvg from './svg.min.js';
import dataTemplate from './demo-data-template.js';

window.onload = (event) => {
 document.title = 'Contact';
 dataTemplate.renderBody('contact.html');

 const main = document.getElementsByTagName('main')[0];
 const article = document.createElement('article');
 main.appendChild(article);

 article.innerHTML = `

<h1 style="font-weight:normal;font-size:40px; color:RoyalBlue">Contact
</h1>

<ul>
<li>Email: info@problemx.in</li>
</ul>


`;
};
