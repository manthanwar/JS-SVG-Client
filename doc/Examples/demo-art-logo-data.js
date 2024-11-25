const data = {};

data.title = 'Art Logo';

const [width, height] = [100 * 4 + 24, 100 * 4 + 24];
data.divMainBox = {
 containerId: 'main',
 id: 'divMainBox',
 style: `border: 0px solid red; padding:10px 10px;margin-top:10px;`,
 width: width + 500 + 24 * 2 + 'px',
 height: height + 24 * 2 + 'px',
 transform: 'scale(1)'
};

data.divMainObj = {
 // style: 'border: 0px solid green; padding:10px; margin: 0px;',
 style: `border: 0px solid red; padding:10px 10px;margin-top:10px;
 box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; border-radius:50px;`,
 width: width + 24 + 'px',
 height: height + 24 + 'px',
 class: 'divMainObj'
};

data.svgMainSvg = {
 width: '100%',
 height: '100%',
 vieBox: '0 0 400 10',
 style: `border: 0px solid blue; background-color: rgba(0,200,0,0); padding:10px; box-sizing:border-box; background-color: none;
 paint-order: stroke;
 `
};

// data.optionsOn = true;
data.divOptions = {
 containerId: data.divMainBox.id,
 id: data.divMainBox.id + '-divOptions',
 width: '300px',
 height: '400px',
 transform: 'scale(1)',
 // style: 'border: 1px solid blue; padding:20px;',
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
 drawCircleBgM: {
  fill: 'white',
  fillOpacity: 1,
  stroke: 'none',
  strokeWidth: 10,
  strokeOpacity: 1
 },

 drawPathCircR1: {
  fill: '#ee1745',
  fillOpacity: 1,
  stroke: '#ee1745',
  strokeWidth: 10,
  strokeOpacity: 1,
  sweepFlag: 0
 },

 drawPathLineB1: {
  fill: '#1958a8',
  fillOpacity: 1,
  stroke: 'white',
  strokeWidth: 8,
  strokeOpacity: 1
 },

 drawPathLineY1: {
  fill: '#fdbb2a',
  fillOpacity: 1,
  stroke: 'white',
  strokeWidth: 8,
  strokeOpacity: 1
 },

 drawPathLineR1: {
  fill: '#ee1745',
  fillOpacity: 1,
  stroke: 'white',
  strokeWidth: 8,
  strokeOpacity: 1
 },

 drawPathLineR2: {
  fill: 'none',
  fillOpacity: 1,
  stroke: '#ee1745',
  strokeWidth: 8,
  strokeOpacity: 1
 },

 drawPathLineG1: {
  fill: '#18b04b',
  fillOpacity: 1,
  stroke: 'white',
  strokeWidth: 8,
  strokeOpacity: 1
 },

 drawPathLineG2: {
  fill: '#18b04b',
  fillOpacity: 1,
  stroke: 'gray',
  strokeWidth: 1,
  strokeOpacity: 0.5
 },

 drawPathLineG3: {
  fill: 'none',
  fillOpacity: 1,
  stroke: '#18b04b',
  strokeWidth: 8,
  strokeOpacity: 1
 },

 divLogoTitle: {
  text: '',
  fill: 'dodgerBlue',
  fillOpacity: 1,
  fontFamily: 'sans-serif',
  fontWeight: 'bold',
  fontSize: 24
 }
};

export default data;
