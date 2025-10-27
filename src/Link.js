// =============================================================================
// File Name     : Link.js
// Description   : HTML Scalable Vector Graphics Link Tag <a> using JavaScript
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
// 26-Aug-2024   | AMM     | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

import SvgParent from './SvgParent.js';

/**
 * Class to create html link or anchor <a> tag
 * @param {Object} data - data object
 * @param {String} data.id
 * @param {String} data.href - hyperlink
 * @param {String} data.target - options: _self | _blank (default)
 * @export
 * @class Link
 * @extends {SvgParent}
 */

export default class Link extends SvgParent {
 constructor(data) {
  super(data);
  this.setData(data);
  this.obj = this.newLink();
 }

 initKeyVal() {
  const kv = {};
  kv.containerId = 'body';
  kv.href = '';
  kv.target = '_blank'; // _self
  kv.id = 'link';
  kv.style = '';
  kv.class = '';
  this.keys = Object.keys(kv);
  return kv;
 }

 /**
  * Creates new link or anchor <a> tag
  *
  * @return {Object} Link
  * @memberof Link
  */
 newLink() {
  const obj = document.createElementNS(this.data.ns, 'a');
  this.setAttr(obj);
  this.data.container.appendChild(obj);
  return obj;
 }
}
