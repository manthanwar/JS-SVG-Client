// =============================================================================
// File Name     : Ellipse.js
// Description   : SVG Ellipse Class
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
// 23-Aug-2024   | AMM     | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

/*
  x1 	The start of the line on the x-axis
  y1 	The start of the line on the y-axis
  x2 	The end of the line on the x-axis
  y2 	The end of the line on the y-axis
*/

import SvgParent from './SvgParent.js';

export default class Line extends SvgParent {
 constructor(data) {
  super(data);
  this.setData(data);
  this.obj = this.newLine();
 }

 initKeyVal() {
  const kv = {};
  kv.containerId = 'body';
  kv.x1 = '0';
  kv.y1 = '0';
  kv.x2 = '100';
  kv.y2 = '100';
  kv.stroke = 'black';
  kv.strokeWidth = '4';
  kv.strokeOpacity = '1';
  kv.strokeLinecap = ''; // butt (default) | round | square
  kv.strokeDasharray = ''; // '20. 10, 5, 10'
  kv.strokeLinejoin = ''; // arcs| bevel|miter (default)|miter-clip|round
  kv.marker = ''; // url(#id);
  kv.markerStart = '';
  kv.markerMid = '';
  kv.markerEnd = '';
  kv.clipPath = '';
  kv.mask = '';
  kv.transform = '';
  kv.id = 'line';
  kv.style = '';
  kv.class = '';
  this.keys = Object.keys(kv);
  return kv;
 }

 newLine() {
  const obj = document.createElementNS(this.data.ns, 'line');
  this.setAttr(obj);
  this.data.container.appendChild(obj);
  return obj;
 }
}
