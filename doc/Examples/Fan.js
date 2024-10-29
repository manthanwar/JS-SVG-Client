// =============================================================================
// File Name : Fan.js
// Description   : JS Class to draw Ceiling Fan/Propeller using JS-SVG-Client
// -----------------------------------------------------------------------------
// Author: Amit Manohar Manthanwar
// Mailer: manthanwar@hotmail.com
// WebURL: https://manthanwar.github.io
// -----------------------------------------------------------------------------
// Copyright : (c) 2024 Amit Manohar Manthanwar
// License   : MIT License
// ----------------------------------------------------------------------------
// This program can be redistributed and/or modified under the terms
// of the MIT License. For details see the file license.txt
// =============================================================================
// Revision Log  | Author  | Description
// --------------+---------+----------------------------------------------------
// 26-Oct-2024   | AMM | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

import * as mySvg from '../../dist/svg.min.js';

export default class Fan {
 constructor(data) {
  this.data = this.init();
  this.merge(this.data, data);

  this.obj = {};
  this.obj.divMainBox = this.divMainBox();
  this.obj.divMainObj = this.divMainObj();
  this.obj.divOptions = this.divOptions();
  this.obj.divMainSvg = this.divMainSvg();

  if (this.data.gridOn) {
   this.obj.grid = this.grid();
   this.data.width = this.obj.grid.objSvg.width;
   this.data.height = this.obj.grid.objSvg.height;
   //  this.data.idSvg = this.data.grid.box.idSvg;
  } else {
   this.data.width = parseInt(this.obj.divMainObj.data.width) - 20;
   this.data.height = parseInt(this.obj.divMainObj.data.height) - 20;
   //  this.data.idSvg = this.data.divMainSvg.id;
  }

  // console.log(this.obj.divMainBox.data.id);
  // console.log(this.obj.divMainObj.data.id);
  // console.log(this.obj.divOptions.data.id);
  // console.log(this.obj.divMainSvg.data.id);
  // console.log('width  = ' + this.data.width);
  // console.log('height = ' + this.data.height);

  // this.drawDolphin();
 } //constructor

 init() {
  const data = {};

  data.divMainBox = {
   containerId: 'body',
   id: 'divMainBox',
   style: 'border: 2px solid red; border-radius:10px; padding:10px;',
   width: '1140px',
   height: '450px',
   transform: 'scale(1.2)'
  };

  data.divMainObj = {
   containerId: data.divMainBox.id,
   id: data.divMainBox.id + '-divMainObj',
   style: 'border: 2px solid green; border-radius:10px; padding:10px;',
   width: 700 + 'px',
   height: 700 * (3 / 5) + 'px',
   transform: 'scale(1)'
  };

  data.divOptions = {
   containerId: data.divMainBox.id,
   id: data.divMainBox.id + '-divOptions',
   style:
    'border: 2px solid blue; border-radius:10px; padding:20px; margin:20px 50px;',
   width: '300px',
   height: '300px',
   transform: 'scale(1)'
  };

  data.divMainSvg = {
   containerId: data.divMainObj.id,
   id: data.divMainObj.id + '-svgMain',
   width: '100%',
   height: '100%',
   viewBox: '0 0 100% 100% ',
   style: `background-color: rgba(0,200,0,0); border: 1px solid blue; padding:10px; box-sizing:border-box;`
  };

  data.gridOn = true;
  data.grid = {
   containerId: data.divMainSvg.id,
   minorNumX: 5,
   minorNumY: 5,
   majorNumX: 10,
   majorNumY: 6,
   titleOn: true,
   axisLabelOnX: true,
   axisLabelOnY: true,
   axisNumOnX: true,
   axisNumOnY: true,
   majorOnX: true,
   majorOnY: true,
   minorOnX: true,
   minorOnY: true,
   boxOn: false,
   axesOn: false
  };

  data.grid.box = {
   stroke: 'red',
   strokeWidth: 1,
   strokeOpacity: 1,
   fill: 'none',
   idSvg: data.divMainSvg + '-svg',
   idBox: data.divMainSvg + '-box'
  };

  data.grid.padding = {
   left: 36,
   right: 10,
   top: 20,
   bottom: 36
  };

  data.grid.title = {
   text: 'Dolphin',
   x: '50%',
   y: '15',
   dx: '0',
   dy: '0',
   fontFamily: 'inherit',
   fontSize: '20',
   fontWeight: 'normal',
   fill: 'black',
   fillOpacity: '1',
   stroke: 'black',
   strokeWidth: '0',
   strokeOpacity: '1'
  };

  data.grid.axisLabelX = {
   text: 'X Axis',
   x: '50%',
   y: '98%',
   dx: '0',
   dy: '0',
   fontFamily: 'inherit',
   fontSize: '16',
   fontWeight: 'normal',
   fill: 'black',
   fillOpacity: '1',
   stroke: 'black',
   strokeWidth: '0',
   strokeOpacity: '1'
  };

  data.grid.axisLabelY = {
   text: 'Y Axis',
   x: '50%',
   y: '50%',
   dx: '20',
   dy: '-85%',
   transform: 'rotate(-90, 350 200)',
   fontFamily: 'inherit',
   fontSize: '16',
   fontWeight: 'normal',
   fill: 'black',
   fillOpacity: '1',
   stroke: 'black',
   strokeWidth: '0',
   strokeOpacity: '1'
  };

  return data;
 } //init

 get plotTitle() {
  return this.data.grid.title.text;
 }
 set plotTitle(text) {
  this.data.grid.title.text = text;
  document.getElementById(this.data.divMainSvg.id).remove();
  this.obj.divMainSvg = this.divMainSvg();
  this.obj.grid = this.grid();
 }

 redraw() {}

 merge(current, updates) {
  for (const key of Object.keys(updates)) {
   if (!current.hasOwnProperty(key) || typeof updates[key] !== 'object')
    current[key] = updates[key];
   else this.merge(current[key], updates[key]);
  }
  return current;
 } //merge

 divMainBox() {
  return new mySvg.Div(this.data.divMainBox);
 }

 divMainObj() {
  return new mySvg.Div(this.data.divMainObj);
 }

 divOptions() {
  const divSlider = new mySvg.Div(this.data.divOptions);
  divSlider.obj.innerHTML =
   '<div id="slideContainer"> <input type="range" min="-1" max="2.0" step="0.1" value="1.2"  id="sliderX" /> <div id="sliderValueX" class="sliderValue">Point 1 x = </div></div>';

  divSlider.obj.innerHTML +=
   '<br style="margin-top:10px;"><div id="slideContainer"> <input type="range" min="4" max="6" step="0.1" value="4.8"  id="sliderY" /> <div id="sliderValueY" class="sliderValue">Point 1 y = </div></div>';

  divSlider.obj.innerHTML +=
   '<br style="margin-top:30px;"> <button type="button" id="submitBtn">Submit</button> ';

  divSlider.obj.innerHTML += '<div id="alertBox"></div>';

  return divSlider;
 }

 divMainSvg() {
  return new mySvg.Svg(this.data.divMainSvg);
 }

 grid() {
  return new mySvg.Grid(this.data.grid);

  // gridLine.majorX[3].style = 'stroke:green; stroke-width:4;';
  // gridLine.minorX[1].style = 'stroke:green; stroke-width:4;';
 }
} //class
