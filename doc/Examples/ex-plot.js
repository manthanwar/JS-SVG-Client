// import * as mySvg from '../../dist/svg.min.js';
import * as mySvg from './svg.min.js';
import plotData from './ex-plot-data.js';

window.onload = (event) => {
 drawHtml();
 drawDivSvg();
 drawDivSvgMain();
 drawDivSvgMainRect();
 const grid = drawDivSvgMainGrid();
 drawDivSvgMainCirclePts(grid.objSvg.width, grid.objSvg.height);

 dataToArray(plotData.csv);

 findMode();
 linearRegression();

 // let div = displayData();
 //  div.innerHTML = 'Amit';
};

function dataToArray(data) {
 const rows = data.split('\n').filter((n) => n);
 const matrix = new Array(rows.length);

 for (const i in rows) {
  const cols = rows[i].split(',').filter((n) => n);
  matrix[i] = cols;
 }

 var col = matrix.map((v) => v[1]).filter((n) => n);
 console.log(col);
 console.log(Math.max(...col));
 console.log(Math.min(...col));
}

/**
 * Find Statistical mode, value that appears most often in a dataset
 */
function findMode() {
 const list = [1, 1, 1, 2, 3, 17, 17, 5, 4, 4, 16, 16];
 console.log(list);

 const counts = {};
 list.forEach((e) => {
  if (counts[e] === undefined) counts[e] = 0;
  counts[e] += 1;
 });

 const maxval = Math.max.apply(null, Object.values(counts));
 const result = Object.keys(counts).filter((k) => counts[k] === maxval);

 //  const mode = {};
 //  for (const x in counts) if (counts[x] == max) mode[x] = counts[x];
 //  console.log(mode);

 console.log('result = ' + result);

 return result;
}

/**
 * Linear Regression
 * y = a x + b
 * a = Slope of the line
 * b = y-intercept of the line
 * x = input vector
 * y = output vector
 */
function linearRegression() {
 const x = [2, 4, 6, 8];
 const y = [3, 7, 5, 10];
 //  const y = [3.4, 5.3, 7.2, 9.1];

 //  const x = [1, 2, 3, 4, 5];
 //  const y = [1.9, 3.7, 5.8, 8.0, 9.6];

 const n = x.length;

 const sumX = x.reduce((a, b) => a + b, 0);
 const sumY = y.reduce((a, b) => a + b, 0);

 const sumXsq = x.reduce((a, b) => a + b * b, 0);
 const sumYsq = y.reduce((a, b) => a + b * b, 0);

 const sumXY = x.reduce((r, a, i) => {
  return r + a * y[i];
 }, 0);

 console.log(sumX, sumY, sumXsq, sumYsq, sumXY);

 const slopeNum = n * sumXY - sumX * sumY;
 const slopeDen = n * sumXsq - sumX * sumX;
 const slope = slopeNum / slopeDen;

 console.log(slope);

 const interceptNum = sumY * sumXsq - sumX * sumXY;
 const interceptDen = n * sumXsq - sumX * sumX;
 const intercept = interceptNum / interceptDen;

 console.log(intercept);

 const yPredicted = [];
 const error = [];

 for (const idx in x) {
  yPredicted.push(slope * x[idx] + intercept);
  error.push(y[idx] - yPredicted[idx]);
 }

 // The sum of squares of residuals, also called the residual sum of squares:
 //  sumSqRes = errorSq
 const errorSq = error.reduce((a, b) => a + b * b, 0);
 const meanSqError = errorSq / n;

 const yMean = sumY / n;

 //  The total sum of squares (proportional to the variance of the data):
 const sumSqTot = y.reduce((a, c) => a + (c - yMean) ** 2, 0);

 //  Associated standard deviation
 const yStdDev = Math.sqrt(sumSqTot);

 // associated standard error on the mean
 const yStdError = yStdDev / Math.sqrt(n);

 //  the test statistic
 const ttt = slope / yStdError;

 // Residual Square R^2 - the coefficient of determination
 const rSq = 1 - errorSq / sumSqTot;

 //   the norm of residuals
 const normResidual = Math.sqrt(errorSq);

 //  RMSE = root mean square error/deviation RMSD

 const rmse = Math.sqrt(meanSqError);

 console.log(x);
 console.log(y);
 console.log(yPredicted);
 console.log(error);
 console.log('errorsq       = ' + errorSq);
 console.log('meanSqError   = ' + meanSqError);
 console.log('rSq           = ' + rSq);
 console.log('normResidual  = ' + normResidual);
 console.log('rmse          = ' + rmse);
 console.log('tval          = ', ttt);
}

