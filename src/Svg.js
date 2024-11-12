// =============================================================================
// File Name     : Svg.js
// Description   : HTML Scalable Vector Graphics Container using JavaScript
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
// 23-Aug-2024   | AMM     | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

import SvgParent from './SvgParent.js';

/**
 * Class to create HTML <svg> Tag
 * @param {Object} data - data object
 * @param {String} data.viewBox - 'x y width height' e.g. '0 0 100 100'
 * @export
 * @class Svg
 * @extends {SvgParent}
 */

export default class Svg extends SvgParent {
 constructor(data) {
  super(data);
  this.setData(data);
  this.obj = this.newSvg();
 }

 initKeyVal() {
  const kv = {};
  kv.containerId = 'body';
  kv.x = '0';
  kv.y = '0';
  kv.width = '100%';
  kv.height = '100%';
  // kv.viewbox = '0 0 100% 100%';
  kv.viewBox = '';
  kv.id = 'svg';
  kv.style = '';
  kv.class = '';
  this.keys = Object.keys(kv);
  return kv;
 }

 /**
  * Creates new <svg> tag
  *
  * @return {Object} Svg
  * @memberof Svg
  */
 newSvg() {
  const obj = document.createElementNS(this.data.ns, 'svg');
  this.setAttr(obj);
  this.data.container.appendChild(obj);
  return obj;
 }

 // get viewBox() {
 //  return this.obj.getAttribute('viewbox');
 // }

 // set viewBox(data) {
 //  this.obj.setAttributeNS(null, 'viewbox', data);
 //  this.data.viewBox = data;
 // }

 // setViewBox(data) {
 //  this.obj.setAttributeNS(null, 'viewbox', data);
 //  this.data.viewBox = data;
 //  return this;
 // }
}
