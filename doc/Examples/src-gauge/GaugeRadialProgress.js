// =============================================================================
// File Name  : GaugeRadialProgress.js
// Description: JS Class to draw Radial Gauge Progress using JS-SVG-Client
// -----------------------------------------------------------------------------
// Author     : Amit Manohar Manthanwar
// Mailer     : manthanwar@hotmail.com
// WebURL     : https://manthanwar.github.io
// -----------------------------------------------------------------------------
// Copyright  : (c) 2024 Amit Manohar Manthanwar
// License    : MIT License
// ----------------------------------------------------------------------------
// This program can be redistributed and/or modified under the terms
// of the MIT License. For details see the file license.txt
// =============================================================================
// Revision Log  | Author  | Description
// --------------+---------+----------------------------------------------------
// 20-Nov-2024   | AMM | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

import * as mySvg from './svg.min.js';
import GaugeParent from './GaugeParent.js';

export default class GaugeRadialProgress extends GaugeParent {
 constructor(data) {
  super(data);
  this.drawDataRing(0);
  this.drawDataRingText('');
 } //constructor

 drawObject(percent) {
  this.removeObject();
  this.drawDataRing(percent);
  this.drawDataRingText(percent);
 }

 removeObject() {
  const idText = this.data.svgMainSvg.id + '-text-' + 0;
  const idRing = this.data.idSvg + '-circle-' + 0;
  document.getElementById(idText).remove();
  document.getElementById(idRing).remove();
 }

 drawDataRing(percent) {
  const style = {
   fill: 'none',
   fillOpacity: '0',
   stroke: this.data.option.ring.stroke,
   strokeWidth: this.data.option.ring.strokeWidth,
   strokeOpacity: this.data.option.ring.strokeOpacity,
   angle: this.data.option.ring.angle
  };

  const cxy = this.scalePoints([1, 1]);
  const radius = cxy[0] - 1 * style.strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  style.strokeDasharray = `${circumference} ${circumference}`;
  style.strokeDashoffset = circumference;
  style.strokeDashoffset = offset;

  this.obj.ring = this.drawCircle(cxy, radius, 0, style);
 }

 drawDataRingText(text) {
  const style = {
   fill: this.data.option.label.fill,
   fillOpacity: this.data.option.label.fillOpacity,
   fillOpacity: this.data.option.label.fillOpacity,
   fontFamily: this.data.option.label.fontFamily,
   fontSize: this.data.option.label.fontSize,
   fontWeight: this.data.option.label.fontWeight
  };

  const cxy = this.scalePoints([1, 1]);
  const txt = text + ' ' + this.data.option.label.text;
  this.obj.ringText = this.drawText(cxy, txt, 0, style);
 }

 drawCircle(cxy, rrr, id, style) {
  const data = {};
  data.containerId = this.data.idSvg;
  data.id = data.containerId + '-circle-' + id;
  // data.transform = this.transform();
  // data.transform = 'rotate(90deg)';
  data.transform = `rotate(${style.angle}, ${cxy[0]}, ${cxy[1]})`;
  data.cx = cxy[0];
  data.cy = cxy[1];
  data.r = rrr;
  data.fill = style.fill;
  data.fillOpacity = style.fillOpacity;
  data.stroke = style.stroke;
  data.strokeWidth = style.strokeWidth;
  data.strokeOpacity = style.strokeOpacity;
  data.strokeDasharray = style.strokeDasharray;
  data.strokeDashoffset = style.strokeDashoffset;
  data.class = 'marker';
  // data.clipPath = 'url(#cut-bottom)';
  return new mySvg.Circle(data);
 }

 drawText(xy, text, id, style) {
  const data = {};
  data.containerId = this.data.svgMainSvg.id;
  data.id = data.containerId + '-text-' + id;
  data.x = xy[0] + this.data.grid.padding.left;
  data.y = xy[1] + this.data.grid.padding.top + style.fontSize / 3;
  data.text = text;
  data.fontFamily = style.fontFamily;
  data.fontSize = style.fontSize;
  data.fontWeight = style.fontWeight;
  data.fill = style.fill;
  data.fillOpacity = style.fillOpacity;
  data.stroke = 'none';
  data.strokeWidth = '0';
  data.class = '';
  return new mySvg.Text(data);
 }
} //class

// module.exports = GaugeRadialProgress;
// export default GaugeRadialProgress
