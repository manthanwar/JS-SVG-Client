// =============================================================================
// File Name     : Grid.js
// Description   : SVG Grid Class
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
// 26-Aug-2024   | AMM     | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

import { Svg, Rectangle, Line, Text } from './index.js';

export default class Grid {
 constructor(data) {
  this.data = {};
  if (!data.containerId) this.data.containerId = 'svgMain';
  this.data = JSON.parse(JSON.stringify(data));
  this.data.containerSize = this.getSizeSvg(this.data.containerId);
  this.setData(data);

  // Box =  Svg to hold grid lines
  this.drawSvg();
  // if (this.data.boxOn) this.drawBoxLines();

  // // Axes
  if (this.data.axesOn) this.drawAxes();

  // // Title
  if (this.data.titleOn) this.drawTitle();

  // // Axis Label X
  if (this.data.axisLabelOnX) this.drawAxisLabelX();

  // // Axis Label Y
  if (this.data.axisLabelOnY) this.drawAxisLabelY();

  // Grid Minor
  if (this.data.minorOnX) this.newMinorX();
  if (this.data.minorOnY) this.newMinorY();

  // Grid Major
  if (this.data.majorOnX) this.newMajorX();
  if (this.data.majorOnY) this.newMajorY();

  // Axis Numbers
  if (this.data.axisNumOnX) this.drawAxisNumX();
  if (this.data.axisNumOnY) this.drawAxisNumY();

  // this.data.stroke = this.data.majorStroke;
  // this.data.strokeWidth = this.data.majorStrokeWidth;
  // this.data.strokeOpacity = this.data.majorStrokeOpacity;
  // this.data.strokeDasharray = '';
  // this.data.strokeWidth = '0.5';
  // this.newMajorX(this.data);
  // this.newMajorY(this.data);
 }

