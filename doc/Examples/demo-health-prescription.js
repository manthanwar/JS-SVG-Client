import * as mySvg from './svg.min.js';
import dataTemplate from './demo-data-template.js';
import { Utils } from './Utils.js';

// #region window.onload
window.onload = (event) => {
  const title = 'Intelligent Medical Prescription';
  dataTemplate.renderBody('demo-health-prescription.html');
  document.title = title;
  document.getElementById('page').innerHTML = title;

 const nav = document.getElementsByTagName('nav')[0];
 const aaa = nav.getElementsByTagName('a');
 nav.removeChild(aaa[aaa.length - 1]);

 const main = document.getElementsByTagName('main')[0];
 const article = document.createElement('article');
 main.appendChild(article);

 const url = 'demo-health-prescription-form.html';
 Utils.fetchUrlNoToggle(url, article);
};
// #endregion window.onload