function getMeanStdDev(array) {
 const n = array.length;
 const mean = array.reduce((a, b) => a + b) / n;
 const stdDev = Math.sqrt(
  array.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n
 );

 //  const variance = array.reduce((a, b) => a + (b - mean) ** 2, 0) / (n - 1);

 //  https://en.wikipedia.org/wiki/Mean
 const sumSq = array.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b);

 const sumOfProducts = array.reduce((a, b) => a * b);
 const meanGeometric = Math.pow(sumOfProducts, 1 / n);

 const sumOfInverse = array.reduce((a, b) => (1 / a) * (1 / b));
 const meanHarmonic = Math.pow(n * sumOfInverse, -1);

 const variancePopulation = sumSq / n;
 const varianceSample = sumSq / (n - 1);

 const stdDevPopulation = Math.sqrt(variancePopulation);
 const stdDevSample = Math.sqrt(varianceSample);

 const stats = {};
 statistics.min = Math.min(...array);
 statistics.max = Math.max(...array);
 statistics.avg = mean;
 statistics.var = [variancePopulation, varianceSample];
 statistics.std = [stdDevPopulation, stdDevSample];

 return statistics;
}

function drawHtml() {
 var html = new mySvg.Html();
 let h1 = html.newHead(document.body, 'Draw Using JS-SVG-Client');
 h1.style.color = 'green';
 h1.style.backgroundColor = 'pink';
}

function drawDivSvg() {
 const data = {};
 data.containerId = 'body';
 data.id = 'divSvg';
 data.width = '844px';
 data.height = '444px';
 data.transform = 'scale(1, 1)';
 data.style =
  'border: 2px solid red; padding: 2px;box-sizing:border-box;background-color: rgba(100,100,0,0);';
 return new mySvg.Div(data);
}

function drawDivSvgMain() {
 const data = {};
 data.containerId = 'divSvg';
 data.id = 'divSvgMain';
 data.width = 822;
 data.height = 422;
 data.viewBox = '0 0 100% 100% ';
 // data.viewbox = '0 0 10 100';
 data.style =
  'border: 2px solid green; padding: 10px;box-sizing:border-box;background-color: rgba(100,100,0,0);';
 return new mySvg.Svg(data);
}

// region rectangle
function drawDivSvgMainRect() {
 const data = {};
 data.containerId = 'divSvgMain';
 data.idd = 'divSvgMainRect';
 data.x = '0';
 data.y = data.x;
 //  data.width = 800 * 0.8 - 2 * data.x;
 //  data.height = 400 * 1 - 2 * data.y;
 data.width = 800 - 4 * data.x;
 data.height = 400 - 4 * data.y;

 // data.width = 800;
 // data.height = 400;

 data.stroke = 'blue';
 data.strokeWidth = '0';
 data.strokeOpacity = '1';
 data.fill = 'pink';
 data.fillOpacity = '0.3';
 const rectangle = new mySvg.Rectangle(data);
}
// endregion rectangle

function displayData() {
 const data = {};
 data.containerId = 'body';
 data.id = 'svgDiv';
 data.width = '100px';
 data.height = '100%';
 //  data.transform = 'scale(1, 1)';
 data.style =
  'border: 2px solid red; padding: 0px;box-sizing:border-box;background-color: rgba(100,100,0,0);';
 const div = new mySvg.Div(data);

 const rowsArray = plotData.csv.split('\n').filter((n) => n);

 rowsArray.forEach((v, i) => {
  const xy = v.split(',').filter((n) => n);
  div.obj.innerHTML += xy[0] + ' == ' + xy[1] + '<br>';
  // console.log(i + ' === ' + xy[0]);
 });
 return div;
}

