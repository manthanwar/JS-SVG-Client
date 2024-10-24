// =============================================================================
// File Name     : SvgParent.js
// Description   : Svg Parent Class to create SVG Objects
// -----------------------------------------------------------------------------
// Author        : Amit Manohar Manthanwar
// Mailer        : manthanwar@hotmail.com
// Mobile        : +91.853.081.3398
// WebURL        : https://manthanwar.github.io
// -----------------------------------------------------------------------------
// Copyright     : (c) 2024 Amit Manohar Manthanwar
// License       : MIT License
// -----------------------------------------------------------------------------
// This program can be redistributed and/or modified under the terms
// of the MIT License. For details see the file license.txt
// =============================================================================
// Revision Log  | Author  | Description
// --------------+---------+----------------------------------------------------
// 23-Aug-2024   | AMM     | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

/**
 * Parent SVG inherited by other SVG Objects
 *
 * @param {Object} data - data object
 * @param {String} data.container - id of container tag
 *
 * @export
 * @class SvgParent
 */
export default class SvgParent {
 constructor(data) {
  this.data = JSON.parse(JSON.stringify(data));
  this.data.ns = 'http://www.w3.org/2000/svg';
  this.setData(data);
  if (data.containerId === undefined || data.containerId === 'body') {
   this.data.container = document.body;
  } else {
   this.data.container = document.getElementById(data.containerId);
  }
 }

 initKeyVal() {
  const kv = {};
  kv.containerId = 'body';
  kv.x = '0';
  kv.y = '0';
  kv.width = '100';
  kv.height = '100';
  kv.stroke = 'black';
  kv.strokeWidth = '4';
  kv.strokeOpacity = '1';
  kv.strokeLinecap = 'square'; // butt (default) | round | square
  kv.strokeDasharray = ''; // '20. 10, 5, 10'
  kv.strokeLinejoin = 'arcs'; // arcs| bevel|miter (default)|miter-clip|round
  kv.fill = 'yellow';
  kv.fillOpacity = '1';
  kv.transform = '';
  kv.id = 'svgId';
  kv.style = '';
  kv.class = '';
  this.keys = Object.keys(kv);
  return kv;
 }

 setData(data) {
  const kv = this.initKeyVal();
  for (const key in kv) {
   if (!data[key]) this.data[key] = kv[key];
  }
  this.getSet(kv);
 }

 setAttr(obj) {
  for (const key of this.keys) {
   if (key !== 'containerId' && this.data[key]) {
    obj.setAttributeNS(null, this.camelDash(key), this.data[key]);
   }
  }
  // return obj;
 }

 camelDash(value) {
  if (value === 'viewBox') return value;
  if (value === 'lengthAdjust') return value;
  if (value === 'textLength') return value;
  return value.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
 }

 getSet(kv) {
  for (const key in kv) {
   Object.defineProperty(this, key, {
    get: function () {
     return this.data[key];
    },
    set: function (value) {
     this.data[key] = value;
     this.setAttr(this.obj);
     return this;
    },
    enumerable: true,
    configurable: true
   });
  }
 }

 // /**
 //  * Returns the attribute value of svg tag
 //  *
 //  * @param {String} attribute
 //  * @return {String}
 //  * @memberof SvgParent
 //  */
 // getAttribute(attribute) {
 //  return this.obj.getAttribute(attribute);
 // }

 /**
  * Sets the attribute to svg tag
  *
  * @param {String} attribute
  * @param {String} value
  * @return {Object} SvgParent
  * @memberof SvgParent
  */
 attr(attribute, value) {
  this.obj.setAttributeNS(null, attribute, value);
  this.data[attribute] = value;
  return this;
 }

 /**
  * Returns the size = [width, height] of an HTML element
  * @param elementString {String}
  * @returns {String []}
  * @memberof SvgParent
  */
 getSizeSvg(elementString) {
  const element = document.getElementById(elementString);
  const computedStyle = getComputedStyle(element);
  const padTop = parseFloat(computedStyle.paddingTop);
  const padBottom = parseFloat(computedStyle.paddingBottom);
  const padLeft = parseFloat(computedStyle.paddingLeft);
  const padRight = parseFloat(computedStyle.paddingRight);
  const elementWidth = element.clientWidth; // width with padding
  const elementHeight = element.clientHeight; // height with padding
  const size = {};
  size.width = elementWidth - padLeft - padRight;
  size.height = elementHeight - padTop - padBottom;
  return size;
 }

 /**
  * Returns the size = [width, height] of SVG Text
  * @param {String} elementString - id of <svg> <text> element
  * @returns {String []}
  * @memberof SvgParent
  */
 getSizeText(elementString) {
  const box = document.getElementById(elementString).getBBox();
  const size = {};
  size.width = box.width;
  size.height = box.height;
  return size;
 }

