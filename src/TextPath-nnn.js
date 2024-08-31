// =============================================================================
// File Name     : Text.js
// Description   : SVG Text Class
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

// region comment
/*
// TextArea
href
The URL to the path or basic shape on which to render the text. If the path attribute is set, href has no effect.
Value type: <URL> ;
Default value: none; Animatable: yes

lengthAdjust
Where length adjustment should be applied to the text: the space between glyphs, or both the space and the glyphs themselves.
Value type: spacing|spacingAndGlyphs;
Default value: spacing; Animatable: yes

method
Which method to render individual glyphs along the path.
Value type: align|stretch ;
Default value: align; Animatable: yes

path
Experimental
The path on which the text should be rendered.
Value type: <path_data> ;
Default value: none; Animatable: yes

side
Experimental
Which side of the path the text should be rendered.
Value type: left|right ;
Default value: left; Animatable: yes

spacing
How space between glyphs should be handled.
Value type: auto|exact ;
Default value: exact; Animatable: yes

startOffset
How far the beginning of the text should be offset from the beginning of the path.
Value type: <length>|<percentage>|<number> ;
Default value: 0; Animatable: yes

textLength
The width of the space into which the text will render. Value type: <length>|<percentage>|<number> ;
Default value: auto; Animatable: yes
*/
// endregion comment

import SvgParent from './SvgParent.js';

export default class Text extends SvgParent {
 constructor(data) {
  super(data);
  if (typeof data.id !== 'object') {
   this.data.id = {};
   this.data.id.path = 'path';
   this.data.id.text = 'text';
   this.data.id.textPath = 'textPath';
  }
  if (typeof data.style !== 'object') {
   this.data.style = {};
   this.data.style.path = '';
   this.data.style.text = '';
   this.data.style.textPath = '';
  }
  if (typeof data.class !== 'object') {
   this.data.class = {};
   this.data.class.path = '';
   this.data.class.text = '';
   this.data.class.textPath = '';
  }
  if (data.d === undefined) this.data.d = 'M0,0 H100 V100';
  // if (data.path === undefined) this.data.path = this.data.d;
  if (data.text === undefined) this.data.text = 'Text';
  if (data.startOffset === undefined) this.data.startOffset = '0';
  if (data.dx === undefined) this.data.dx = '0';
  if (data.dy === undefined) this.data.dy = '0';
  if (data.rotate === undefined) this.data.rotate = '0';
  if (data.lengthAdjust === undefined) this.data.lengthAdjust = 'spacing';
  if (data.fontSize === undefined) this.data.fontSize = '30';
  this.obj = this.newPath();
  this.objText = this.newText();
  this.objTextPath = this.newTextPath();
 }

 newPath() {
  var obj = document.createElementNS(this.data.ns, 'path');
  obj.setAttributeNS(null, 'd', this.data.d);
  obj.setAttributeNS(null, 'id', this.data.id.path);
  obj.setAttributeNS(null, 'style', this.data.style.path);
  obj.setAttributeNS(null, 'class', this.data.class.path);
  this.data.container.appendChild(obj);
  return obj;
 }

 get d() {
  return this.obj.getAttribute('d');
 }

 set d(data) {
  this.obj.setAttributeNS(null, 'd', data);
  this.data.d = data;
 }

 setD(data) {
  this.obj.setAttributeNS(null, 'd', data);
  this.data.d = data;
  return this;
 }

 newText() {
  var obj = document.createElementNS(this.data.ns, 'text');
  obj.setAttributeNS(null, 'x', this.data.x);
  obj.setAttributeNS(null, 'y', this.data.y);
  obj.setAttributeNS(null, 'dx', this.data.dx);
  obj.setAttributeNS(null, 'dy', this.data.dy);
  obj.setAttributeNS(null, 'rotate', this.data.rotate);
  obj.setAttributeNS(null, 'id', this.data.id.text);
  obj.setAttributeNS(null, 'style', this.data.style.text);
  obj.setAttributeNS(null, 'class', this.data.class.text);
  this.data.container.appendChild(obj);
  return obj;
 }

 setTextRotate(data) {
  this.objText.setAttributeNS(null, 'rotate', data);
  this.data.rotate = data;
  return this;
 }

 // obj.setAttributeNS(null, 'href', this.data.href);
 //  If the path attribute is set, href has no effect.

