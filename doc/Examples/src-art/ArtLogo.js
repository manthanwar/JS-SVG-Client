// =============================================================================
// File Name  : ArtLogo.js
// Description: JS Class to draw Art Logo using JS-SVG-Client
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
// 23-Nov-2024   | AMM | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

// import * as dat from './dat.gui.js';
import * as mySvg from './svg.min.js';
import GaugeParent from './GaugeParent.js';
import Equation from './Equation.js';
const eq = new Equation();

export default class ArtLogo extends GaugeParent {
 constructor(data) {
  super(data);
  this.computeDataObj();
  this.drawCircleMain(); //circle background main
  this.drawPathCircR1();
  this.drawPathLineB1(); // line blue 1
  this.drawPathLineY1();
  this.drawPathLineR1();
  this.drawPathLineG1();
  this.drawPathLineG2();
  this.drawPathLineG3(); // arc green
  this.drawPathLineR2(); // arc red

  // const divMainObj = document.getElementById(this.obj.divMainObj.id);
  // divMainObj.style.marginTop = -this.scalePointY(0.4) + 'px';

  const svgMainSvg = document.getElementById(this.obj.svgMainSvg.id);
  svgMainSvg.style.marginTop = -this.scalePointY(0.4) + 'px';

  if (this.data.optionsOn) this.obj.divOptions = this.drawDivOptions();
  if (this.data.option.divLogoCaption.isVisible) this.drawLogoCaption();

  this.localStorage();
 } //constructor

 localStorage() {
  // localStorage.setItem('namea', 'Amita');
  // localStorage.setItem('data', JSON.stringify(this.data.option));
  // localStorage.removeItem('name');
  // localStorage.removeItem('data');
  // localStorage.clear();
  // this.setLocalStorage('name', 'amit');
  // const option = JSON.parse(localStorage.getItem('data'));
  // console.log(option.drawPathCircR1);
 }

 setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
 }

 getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
 }

 setLocalData(data) {
  localStorage.setItem('data', JSON.stringify(data));
 }

 getLocalData() {
  let data;
  if (localStorage.getItem('data') === null) {
   data = {};
  } else {
   data = JSON.parse(localStorage.getItem('data'));
  }
  return data;
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
   'drawCircleMain',
   'drawPathCircR1',
   'drawPathLineB1',
   'drawPathLineY1',
   'drawPathLineR1',
   'drawPathLineR2',
   'drawPathLineG1',
   'drawPathLineG2',
   'drawPathLineG3'
   //  'divLogoCaption'
  ];

  const thisObj = this;
  const doStyle = (ele, key, val) => thisObj.obj[ele].attr(key, val);

  for (const ele of element) {
   const group = gui.addFolder(ele);
   const state = this.data.option[ele];
   group.addColor(state, 'fill').onChange((val) => {
    doStyle(ele, 'fill', val);
   });
   group.add(state, 'fillOpacity', 0, 1, 0.1).onChange((val) => {
    doStyle(ele, 'fill-opacity', val);
   });
   group.addColor(state, 'stroke').onChange((val) => {
    doStyle(ele, 'stroke', val);
   });
   group.add(state, 'strokeWidth', 0, 10, 1).onChange((val) => {
    doStyle(ele, 'stroke-width', val);
   });
   group.add(state, 'strokeOpacity', 0, 1, 0.1).onChange((val) => {
    doStyle(ele, 'stroke-opacity', val);
   });
  }

  const btn = document.querySelector('.close-button');
  btn.onclick = () => {
   gui.hide();
   divOption.obj.style.width = '0px';
  };

  this.obj.svgMainSvg.obj.onclick = () => {
   gui.open();
   gui.show();
   divOption.obj.style.width = '400px';
  };

  return divOption;
 }

 computeDataObj() {
  const xo = 0;
  const yo = 0.2;
  const sqrt = Math.sqrt(0.08);
  const lineB1 = {};
  lineB1.M1 = [0.1, 1.6];
  lineB1.L1 = [0.1, 1.4];
  lineB1.C1 = [1.1, 1.4, 1.2, 1.4, 2.5 + sqrt, 3.6];
  lineB1.L2 = [2.5, 3.6];
  lineB1.C2 = [1.1, 1.6, 0.9, 1.6, 0.1, 1.6];
  const circle = [2, 2, 1.4];
  const lineY1 = [0.4, 0, 3.1, 3.6];
  const lineG1 = [0.9, 0, 3.6, 3.6];
  const lineY2 = [0.4 + sqrt, 0, 3.1 + sqrt, 3.6];
  const lineG2 = [0.9 + sqrt, 0, 3.6 + sqrt, 3.6];
  const ptsLY1 = eq.solveCircleLine2Pt(...circle, ...lineY1);
  const ptsLY2 = eq.solveCircleLine2Pt(...circle, ...lineY2);
  const ptsLG1 = eq.solveCircleLine2Pt(...circle, ...lineG1);
  const ptsLG2 = eq.solveCircleLine2Pt(...circle, ...lineG2);
  const angLYaa = this.toDegrees(Math.atan2(ptsLY1[1] - 2, ptsLY1[0] - 2));
  const angLYab = this.toDegrees(Math.atan2(ptsLY1[3] - 2, ptsLY1[2] - 2));
  const angLYba = this.toDegrees(Math.atan2(ptsLY2[1] - 2, ptsLY2[0] - 2));
  const angLYbb = this.toDegrees(Math.atan2(ptsLY2[3] - 2, ptsLY2[2] - 2));
  const angLGaa = this.toDegrees(Math.atan2(ptsLG1[1] - 2, ptsLG1[0] - 2));
  const angLGab = this.toDegrees(Math.atan2(ptsLG1[3] - 2, ptsLG1[2] - 2));
  const angLGba = this.toDegrees(Math.atan2(ptsLG2[1] - 2, ptsLG2[0] - 2));
  const angLGbb = this.toDegrees(Math.atan2(ptsLG2[3] - 2, ptsLG2[2] - 2));
  this.data.dataObj = {
   lineB1: lineB1,
   circle: circle,
   lineY1: lineY1,
   lineY2: lineY2,
   lineG1: lineG1,
   lineG2: lineG2,
   ptsLY1: ptsLY1,
   ptsLY2: ptsLY2,
   ptsLG1: ptsLG1,
   ptsLG2: ptsLG2,
   circles: this.scalePoints(circle),
   lineY1s: this.scalePoints(lineY1),
   lineY2s: this.scalePoints(lineY2),
   lineG1s: this.scalePoints(lineG1),
   lineG2s: this.scalePoints(lineG2),
   ptsLY1s: this.scalePoints(ptsLY1),
   ptsLY2s: this.scalePoints(ptsLY2),
   ptsLG1s: this.scalePoints(ptsLG1),
   ptsLG2s: this.scalePoints(ptsLG2)
  };
 }

 drawCircleMain() {
  const sty = this.merge({}, this.data.option.drawCircleMain);
  const cxy = this.data.dataObj.circles.slice(0, 2);
  const rrr = this.data.dataObj.circles[2] - sty.strokeWidth / 2;
  this.obj.drawCircleMain = this.drawCircle(cxy, rrr, 'drawCircleMain', sty);
 }

 drawPathCircR1() {
  const sty = this.merge({}, this.data.option.drawPathCircR1);
  const ptA = this.data.dataObj.ptsLY1s.slice(0, 2);
  // const ptB = this.data.dataObj.ptsLY2s.slice(2, 4);
  const ptB = this.data.dataObj.ptsLY1s.slice(2, 4);
  const cxy = this.data.dataObj.circles.slice(0, 2);
  const rrr = this.data.dataObj.circles[2] - sty.strokeWidth / 2;
  const [xA, yA] = [ptA[0] - cxy[0], ptA[1] - cxy[1]];
  const [xB, yB] = [ptB[0] - cxy[0], ptB[1] - cxy[1]];
  const aA = this.toDegrees(Math.atan2(yA, xA));
  const aB = this.toDegrees(Math.atan2(yB, xB));
  const id = 'drawPathCircR1';
  const fl = [0, 0, this.data.option.drawPathCircR1.sweepFlag];
  this.obj.drawPathCircR1 = this.drawCircleArc(cxy, rrr, aA, aB, id, sty, fl);
 }

 drawPathLineB1() {
  const style = this.merge({}, this.data.option.drawPathLineB1);
  const lineB1 = this.data.dataObj.lineB1;
  const M1 = 'M' + this.scalePoints(lineB1.M1);
  const L1 = 'L' + this.scalePoints(lineB1.L1);
  const C1 = 'C' + this.scalePoints(lineB1.C1);
  const L2 = 'L' + this.scalePoints(lineB1.L2);
  const C2 = 'C' + this.scalePoints(lineB1.C2);
  const DD = M1 + L1 + C1 + L2 + C2 + 'Z';
  this.obj.drawPathLineB1 = this.drawPath(DD, 'drawPathLineB1', style);
 }

 drawPathLineY1() {
  const style = this.merge({}, this.data.option.drawPathLineY1);
  const ptsY1 = this.data.dataObj.ptsLY1s;
  const ptsY2 = this.data.dataObj.ptsLY2s;
  const RR = this.data.dataObj.circles[2];
  const M1 = 'M' + [ptsY1[0], ptsY1[1]];
  const L1 = 'L' + [ptsY1[2], ptsY1[3]];
  const A1 = 'A' + [RR, RR, 0, 0, 0, ptsY2[2], ptsY2[3]];
  const L2 = 'L' + [ptsY2[0], ptsY2[1]];
  const A2 = 'A' + [RR, RR, 0, 0, 0, ptsY1[0], ptsY1[1]];
  const DD = M1 + L1 + A1 + L2 + A2 + 'Z';
  this.obj.drawPathLineY1 = this.drawPath(DD, 'drawPathLineY1', style);
 }

 drawPathLineR1() {
  const style = this.merge({}, this.data.option.drawPathLineR1);
  const linY1 = this.data.dataObj.lineY1s.slice(2, 4);
  const linY2 = this.data.dataObj.lineY2s.slice(2, 4);
  const ptsY1 = this.data.dataObj.ptsLY1s.slice(2, 4);
  const ptsY2 = this.data.dataObj.ptsLY2s.slice(2, 4);
  const RR = this.data.dataObj.circles[2];
  const M1 = 'M' + ptsY1;
  const L1 = 'L' + [...linY1, ...linY2, ...ptsY2];
  const A1 = 'A' + [RR, RR, 0, 0, 0, ptsY1];
  const DD = M1 + L1 + A1 + 'Z';
  this.obj.drawPathLineR1 = this.drawPath(DD, 'drawPathLineR1', style);
 }

 drawPathLineG1() {
  const style = this.merge({}, this.data.option.drawPathLineG1);
  const linY1 = this.data.dataObj.lineY1s.slice(0, 2);
  const linY2 = this.data.dataObj.lineY2s.slice(0, 2);
  const ptsY1 = this.data.dataObj.ptsLY1s.slice(0, 2);
  const ptsY2 = this.data.dataObj.ptsLY2s.slice(0, 2);
  const RR = this.data.dataObj.circles[2];
  const M1 = 'M' + ptsY1;
  const A1 = 'A' + [RR, RR, 0, 0, 0, ptsY2];
  const L1 = 'L' + [...linY2, ...linY1, ...ptsY1];
  const DD = M1 + A1 + L1 + 'Z';
  this.obj.drawPathLineG1 = this.drawPath(DD, 'drawPathLineG1', style);
 }

 drawPathLineG2() {
  const style = this.merge({}, this.data.option.drawPathLineG2);
  const linG1 = this.data.dataObj.lineG1s.slice(2, 4);
  const linG2 = this.data.dataObj.lineG2s.slice(2, 4);
  const ptsG1 = this.data.dataObj.ptsLG1s.slice(0, 2);
  const ptsG2 = this.data.dataObj.ptsLG2s.slice(0, 2);
  const RR = this.data.dataObj.circles[2];
  const M1 = 'M' + ptsG1;
  const L1 = 'L' + [...linG1, ...linG2, ...ptsG2];
  const A1 = 'A' + [RR, RR, 0, 0, 0, ptsG1];
  const DD = M1 + L1 + A1 + 'Z';
  this.obj.drawPathLineG2 = this.drawPath(DD, 'drawPathLineG2', style);
 }

 drawPathLineG3() {
  const sty = this.merge({}, this.data.option.drawPathLineG3);
  const ptA = this.data.dataObj.ptsLG1s.slice(0, 2);
  const cxy = this.data.dataObj.circles.slice(0, 2);
  const rrr = this.data.dataObj.circles[2] - sty.strokeWidth / 2;
  const xxx = ptA[0] - cxy[0];
  const yyy = ptA[1] - cxy[1];
  const aA = this.toDegrees(Math.atan2(yyy, xxx)) + 1;
  const aB = 330;
  const id = 'drawPathLineG3';
  const fl = [0, 0, 1];
  this.obj.drawPathLineG3 = this.drawCircleArc(cxy, rrr, aA, aB, id, sty, fl);
 }

 drawPathLineR2() {
  const sty = this.merge({}, this.data.option.drawPathLineR2);
  const ptA = this.data.dataObj.ptsLG2s.slice(2, 4);
  const cxy = this.data.dataObj.circles.slice(0, 2);
  const rrr = this.data.dataObj.circles[2] - sty.strokeWidth / 2;
  const xxx = ptA[0] - cxy[0];
  const yyy = ptA[1] - cxy[1];
  const aA = this.toDegrees(Math.atan2(yyy, xxx)) - 4;
  const aB = 335;
  const id = 'drawPathLineR2';
  const fl = [0, 0, 0];
  this.obj.drawPathLineR2 = this.drawCircleArc(cxy, rrr, aA, aB, id, sty, fl);
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

 drawLogoCaption() {
  const divLabel = document.createElement('div');
  const divTitle = document.createElement('div');
  divLabel.classList.add('divLogoLabel');
  divTitle.classList.add('divLogoCaption');
  divLabel.id = 'divLogoLabel';
  divTitle.id = 'divLogoCaption';
  divLabel.appendChild(divTitle);
  document.getElementById(this.obj.divMainObj.id).appendChild(divLabel);
  divTitle.innerHTML = this.data.option.divLogoCaption.text;
  divTitle.style.color = this.data.option.divLogoCaption.fill;
  divTitle.style.opacity = this.data.option.divLogoCaption.fillOpacity;
  divTitle.style.fontFamily = this.data.option.divLogoCaption.fontFamily;
  divTitle.style.fontWeight = this.data.option.divLogoCaption.fontWeight;
  divTitle.style.fontSize = this.data.option.divLogoCaption.fontSize + 'px';
 }
} //class

// module.exports = GaugeRadialProgress;
// export default GaugeRadialProgress
