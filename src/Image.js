// =============================================================================
// File Name     : Image.js
// Description   : SVG Image Class
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
// 24-Aug-2024   | AMM     | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

// region comment
/*
  width 	 Required. The width of the image
  height  Required. The height of the image
  href 	  Required. The URL of the image
  x 	     The x-position for the top-left corner of the image
  y 	     The y-position for the top-left corner of the image
*/
// endregion comment

import SvgParent from './SvgParent.js';

export default class Image extends SvgParent {
 constructor(data) {
  super(data);
  this.obj = this.newImage();
 }

 newImage() {
  var obj = document.createElementNS(this.data.ns, 'image');
  obj.setAttributeNS(null, 'x', this.data.x);
  obj.setAttributeNS(null, 'y', this.data.y);
  obj.setAttributeNS(null, 'width', this.data.width);
  obj.setAttributeNS(null, 'height', this.data.height);
  obj.setAttributeNS(null, 'href', this.data.href);
  obj.setAttributeNS(null, 'id', this.data.id);
  obj.setAttributeNS(null, 'style', this.data.style);
  obj.setAttributeNS(null, 'class', this.data.class);
  obj.setAttributeNS(null, 'clip=path', this.data.clipPath);
  obj.setAttributeNS(null, 'mask', this.data.mask);
  this.data.container.appendChild(obj);
  return obj;
 }
}
