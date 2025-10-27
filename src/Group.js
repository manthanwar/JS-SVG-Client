// =============================================================================
// File Name     : Group.js
// Description   : HTML Scalable Vector Graphics Container using JavaScript
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
 * Class to create html group <g> tag
 * @param {Object} data - data object
 * @export
 * @class Group
 * @extends {SvgParent}
 */

export default class Group extends SvgParent {
 constructor(data) {
  super(data);
  if (data.id === undefined) this.data.id = 'group';
  this.obj = this.newGroup();
 }

 /**
  * Creates new group <g> tag
  *
  * @return {Object} Group
  * @memberof Group
  */
 newGroup() {
  const obj = document.createElementNS(this.data.ns, 'g');
  obj.setAttributeNS(null, 'id', this.data.id);
  obj.setAttributeNS(null, 'style', this.data.style);
  obj.setAttributeNS(null, 'class', this.data.class);
  this.data.container.appendChild(obj);
  return obj;
 }
}
