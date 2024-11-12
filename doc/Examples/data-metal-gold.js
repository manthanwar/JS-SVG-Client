const data = {};

data.title = 'Gold (GC:CMX) Historical Data';
data.subtitle = 'USD/Oz';
data.notes = '';
data.source =
 '<a href="https://www.nasdaq.com/market-activity/commodities/gc-cmx/historical" target="_blank">Nasdaq</a>';

data.csv = `Date,Close,Volume,Open,High,Low
11/08/2024,2694.80,208112,2713.60,2717.80,2687.30
11/07/2024,2705.80,265454,2667.70,2718.30,2650.30
11/06/2024,2676.30,350399,2752.60,2758.80,2660.70
11/05/2024,2749.70,145690,2746.00,2759.50,2733.40
11/04/2024,2746.20,137372,2743.50,2757.50,2739.40
11/01/2024,2749.20,170233,2754.00,2772.40,2742.60
10/31/2024,2749.30,227901,2799.10,2801.20,2741.80
10/30/2024,2800.80,182180,2786.90,2801.80,2782.40
10/29/2024,2781.10,196899,2754.30,2787.70,2752.00
10/28/2024,2755.90,155401,2749.20,2758.30,2736.90
10/25/2024,2754.60,143550,2748.60,2760.90,2729.10
10/24/2024,2748.90,160643,2729.20,2756.30,2728.70
10/23/2024,2729.40,203291,2762.60,2772.60,2722.10
10/22/2024,2759.80,165109,2734.70,2763.30,2733.50
10/21/2024,2738.90,202418,2736.30,2755.40,2728.50
10/18/2024,2730.00,171111,2707.80,2737.80,2707.30
10/17/2024,2707.50,174844,2690.40,2712.70,2688.20
10/16/2024,2691.30,151576,2679.50,2702.50,2674.90
10/15/2024,2678.90,154633,2663.50,2685.90,2654.40
`;

// data.csv = data.csv.replace(/-/g, '');
// console.log(data.csv);

// const aaa = '10/12.2024/22.222 333 444,22,44';

// date separators: / (slash); - (dash); . (period);  , (comma); (blank)

// const bbb = aaa.replace(/[\/\.\s,]/g, '-');

// console.log(aaa, bbb);

// data.csv = data.csv.replace(/[\/]/g, '');

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
 majorNumX: 7,
 majorNumY: 6,
 title: { text: ' ' },
 axisLabelX: { text: 'Day since launch' },
 axisLabelY: { text: 'Earnings (USD million)' }
};

data.option = {
 dateFormat: 'mm/dd/yyyy',
 columnsToPlot: [1], // [1,2,3,4] // 0 for date
 xOff: 0,
 yOff: 0,
 // axisLimit: [0, 15, -10, 90],
 // hasHeader: false,
 markerOn: true,
 marker: {
  size: Array(3).fill(6),
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
  strokeDasharray: ['4 10', '1', '1']
 },

 title: 'Daily sugar and fat intake by country',
 titleX: 'Daily fat intake (g)',
 titleY: 'Daily sugar intake (g)',
 grid: {
  majorNumX: 6,
  majorNumY: 6
 },
 legend: { position: 'bottom' }
};

export default data;
