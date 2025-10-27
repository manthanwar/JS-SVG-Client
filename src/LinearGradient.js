// =============================================================================
// File Name     : LinearGradient.js
// Description   : SVG <linearGradient> Class
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
    The id attribute of the <linearGradient> element defines a unique name for the gradient
    The x1, x2, y1,y2 attributes of the <linearGradient> element define the x and y starting and ending points of the gradient
    The colors of a gradient are defined with two or more <stop> elements
    The stop-color attribute in <stop> defines the color of the gradient stop
    The offset attribute in <stop> defines where the gradient stop is placed
    The fill attribute of the <ellipse> element points the element to the "grad1" gradient
*/

import SvgParent from './SvgParent.js';

export default class LinearGradient extends SvgParent {
 constructor(data) {
  super(data);
  this.setData(data);
  this.obj = this.newLinearGradient();
 }

 initKeyVal() {
  const kv = {};
  kv.containerId = 'defs';
  kv.x1 = '';
  kv.y1 = '';
  kv.x2 = '';
  kv.y2 = '';
  kv.gradientUnits = ''; // userSpaceOnUse | objectBoundingBox (default)
  kv.gradientTransform = ''; // <transform-list> | identity transform (default)
  kv.href = '';
  kv.spreadMethod = ''; // pad (default) | reflect | repeat
  kv.xlink = ''; //  <IRI> | none (default)
  kv.id = 'gradient';
  kv.style = '';
  kv.class = '';
  this.keys = Object.keys(kv);
  return kv;
 }

 newLinearGradient() {
  const obj = document.createElementNS(this.data.ns, 'linearGradient');
  this.setAttr(obj);
  this.data.container.appendChild(obj);
  return obj;
 }
}
