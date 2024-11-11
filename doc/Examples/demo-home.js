// import * as mySvg from '../../dist/svg.min.js';
import * as mySvg from './svg.min.js';
// import dolphinData from './demo-dolphin-data.js';
// import Dolphin from './demo-dolphin.js';
import dataTemplate from './demo-data-template.js';
import TimeZoneCountry from './TimeZoneCountry.js';

window.onload = (event) => {
 document.title = 'SVG';
 dataTemplate.renderBody('demo-home.html');

 const main = document.getElementsByTagName('main')[0];
 main.classList.add('mainHome');
 main.innerHTML = '<div id="divDateTimePlace"></div>';
 main.innerHTML += '<iframe src="demo-home-content.html"</iframe>';
 // main.style.border = '2px solid red;';

 autoRefresh('divDateTimePlace');
 setInterval(autoRefresh, 1000 * 1, 'divDateTimePlace');
};

function autoRefresh(id) {
 const date = new Date();
 const divE = document.getElementById(id);
 const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
 const lang = navigator.language || navigator.languages[0];
 // const lang = 'en-IN';
 // const lang = 'en-US';
 // const lang = 'mr-IN';

 const opt = {
  // timeZone: 'Europe/Moscow',
  // timeZone: 'Asia/Kolkata',
  // year: 'numeric',
  // month: '2-digit',
  // month: 'short',
  // day: '2-digit',
  hour12: false,
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
  // timeZoneName: 'long'
 };

 const dateStr = date.toLocaleTimeString(lang, opt);

 const tz = new TimeZoneCountry().getState();
 // divE.innerHTML = dateStr + '&nbsp; ' + tz;
 divE.innerHTML = dateStr + '&nbsp; ';
 divE.style.fontSize = '18px';
}
