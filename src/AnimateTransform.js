// =============================================================================
// File Name     : AnimateTransform.js
// Description   : SVG <animateTransform> Class
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

    The attributeName attribute animates the transform attribute of the <rect> element
    The begin attribute defines when the animation should start
    The dur attribute defines the duration of the animation
    The type attribute defines the type of transformation
    The from attribute defines the starting value
    The to attribute defines the ending value
    The repeatCount attribute defines how many times the animation should play
*/

import SvgParent from './SvgParent.js';

export default class AnimateTransform extends SvgParent {
 constructor(data) {
  super(data);
  this.setData(data);
  this.obj = this.newAnimateTransform();
 }

 initKeyVal() {
  const kv = {};
  kv.containerId = 'svgMain';
  kv.attributeName = '';
  kv.begin = '';
  kv.dur = '';
  kv.type = '';
  kv.from = '';
  kv.to = '';
  kv.repeatCount = '';
  kv.fill = ''; // freeze
  kv.id = '';
  kv.style = '';
  kv.class = '';
  this.keys = Object.keys(kv);
  return kv;
 }

 newAnimateTransform() {
  const obj = document.createElementNS(this.data.ns, 'animateTransform');
  this.setAttr(obj);
  this.data.container.appendChild(obj);
  return obj;
 }
}
