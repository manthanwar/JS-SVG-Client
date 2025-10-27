// =============================================================================
// File Name     : TextPath.js
// Description   : SVG TextPath Class
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

// import SvgParent from './SvgParent.js';
// export default class Text extends SvgParent {

export default class Text {
 constructor(data) {
  // super(data);
  this.data = {};
  this.data.ns = 'http://www.w3.org/2000/svg';
  // this.setData(data);

  if (data.containerId === undefined) {
   this.data.container = document.body;
  } else {
   this.data.container = document.getElementById(data.containerId);
  }

  this.data.id = {};
  this.data.id.path = 'path';
  this.data.id.text = 'text';
  this.data.id.textPath = 'textPath';
  if (data.id.path) this.data.id.path = data.id.path;
  if (data.id.text) this.data.id.text = data.id.text;
  if (data.id.textPath) this.data.id.textPath = data.id.textPath;

  this.data.style = {};
  this.data.style.path = '';
  this.data.style.text = '';
  this.data.style.textPath = '';

  if (data.style) {
   if (data.style.path) this.data.style.path = data.style.path;
   if (data.style.text) this.data.style.text = data.style.text;
   if (data.style.textPath) this.data.style.textPath = data.style.textPath;
  }

  this.data.class = {};
  this.data.class.path = '';
  this.data.class.text = '';
  this.data.class.textPath = '';

  if (data.class) {
   if (data.class.path) this.data.class.path = data.class.path;
   if (data.class.text) this.data.class.text = data.class.text;
   if (data.class.textPath) this.data.class.textPath = data.class.textPath;
  }

  this.data.d = '';
  this.data.text = '';
  this.data.x = '';
  this.data.y = '';
  this.data.dx = '';
  this.data.dy = '';
  this.data.rotate = '';
  this.data.textLength = '';
  this.data.lengthAdjust = '';
  this.data.spacing = '';
  this.data.fontSize = '40';
  this.data.startOffset = '';
  this.data.href = '#' + this.data.id.path;

  if (data.d) this.data.d = data.d;
  this.data.path = this.data.d;

  if (data.text) this.data.text = data.text;
  if (data.x) this.data.x = data.x;
  if (data.x) this.data.x = data.x;
  if (data.y) this.data.y = data.y;
  if (data.dx) this.data.dx = data.dx;
  if (data.dy) this.data.dy = data.dy;
  if (data.rotate) this.data.rotate = data.rotate;
  if (data.textLength) this.data.textLength = data.textLength;
  if (data.lengthAdjust) this.data.lengthAdjust = data.lengthAdjust;
  if (data.spacing) this.data.spacing = data.spacing;
  if (data.fontSize) this.data.fontSize = data.fontSize;
  if (data.startOffset) this.data.startOffset = data.startOffset;
  if (data.href) this.data.href = data.href;

  this.obj = this.newPath();
  this.objText = this.newText();
  this.objTextPath = this.newTextPath();
 }

 newPath() {
  var obj = document.createElementNS(this.data.ns, 'path');
  if (this.data.d) obj.setAttributeNS(null, 'd', this.data.d);
  if (this.data.id.path) obj.setAttributeNS(null, 'id', this.data.id.path);
  if (this.data.style.path)
   obj.setAttributeNS(null, 'style', this.data.style.path);
  if (this.data.class.path)
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
  if (this.data.x) obj.setAttributeNS(null, 'x', this.data.x);
  if (this.data.y) obj.setAttributeNS(null, 'y', this.data.y);
  if (this.data.dx) obj.setAttributeNS(null, 'dx', this.data.dx);
  if (this.data.dy) obj.setAttributeNS(null, 'dy', this.data.dy);
  if (this.data.rotate) obj.setAttributeNS(null, 'rotate', this.data.rotate);
  if (this.data.textLength)
   obj.setAttributeNS(null, 'textLength', this.data.textLength);
  if (this.data.lengthAdjust)
   obj.setAttributeNS(null, 'lengthAdjust', this.data.lengthAdjust);
  if (this.data.spacing) obj.setAttributeNS(null, 'spacing', this.data.spacing);
  obj.setAttributeNS(null, 'id', this.data.id.text);
  if (this.data.style.text)
   obj.setAttributeNS(null, 'style', this.data.style.text);
  if (this.data.class.text)
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
  if (this.data.text) obj.textContent = this.data.text;
  if (this.data.d) obj.setAttributeNS(null, 'path', this.data.d);
  if (this.data.id.textPath)
   obj.setAttributeNS(null, 'id', this.data.id.textPath);
  if (this.data.style.textPath)
   obj.setAttributeNS(null, 'style', this.data.style.textPath);
  if (this.data.class.textPath)
   obj.setAttributeNS(null, 'class', this.data.class.textPath);
  if (this.data.fontSize)
   obj.setAttributeNS(null, 'font-size', this.data.fontSize);
  if (this.data.startOffset)
   obj.setAttributeNS(null, 'startOffset', this.data.startOffset);
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

 //  data = auto (default) | 100% | 100px | 100
 setTextLength(data) {
  this.objText.setAttributeNS(null, 'textLength', data);
  this.data.textLength = data;
  return this;
 }

 //  data = spacing | spacingAndGlyphs
 setTextLengthAdjust(data) {
  this.objText.setAttributeNS(null, 'lengthAdjust', data);
  this.data.lengthAdjust = data;
  return this;
 }

 //  data = auto | exact
 setTextSpacing(data) {
  this.objText.setAttributeNS(null, 'spacing', data);
  this.data.spacing = data;
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

 setPathId(data) {
  this.obj.setAttributeNS(null, 'id', data);
  this.data.id.path = data;
  return this;
 }

 setTextId(data) {
  this.objText.setAttributeNS(null, 'id', data);
  this.data.id.text = data;
  return this;
 }

 setTextPathId(data) {
  this.objTextPath.setAttributeNS(null, 'id', data);
  this.data.id.textPath = data;
  return this;
 }

 setPathStyle(data) {
  this.obj.setAttributeNS(null, 'style', data);
  this.data.style.path = data;
  return this;
 }

 setTextStyle(data) {
  this.objText.setAttributeNS(null, 'style', data);
  this.data.style.text = data;
  return this;
 }

 setTextPathStyle(data) {
  this.objTextPath.setAttributeNS(null, 'style', data);
  this.data.style.textPath = data;
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
