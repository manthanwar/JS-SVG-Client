// =============================================================================
// File Name  : GaugeRadialHalf.js
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
// 21-Nov-2024   | AMM | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

import * as mySvg from './svg.min.js';
import GaugeParent from './GaugeParent.js';

export default class GaugeRadialHalf extends GaugeParent {
 constructor(data) {
  super(data);
  this.drawGaugeLabel();
  this.drawGaugeSkirt();
  this.drawGaugeAreaZ();
  this.drawGaugeAreaS();
  this.drawTicksMajor();
  this.drawTicksMinor();
  this.drawGaugeRange();
  this.drawNeedleLine(0);
  this.drawNeedleGear();
  this.data.total = 100000;
 } //constructor

 drawObject(angle) {
  this.removeObject();
  this.drawNeedleLine(angle);
  this.drawNeedleGear();
 }

 removeObject() {
  const idLine = this.obj.needleLine.id;
  const idGear = this.obj.needleGear.id;
  document.getElementById(idLine).remove();
  document.getElementById(idGear).remove();
  // delete this.obj.needleLine;
 }

 drawGaugeSkirt() {
  const style = {
   fill: 'none',
   fillOpacity: '0',
   stroke: this.data.option.gaugeSkirt.stroke,
   strokeWidth: this.data.option.gaugeSkirt.strokeWidth,
   strokeOpacity: this.data.option.gaugeSkirt.strokeOpacity,
   transform: this.transform()
  };

  const cxy = this.scalePoints([2, 0]);
  const radius = this.scalePointX(1.9) + style.strokeWidth / 2;
  // const circumference = Math.PI * radius;
  // const offset = 0;
  // style.strokeDasharray = `${circumference} ${circumference}`;
  // style.strokeDashoffset = offset;

  this.obj.gaugeSkirt = this.drawCircle(cxy, radius, 0, style);
 }

 drawGaugeAreaZ() {
  const style = {
   fill: 'none',
   fillOpacity: '0',
   stroke: this.data.option.gaugeAreaZ.stroke,
   strokeWidth: this.data.option.gaugeAreaZ.strokeWidth,
   strokeOpacity: this.data.option.gaugeAreaZ.strokeOpacity,
   transform: this.transform()
  };

  const cxy = this.scalePoints([2, 0]);
  const radius = this.scalePointX(1.65) + style.strokeWidth / 2;
  // const circumference = Math.PI * radius;
  // const offset = 0;
  // style.strokeDasharray = `${circumference} ${circumference}`;
  // style.strokeDashoffset = offset;

  this.obj.gaugeSkirt = this.drawCircle(cxy, radius, 0, style);
 }

 drawGaugeAreaS() {
  const cxy = this.scalePoints([2, 0]);
  const num = this.data.option.gaugeAreaS.stroke.length;
  const ang = [...this.data.option.gaugeAreaS.angle, 0];
  this.obj.gaugeAreaS = [];
  for (let i = 0; i < num; i++) {
   const [angA, angB] = [ang[i], ang[i + 1]];
   const style = {
    fill: 'none',
    fillOpacity: '0',
    stroke: this.data.option.gaugeAreaS.stroke[i],
    strokeWidth: this.data.option.gaugeAreaS.strokeWidth[i],
    strokeOpacity: this.data.option.gaugeAreaS.strokeOpacity[i],
    transform: this.transform()
   };
   const rrr = this.scalePointX(1.67) - style.strokeWidth / 2;
   this.obj.gaugeAreaS[i] = this.drawCircleArc(cxy, rrr, angA, angB, i, style);
  }
 }

 drawTicksMajor() {
  const cxy = this.scalePoints([2, 0]);
  const raA = this.scalePointX(1.9);
  const raB = this.scalePointX(1.7);
  const num = 16;
  const ang = 180 / num;

  this.obj.ticksMajor = [];
  for (let i = 0; i < num + 1; i++) {
   const style = {
    stroke: this.data.option.ticksMajor.stroke,
    strokeWidth: this.data.option.ticksMajor.strokeWidth,
    strokeOpacity: this.data.option.ticksMajor.strokeOpacity
   };

   if (i === 0 || i === num) cxy[1] = style.strokeWidth + 2;
   else cxy[1] = 0;

   const ptA = this.toPolar(cxy, raA, ang * i);
   const ptB = this.toPolar(cxy, raB, ang * i);
   const pts = [...ptA, ...ptB];

   this.obj.ticksMajor[i] = this.drawLine(pts, i, style);
  }
 } //drawTicksMajor

 drawTicksMinor() {
  const cxy = this.scalePoints([2, 0]);
  const raA = this.scalePointX(1.9);
  const raB = this.scalePointX(1.75);
  const num = 16 * 5;
  const ang = 180 / num;

  this.obj.ticksMinor = [];
  for (let i = 0; i < num + 1; i++) {
   if (i % 5) {
    const style = {
     stroke: this.data.option.ticksMinor.stroke,
     strokeWidth: this.data.option.ticksMinor.strokeWidth,
     strokeOpacity: this.data.option.ticksMinor.strokeOpacity
    };

    if (i === 0 || i === num) cxy[1] = style.strokeWidth + 2;
    else cxy[1] = 0;

    const ptA = this.toPolar(cxy, raA, ang * i);
    const ptB = this.toPolar(cxy, raB, ang * i);
    const pts = [...ptA, ...ptB];

    this.obj.ticksMinor[i] = this.drawLine(pts, i, style);
   }
  }
 } //drawTicksMinor

