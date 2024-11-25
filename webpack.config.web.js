const TerserPlugin = require('terser-webpack-plugin');

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
 optimization: {
  minimize: true,
  minimizer: [new TerserPlugin()]
 },
 mode: 'development',
 mode: 'production'
};

module.exports = config;
