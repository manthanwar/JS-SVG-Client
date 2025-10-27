/*
// =============================================================================
// File Name     : Utils.js
// Date Created  : 2025-09-20 19:09 UTC +02:00
// description   : Utility Class with Utility FUnctions
// -----------------------------------------------------------------------------
// Author        : Amit Manohar Manthanwar
// WebURL        : https://manthanwar.github.io
// -----------------------------------------------------------------------------
// Copyright     : (c) 2025 Amit Manohar Manthanwar
// License       : LICENSE.md
// =============================================================================
// Revision Log  | Author  | Description
// --------------+---------+----------------------------------------------------
// 20-Sep-2025   | AMM     | Initial Version
// --------------+---------+----------------------------------------------------
// 26-Oct-2025   | AMM     | added Tab Support
// --------------+---------+----------------------------------------------------
// =============================================================================
*/
export class Utils {
 constructor() {
  this.name = 'Utils';
 }

 static className() {
  return `The name of this class is ${this.name}.`;
 }

 static createListItem(url, name) {
  const item =
   '<li><a href="' + url + '" target="_blank">' + name + '</a></li>';
  return item;
 }

 static createListItemNoUrl(name) {
  const item = `<li> ${name} </li>`;
  return item;
 }

 static createListItemNote(url, name, note) {
  const item =
   '<li><a href="' +
   url +
   '" target="_blank">' +
   name +
   '</a> <i style="font-size:16px">' +
   note +
   '</i></li>';
  return item;
 }

 /**
  * @description get file name without extension
  * @param {string} fileName - name of the file with extension
  * @returns {string} file name without extension
  */
 static fileNameNoExt(fileName) {
  const lastDotIndex = fileName.lastIndexOf('.');
  if (lastDotIndex === -1) {
   // No extension found
   return fileName;
  }
  return fileName.substring(0, lastDotIndex);
 }

 /**
  * @description open the tabs of tabbed html interface
  */
 static tabOpen(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
   tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(cityName).style.display = 'block';
  evt.currentTarget.className += ' active';
 }

 /**
  * @description close the tabs of tabbed html interface
  */
 static tabClose() {
  var i, tabcontent, tablinks, tabs;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
   tabcontent[i].style.display = 'none';
  }
 }

 /**
  * @description click the tabs of tabbed html interface
  */
 static tabClick() {
  var i, tabcontent, tablinks, tabs;
  tablinks = document.getElementsByClassName('tablinks');
  tabs = ['London', 'Mumbai', 'Pune'];
  for (i = 0; i < tablinks.length; i++) {
   const city = tabs[i];
   tablinks[i].onclick = function (event) {
    Utils.tabClose();
    Utils.tabOpen(event, city);
   };
  }
 }

 /**
  * @description toggle field on click hide and show
  */
 static toggleInputField() {
  var dataType = document.getElementById('dataType');
  var dataList = document.getElementById('dataList');
  var dataRows = document.getElementById('dataRows');
  dataType.onchange = () => {
   if (dataType.value === 'indices') {
    dataList.style.display = 'block';
    dataRows.style.display = 'none';
   } else {
    dataList.style.display = 'none';
    dataRows.style.display = 'block';
   }
  };
 }

 /**
  * @description fetch the url resource
  */
 static fetchUrl(fileName, article) {
  fetch(fileName)
   .then((response) => response.text())
   .then((data) => {
    article.innerHTML = data;
    Utils.tabClose();
    Utils.tabClick();
    Utils.toggleInputField();
    document.getElementById('London').style.display = 'block';
    document.getElementsByClassName('tablinks')[0].click();
   });
 }

 /**
  * @description fetch the url resource
  */
 static fetchUrlNoToggle(fileName, article) {
  fetch(fileName)
   .then((response) => response.text())
   .then((data) => {
    article.innerHTML = data;
    Utils.tabClose();
    Utils.tabClick();
    document.getElementById('London').style.display = 'block';
    document.getElementsByClassName('tablinks')[0].click();
   });
 }
}