 setData(data) {
  const kv = {};
  // region Padding
  kv.padding = {};
  kv.padding.left = 40;
  kv.padding.right = 10;
  kv.padding.top = 20;
  kv.padding.bottom = 40;
  // endregion Padding

  // region boolean
  kv.boxOn = false;
  kv.axesOn = false;
  kv.titleOn = false;
  kv.axisLabelOnX = false;
  kv.axisLabelOnY = false;
  kv.axisNumOnX = false;
  kv.axisNumOnY = false;
  kv.minorOnX = false;
  kv.minorOnY = false;
  kv.majorOnX = false;
  kv.majorOnY = false;
  // endregion boolean

  // region box = inner svg for holding grid lines
  kv.box = {};
  kv.box.stroke = 'black';
  kv.box.strokeWidth = 2;
  kv.box.strokeOpacity = 1;
  kv.box.fill = 'pink';
  kv.box.fillOpacity = 1;
  kv.box.idSvg = this.data.containerId + '-svg';
  kv.box.idBox = this.data.containerId + '-box';
  kv.box.style = '';
  kv.box.class = '';
  // endregion box

  // region Axes
  kv.axes = {};
  kv.axes.stroke = 'black';
  kv.axes.strokeWidth = 6;
  kv.axes.strokeOpacity = '1';
  kv.axes.id = this.data.containerId + '-axes';
  kv.axes.style = '';
  kv.axes.class = '';
  // endregion Axes

  // region title
  kv.title = {};
  kv.title.text = 'Plot Title';
  kv.title.x = '50%';
  kv.title.y = 14;
  kv.title.dx = '0';
  kv.title.dy = '0';
  kv.title.fontFamily = 'inherit';
  kv.title.fontSize = '20';
  kv.title.fontWeight = 'normal';
  kv.title.fill = 'black';
  kv.title.fillOpacity = '1';
  kv.title.stroke = 'black';
  kv.title.strokeWidth = '0';
  kv.title.strokeOpacity = '1';
  kv.title.rotate = '0';
  kv.title.transform = '';
  kv.title.id = this.data.containerId + '-title';
  kv.title.style = '';
  kv.title.class = '';
  // endregion title

  // region Axis X label
  kv.axisLabelX = {};
  kv.axisLabelX.text = 'X Axis';
  kv.axisLabelX.containerId = this.data.containerId;
  kv.axisLabelX.x = '50%';
  kv.axisLabelX.y = this.data.containerSize.height - 2;
  kv.axisLabelX.dx = '0';
  kv.axisLabelX.dy = '0';
  kv.axisLabelX.fontFamily = 'inherit';
  kv.axisLabelX.fontSize = '16';
  kv.axisLabelX.fontWeight = 'normal';
  kv.axisLabelX.fill = 'black';
  kv.axisLabelX.fillOpacity = '1';
  kv.axisLabelX.stroke = 'black';
  kv.axisLabelX.strokeWidth = '0';
  kv.axisLabelX.strokeOpacity = '1';
  kv.axisLabelX.rotate = '0';
  kv.axisLabelX.transform = '';
  kv.axisLabelX.id = this.data.containerId + '-axisLabelX';
  kv.axisLabelX.style = '';
  kv.axisLabelX.class = '';
  // endregion X Axis Label

  // region Y Axis Label
  kv.axisLabelY = {};
  kv.axisLabelY.text = 'Y Axis';
  kv.axisLabelY.containerId = this.data.containerId;
  kv.axisLabelY.x = -'50%';
  kv.axisLabelY.y = 12;
  kv.axisLabelY.dx = '0';
  kv.axisLabelY.dy = '0';
  kv.axisLabelY.fontFamily = 'inherit';
  kv.axisLabelY.fontSize = '16';
  kv.axisLabelY.fontWeight = 'normal';
  kv.axisLabelY.fill = 'black';
  kv.axisLabelY.fillOpacity = '1';
  kv.axisLabelY.stroke = 'black';
  kv.axisLabelY.strokeWidth = '0';
  kv.axisLabelY.strokeOpacity = '1';
  kv.axisLabelY.rotate = '0';
  kv.axisLabelY.transform = 'rotate(-90, 100, 100)';
  kv.axisLabelY.id = this.data.containerId + '-axisLabelY';
  kv.axisLabelY.style = '';
  kv.axisLabelY.class = '';
  // endregion Y Axis Label

  // region Axis Number X
  kv.axisNumX = {};
  kv.axisNumX.text = '1';
  kv.axisNumX.x = '50%';
  kv.axisNumX.y = '50%';
  kv.axisNumX.dx = '0';
  kv.axisNumX.dy = '0';
  kv.axisNumX.fontFamily = 'inherit';
  kv.axisNumX.fontSize = 16;
  kv.axisNumX.fontWeight = 'normal';
  kv.axisNumX.fill = 'dimGray';
  kv.axisNumX.fillOpacity = 1;
  kv.axisNumX.stroke = 'dimGray';
  kv.axisNumX.strokeWidth = '0';
  kv.axisNumX.strokeOpacity = 1;
  kv.axisNumX.rotate = '0';
  kv.axisNumX.transform = '';
  kv.axisNumX.containerId = this.data.containerId;
  kv.axisNumX.id = this.data.containerId + '-axisNumX';
  kv.axisNumX.style = '';
  kv.axisNumX.class = '';
  // endregion Axis Number X

  // region Axis Number Y
  kv.axisNumY = {};
  kv.axisNumY.text = '1';
  kv.axisNumY.textAnchor = 'end'; // horizontal alignment
  kv.axisNumY.alignmentBaseline = 'middle';
  kv.axisNumY.x = '58%';
  kv.axisNumY.y = '50%';
  kv.axisNumY.dx = '0';
  kv.axisNumY.dy = '0';
  kv.axisNumY.fontFamily = 'inherit';
  kv.axisNumY.fontSize = 16;
  kv.axisNumY.fontWeight = 'normal';
  kv.axisNumY.fill = 'dimGray';
  kv.axisNumY.fillOpacity = 1;
  kv.axisNumY.stroke = 'dimGray';
  kv.axisNumY.strokeWidth = '0';
  kv.axisNumY.strokeOpacity = '1';
  kv.axisNumY.rotate = '0';
  kv.axisNumY.transform = '';
  kv.axisNumY.containerId = this.data.containerId;
  kv.axisNumY.id = this.data.containerId + '-axisNumY';
  kv.axisNumY.style = '';
  kv.axisNumY.class = '';
  // endregion Axis Number Y

  // region grid
  kv.minorNumX = '5';
  kv.minorNumY = '5';
  kv.majorNumX = '10';
  kv.majorNumY = '10';
  // endregion grid

  // region Minor
  kv.minor = {};
  kv.minor.stroke = 'gray';
  kv.minor.strokeWidth = '0.5';
  kv.minor.strokeOpacity = '1';
  kv.minor.strokeDasharray = '1 2';
  kv.minor.idX = this.data.containerId + '-minorX';
  kv.minor.idY = this.data.containerId + '-minorY';
  kv.minor.styleX = '';
  kv.minor.styleY = '';
  kv.minor.classX = '';
  kv.minor.classY = '';
  // endregion Minor

  // region Major
  kv.major = {};
  kv.major.stroke = 'gray';
  kv.major.strokeWidth = '0.8';
  kv.major.strokeOpacity = '1';
  kv.major.strokeDasharray = '';
  kv.major.idX = this.data.containerId + '-majorX';
  kv.major.idY = this.data.containerId + '-majorY';
  kv.major.styleX = '';
  kv.major.styleY = '';
  kv.major.classX = '';
  kv.major.classY = '';
  // endregion Major

   for (const key in kv) {
   if (!data[key]) this.data[key] = kv[key];
  }
 }

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

