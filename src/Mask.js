// =============================================================================
// File Name     : Mask.js
// Description   : SVG <Mask> Class
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

export default class Mask extends SvgParent {
 constructor(data) {
  super(data);
  this.setData(data);
  this.obj = this.newMask();
 }

 initKeyVal() {
  const kv = {};
  kv.containerId = 'defs';
  kv.x = '';
  kv.y = '';
  kv.width = '';
  kv.height = '';
  kv.maskContentUnits = ''; // userSpaceOnUse (default) | objectBoundingBox
  kv.maskUnits = ''; // userSpaceOnUse | objectBoundingBox (default)
  kv.id = '';
  kv.style = '';
  kv.class = '';
  this.keys = Object.keys(kv);
  return kv;
 }

 newMask() {
  const obj = document.createElementNS(this.data.ns, 'mask');
  this.setAttr(obj);
  this.data.container.appendChild(obj);
  return obj;
 }
}