 drawGaugeRange() {
  const cxy = this.scalePoints([2, 0]);
  const rof = this.data.option.gaugeRange.offset;
  const raA = this.scalePointX(1.57 - rof / 10);
  const num = 16;
  const ang = 180 / num;
  const rng = this.data.option.gaugeRange.range;
  const del = (rng[1] - rng[0]) / num;

  this.obj.gaugeRange = [];
  for (let i = 0; i < num + 1; i++) {
   if (!(i % 2)) {
    const style = {
     fill: this.data.option.gaugeRange.fill,
     fillOpacity: this.data.option.gaugeRange.fillOpacity,
     fontFamily: this.data.option.gaugeRange.fontFamily,
     fontWeight: this.data.option.gaugeRange.fontWeight,
     fontSize: this.data.option.gaugeRange.fontSize
    };

    if (i === 0 || i === num) cxy[1] = style.fontSize / 2;
    else cxy[1] = 0;

    if (i === num / 2) style.textAnchor = 'middle';
    else if (i < num / 2) style.textAnchor = 'end';
    else style.textAnchor = 'start';

    const ptA = this.toPolar(cxy, raA, ang * i);

    const text = Math.round(rng[1] - del * i).toString();
    ptA[1] = this.data.height - ptA[1];

    this.obj.gaugeRange[i] = this.drawText(ptA, text, i, style);
   }
  }
 } //drawGaugeRange

 // drawGaugeTitle() {
 //  const style = {
 //   fill: this.data.option.gaugeTitle.fill,
 //   fillOpacity: this.data.option.gaugeTitle.fillOpacity,
 //   fillOpacity: this.data.option.gaugeTitle.fillOpacity,
 //   fontFamily: this.data.option.gaugeTitle.fontFamily,
 //   fontSize: this.data.option.gaugeTitle.fontSize,
 //   fontWeight: this.data.option.gaugeTitle.fontWeight
 //  };

 //  const cxy = this.scalePoints([2, 0.8]);
 //  const txt = this.data.option.gaugeTitle.text;
 //  this.obj.gaugeTitle = this.drawText(cxy, txt, 0, style);
 // }

 drawGaugeLabel() {
  const divLabel = document.createElement('div');
  const divTitle = document.createElement('div');
  const divValue = document.createElement('div');
  const divTotal = document.createElement('div');

  divLabel.classList.add('gaugeLabel');
  divTitle.classList.add('gaugeTitle');
  divValue.classList.add('gaugeValue');
  divTotal.classList.add('gaugeTotal');
  divTitle.id = 'gaugeTitle';
  divValue.id = 'gaugeValue';
  divTotal.id = 'gaugeTotal';
  divLabel.appendChild(divTitle);
  divLabel.appendChild(divValue);
  divLabel.appendChild(divTotal);
  document.getElementById(this.obj.divMainObj.id).appendChild(divLabel);

  divTitle.innerHTML = 'MPH';
  divValue.innerHTML = '124'.split('').join(' ');
  divTotal.innerHTML = '0000124'.split('').join(' ');
 }

 drawNeedleLine(angle) {
  const cxy = this.scalePoints([2, 0]);
  const rof = this.data.option.needleLine.offset / 10;
  const rrr = this.scalePointX(1.75 - rof);
  const ang = 180 - angle;
  const style = {
   stroke: this.data.option.needleLine.stroke,
   strokeWidth: this.data.option.needleLine.strokeWidth,
   strokeOpacity: this.data.option.needleLine.strokeOpacity
  };
  const ptB = this.toPolar(cxy, rrr, ang);
  const pts = [...cxy, ...ptB];
  this.obj.needleLine = this.drawLine(pts, 'needle', style);
  const value = angle.toString().padStart(3, '0').split('').join(' ');
  this.data.total += angle;
  const total = this.data.total.toString().padStart(7, '0').split('').join(' ');
  document.getElementById('gaugeValue').innerHTML = value;
  document.getElementById('gaugeTotal').innerHTML = total;
 }

 drawNeedleGear() {
  const style = {
   fill: this.data.option.needleGear.fill,
   fillOpacity: this.data.option.needleGear.fillOpacity,
   stroke: this.data.option.needleGear.stroke,
   strokeWidth: this.data.option.needleGear.strokeWidth,
   strokeOpacity: this.data.option.needleGear.strokeOpacity,
   transform: this.transform()
  };
  const cxy = this.scalePoints([2, 0]);
  const rrr = this.data.option.needleGear.size;
  this.obj.needleGear = this.drawCircle(cxy, rrr, 'gear', style);
 }
} //class

// module.exports = GaugeRadialProgress;
// export default GaugeRadialProgress
