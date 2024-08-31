// =============================================================================
// File Name     : Pattern.js
// Description   : SVG <pattern> Class
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
    The id attribute of the <pattern> element defines a unique name for the pattern
    The x and y attributes of the <pattern> element defines how far into the shape the pattern starts
    The width and height attributes of the <pattern> element defines the width and height of the pattern
    The <circle> element inside the <pattern> element defines the shape of the fill pattern
    The fill="url(#patt1)" attribute of the <rect> element points to the "patt1" pattern
    The rectangle will be filled with the pattern
*/

import SvgParent from './SvgParent.js';

export default class Pattern extends SvgParent {
 constructor(data) {
  super(data);
  this.setData(data);
  this.obj = this.newPattern();
 }

 initKeyVal() {
  const kv = {};
  kv.containerId = 'defs';
  kv.x = '';
  kv.y = '';
  kv.width = '';
  kv.height = '';
  kv.viewBox = '';
  kv.preserveAspectRatio = ''; // (none| xMinYMin| xMidYMin| xMaxYMin| xMinYMid| xMidYMid| xMaxYMid| xMinYMax| xMidYMax| xMaxYMax) (meet|slice)
  kv.patternUnits = ''; // userSpaceOnUse | objectBoundingBox (default)
  kv.patternTransform = ''; //  <transform-list> | none (default)
  kv.href = '';
  kv.xlink = ''; //  <IRI> | none (default)
  kv.id = '';
  kv.style = '';
  kv.class = '';
  this.keys = Object.keys(kv);
  return kv;
 }

 newPattern() {
  const obj = document.createElementNS(this.data.ns, 'pattern');
  this.setAttr(obj);
  this.data.container.appendChild(obj);
  return obj;
 }
}
