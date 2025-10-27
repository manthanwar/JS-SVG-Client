// =============================================================================
// File Name  : GaugeRadialProgress.js
// Description: JS Class to draw Radial Gauge Progress using JS-SVG-Client
// -----------------------------------------------------------------------------
// Author     : Amit Manohar Manthanwar
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
  if (this.data.optionsOn) this.obj.divOptions = this.drawDivOptions();
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
   fill: this.data.option.ringText.fill,
   fillOpacity: this.data.option.ringText.fillOpacity,
   fillOpacity: this.data.option.ringText.fillOpacity,
   fontFamily: this.data.option.ringText.fontFamily,
   fontSize: this.data.option.ringText.fontSize,
   fontWeight: this.data.option.ringText.fontWeight
  };

  const cxy = this.scalePoints([1, 1]);
  const txt = text + ' ' + this.data.option.ringText.text;
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

 drawDivOptions() {
  const gui = new dat.GUI({ autoPlace: false, width: 400, closeOnTop: true });
  const divOption = new mySvg.Div(this.data.divOptions);
  divOption.obj.append(gui.domElement);
  divOption.obj.style.width = '0px';
  divOption.id = 'gui';
  gui.close();
  gui.hide();

  const element = [
   // 'gaugeSkirt',
   'ring',
   'ringText'
   // 'needleLine',
   // 'needleGear'
   // 'gaugeRange'
   // 'gaugeTitle'
  ];

  const thisObj = this;
  const doStyle = (ele, key, val) => thisObj.obj[ele].attr(key, val);

  for (const ele of element) {
   const group = gui.addFolder(ele);
   const state = this.data.option[ele];
   if (state.fill) {
    group.addColor(state, 'fill').onChange((val) => {
     doStyle(ele, 'fill', val);
    });
   }

   if (state.fillOpacity) {
    group.add(state, 'fillOpacity', 0, 1, 0.1).onChange((val) => {
     doStyle(ele, 'fill-opacity', val);
    });
   }

   if (state.stroke) {
    group.addColor(state, 'stroke').onChange((val) => {
     doStyle(ele, 'stroke', val);
    });
   }

   if (state.strokeWidth) {
    const min = state.strokeWidthRange ? state.strokeWidthRange[0] : 0;
    const max = state.strokeWidthRange ? state.strokeWidthRange[1] : 10;
    const stp = state.strokeWidthRange ? state.strokeWidthRange[2] : 1;
    group.add(state, 'strokeWidth', min, max, stp).onChange((val) => {
     doStyle(ele, 'stroke-width', val);
    });
   }

   if (state.strokeOpacity) {
    group.add(state, 'strokeOpacity', 0, 1, 0.1).onChange((val) => {
     doStyle(ele, 'stroke-opacity', val);
    });
   }

   if (state.size) {
    group.add(state, 'size', 0, 20, 0.1).onChange((val) => {
     doStyle(ele, 'r', val);
    });
   }

   if (state.fontSize) {
    group.add(state, 'fontSize', 0, 99, 1).onChange((val) => {
     doStyle(ele, 'font-size', val);
    });
   }
  }

  const btn = document.querySelector('.close-button');
  btn.onclick = () => {
   gui.hide();
   divOption.obj.style.width = '0px';
  };

  this.obj.svgMainSvg.obj.onclick = () => {
   gui.open();
   gui.show();
   divOption.obj.style.width = '420px';
  };

  return divOption;
 }
} //class

// module.exports = GaugeRadialProgress;
// export default GaugeRadialProgress
