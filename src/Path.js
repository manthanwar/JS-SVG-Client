// =============================================================================
// File Name     : Path.js
// Description   : SVG Path Class
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
The points attribute defines the x and y coordinates for each corner of the Path
*/

import SvgParent from './SvgParent.js';

export default class Path extends SvgParent {
 constructor(data) {
  super(data);
  this.setData(data);
  this.obj = this.newPath();
 }

 initKeyVal() {
  const kv = {};
  kv.containerId = 'body';
  kv.d = 'M0,0 H100 V100';
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
  kv.id = 'path';
  kv.clipPath = '';
  kv.mask = '';
  kv.style = '';
  kv.class = '';
  this.keys = Object.keys(kv);
  return kv;
 }

 newPath() {
  const obj = document.createElementNS(this.data.ns, 'path');
  this.setAttr(obj);
  this.data.container.appendChild(obj);
  return obj;
 }
}
