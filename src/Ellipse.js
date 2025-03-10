// =============================================================================
// File Name     : Ellipse.js
// Description   : SVG Ellipse Class
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
    The rx attribute defines the x (horizontal) radius
    The ry attribute defines the y (vertical) radius
    The cx attribute defines the x-axis center of the ellipse
    The cy attribute defines the y-axis center of the ellipse
*/

import SvgParent from './SvgParent.js';

export default class Ellipse extends SvgParent {
 constructor(data) {
  super(data);
  this.setData(data);
  this.obj = this.newEllipse();
 }

 // kv.strokeLinecap = 'square'; // butt (default) | round | square
 // kv.strokeDasharray = ''; // '20. 10, 5, 10'
 // kv.strokeLinejoin = 'arcs'; // arcs| bevel|miter (default)|miter-clip|round
 // kv.paintOrder = 'fill'; // normal (default) | [ fill || stroke }| markers]
 // kv.transform = '';

 initKeyVal() {
  const kv = {};
  kv.containerId = 'body';
  kv.cx = '0';
  kv.cy = '0';
  kv.rx = '100';
  kv.ry = '50';
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
  kv.id = 'ellipse';
  kv.clipPath = '';
  kv.mask = '';
  kv.style = '';
  kv.class = '';
  this.keys = Object.keys(kv);
  return kv;
 }

 newEllipse() {
  const obj = document.createElementNS(this.data.ns, 'ellipse');
  this.setAttr(obj);
  this.data.container.appendChild(obj);
  return obj;
 }
}
