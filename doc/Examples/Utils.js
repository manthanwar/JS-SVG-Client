/*
// =============================================================================
// File Name     : Utils.js
// Date Created  : 2025-09-20 19:09 UTC +02:00
// description   : Utility Class with Utility FUnctions
// -----------------------------------------------------------------------------
// Author        : Amit Manohar Manthanwar
// Mailer        : manthanwar@hotmail.com
// WebURL        : https://manthanwar.github.io
// -----------------------------------------------------------------------------
// Copyright     : (c) 2025 Amit Manohar Manthanwar
// License       : LICENSE.md
// =============================================================================
// Revision Log  | Author  | Description
// --------------+---------+----------------------------------------------------
// 20-Sep-2025   | AMM     | Initial Version
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
  const item =`<li> ${name} </li>`;
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
}
