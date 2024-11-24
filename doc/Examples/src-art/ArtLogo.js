// =============================================================================
// File Name  : ArtLogo.js
// Description: JS Class to draw Art Logo using JS-SVG-Client
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
// 23-Nov-2024   | AMM | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

import * as mySvg from './svg.min.js';
import GaugeParent from './GaugeParent.js';
import Equation from './Equation.js';
const eq = new Equation();

export default class ArtLogo extends GaugeParent {
 constructor(data) {
  super(data);
  // this.data.total = 100000;
  // this.drawGaugeLabel();
  // this.drawGaugeSkirt();
  // this.drawGaugeAreaZ();
  // this.drawGaugeAreaS();
  // this.drawTicksMajor();
  // this.drawTicksMinor();
  // this.drawTicksMicro();
  // this.drawGaugeRange();
  // this.drawNeedleLine(0);
  // this.drawNeedleGear();

  this.drawCircleBgM(); //circle background main
  this.drawPathLineB1(); // line blue 1
  // this.pathCircA1();
  // this.pathCircA2();
  // this.PathCircA3();
  // this.pathLineR1();
  this.drawPathLineY1();
  // this.pathLineG1();
  // this.pathLineG2();
 } //constructor

 drawCircleBgM() {
  const style = {
   fill: this.data.option.drawCircleBgM.fill,
   fillOpacity: this.data.option.drawCircleBgM.fillOpacity,
   stroke: this.data.option.drawCircleBgM.stroke,
   strokeWidth: this.data.option.drawCircleBgM.strokeWidth,
   strokeOpacity: this.data.option.drawCircleBgM.strokeOpacity,
   transform: this.transform()
  };
  const cxy = this.scalePoints([2, 2]);
  const rrr = this.scalePointX(1.4);
  this.obj.drawCircleBgM = this.drawCircle(cxy, rrr, 'drawCircleBgM', style);
 }

 drawPathLineB1() {
  const style = {
   fill: this.data.option.drawPathLineB1.fill,
   fillOpacity: this.data.option.drawPathLineB1.fillOpacity,
   stroke: this.data.option.drawPathLineB1.stroke,
   strokeWidth: this.data.option.drawPathLineB1.strokeWidth,
   strokeOpacity: this.data.option.drawPathLineB1.strokeOpacity,
   transform: this.transform()
  };

  const M1 = this.scalePoints([0.1, 1.6]);
  const L1 = this.scalePoints([0.1, 1.4]);
  const C1 = this.scalePoints([1.1, 1.4, 1.2, 1.4, 2.5 + Math.sqrt(0.08), 3.6]);
  const L2 = this.scalePoints([2.5, 3.6]);
  const C2 = this.scalePoints([1.1, 1.6, 0.9, 1.6, 0.1, 1.6]);
  let data = 'M' + M1 + 'L' + L1 + 'C' + C1 + 'L' + L2 + 'C' + C2 + 'Z';

  this.obj.drawPathLineB1 = this.drawPath(data, 'drawPathLineB1', style);
 }

