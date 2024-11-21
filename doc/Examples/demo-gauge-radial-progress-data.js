const data = {};

data.title = 'Gauge Radial Progress';

const [width, height] = [100 * 4 + 24, 100 * 4 + 24];
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
 height: height + 24 + 'px'
};

data.svgMainSvg = {
 width: '100%',
 height: '100%',
 // vieBox: '0 0 100 100 ',
 style: `border: 2px solid blue; background-color: rgba(0,200,0,0); padding:10px; box-sizing:border-box; background-color: none;`
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
 axisNumOnX: true,
 axisNumOnY: true,
 majorOnX: true,
 majorOnY: true,
 minorOnX: true,
 minorOnY: true,
 boxOn: false,
 axesOn: false,
 major: {
  stroke: 'gray',
  strokeWidth: '0.5'
 }
};

data.option = {
 ring: {
  stroke: 'violet',
  strokeWidth: 50,
  strokeOpacity: '1',
  angle: 135
 },
 label: {
  text: '%',
  fill: 'dodgerblue',
  fillOpacity: '1',
  fontFamily: 'sans-serif',
  fontWeight: 'bold',
  fontSize: 60
 }
};

data.gaugeSkirt = {
 fill: 'pink',
 fillOpacity: '0.5',
 stroke: 'red',
 strokeWidth: '0'
 // strokeDasharray: '4, 4'
};

// gaugeSkirt;
// numTicsMin;
// numTicsMaj;

// data.option.gaugeSkirt = {}; //	gauge border

// data.option.ticMarkMin = {
//  isTicMinOn: 0 //drawTicMin	0/1
// }; //	minor tic mark

// data.option.ticMarkMaj = {
//  isTicMajOn: 0 //drawTicMin	0/1
// }; //	major tic mark

// data.option.gaugeScale = {}; //	scale background Main

// data.option.gaugeValue = {}; //	0-160

// data.option.needleLine = {}; //	needle pointer

// data.option.needleCirc = {}; //	needle cap

// data.option.gaugeArea0 = {}; //	main scale area backgroun

// data.option.gaugeArea1 = {}; //	scale range area green

// data.option.gaugeArea2 = {}; //	scale range area yellow

// data.option.gaugeArea3 = {}; //	scale range area red

// data.option.divToolTip = {}; //	tooltip over pointer on hover

// data.option.gaugeTitle = {}; //MPH;
// data.option.gaugeValue = {};//value in number;

export default data;