// region grid
function drawDivSvgMainGrid() {
 var grid = {};
 grid.containerId = 'divSvgMain';
 grid.minorNumX = 5;
 grid.minorNumY = 5;
 grid.majorNumX = 10;
 grid.majorNumY = 10;

 // grid.box = {};
 // grid.boxOn = true;
 // grid.axesOn = true;

 grid.titleOn = true;
 grid.axisLabelOnX = true;
 grid.axisLabelOnY = true;
 grid.axisNumOnX = true;
 grid.axisNumOnY = true;
 grid.majorOnX = true;
 grid.majorOnY = true;
 grid.minorOnX = true;
 grid.minorOnY = true;

 // grid.box = {};
 // grid.box.stroke = 'red';
 // grid.box.strokeWidth = 1;
 // grid.box.strokeOpacity = 1;
 // grid.box.fill = 'none';
 // grid.box.idSvg = 'svg';
 // grid.box.idBox = 'box';

 // grid.padding = {};
 // grid.padding.left = 36;
 // grid.padding.right = 10;
 // grid.padding.top = 20;
 // grid.padding.bottom = 36;

 grid.title = {};
 grid.title.text = 'Plot Title';
 grid.title.x = '50%';
 grid.title.y = 14;

 //  grid.title.fontFamily = 'inherit';
 //  grid.title.fontSize = '20';
 //  grid.title.fontWeight = 'normal';
 //  grid.title.fill = 'black';
 //  grid.title.fillOpacity = '1';
 //  grid.title.stroke = 'black';
 //  grid.title.strokeWidth = '0';
 //  grid.title.strokeOpacity = '1';

 const gridObj = new mySvg.Grid(grid);
 //  console.log(gridObj.data.title);

 //  gridObj.data.title.text = 'aaaPlot Title';

 return gridObj;

 // gridLine.majorX[3].style = 'stroke:green; stroke-width:4;';
 // gridLine.minorX[1].style = 'stroke:green; stroke-width:4;';
}
// endregion grid

function drawDivSvgMainCirclePts(wd, ht) {
 const data = {};
 data.containerId = 'divSvgMain-svg';

 // flip svg coordinate: transform='matrix(1 0 0 -1 0 400)' | 400 is height
 data.transform = 'matrix(1 0 0 -1 0 ' + ht + ')';
 data.cx = 0.5 * wd;
 data.cy = 0.5 * ht;
 data.r = 10;
 data.stroke = 'blue';
 data.strokeWidth = 4;
 data.fill = 'pink';
 data.fillOpacity = '1';
 data.strokeOpacity = '0.8';
 const circle = new mySvg.Circle(data);
}

function drawDivH1() {
 const data = {};
 data.containerId = 'body';
 data.id = 'svgDiv';
 data.width = '822px';
 data.height = '422px';
 data.transform = 'scale(1, 1)';
 data.style =
  'border: 2px solid red; padding: 0px;box-sizing:border-box;background-color: rgba(100,100,0,0);';
 const div = new mySvg.Div(data);
 //  return new mySvg.Div(data);
}

function drawNestedDiv() {
 const data = {};

 // data.containerId = 'svgDiv';
 data.containerId = 'body';
 data.id = 'svgMain';
 data.width = '400';
 data.height = '400';
 data.style = 'border: 2px solid blue;';
 var svgMain = new mySvg.Svg(data);

 data.containerId = 'svgMain';
 var rect1 = new mySvg.Rectangle(data);
 rect1.x = '0';
 rect1.y = '0';
 rect1.rx = '10';
 rect1.ry = '10';
 rect1.width = '50';
 rect1.height = '50';
 rect1.style = 'fill: lime';

 data.containerId = 'svgMain';
 var svg = new mySvg.Svg(data);
 svg
  .attr('x', '50')
  .attr('y', '50')
  .attr('width', '100')
  .attr('height', '100')
  .attr('id', 'svg');

 data.containerId = 'svg';
 var rect2 = new mySvg.Rectangle(data);
 rect2
  .attr('x', '00')
  .attr('y', '0')
  .attr('width', '10')
  .attr('height', '10')
  .attr('style', 'fill: pink;');
}
