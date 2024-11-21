// =============================================================================
// File Name     : Polygon.js
// Description   : SVG Polygon Class
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
The points attribute defines the x and y coordinates for each corner of the polygon
*/

import SvgParent from './SvgParent.js';

export default class Polygon extends SvgParent {
 constructor(data) {
  super(data);
  this.setData(data);
  this.obj = this.newPolygon();
 }

 initKeyVal() {
  const kv = {};
  kv.containerId = 'body';
  kv.points = '0 0 100 100 50 50';
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
  kv.id = 'polygon';
  kv.clipPath = '';
  kv.mask = '';
  kv.style = '';
  kv.class = '';
  this.keys = Object.keys(kv);
  return kv;
 }

 newPolygon() {
  const obj = document.createElementNS(this.data.ns, 'polygon');
  this.setAttr(obj);
  this.data.container.appendChild(obj);
  return obj;
 }
}
