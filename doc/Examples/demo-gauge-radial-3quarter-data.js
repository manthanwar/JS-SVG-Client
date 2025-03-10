const data = {};

data.title = 'Gauge Radial Three Quarter';

const [width, height] = [100 * 4 + 24, 100 * 4 + 24];
data.divMainBox = {
 containerId: 'main',
 id: 'divMainBox',
 style: `border: 0px solid red; padding:10px 10px;margin-top:10px;`,
 width: width * 2.4 + 24 * 2 + 'px',
 // height: height + 24 * 2 + 'px',
 height: 350 + 24 * 2 + 'px',
 transform: 'scale(1)'
};

data.divMainObj = {
 style: `border: 0px solid green; padding:10px; margin: 0px;
 margin-top:50px;
 box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
 border-radius:50px;
 `,
 width: width + 24 + 'px',
 height: height + 24 + 'px',
 height: height + 24 + 'px',
 class: 'divMainObj'
};

data.svgMainSvg = {
 width: '100%',
 height: '100%',
 vieBox: '0 0 400 10',
 style: `border: 0px solid blue; background-color: rgba(0,200,0,0); padding:10px; box-sizing:border-box; background-color: none;
 margin-top:50px;
 `
};

data.optionsOn = true;
data.divOptions = {
 containerId: data.divMainBox.id,
 id: data.divMainBox.id + '-divOptions',
 width: '400px',
 height: '400px',
 transform: 'scale(1)',
 style: 'border: 0px solid blue; padding:10px;',
 class: 'divOption'
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
  stroke: '#808080',
  strokeWidth: 7.5, // 0 - 7.5
  strokeOpacity: 0.5,
  strokeWidthRange: [0, 14, 0.5] // [min, max, step]
 },
 gaugeAreaZ: {
  stroke: '#f0e68c',
  strokeWidth: 30, // 0 - 30
  strokeOpacity: 0.4,
  strokeWidthRange: [0, 30, 0.5] // [min, max, step]
 },
 gaugeAreaS: {
  stroke: ['green', 'orange', 'red'],
  angle: [225, 140, 60],
  largeArcFlag: [0, 0, 0],
  strokeWidth: [7.5, 7.5, 7.5], // 7.5 - 30
  strokeOpacity: Array(3).fill(1)
 },
 // gaugeAreaS: {
 //  stroke: ['green'],
 //  angle: [225],
 //  // angle: [0, 60, 120],
 //  strokeWidth: [7.5], // 7.5 - 30
 //  strokeOpacity: Array(1).fill(1)
 // },
 ticksMajor: {
  stroke: '#000000',
  strokeWidth: 2,
  strokeOpacity: 1
 },
 ticksMinor: {
  stroke: '#000000',
  strokeWidth: 1,
  strokeOpacity: 1
 },
 gaugeRange: {
  range: [0, 160],
  offset: 0.5,
  fill: '#1e90ff',
  fillOpacity: '1',
  fontFamily: 'sans-serif',
  fontWeight: 'normal',
  fontSize: 24
 },
 gaugeTitle: {
  text: 'MPH',
  fill: '#1e90ff',
  fillOpacity: 1,
  fontFamily: 'sans-serif',
  fontWeight: 'bold',
  fontSize: 20
 },
 needleLine: {
  offset: 0,
  stroke: '#ff0000',
  strokeWidth: 6,
  strokeOpacity: 1,
  strokeWidthRange: [0, 15, 0.5] // [min, max, step]
 },
 needleGear: {
  size: 10,
  fill: '#000000',
  fillOpacity: 1,
  stroke: '#ffc0cb',
  strokeWidth: 1,
  strokeOpacity: 1,
  strokeWidthRange: [0, 15, 0.5], // [min, max, step]
  sizeRange: [0, 30, 0.5] // [min, max, step]
 }
};

export default data;
