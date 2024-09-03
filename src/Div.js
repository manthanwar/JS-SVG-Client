// =============================================================================
// File Name     : Div.js
// Description   : Class to create html <div> tag
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
// 26-Aug-2024   | AMM     | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

import SvgParent from './SvgParent.js';

export default class Div extends SvgParent {
 constructor(data) {
  super(data);
  this.setData(data);
  this.data.container = document.body;
  this.obj = this.newDiv();
 }

 initKeyVal() {
  const kv = {};
  kv.containerId = 'body';
  kv.id = 'svgDiv';
  kv.style = '';
  kv.width = '100px';
  kv.height = '100px';
  kv.transform = '';
  kv.class = '';
  this.keys = Object.keys(kv);
  return kv;
 }

 newDiv() {
  var obj = document.createElement('div');
  obj.id = this.data.id;
  obj.style = this.data.style;
  obj.style.width = this.data.width;
  obj.style.height = this.data.height;
  obj.style.transform = this.data.transform;
  if (this.data.class) obj.classList.add(this.data.class);
  this.obj = obj;
  this.data.container.appendChild(obj);
  return obj;
 }
}
