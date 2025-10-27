// =============================================================================
// File Name     : Filter.js
// Description   : SVG Filter Class
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

import SvgParent from './SvgParent.js';

export default class Filter extends SvgParent {
 constructor(data) {
  super(data);
  this.setData(data);
  this.obj = this.newFilter();
 }

 initKeyVal() {
  const kv = {};
  kv.containerId = 'svgMain';
  kv.x = '';
  kv.y = '';
  kv.width = '';
  kv.height = '';
  kv.filterUnits = '';
  kv.primitiveUnits = '';
  kv.xlink = '';
  kv.id = 'filter';
  kv.style = '';
  kv.class = '';
  this.keys = Object.keys(kv);
  return kv;
 }

 newFilter() {
  const obj = document.createElementNS(this.data.ns, 'filter');
  this.setAttr(obj);
  this.data.container.appendChild(obj);
  return obj;
 }
}