 /**
  * @description removes items from an array
  *
  * @param {String []} array - original array
  * @param {String []} itemsToRemove - array of items to remove
  * @returns {String []}
  * @memberof SvgParent
  * @example
  * removeItems([1, 2, 3, 4, 5], [1, 4]); // [2, 3, 5]
  */
 removeItems = (array, itemsToRemove) => {
  return array.filter((v) => {
   return !itemsToRemove.includes(v);
  });
 };

 // get x() {
 //  return this.obj.getAttribute('x');
 // }

 // set x(data) {
 //  this.obj.setAttributeNS(null, 'x', data);
 //  this.data.x = data;
 // }

 // setX(data) {
 //  this.obj.setAttributeNS(null, 'x', data);
 //  this.data.x = data;
 //  return this;
 // }

 // get y() {
 //  return this.obj.getAttribute('y');
 // }

 // set y(data) {
 //  this.obj.setAttributeNS(null, 'y', data);
 //  this.data.y = data;
 // }

 // setY(data) {
 //  this.obj.setAttributeNS(null, 'y', data);
 //  this.data.y = data;
 //  return this;
 // }

 // get width() {
 //  return this.obj.getAttribute('width');
 // }

 // set width(data) {
 //  this.obj.setAttributeNS(null, 'width', data);
 //  this.data.width = data;
 // }

 // setWidth(data) {
 //  this.obj.setAttributeNS(null, 'width', data);
 //  this.data.width = data;
 //  return this;
 // }

 // get height() {
 //  return this.obj.getAttribute('height');
 // }

 // set height(data) {
 //  this.obj.setAttributeNS(null, 'height', data);
 //  this.data.height = data;
 // }

 // setHeight(data) {
 //  this.obj.setAttributeNS(null, 'height', data);
 //  this.data.height = data;
 //  return this;
 // }

 // get id() {
 //  return this.obj.getAttribute('id');
 // }

 // set id(data) {
 //  this.obj.setAttribute('id', data);
 //  this.data.id = data;
 // }

 // setId(data) {
 //  this.obj.setAttributeNS(null, 'id', data);
 //  this.data.id = data;
 //  return this;
 // }

 // get style() {
 //  return this.obj.getAttribute('style');
 // }

 // set style(data) {
 //  this.obj.setAttribute('style', data);
 //  this.data.style = data;
 // }

 // setStyle(data) {
 //  this.obj.setAttributeNS(null, 'style', data);
 //  this.data.style = data;
 //  return this;
 // }

 // get class() {
 //  return this.obj.getAttribute('class');
 // }

 // set class(data) {
 //  this.obj.setAttribute('class', data);
 //  this.data.class = data;
 // }

 // setClass(data) {
 //  this.obj.setAttributeNS(null, 'class', data);
 //  this.data.class = data;
 //  return this;
 // }

 // set fill(data) {
 //  this.style += 'fill:' + data + ';';
 //  this.obj.setAttributeNS(null, 'style', this.style);
 //  return this;
 // }

 // setFill(data) {
 //  this.style += 'fill:' + data + ';';
 //  this.obj.setAttributeNS(null, 'style', this.style);
 //  return this;
 // }

 // set stroke(data) {
 //  this.style += 'stroke:' + data + ';';
 //  this.obj.setAttributeNS(null, 'style', this.style);
 //  return this;
 // }

 // setStroke(data) {
 //  this.style += 'stroke:' + data + ';';
 //  this.obj.setAttributeNS(null, 'style', this.style);
 //  return this;
 // }

 // set strokeWidth(data) {
 //  this.style += 'stroke-width:' + data + ';';
 //  this.obj.setAttributeNS(null, 'style', this.style);
 //  return this;
 // }

 // setStrokeWidth(data) {
 //  this.style += 'stroke-width:' + data + ';';
 //  this.obj.setAttributeNS(null, 'style', this.style);
 //  return this;
 // }

 // set fillOpacity(data) {
 //  this.obj.setAttributeNS(null, 'fill-opacity', data);
 //  this.data.fillOpacity = data;
 //  return this;
 // }

 // setFillOpacity(data) {
 //  this.obj.setAttributeNS(null, 'fill-opacity', data);
 //  this.data.fillOpacity = data;
 //  return this;
 // }

 // set strokeOpacity(data) {
 //  this.obj.setAttributeNS(null, 'stroke-opacity', data);
 //  this.data.strokeOpacity = data;
 //  return this;
 // }

 // setStrokeOpacity(data) {
 //  this.obj.setAttributeNS(null, 'stroke-opacity', data);
 //  this.data.strokeOpacity = data;
 //  return this;
 // }
}
