const data = {};

data.title = 'Gauge Radial Half / Semicircle';

const [width, height] = [150 * 4 + 24, 75 * 4 + 24];
data.divMainBox = {
 containerId: 'main',
 id: 'divMainBox',
 style: 'border: 2px solid red; padding:10px 10px;margin-top:10px;',
 width: width + 24 * 2 + 'px',
 height: height + 24 * 2 + 'px',
 transform: 'scale(1)'
};

data.divMainObj = {
 style: 'border: 2px solid green; padding:10px; margin: 0px;',
 width: width + 24 + 'px',
 height: height + 24 + 'px',
 class: 'divMainObj'
};

data.svgMainSvg = {
 width: '100%',
 height: '100%',
 // vieBox: '0 0 100 100 ',
 style: `border: 2px solid blue; background-color: rgba(0,200,0,0); padding:10px; box-sizing:border-box; background-color: none;`
};

// data.gridOn = true;
data.grid = {
 minorNumX: 5,
 minorNumY: 5,
 majorNumX: 4,
 majorNumY: 2,
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
  stroke: 'white',
  strokeWidth: 15, // 0 - 15
  strokeOpacity: '1'
 },
 gaugeAreaZ: {
  stroke: 'white',
  strokeWidth: 37.5, // 0 - 37.5
  strokeOpacity: '0.5'
 },
 gaugeAreaS: {
  stroke: ['green', 'orange', 'red'],
  angle: [180, 100, 45],
  strokeWidth: [7.5, 7.5, 7.5], // 7.5 - 30
  strokeOpacity: Array(3).fill(0.6)
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
 gaugeRange: {
  range: [0, 160],
  offset: 0.5,
  fill: 'dodgerBlue',
  fillOpacity: '1',
  fontFamily: 'sans-serif',
  fontWeight: 'normal',
  fontSize: 24
 },
 gaugeTitle: {
  text: 'MPH',
  fill: 'dodgerBlue',
  fillOpacity: 1,
  fontFamily: 'sans-serif',
  fontWeight: 'bold',
  fontSize: 20
 },
 needleLine: {
  offset: 0,
  stroke: 'red',
  strokeWidth: 6,
  strokeOpacity: 1
 },
 needleGear: {
  size: 15,
  fill: 'black',
  fillOpacity: 1,
  stroke: 'pink',
  strokeWidth: 1,
  strokeOpacity: 1
 }
};

export default data;
