const path = require('path');

const config = {
 entry: {
  index: path.resolve('./src/index.js')
 },
 experiments: {
  outputModule: true
 },
 output: {
  libraryTarget: 'module',
  path: path.resolve(__dirname, 'dist'),
  filename: 'svg.min.js',
  compareBeforeEmit: true,
  clean: true
 },
 stats: {
  colors: true
 },
 mode: 'development',
 mode: 'production'
};

module.exports = config;
