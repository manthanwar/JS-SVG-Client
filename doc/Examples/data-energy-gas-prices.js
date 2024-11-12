const data = {};

data.title = 'Natural Gas (NG:NMX) Historical Data';
data.subtitle = 'USD per MMBtu';
data.notes = '';
data.source =
 '<a href="https://developers.google.com/chart/interactive/docs/gallery/linechart" target="_blank">Google Material Charts</a>';

//region data csv
data.csv = `Date,Price
2024-11-04,1.35
2024-11-01,1.42
2024-10-31,1.82
2024-10-30,2.03
2024-10-29,1.82
2024-10-28,2.03
2024-10-25,1.93
2024-10-24,2.04
2024-10-23,1.9
2024-10-22,1.76
2024-10-21,1.76
2024-10-18,1.82
2024-10-17,2.19
2024-10-16,2.21
2024-10-15,2.37
2024-10-11,2.31
2024-10-10,2.26
2024-10-09,2.43
2024-10-08,2.51

`;
//endregion data csv

data.csv = data.csv.replace(/-/g, '');
// console.log(data.csv);

data.layout = {
 divMainBox: {
  containerId: 'main',
  id: 'divMainBox'
 },
 // gridOn: false,
 numB: 3,
 clrB: 'pink',
 clrH: 'maroon'
};

data.grid = {
 majorNumX: 4,
 majorNumY: 6,
 title: { text: ' ' },
 axisLabelX: { text: 'Date' },
 axisLabelY: { text: 'Price USD per MMBtu' }
};

data.option = {
 // xOff: 0,
 // yOff: 0,
 dateFormat: 'yyyy-mm-dd',
 columnsToPlot: [1], // [1,2,3,4] // 0 for date
 // axisLimit: [-1, 5, 1, 3],
 // hasHeader: false,
 markerOn: true,
 marker: {
  size: Array(3).fill(10),
  fill: ['pink', 'lime', 'cyan'],
  stroke: ['blue', 'black', 'red'],
  strokeWidth: [2, 4, 4],
  strokeOpacity: [1, 1, 1],
  fillOpacity: [0.5, 0.5, 0.5]
 },
 line: {
  stroke: ['blue', 'maroon', 'purple'],
  strokeWidth: [2, 4, 4],
  strokeOpacity: [1, 1, 1],
  strokeDasharray: ['4', '1', '1']
 }
};

export default data;
