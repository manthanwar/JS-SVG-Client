// =============================================================================
// File Name     : Circle.js
// Description   : SVG Circle Class
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
// 23-Aug-2024   | AMM     | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

/*
  r   Required. The radius of the circle
  cx 	The x-axis center of the circle. Default is 0
  cy 	The y-axis center of the circle. Default is 0
*/

import SvgParent from './SvgParent.js';

export default class Circle extends SvgParent {
 constructor(data) {
  super(data);
  this.setData(data);
  this.obj = this.newCircle();
 }

 initKeyVal() {
  const kv = {};
  kv.containerId = 'body';
  kv.cx = '0';
  kv.cy = '0';
  kv.r = '0';
  kv.stroke = 'black';
  kv.strokeWidth = '4';
  kv.strokeOpacity = '1';
  kv.fill = 'yellow';
  kv.fillOpacity = '1';
  kv.strokeLinecap = ''; // butt (default) | round | square
  kv.strokeDasharray = ''; // '20, 10, 5, 10'
  kv.strokeLinejoin = ''; // arcs| bevel|miter (default)|miter-clip|round
  kv.paintOrder = ''; // normal (default) | [ fill || stroke }| markers]
  kv.transform = '';
  kv.id = 'circle';
  kv.style = '';
  kv.class = '';
  this.keys = Object.keys(kv);
  return kv;
 }

 newCircle() {
  const obj = document.createElementNS(this.data.ns, 'circle');
  this.setAttr(obj);
  this.data.container.appendChild(obj);
  return obj;
 }
}
