const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

// import webpack from 'webpack';

module.exports = {
 entry: {
  index: path.resolve('./src/index.js')
 },
 output: {
  // library: "js-svg-client",
  // libraryTarget: "svg",
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
  minimizer: [new TerserPlugin({ parallel: true })]
 },
 mode: 'development',
 mode: 'production'
};