 drawPathLineY1() {
  const style = {
   fill: this.data.option.drawPathLineY1.fill,
   fillOpacity: this.data.option.drawPathLineY1.fillOpacity,
   stroke: this.data.option.drawPathLineY1.stroke,
   strokeWidth: this.data.option.drawPathLineY1.strokeWidth,
   strokeOpacity: this.data.option.drawPathLineY1.strokeOpacity,
   transform: this.transform()
  };

  const sqrt = Math.sqrt(0.08);
  const circle = [2, 2, 1.4];
  const lineY1 = [0.4, 0, 3.1, 3.6];
  const lineY2 = [0.4 + sqrt, 0, 3.1 + sqrt, 3.6];
  const ptsY1 = this.scalePoints(eq.solveCircleLine2Pt(...circle, ...lineY1));
  const ptsY2 = this.scalePoints(eq.solveCircleLine2Pt(...circle, ...lineY2));

  const slpY1 = eq.solveLine2Pt(...lineY1);
const ptsYg = eq.solveCircleLine2Pt(...circle, ...lineY1);

  const lineG1 = [0.9, 0, 3.6, 3.6];
  const lineG2 = [0.9 + sqrt, 0, 3.6 + sqrt, 3.6];
  const ptsG1 = this.scalePoints(eq.solveCircleLine2Pt(...circle, ...lineG1));
  const ptsG2 = this.scalePoints(eq.solveCircleLine2Pt(...circle, ...lineG2));

  console.log('ptsY1 = ' + ptsY1);
  console.log('ptsYg = ' + ptsYg);
  // console.log('ptsY2 = ' + ptsY2);
  // console.log('ptsG1 = ' + ptsG1);
  // console.log('ptsG2 = ' + ptsG2);

  // console.log('slpY1 = ' + slpY1);

  const ddd = this.scalePoints([ptsYg[2], ptsYg[3]]);

  this.drawCircle(ddd, 4, 'drawCircleBgM', style);


  // this.drawCircle([ptsY1[2], ptsY1[3]], 4, 'drawCircleBgM', style);
  // this.drawCircle([ptsY1[0], ptsY1[1]], 4, 'drawCircleBgM', style);

  const RR = this.scalePointX(circle[2]);
  const V1 = [RR, RR, 0, 0, 0, ptsY2[0], ptsY2[1]];
  const V2 = [RR, RR, 0, 0, 0, ptsY1[2], ptsY1[3]];
  const M1 = 'M' + [ptsY1[2], ptsY1[3]];
  const L1 = 'L' + [ptsY1[0], ptsY1[1]];
  const A1 = this.toArcStringScaled(V1);
  const L2 = 'L' + [ptsY2[2], ptsY1[3]];
  const A2 = this.toArcStringScaled(V2);
  const DD = M1 + L1 + A1 + L2 + A2;

  // this.obj.drawPathLineY1 = this.drawPath(DD, 'drawPathLineY1', style);
 }

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
  const cxy = this.scalePoints([2, 2]);
  const rrr = this.scalePointX(1.9) + style.strokeWidth / 2;
  this.obj.gaugeSkirt = this.drawCircle(cxy, rrr, 'gaugeSkirt', style);
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
  const cxy = this.scalePoints([2, 2]);
  const rrr = this.scalePointX(1.6) + style.strokeWidth / 2;

