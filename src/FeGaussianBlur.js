// =============================================================================
// File Name     : FeGaussianBlur.js
// Description   : SVG feGaussianBlur Class
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
The in="SourceGraphic" part defines that the effect is created for the entire element
The stdDeviation attribute defines the amount of the blur
*/

import SvgParent from './SvgParent.js';

export default class FeGaussianBlur extends SvgParent {
 constructor(data) {
  super(data);
  this.setData(data);
  this.obj = this.newFeGaussianBlur();
 }

 initKeyVal() {
  const kv = {};
  kv.containerId = 'filter';
  kv.in = '';
  kv.stdDeviation = '';
  kv.edgeMode = '';
  kv.id = '';
  kv.style = '';
  kv.class = '';
  this.keys = Object.keys(kv);
  return kv;
 }

 newFeGaussianBlur() {
  const obj = document.createElementNS(this.data.ns, 'feGaussianBlur');
  this.setAttr(obj);
  this.data.container.appendChild(obj);
  return obj;
 }
}
