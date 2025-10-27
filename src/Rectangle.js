// =============================================================================
// File Name     : Rectangle.js
// Description   : SVG Rectangle Class
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

// region comment
/*
width 	 Required. The width of the rectangle
height 	Required. The height of the rectangle
x       The x-position for the top-left corner of the rectangle
y 	     The y-position for the top-left corner of the rectangle
rx 	    The x radius of the corners of the rectangle (used to round the corners). Default is 0
ry 	   The y radius of the corners of the rectangle (used to round the corners). Default is 0
*/
// endregion comment

import SvgParent from './SvgParent.js';

export default class Rectangle extends SvgParent {
 constructor(data) {
  super(data);
  this.setData(data);
  this.obj = this.newRect();
 }

 initKeyVal() {
  const kv = {};
  kv.containerId = 'body';
  kv.x = '0';
  kv.y = '0';
  kv.rx = '0';
  kv.ry = '0';
  kv.width = '100';
  kv.height = '100';
  kv.stroke = 'black';
  kv.strokeWidth = '40';
  kv.strokeOpacity = '1';
  kv.fill = 'yellow';
  kv.fillOpacity = '1';
  kv.strokeLinecap = ''; // butt (default) | round | square
  kv.strokeDasharray = ''; // '20, 10, 5, 10'
  kv.strokeLinejoin = ''; // arcs| bevel|miter (default)|miter-clip|round
  kv.paintOrder = ''; // normal (default) | [ fill || stroke }| markers]
  kv.transform = '';
  kv.id = 'rectangle';
  kv.clipPath = '';
  kv.mask = '';
  kv.style = '';
  kv.class = '';
  this.keys = Object.keys(kv);
  return kv;
 }

 newRect() {
  const obj = document.createElementNS(this.data.ns, 'rect');
  this.setAttr(obj);
  this.data.container.appendChild(obj);
  return obj;
 }
}
