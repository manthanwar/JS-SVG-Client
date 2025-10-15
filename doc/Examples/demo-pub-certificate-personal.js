import * as mySvg from './svg.min.js';

// import * as mySvg from './dist/svg.min.js';

// import * as mySvg from '../../dist/svg.min.js';
// import dolphinData from './demo-dolphin-data.js';
// import Dolphin from './demo-dolphin.js';
import dataTemplate from './demo-data-template.js';

dataTemplate.navMenu.push({
 link: 'Business Card Personal',
 page: 'Personalize Certificate',
 href: 'demo-pub-certificate-personal.html'
});

// function setHeader(file) {
window.onload = (event) => {
 dataTemplate.renderBody('demo-pub-certificate-personal.html');

 // dataTemplate.renderBody(file);

 const nav = document.getElementsByTagName('nav')[0];
 const aaa = nav.getElementsByTagName('a');
 nav.removeChild(aaa[aaa.length - 1]);

 const main = document.getElementsByTagName('main')[0];
 const article = document.createElement('article');
 main.appendChild(article);

 function tabOpen(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
   tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(cityName).style.display = 'block';
  evt.currentTarget.className += ' active';
 }

 function tabClose() {
  var i, tabcontent, tablinks, tabs;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
   tabcontent[i].style.display = 'none';
  }
 }

 function tabClick() {
  var i, tabcontent, tablinks, tabs;
  tablinks = document.getElementsByClassName('tablinks');
  tabs = ['London', 'Mumbai', 'Pune'];
  for (i = 0; i < tablinks.length; i++) {
   const city = tabs[i];
   tablinks[i].onclick = function (event) {
    tabClose();
    tabOpen(event, city);
   };
  }
 }

 fetch('demo-pub-certificate-personal-form-tab.html')
  .then((response) => response.text())
  .then((data) => {
   article.innerHTML = data;
   tabClose();
   tabClick();
   document.getElementById('London').style.display = 'block';
   document.getElementsByClassName('tablinks')[0].click();
  });

 //
}; // end window.onload