 newTextPath() {
  var obj = document.createElementNS(this.data.ns, 'textPath');
  obj.setAttributeNS(null, 'startOffset', this.data.startOffset);
  obj.setAttributeNS(null, 'path', this.data.d);
  obj.setAttributeNS(null, 'id', this.data.id.textPath);
  obj.setAttributeNS(null, 'style', this.data.style.textPath);
  obj.setAttributeNS(null, 'class', this.data.class.textPath);
  obj.setAttributeNS(null, 'font-size', this.data.fontSize);
  obj.textContent = this.data.text;
  this.objText.appendChild(obj);
  return obj;
 }

 get textHref() {
  return this.objTextPath.getAttribute('href');
 }

 set textHref(data) {
  this.objTextPath.setAttribute('href', data);
  this.data.href = data;
 }

 //  data = none | URL to the path or basic shape
 setTextHref(data) {
  this.objTextPath.setAttributeNS(null, 'href', data);
  this.data.href = data;
  return this;
 }

 //  data = spacing | spacingAndGlyphs
 setTextLengthAdjust(data) {
  this.objTextPath.setAttributeNS(null, 'lengthAdjust', data);
  this.data.lengthAdjust = data;
  return this;
 }

 //  data = align | stretch
 setTextMethod(data) {
  this.objTextPath.setAttributeNS(null, 'method', data);
  this.data.method = data;
  return this;
 }

 setTextPath(data) {
  this.objTextPath.setAttributeNS(null, 'path', data);
  this.data.d = data;
  return this;
 }

 //  data = left | right
 setTextSide(data) {
  this.objTextPath.setAttributeNS(null, 'side', data);
  this.data.side = data;
  return this;
 }

 //  data = auto | exact
 setTextSpacing(data) {
  this.objTextPath.setAttributeNS(null, 'spacing', data);
  this.data.spacing = data;
  return this;
 }

 get textStartOffset() {
  return this.objTextPath.getAttribute('startOffset');
 }

 set textStartOffset(data) {
  this.objTextPath.setAttribute('startOffset', data);
  this.data.startOffset = data;
 }

 setTextStartOffset(data) {
  this.objTextPath.setAttribute('startOffset', data);
  this.data.startOffset = data;
  return this;
 }

 //  data = 100% | 100px | 100
 setTextLength(data) {
  this.objText.setAttributeNS(null, 'textLength', data);
  this.data.textLength = data;
  return this;
 }

 setPathClass(data) {
  this.obj.setAttribute('class', data);
  this.data.class.path = data;
  return this;
 }

 setTextClass(data) {
  this.objText.setAttribute('class', data);
  this.data.class.text = data;
  return this;
 }

 setTextPathClass(data) {
  this.objTextPath.setAttribute('class', data);
  this.data.class.textPath = data;
  return this;
 }

 setPathStyle(data) {
  this.obj.setAttributeNS(null, 'style', data);
  this.data.style.path = data;
  this.style = data;
 }

 setTextStyle(data) {
  this.objText.setAttributeNS(null, 'style', data);
  this.data.style.text = data;
  this.style = data;
 }

 setTextPathStyle(data) {
  this.objTextPath.setAttributeNS(null, 'style', data);
  this.data.style.textPath = data;
  this.style = data;
 }

 setTextFontSize(data) {
  const regex = /^(?=.*[0-9])(?=.*[A-Za-z])[A-Za-z0-9]+$/;
  if (!regex.test(data)) data = data + 'px';
  this.style += 'font-size:' + data + ';';
  this.objTextPath.setAttributeNS(null, 'style', this.style);
  return this;
 }

 setTextFontWeight(data) {
  this.style += 'font-weight:' + data + ';';
  this.objTextPath.setAttributeNS(null, 'style', this.style);
  return this;
 }

 setTextFillColor(data) {
  this.style += 'fill:' + data + ';';
  this.objTextPath.setAttributeNS(null, 'style', this.style);
  return this;
 }

 setTextLineColor(data) {
  this.style += 'stroke:' + data + ';';
  this.objTextPath.setAttributeNS(null, 'style', this.style);
  return this;
 }

 setTextLineWidth(data) {
  this.style += 'stroke-width:' + data + ';';
  this.objTextPath.setAttributeNS(null, 'style', this.style);
  return this;
 }

 setPathFillColor(data) {
  this.style += 'fill:' + data + ';';
  this.obj.setAttributeNS(null, 'style', this.style);
  return this;
 }

 setPathLineColor(data) {
  this.style += 'stroke:' + data + ';';
  this.obj.setAttributeNS(null, 'style', this.style);
  return this;
 }

 setPathLineWidth(data) {
  this.style += 'stroke-width:' + data + ';';
  this.obj.setAttributeNS(null, 'style', this.style);
  return this;
 }
}
