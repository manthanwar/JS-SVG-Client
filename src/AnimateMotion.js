// =============================================================================
// File Name     : AnimateMotion.js
// Description   : SVG <animateMotion> Class
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

    The path attribute defines the path of the animation
    The begin attribute defines when the animation should start
    The dur attribute defines the duration of the animation
    The repeatCount attribute defines how many times the animation should play
*/

import SvgParent from './SvgParent.js';

export default class AnimateMotion extends SvgParent {
 constructor(data) {
  super(data);
  this.setData(data);
  this.obj = this.newAnimateMotion();
 }

 initKeyVal() {
  const kv = {};
  kv.containerId = 'svgMain';
  kv.path = '';
  kv.begin = '';
  kv.dur = '';
  kv.repeatCount = '';
  kv.fill = ''; // freeze
  kv.id = '';
  kv.style = '';
  kv.class = '';
  this.keys = Object.keys(kv);
  return kv;
 }

 newAnimateMotion() {
  const obj = document.createElementNS(this.data.ns, 'animateMotion');
  this.setAttr(obj);
  this.data.container.appendChild(obj);
  return obj;
 }
}
