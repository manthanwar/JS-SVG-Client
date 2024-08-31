// =============================================================================
// File Name     : ClipPath.js
// Description   : SVG ClipPath Class
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

import SvgParent from './SvgParent.js';

export default class ClipPath extends SvgParent {
 constructor(data) {
  super(data);
  this.setData(data);
  this.obj = this.newClipPath();
 }

 initKeyVal() {
  const kv = {};
  kv.containerId = 'defs';
  kv.id = '';
  kv.style = '';
  kv.class = '';
  this.keys = Object.keys(kv);
  return kv;
 }

 newClipPath() {
  const obj = document.createElementNS(this.data.ns, 'clipPath');
  this.setAttr(obj);
  this.data.container.appendChild(obj);
  return obj;
 }
}
