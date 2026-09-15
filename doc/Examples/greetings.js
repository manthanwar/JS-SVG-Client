import * as mySvg from "../svg.min.js";
import { Utils } from "../Utils.js";
import dataTemplate from "../demo-data-template.js";
window.onload = (event) => {
  document.title = "Greetings";
  dataTemplate.renderBody("greeting.html");
  document.getElementById("page").innerHTML = "Greetings";

  const main = document.getElementsByTagName("main")[0];
  const article = document.createElement("article");
  main.appendChild(article);

  article.innerHTML = `

<h3>Festivals</h3>

<ul>
<li>Ganesh Chaturthi</li>
<ul>
${Utils.createListItem('greeting-ganesh-20260915.pdf', 'Ganesh Chaturthi 2026')}
</ul>


`;
};
