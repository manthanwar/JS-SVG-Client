const path = require("path");
module.exports = {
  entry: {
    index: path.resolve("./src/index.js"),
  },
  target: "web",
  output: {
    // library: "js-svg-client",
    // libraryTarget: "svg",

    path: path.resolve(__dirname, "dist"),
    chunkFormat: "array-push", //"commonjs",
    filename: "svg.min.js",
    compareBeforeEmit: false,
  },
  stats: {
    colors: true,
  },
  mode: "development",
  mode: "production",
};
