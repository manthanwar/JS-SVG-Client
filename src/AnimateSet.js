// =============================================================================
// File Name     : AnimateSet.js
// Description   : SVG Set Class
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

/*
    In SVG, we have four animation elements which sets or animates SVG graphics:
    <set>
    <animate>
    <animateTransform>
    <animateMotion>

    The attributeName attribute in the <set> element defines which attribute to change
    The to attribute in the <set> element defines the new value for the attribute
    The begin attribute in the <set> element defines when the animation should start
*/

import SvgParent from './SvgParent.js';

export default class AnimateSet extends SvgParent {
 constructor(data) {
  super(data);
  this.setData(data);
  this.obj = this.newAnimateSet();
 }

 initKeyVal() {
  const kv = {};
  kv.containerId = 'svgMain';
  kv.attributeName = '';
  kv.to = '';
  kv.begin = '';
  kv.id = '';
  kv.style = '';
  kv.class = '';
  this.keys = Object.keys(kv);
  return kv;
 }

 newAnimateSet() {
  const obj = document.createElementNS(this.data.ns, 'set');
  this.setAttr(obj);
  this.data.container.appendChild(obj);
  return obj;
 }
}
