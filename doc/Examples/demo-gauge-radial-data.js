const data = {};

data.title = 'Gauge Radial';

const [width, height] = [100 * 4 + 24, 100 * 4 + 24];
data.divMainBox = {
 containerId: 'main',
 id: 'divMainBox',
 style: `border: 0px solid red; padding:10px 10px;margin-top:10px;
 box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; border-radius:50px;`,
 // style: `border: 1px solid red; padding:10px 10px;margin-top:10px;`,
 width: width + 24 * 2 + 'px',
 height: height + 24 * 2 + 'px',
 // height: 350 + 24 * 2 + 'px',
 transform: 'scale(1)'
};

data.divMainObj = {
 style: 'border: 0px solid green; padding:10px; margin: 0px;',
 width: width + 24 + 'px',
 height: height + 24 + 'px',
 class: 'divMainObj'
};

data.svgMainSvg = {
 width: '100%',
 height: '100%',
 vieBox: '0 0 400 10',
 style: `border: 0px solid blue; background-color: rgba(0,200,0,0); padding:10px; box-sizing:border-box; background-color: none;`
};

// data.gridOn = true;
data.grid = {
 minorNumX: 5,
 minorNumY: 5,
 majorNumX: 4,
 majorNumY: 4,
 // titleOn: true,
 // axisLabelOnX: true,
 // axisLabelOnY: true,
 // axisNumOnX: true,
 // axisNumOnY: true,
 // majorOnX: true,
 // majorOnY: true,
 // minorOnX: true,
 // minorOnY: true,
 // boxOn: true,
 // axesOn: true,
 major: {
  stroke: 'gray',
  strokeWidth: '0.5'
 },
 minor: {
  stroke: 'gray',
  strokeWidth: '1.5'
 }
};

data.option = {
 gaugeSkirt: {
  stroke: 'gray',
  strokeWidth: 7.5, // 0 - 7.5
  strokeOpacity: 0.3
 },
 gaugeAreaZ: {
  stroke: 'white',
  strokeWidth: 30, // 0 - 30
  strokeOpacity: 1
 },
 gaugeAreaS: {
  stroke: [ 'green', 'orange', 'red', 'dodgerBlue'],
  angle: [0, 270, 180, 90],
  largeArcFlag: [0, 0, 0, 0],
  strokeWidth: Array(4).fill(1.5), // 7.5 - 30
  strokeOpacity: Array(4).fill(1)
 },
 ticksMajor: {
  stroke: 'black',
  strokeWidth: 2,
  strokeOpacity: 1
 },
 ticksMinor: {
  stroke: 'black',
  strokeWidth: 1,
  strokeOpacity: 1
 },
 ticksMicro: {
  stroke: 'black',
  strokeWidth: 0.4,
  strokeOpacity: 1
 },
 gaugeRange: {
  range: [0, 60],
  offset: 0.5,
  fill: 'black',
  fillHighlight: 'Crimson',
  fillOpacity: '1',
  fontFamily: 'sans-serif',
  fontWeight: 'normal',
  fontSize: 24
 },
 gaugeTitle: {
  // text: 'TIMER',
  text: '\u2103'
  // fill: 'dodgerBlue',
  // fillOpacity: 1,
  // fontFamily: 'sans-serif',
  // fontWeight: 'bold',
  // fontSize: 100
 },
 needleLine: {
  offset: 0,
  stroke: 'Crimson',
  strokeWidth: 4,
  strokeOpacity: 1
 },
 needleGear: {
  size: 10,
  fill: 'white',
  fillOpacity: 1,
  stroke: 'black',
  strokeWidth: 4,
  strokeOpacity: 1
 }
};

export default data;