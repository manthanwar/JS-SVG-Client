// =============================================================================
// File Name     : RadialGradient.js
// Description   : SVG <radialGradient> Class
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
    The id attribute of the <radialGradient> element defines a unique name for the gradient
    The cx and cy attributes define the x and position of the end circle of the radial gradient
    The fx and fy attributes define the x and position of the start circle of the radial gradient
    The r attribute define the radius of the end circle of the radial gradient
    The colors of a gradient are defined with two or more <stop> elements
    The offset attribute in <stop> defines where the gradient stop is placed
    The stop-color attribute in <stop> defines the color of the gradient stop
    The fill attribute of the <ellipse> element points the element to the "grad1" gradient
*/

import SvgParent from './SvgParent.js';

export default class RadialGradient extends SvgParent {
 constructor(data) {
  super(data);
  this.setData(data);
  this.obj = this.newRadialGradient();
 }

 initKeyVal() {
  const kv = {};
  kv.containerId = 'defs';
  kv.cx = '';
  kv.cy = '';
  kv.r = '';
  kv.fr = '';
  kv.fx = '';
  kv.fy = '';
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

 newRadialGradient() {
  const obj = document.createElementNS(this.data.ns, 'radialGradient');
  this.setAttr(obj);
  this.data.container.appendChild(obj);
  return obj;
 }
}
