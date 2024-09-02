// =============================================================================
// File Name     : Html.js
// Description   : Creates Html Tags
// -----------------------------------------------------------------------------
// Author        : Amit Manohar Manthanwar
// Mailer        : manthanwar@hotmail.com
// Mobile        : +91.853.081.3398
// WebURL        : https://manthanwar.github.io
// -----------------------------------------------------------------------------
// Copyright     : (c) 2024 Amit Manohar Manthanwar
// License       : MIT License
// ----------------------------------------------------------------------------
// This program can be redistributed and/or modified under the terms
// of the MIT License. For details see the file license.txt
// =============================================================================
// Revision Log  | Author  | Description
// --------------+---------+----------------------------------------------------
// 01-Sep-2024   | AMM     | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

export default class Html {
 constructor() {
  this.className = 'html';
  this.description = 'Creates HTML Tags';
 }

 createDate(elementId) {
  const today = new Date();
  const y = today.getFullYear();
  const m = today.getMonth() + 1;
  const mName = today.toLocaleString('default', { month: 'long' });
  const mNameShort = today.toLocaleString('default', { month: 'short' });
  const d = today.getDate();
  const time = today.getTime(); //milliseconds since January 1, 1970
  const hr = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();
  const ms = today.getMilliseconds();
  const localDate = today.toLocaleDateString();
  const localTime = today.toLocaleTimeString();

  // https://www.iana.org/time-zones
  // https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#NEW_YORK
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options

  const options = {
   month: 'long', // '2-digit' | 'numeric' | 'long'
   weekday: 'long',
   day: 'numeric', // '2-digit' | 'numeric'
   year: 'numeric', // '2-digit' | 'long'
   hour12: false,
   // hourCycle: 'h23', // h11 | h12 | h23 | h24
   hour: 'numeric',
   minute: 'numeric'
   // dayPeriod: 'short' // narrow | short | long
   // fractionalSecondDigits: '3',
   // timeZone: 'UTC',
   // timeZone: 'Asia/Calcutta',
   // timeZone: 'Europe/London',
   // timeZone: 'Europe/Berlin',
   // timeZone: 'America/New_York',
   // timeZone: 'America/Chicago',
   // timeZone: 'America/Denver',
   // timeZone: 'America/Los_Angeles',
   // timeZone: 'America/Anchorage',
   // timeZoneName: 'short', // long | short | shortOffset | longOffset | shortGeneric | longGeneric |
   // timeZoneName: 'longOffset'
  };
  const displayFormat = today.toLocaleString('en-IN', options);
  document.getElementById(elementId).innerHTML = displayFormat;
  // document.getElementById(elementId).innerHTML = today.toISOString();
  // document.getElementById(elementId).innerHTML = today;
 }

 newHead(element, data) {
  const h1 = document.createElement('h1');
  h1.style.color = 'blue';
  h1.innerHTML = data;
  element.appendChild(h1);
 }

 newOl(element, data) {
  const ol = document.createElement('ol');
  element.appendChild(ol);
  const lines = data.split('\n');
  for (const line of lines) {
   var li = document.createElement('li');
   li.innerHTML = line;
   ol.appendChild(li);
  }
 }

 newUl(element, data) {
  const ul = document.createElement('ul');
  element.appendChild(ul);
  const lines = data.split('\n');
  for (const line of lines) {
   var li = document.createElement('li');
   li.innerHTML = line;
   ul.appendChild(li);
  }
 }

 fetchFile(filename, funCall) {
  fetch(filename)
   .then(this.fetchStatus)
   .then((response) => response.text())
   .then((data) => funCall(data, url))
   .catch((error) => console.log(error));
 }

 fetchStatus(response) {
  if (!response.ok) {
   throw new Error(response.statusText);
  }
  return response;
 }

 createImagesFromLocal(data) {
  console.log(data);
  const lines = data.split('\n');
  var div = document.getElementById('divImg');
  for (var i = 0; i < lines.length; i++) {
   var img = document.createElement('img');
   img.src = lines[i];
   img.alt = lines[i];
   img.style.height = '100px';
   img.style.width = '100px';
   img.style.marginBottom = '20px';
   div.appendChild(img);
  }
  div.style.display = 'inline-grid';
  div.style.gridTemplateColumns = '100px 100px 100px';
  div.style.columnGap = '20px';
  div.style.rowGap = '20px';
 }

 createImagesFromGitHub(data, url) {
  console.log(data);
  const lines = data.split('\n');
  var div = document.getElementById('divImg');
  // var url = 'https://github.com/ArtInstitute/Mandal/blob/main/';
  for (var i = 0; i < lines.length; i++) {
   var img = document.createElement('img');
   var aaa = document.createElement('a');
   var link = url + lines[i] + '?raw=true';
   img.src = link;
   img.alt = lines[i];
   img.style.height = '150px';
   img.style.width = '150px';
   aaa.appendChild(img);
   aaa.href = link;
   div.appendChild(aaa);
  }
  div.style.display = 'inline-grid';
  div.style.gridTemplateColumns = '150px 150px 150px 150px';
  div.style.columnGap = '20px';
  div.style.rowGap = '20px';
 }
}
