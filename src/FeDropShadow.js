// =============================================================================
// File Name     : FeDropShadow.js
// Description   : SVG FeDropShadow Class
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
// 31-Aug-2024   | AMM     | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

/*
The id attribute of the <filter> element defines a unique name for the filter
The drop shadow effect is defined with the <feDropShadow> element
The dx attribute defines the x offset of the drop shadow
The dy attribute defines the y offset of the drop shadow
The stdDeviation attribute defines the amount of the blur in the drop shadow
The flood-opacity attribute defines the opacity of the drop shadow (from 0 to 1)
*/

import SvgParent from './SvgParent.js';

export default class FeDropShadow extends SvgParent {
 constructor(data) {
  super(data);
  this.setData(data);
  this.obj = this.newFeDropShadow();
 }

 initKeyVal() {
  const kv = {};
  kv.containerId = 'filter';
  kv.dx = '';
  kv.dy = '';
  kv.stdDeviation = '';
  kv.floodColor = '';
  kv.floodOpacity = '';
  kv.id = '';
  kv.style = '';
  kv.class = '';
  this.keys = Object.keys(kv);
  return kv;
 }

 newFeDropShadow() {
  const obj = document.createElementNS(this.data.ns, 'feDropShadow');
  this.setAttr(obj);
  this.data.container.appendChild(obj);
  return obj;
 }
}
