// =============================================================================
// File Name     : FeBlend.js
// Description   : SVG FeBlend Class
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
The in="SourceGraphic" defines that the effect is created for the entire element
The dx attribute indicates the shift along the x axis
The dy attribute indicates the shift along the x axis
*/

import SvgParent from './SvgParent.js';

export default class FeBlend extends SvgParent {
 constructor(data) {
  super(data);
  this.setData(data);
  this.obj = this.newFeBlend();
 }

 initKeyVal() {
  const kv = {};
  kv.containerId = 'filter';
  kv.in = ''; // SourceGraphic (default) | SourceAlpha | BackgroundImage | BackgroundAlpha | FillPaint | StrokePaint | <filter-primitive-reference>
  kv.in2 = '';
  kv.mode = '';
  kv.id = '';
  kv.style = '';
  kv.class = '';
  this.keys = Object.keys(kv);
  return kv;
 }

 newFeBlend() {
  const obj = document.createElementNS(this.data.ns, 'feBlend');
  this.setAttr(obj);
  this.data.container.appendChild(obj);
  return obj;
 }
}