 getSizeText(elementString) {
  const box = document.getElementById(elementString).getBBox();
  const size = {};
  size.width = box.width;
  size.height = box.height;
  return size;
 }

 drawSvg() {
  const dBox = JSON.parse(JSON.stringify(this.data.box));
  const size = this.getSizeSvg(this.data.containerId);
  const dSvg = {};
  dSvg.containerId = this.data.containerId;
  dSvg.id = dBox.idSvg;
  dSvg.x = this.data.padding.left;
  dSvg.y = this.data.padding.top;
  dSvg.width = size.width - this.data.padding.left - this.data.padding.right;
  dSvg.height = size.height - this.data.padding.top - this.data.padding.bottom;
  dSvg.style = dBox.style;
  dSvg.class = dBox.class;
  this.objSvg = new Svg(dSvg);

  // Draw Rectangle inside svg-box
  if (this.data.boxOn) {
   const dRect = {};
   dRect.containerId = dSvg.id;
   dRect.id = dBox.idBox;
   dRect.x = dBox.strokeWidth / 2;
   dRect.y = dBox.strokeWidth / 2;
   dRect.width = dSvg.width - dBox.strokeWidth;
   dRect.height = dSvg.height - dBox.strokeWidth;
   dRect.stroke = dBox.stroke;
   dRect.strokeWidth = dBox.strokeWidth;
   dRect.strokeOpacity = dBox.strokeOpacity;
   dRect.fill = dBox.fill;
   dRect.fillOpacity = dBox.fillOpacity;
   this.objBox = new Rectangle(dRect);
  }
 }

 drawBoxLines() {
  // this.checkIdStyleClass('box');
  const data = {};
  data.stroke = this.data.box.stroke;
  data.strokeWidth = this.data.box.strokeWidth;
  data.strokeOpacity = this.data.box.strokeOpacity;
  this.objBoxLines = [];
  // data.containerId = this.data.containerId;
  data.containerId = this.objSvg.data.id;
  data.x1 = '0';
  data.y1 = '0';
  data.x2 = '100%';
  data.y2 = '0';
  this.objBoxLines[0] = new Line(data);

  data.x1 = '100%';
  data.y1 = '0';
  data.x2 = '100%';
  data.y2 = '100%';
  this.objBoxLines[1] = new Line(data);

  data.x1 = '100%';
  data.y1 = '100%';
  data.x2 = '0';
  data.y2 = '100%';
  this.objBoxLines[2] = new Line(data);

  data.x1 = '0';
  data.y1 = '100%';
  data.x2 = '0';
  data.y2 = '0';
  this.objBoxLines[3] = new Line(data);
 }

 drawAxes() {
  const data = JSON.parse(JSON.stringify(this.data.axes));
  data.containerId = this.objSvg.data.id;
  data.x1 = '0';
  data.y1 = '100%';
  data.x2 = '100%';
  data.y2 = '100%';
  this.objAxisX = new Line(data);
  data.x1 = '0';
  data.y1 = '100%';
  data.x2 = '0';
  data.y2 = '0';
  this.objAxisY = new Line(data);
 }

 drawTitle() {
  const data = JSON.parse(JSON.stringify(this.data.title));
  data.containerId = this.data.containerId;
  this.objTitle = new Text(data);
 }

 drawAxisLabelX() {
  const data = JSON.parse(JSON.stringify(this.data.axisLabelX));
  data.containerId = this.data.containerId;
  this.axisLabelX = new Text(data);
 }

 drawAxisLabelY() {
  const data = JSON.parse(JSON.stringify(this.data.axisLabelY));
  data.containerId = this.data.containerId;
  this.axisLabelY = new Text(data);
 }