  this.obj.gaugeAreaZ = this.drawCircle(cxy, rrr, 'gaugeAreaZ', style);
 }

 drawGaugeAreaS() {
  const cxy = this.scalePoints([2, 2]);
  const num = this.data.option.gaugeAreaS.stroke.length;
  const ang = [...this.data.option.gaugeAreaS.angle, 360];
  this.obj.gaugeAreaS = [];
  for (let i = 0; i < num; i++) {
   const [anA, anB] = [ang[i], ang[i + 1]];
   const sty = {
    fill: 'none',
    fillOpacity: '0',
    stroke: this.data.option.gaugeAreaS.stroke[i],
    strokeWidth: this.data.option.gaugeAreaS.strokeWidth[i],
    strokeOpacity: this.data.option.gaugeAreaS.strokeOpacity[i],
    transform: this.transform()
   };
   const rrr = this.scalePointX(1.6) - sty.strokeWidth / 2;
   const laf = this.data.option.gaugeAreaS.largeArcFlag[i];
   const fg = [0, laf, 0]; // flag = [xAxisRotation, largeArcFlag, sweepFlag]
   this.obj.gaugeAreaS[i] = this.drawCircleArc(cxy, rrr, anA, anB, i, sty, fg);
  }
 }

 drawTicksMajor() {
  const cxy = this.scalePoints([2, 2]);
  const raA = this.scalePointX(1.9);
  const raB = this.scalePointX(1.7);
  const num = 12;
  const ang = 360 / num;
  let maxAngle = 360;
  this.obj.ticksMajor = [];
  for (let i = 0; i < num + 1; i++) {
   const style = {
    stroke: this.data.option.ticksMajor.stroke,
    strokeWidth: this.data.option.ticksMajor.strokeWidth,
    strokeOpacity: this.data.option.ticksMajor.strokeOpacity,
    transform: this.transform()
   };
   const ptA = this.toPolar(cxy, raA, ang * i + maxAngle);
   const ptB = this.toPolar(cxy, raB, ang * i + maxAngle);
   const pts = [...ptA, ...ptB];
   this.obj.ticksMajor[i] = this.drawLine(pts, i, style);
  }
 } //drawTicksMajor

 drawTicksMinor() {
  const cxy = this.scalePoints([2, 2]);
  const raA = this.scalePointX(1.9);
  const raB = this.scalePointX(1.75);
  const num = 12 * 5;
  const ang = 360 / num;
  const maxAngle = 360;
  this.obj.ticksMinor = [];
  for (let i = 0; i < num + 1; i++) {
   if (i % 5) {
    const style = {
     stroke: this.data.option.ticksMinor.stroke,
     strokeWidth: this.data.option.ticksMinor.strokeWidth,
     strokeOpacity: this.data.option.ticksMinor.strokeOpacity,
     transform: this.transform()
    };
    const ptA = this.toPolar(cxy, raA, ang * i + maxAngle);
    const ptB = this.toPolar(cxy, raB, ang * i + maxAngle);
    const pts = [...ptA, ...ptB];
    this.obj.ticksMinor[i] = this.drawLine(pts, i, style);
   }
  }
 } //drawTicksMinor

 drawTicksMicro() {
  const cxy = this.scalePoints([2, 2]);
  const raA = this.scalePointX(1.9);
  const raB = this.scalePointX(1.8);
  const num = 12 * 5 * 5;
  const ang = 360 / num;
  const maxAngle = 360;
  this.obj.ticksMicro = [];
  for (let i = 0; i < num + 1; i++) {
   if (i % 25) {
    const style = {
     stroke: this.data.option.ticksMicro.stroke,
     strokeWidth: this.data.option.ticksMicro.strokeWidth,
     strokeOpacity: this.data.option.ticksMicro.strokeOpacity,
     transform: this.transform()
    };
    const ptA = this.toPolar(cxy, raA, ang * i + maxAngle);
    const ptB = this.toPolar(cxy, raB, ang * i + maxAngle);
    const pts = [...ptA, ...ptB];
    this.obj.ticksMicro[i] = this.drawLine(pts, i, style);
   }
  }
 } //drawTicksMinor

 drawGaugeRange() {
  const cxy = this.scalePoints([2, 2]);
  const rof = this.data.option.gaugeRange.offset;
  const raA = this.scalePointX(1.4 - rof / 10);
  const num = 12;
  const ang = 360 / num;
  const rng = this.data.option.gaugeRange.range;
  const del = (rng[1] - rng[0]) / num;
  const maxAngle = 360;
  this.obj.gaugeRange = [];
  for (let i = 0; i < num; i++) {
   // if (!(i % 2)) {
   const style = {
    fill: this.data.option.gaugeRange.fill,
    fillOpacity: this.data.option.gaugeRange.fillOpacity,
    fontFamily: this.data.option.gaugeRange.fontFamily,
    fontWeight: this.data.option.gaugeRange.fontWeight,
    fontSize: this.data.option.gaugeRange.fontSize
   };
   if (!(i % 3)) {
    style.fill = this.data.option.gaugeRange.fillHighlight;
   }
   const ptA = this.toPolar(cxy, raA, ang * i + 90);
   const text = Math.round(rng[1] - del * i).toString();
   ptA[1] = this.data.height - ptA[1];
   this.obj.gaugeRange[i] = this.drawText(ptA, text, i, style);
   // }/if
  } //for
 } //drawGaugeRange

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
  divTitle.innerHTML = this.data.option.gaugeTitle.text;
  divValue.innerHTML = '124'.split('').join(' ');
  divTotal.innerHTML = '0000124'.split('').join(' ');
 }

 drawNeedleLine(angle) {
  const cxy = this.scalePoints([2, 2]);
  const rof = this.data.option.needleLine.offset / 10;
  const rrr = this.scalePointX(1.75 - rof);
  const [vMin, vMax] = this.data.option.gaugeRange.range;
  // if (angle < 0) angle = 0;
  // if (angle > 270) angle = 270;
  const style = {
   stroke: this.data.option.needleLine.stroke,
   strokeWidth: this.data.option.needleLine.strokeWidth,
   strokeOpacity: this.data.option.needleLine.strokeOpacity,
   transform: `rotate(${angle}, ${cxy[0]}, ${cxy[1]})`
   // transform:'rotate(90deg)'
  };
  const ptA = this.toPolar(cxy, this.scalePointX(-0.25), 270);
  const ptB = this.toPolar(cxy, rrr, 270);
  const pts = [...ptA, ...ptB];
  this.obj.needleLine = this.drawLine(pts, 'needle', style);
  const valScaled = Math.round(this.linearScale(angle, 0, 360, vMin, vMax));
  const value = valScaled.toString().padStart(3, ' ').split('').join(' ');
  this.data.total += valScaled;
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
  const cxy = this.scalePoints([2, 2]);
  const rrr = this.data.option.needleGear.size;
  this.obj.needleGear = this.drawCircle(cxy, rrr, 'gear', style);
 }
} //class

// module.exports = GaugeRadialProgress;
// export default GaugeRadialProgress
