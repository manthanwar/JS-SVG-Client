const data = {};

data.title = 'Gauge Radial Half / Semicircle';

const [width, height] = [150 * 4 + 24, 75 * 4 + 24];
data.divMainBox = {
 containerId: 'main',
 id: 'divMainBox',
 style: 'border: 0px solid red; padding:10px 10px;margin-top:10px;',
 width: width * 2.4 + 22 * 2 + 'px',
 height: height + 22 * 2 + 'px',
 transform: 'scale(1)'
};

data.divMainObj = {
 style: `border: 0px solid green; padding:10px; margin: 0px;
 box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
 border-radius:20px;
 `,
 width: width + 22 + 'px',
 height: height + 22 + 'px',
 class: 'divMainObj'
};

data.svgMainSvg = {
 width: '100%',
 height: '100%',
 // vieBox: '0 0 100 100 ',
 style: `border: 0px solid blue; background-color: rgba(0,200,0,0); padding:10px; box-sizing:border-box; background-color: none;`
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
  stroke: '#ffffff',
  strokeWidth: 15, // 0 - 15
  strokeOpacity: '1',
  strokeWidthRange: [0, 15, 0.5] // [min, max, step]
 },
 gaugeAreaZ: {
  stroke: '#ffffff',
  strokeWidth: 37.5, // 0 - 37.5
  strokeOpacity: '0.5',
  strokeWidthRange: [0, 37.5, 0.5] // [min, max, step]
 },
 gaugeAreaS: {
  stroke: ['green', 'orange', 'red'],
  angle: [180, 100, 45],
  strokeWidth: [7.5, 7.5, 7.5], // 7.5 - 30
  strokeOpacity: Array(3).fill(0.6)
 },
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
  strokeWidthRange: [0, 10, 0.5] // [min, max, step]
 },
 needleGear: {
  size: 15,
  fill: '#000000',
  fillOpacity: 1,
  stroke: '#ffc0cb',
  strokeWidth: 1,
  strokeOpacity: 1,
  strokeWidthRange: [0, 15, 0.5] // [min, max, step]
 }
};

export default data;
