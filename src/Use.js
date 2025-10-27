// =============================================================================
// File Name     : Use.js
// Description   : SVG Use Class
// -----------------------------------------------------------------------------
// Author        : Amit Manohar Manthanwar
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

*/

import SvgParent from './SvgParent.js';

export default class Use extends SvgParent {
 constructor(data) {
  super(data);
  this.setData(data);
  this.obj = this.newUse();
 }

 initKeyVal() {
  const kv = {};
  kv.containerId = 'svgMain';
  kv.x = '';
  kv.y = '';
  kv.href = '';
  kv.stroke = '';
  kv.strokeWidth = '';
  kv.strokeOpacity = '';
  kv.strokeLinecap = ''; // butt (default) | round | square
  kv.strokeDasharray = ''; // '20. 10, 5, 10'
  kv.strokeLinejoin = ''; // arcs| bevel|miter (default)|miter-clip|round
  kv.fill = '';
  kv.fillOpacity = '';
  kv.marker = ''; // url(#id);
  kv.markerStart = '';
  kv.markerMid = '';
  kv.markerEnd = '';
  kv.transform = '';
  kv.clipPath = '';
  kv.id = '';
  kv.style = '';
  kv.class = '';
  this.keys = Object.keys(kv);
  return kv;
 }

 newUse() {
  const obj = document.createElementNS(this.data.ns, 'use');
  this.setAttr(obj);
  this.data.container.appendChild(obj);
  return obj;
 }
}
