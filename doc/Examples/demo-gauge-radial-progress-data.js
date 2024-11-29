const data = {};

data.title = 'Gauge Radial Progress';

const [width, height] = [100 * 4 + 24, 100 * 4 + 24];
data.divMainBox = {
 containerId: 'main',
 id: 'divMainBox',
 style: 'border: 0px solid red; padding:10px 10px;margin-top:10px;',
 width: width * 2.5 + 22 * 2 + 'px',
 height: height + 22 * 2 + 'px',
 transform: 'scale(1)'
};

data.divMainObj = {
 style: `border: 0px solid green; padding:10px; margin: 0px;
 box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
 border-radius:50px;`,
 width: width + 22 + 'px',
 height: height + 22 + 'px'
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

data.gridOn = true;
data.grid = {
 minorNumX: 5,
 minorNumY: 5,
 majorNumX: 2,
 majorNumY: 2,
 titleOn: false,
 axisLabelOnX: false,
 axisLabelOnY: false,
 // axisNumOnX: true,
 // axisNumOnY: true,
 // majorOnX: true,
 // majorOnY: true,
 // minorOnX: true,
 // minorOnY: true,
 boxOn: false,
 axesOn: false,
 major: {
  stroke: 'gray',
  strokeWidth: '0.5'
 }
};

data.option = {
 ring: {
  stroke: '#ee82ee',
  strokeWidth: 50,
  strokeOpacity: '1',
  angle: 135,
  strokeWidthRange: [0, 60, 0.5] // [min, max, step]
 },
 ringText: {
  text: '%',
  fill: '#1e90ff',
  fontFamily: 'sans-serif',
  fontWeight: 'bold',
  fontSize: 60
 }
};

// data.gaugeSkirt = {
//  fill: 'pink',
//  fillOpacity: '0.5',
//  stroke: 'red',
//  strokeWidth: '0'
//  // strokeDasharray: '4, 4'
// };

export default data;