 newMinorX() {
  let mulXX = this.data.minorNumY * this.data.majorNumY;
  const data = {};
  data.containerId = this.objSvg.data.id;
  data.stroke = this.data.minor.stroke;
  data.strokeWidth = this.data.minor.strokeWidth;
  data.strokeOpacity = this.data.minor.strokeOpacity;
  data.strokeDasharray = this.data.minor.strokeDasharray;
  data.id = this.data.minor.idX;
  data.style = this.data.minor.styleX;
  data.class = this.data.minor.classX;
  this.objMinorX = [];
  for (let i = 0; i < mulXX - 1; i++) {
   data.x1 = '0';
   data.x2 = '100%';
   data.y1 = (((i + 1) * 100) / mulXX).toString() + '%';
   data.y2 = (((i + 1) * 100) / mulXX).toString() + '%';
   this.objMinorX[i] = new Line(data);
  }
 }

 newMinorY() {
  let mulYY = this.data.minorNumX * this.data.majorNumX;
  const data = {};
  data.containerId = this.objSvg.data.id;
  data.stroke = this.data.minor.stroke;
  data.strokeWidth = this.data.minor.strokeWidth;
  data.strokeOpacity = this.data.minor.strokeOpacity;
  data.strokeDasharray = this.data.minor.strokeDasharray;
  data.id = this.data.minor.idY;
  data.style = this.data.minor.styleY;
  data.class = this.data.minor.classY;
  this.objMinorY = [];
  for (let i = 0; i < mulYY - 1; i++) {
   data.y1 = '0';
   data.y2 = '100%';
   data.x1 = (((i + 1) * 100) / mulYY).toString() + '%';
   data.x2 = (((i + 1) * 100) / mulYY).toString() + '%';
   this.objMinorY[i] = new Line(data);
  }
 }

 newMajorX() {
  const data = {};
  data.containerId = this.objSvg.data.id;
  data.stroke = this.data.major.stroke;
  data.strokeWidth = this.data.major.strokeWidth;
  data.strokeOpacity = this.data.major.strokeOpacity;
  data.strokeDasharray = this.data.major.strokeDasharray;
  data.id = this.data.major.idX;
  data.style = this.data.major.styleX;
  data.class = this.data.major.classX;
  this.objMajorX = [];
  for (let i = 0; i < this.data.majorNumY + 1; i++) {
   data.x1 = (100 - data.strokeWidth).toString() + '%';
   data.x1 = '0';
   data.x2 = '100%';
   data.y1 = ((i * 100) / this.data.majorNumY).toString() + '%';
   if (i === 0) data.y1 = data.strokeWidth / 2;
   if (i === this.data.majorNumY)
    data.y1 = this.objSvg.data.height - data.strokeWidth / 2;
   data.y2 = data.y1;
   this.objMajorX[i] = new Line(data);
  }
 }

 newMajorY() {
  const data = {};
  data.containerId = this.objSvg.data.id;
  data.stroke = this.data.major.stroke;
  data.strokeWidth = this.data.major.strokeWidth;
  data.strokeOpacity = this.data.major.strokeOpacity;
  data.strokeDasharray = this.data.major.strokeDasharray;
  data.id = this.data.major.idY;
  data.style = this.data.major.styleY;
  data.class = this.data.major.classY;
  this.objMajorY = [];
  for (let i = 0; i < this.data.majorNumX + 1; i++) {
   data.y1 = '0';
   data.y2 = '100%';
   data.x1 = ((i * 100) / this.data.majorNumX).toString() + '%';
   data.x2 = data.x1;
   if (i === 0) data.x1 = data.strokeWidth / 2;
   if (i === this.data.majorNumX)
    data.x1 = this.objSvg.data.width - data.strokeWidth / 2;
   data.x2 = data.x1;
   this.objMajorY[i] = new Line(data);
  }
 }

 drawAxisNumX() {
  const data = JSON.parse(JSON.stringify(this.data.axisNumX));
  this.objAxisNumX = [];
  data.y = this.data.padding.top + this.objSvg.height + data.fontSize;
  const delta = this.objSvg.width / this.data.majorNumX;
  for (let i = 0; i < this.data.majorNumX + 1; i++) {
   data.text = i.toString();
   data.x = i * delta + this.data.padding.left;
   this.objAxisNumX[i] = new Text(data);
  }
 }

 drawAxisNumY() {
  const data = JSON.parse(JSON.stringify(this.data.axisNumY));
  this.objAxisNumY = [];
  data.x = this.data.padding.left - 6;
  data.dy = 6;
  const delta = this.objSvg.height / this.data.majorNumY;
  for (let i = 0; i < this.data.majorNumY + 1; i++) {
   data.text = (this.data.majorNumY - i).toString();
   data.y = i * delta + this.data.padding.top;
   this.objAxisNumY[i] = new Text(data);
  }
 }
}
