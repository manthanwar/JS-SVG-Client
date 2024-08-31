// =============================================================================
// File Name     : Grid.js
// Description   : SVG Grid Class
// -----------------------------------------------------------------------------
// Author        : Amit Manohar Manthanwar
// Mailer        : manthanwar@hotmail.com
// Mobile        : +91.853.081.3398
// WebURL        : https://manthanwar.github.io
// -----------------------------------------------------------------------------
// Copyright     : (c) 2024 Amit Manohar Manthanwar
// License       : MIT License
// ----------------------------------------------------------------------------
// This program can be redistributed and/or modified under the terms
// of the MIT License. For details see the file license.txt
// =============================================================================
// Revision Log  | Author  | Description
// --------------+---------+----------------------------------------------------
// 26-Aug-2024   | AMM     | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

import { Line, Text } from "./index.js";

export default class Grid {
  constructor(data) {
    this.setData(data);

    this.data.stroke = this.data.minorStroke;
    this.data.strokeWidth = this.data.minorStrokeWidth;
    this.data.strokeOpacity = this.data.minorStrokeOpacity;
    this.data.strokeDasharray = "1 5";
    this.data.strokeWidth = "0.5";
    this.newMinorX(this.data);
    this.newMinorY(this.data);

    this.data.stroke = this.data.majorStroke;
    this.data.strokeWidth = this.data.majorStrokeWidth;
    this.data.strokeOpacity = this.data.majorStrokeOpacity;
    this.data.strokeDasharray = "";
    this.data.strokeWidth = "0.5";
    this.newMajorX(this.data);
    this.newMajorY(this.data);

    // Box
    if (this.data.boxOn) this.drawBox(this.data);

    // Axes
    if (this.data.axesOn) this.drawAxes(this.data);

    // Title
    this.drawTitle();

    // Axis Label X
    this.drawAxisLabelX();

    // Axis Label Y
    this.drawAxisLabelY();

    // Axis num X
    this.drawAxisNumX();

    // Axis num Y
    this.drawAxisNumY();
  }

  setData(data) {
    // region grid
    this.data = {};
    this.minorX = [];
    this.minorY = [];
    this.majorX = [];
    this.majorY = [];

    const kv = {};
    kv.id = {};
    kv.style = {};
    kv.class = {};

    kv.containerId = "body";
    kv.minorNumX = "5";
    kv.minorNumY = "5";
    kv.majorNumX = "10";
    kv.majorNumY = "10";
    kv.minorStroke = "gray";
    kv.majorStroke = "gray";
    kv.minorStrokeWidth = "0.8";
    kv.majorStrokeWidth = "1";
    kv.minorStrokeOpacity = "1";
    kv.majorStrokeOpacity = "1";
    kv.id.minorX = "";
    kv.id.minorY = "";
    kv.id.majorX = "";
    kv.id.majorY = "";
    kv.style.minorX = "";
    kv.style.minorY = "";
    kv.style.majorX = "";
    kv.style.majorY = "";
    kv.class.minorX = "";
    kv.class.minorY = "";
    kv.class.majorX = "";
    kv.class.majorY = "";
    // endregion grid

    // region box
    kv.boxOn = true;
    kv.boxStroke = "black";
    kv.boxStrokeWidth = "4";
    kv.boxStrokeOpacity = "1";
    kv.id.box = "";
    kv.style.box = "";
    kv.class.box = "";
    // endregion box

    // region Axes
    kv.axesOn = false;
    kv.axesStroke = "black";
    kv.axesStrokeWidth = "6";
    kv.axesStrokeOpacity = "1";
    // endregion Axes

    // region title
    kv.titleOn = true;
    kv.title = {};
    kv.title.text = "Plot Title";
    kv.title.containerId = "svgText";
    kv.title.x = "50%";
    kv.title.y = "7%";
    kv.title.dx = "0";
    kv.title.dy = "0";
    kv.title.fontFamily = "inherit";
    kv.title.fontSize = "22";
    kv.title.fontWeight = "bold";
    kv.title.fill = "blue";
    kv.title.fillOpacity = "1";
    kv.title.stroke = "blue";
    kv.title.strokeWidth = "0";
    kv.title.strokeOpacity = "1";
    kv.title.rotate = "0";
    kv.title.transform = "";
    kv.title.id = "title";
    kv.title.style = "";
    kv.title.class = "";
    // endregion title

    // region Axis X label
    kv.axisLabelOnX = true;
    kv.axisLabelX = {};
    kv.axisLabelX.text = "X Axis";
    kv.axisLabelX.containerId = "svgText";
    kv.axisLabelX.x = "50%";
    kv.axisLabelX.y = "99%";
    kv.axisLabelX.dx = "0";
    kv.axisLabelX.dy = "0";
    kv.axisLabelX.fontFamily = "inherit";
    kv.axisLabelX.fontSize = "16";
    kv.axisLabelX.fontWeight = "normal";
    kv.axisLabelX.fill = "black";
    kv.axisLabelX.fillOpacity = "1";
    kv.axisLabelX.stroke = "black";
    kv.axisLabelX.strokeWidth = "0";
    kv.axisLabelX.strokeOpacity = "1";
    kv.axisLabelX.rotate = "0";
    kv.axisLabelX.transform = "";
    kv.axisLabelX.id = "labelX";
    kv.axisLabelX.style = "";
    kv.axisLabelX.class = "";
    // endregion X Axis Label

    // region Y Axis Label
    kv.axisLabelOnY = true;
    kv.axisLabelY = {};
    kv.axisLabelY.text = "Y Axis";
    kv.axisLabelY.containerId = "svgText";
    kv.axisLabelY.x = -"50%";
    kv.axisLabelY.y = "10%";
    kv.axisLabelY.dx = "0";
    kv.axisLabelY.dy = "-4";
    kv.axisLabelY.fontFamily = "inherit";
    kv.axisLabelY.fontSize = "16";
    kv.axisLabelY.fontWeight = "normal";
    kv.axisLabelY.fill = "black";
    kv.axisLabelY.fillOpacity = "1";
    kv.axisLabelY.stroke = "black";
    kv.axisLabelY.strokeWidth = "0";
    kv.axisLabelY.strokeOpacity = "1";
    kv.axisLabelY.rotate = "0";
    kv.axisLabelY.transform = "rotate(-90, 100, 100)";
    kv.axisLabelY.id = "title";
    kv.axisLabelY.style = "";
    kv.axisLabelY.class = "";
    // endregion Y Axis Label

    // region Axis Number X
    kv.axisNumOnX = true;
    kv.axisNumX = {};
    kv.axisNumX.text = "X Label";
    kv.axisNumX.containerId = "svgText";
    kv.axisNumX.x = "40%";
    kv.axisNumX.y = "95%";
    kv.axisNumX.dx = "0";
    kv.axisNumX.dy = "-2";
    kv.axisNumX.fontFamily = "inherit";
    kv.axisNumX.fontSize = "16";
    kv.axisNumX.fontWeight = "normal";
    kv.axisNumX.fill = "dimGray";
    kv.axisNumX.fillOpacity = "1";
    kv.axisNumX.stroke = "dimGray";
    kv.axisNumX.strokeWidth = "0";
    kv.axisNumX.strokeOpacity = "1";
    kv.axisNumX.rotate = "0";
    kv.axisNumX.transform = "";
    kv.axisNumX.id = "axisNumX";
    kv.axisNumX.style = "";
    kv.axisNumX.class = "";
    // endregion Axis Number X

    // region Axis Number Y
    kv.axisNumOnY = true;
    kv.axisNumY = {};
    kv.axisNumY.text = "1";
    kv.axisNumY.textAnchor = "end";
    kv.axisNumY.containerId = "svgText";
    kv.axisNumY.x = "8%";
    kv.axisNumY.y = "10%";
    kv.axisNumY.dx = "2";
    kv.axisNumY.dy = "0";
    kv.axisNumY.fontFamily = "inherit";
    kv.axisNumY.fontSize = "16";
    kv.axisNumY.fontWeight = "normal";
    kv.axisNumY.fill = "dimGray";
    kv.axisNumY.fillOpacity = "1";
    kv.axisNumY.stroke = "dimGray";
    kv.axisNumY.strokeWidth = "0";
    kv.axisNumY.strokeOpacity = "1";
    kv.axisNumY.rotate = "0";
    kv.axisNumY.transform = "";
    kv.axisNumY.id = "axisNumY";
    kv.axisNumY.style = "";
    kv.axisNumY.class = "";
    // endregion Axis Number Y

    this.data = JSON.parse(JSON.stringify(data));

    for (const key in kv) {
      if (!data[key]) this.data[key] = kv[key];
    }
  }

  drawBox(data) {
    this.checkIdStyleClass("box");
    this.data.stroke = this.data.boxStroke;
    this.data.strokeWidth = this.data.boxStrokeWidth;
    this.data.strokeOpacity = this.data.boxStrokeOpacity;
    this.box = [];
    data.x1 = "0";
    data.y1 = "0";
    data.x2 = "100%";
    data.y2 = "0";
    this.box[0] = new Line(data);

    data.x1 = "100%";
    data.y1 = "0";
    data.x2 = "100%";
    data.y2 = "100%";
    this.box[1] = new Line(data);

    data.x1 = "100%";
    data.y1 = "100%";
    data.x2 = "0";
    data.y2 = "100%";
    this.box[2] = new Line(data);

    data.x1 = "0";
    data.y1 = "100%";
    data.x2 = "0";
    data.y2 = "0";
    this.box[3] = new Line(data);
  }

  drawAxes(data) {
    this.checkIdStyleClass("axes");
    this.data.stroke = this.data.axesStroke;
    this.data.strokeWidth = this.data.axesStrokeWidth;
    this.data.strokeOpacity = this.data.axesStrokeOpacity;
    this.axes = [];
    data.x1 = "0";
    data.y1 = "100%";
    data.x2 = "100%";
    data.y2 = "100%";
    this.axes[0] = new Line(data);

    data.x1 = "0";
    data.y1 = "100%";
    data.x2 = "0";
    data.y2 = "0";
    this.axes[1] = new Line(data);
  }

  getSizeSvg(elementString) {
    const element = document.getElementById(elementString);
    const computedStyle = getComputedStyle(element);
    const padTop = parseFloat(computedStyle.paddingTop);
    const padBottom = parseFloat(computedStyle.paddingBottom);
    const padLeft = parseFloat(computedStyle.paddingLeft);
    const padRight = parseFloat(computedStyle.paddingRight);
    const elementWidth = element.clientWidth; // width with padding
    const elementHeight = element.clientHeight; // height with padding
    const size = {};
    size.width = elementWidth - padLeft - padRight;
    size.height = elementHeight - padTop - padBottom;
    return size;
  }

  getSizeText(elementString) {
    const box = document.getElementById(elementString).getBBox();
    const size = {};
    size.width = box.width;
    size.height = box.height;
    return size;
  }

  drawTitle() {
    if (this.data.titleOn) {
      const data = JSON.parse(JSON.stringify(this.data.title));
      // var data = {};
      data.containerId = "svgText";
      // data.text = 'title';
      // data.fontSize = '128';
      // data.fontWeight = '500';
      // data.strokeWidth = '0';
      // data.x = "50%";
      // data.y = "50%";
      this.title = new Text(data);
      // this.title.x = '50%';
      // this.title.y = '7%';
    }
  }

  drawAxisLabelX() {
    if (this.data.axisLabelOnX) {
      const data = JSON.parse(JSON.stringify(this.data.axisLabelX));
      data.containerId = "svgText";
      // data.text = 'x axis';
      // data.fontSize = '18';
      // data.fontWeight = 'normal';
      // data.strokeWidth = '0';
      this.axisLabelX = new Text(data);
    }
  }

  drawAxisLabelY() {
    if (this.data.axisLabelOnY) {
      const data = JSON.parse(JSON.stringify(this.data.axisLabelY));
      data.containerId = "svgText";
      // data.text = 'y axis';
      // data.fontSize = '18';
      // data.fontWeight = 'normal';
      // data.strokeWidth = '0';
      // data.x = -'50%';
      // data.y = '10%';
      // data.transform = 'rotate(-90, 100, 100)';
      this.axisLabelY = new Text(data);
    }
  }

  drawAxisNumX() {
    if (this.data.axisNumOnX) {
      const data = JSON.parse(JSON.stringify(this.data.axisNumX));
      // data.containerId = 'svgText';
      // data.y = (90 + 4).toString() + '%';
      this.axisNumX = [];
      for (let i = 0; i < 11; i++) {
        data.text = i.toString();
        data.x = (i * 8 + 10).toString() + "%";
        this.axisNumX[i] = new Text(data);
      }
    }
  }

  drawAxisNumY() {
    if (this.data.axisNumOnY) {
      const data = JSON.parse(JSON.stringify(this.data.axisNumY));
      // data.containerId = 'svgText';
      // matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY())
      // data.transform = 'matrix(1, 0, 0, -1, 0, 400)';
      // data.x = '9%';
      this.axisNumY = [];
      for (let i = 0; i < 11; i++) {
        data.text = i.toString();
        data.y = ((10 - i) * 7.8 + 12).toString() + "%";
        this.axisNumY[i] = new Text(data);
      }
    }
  }

  /**
   * Creates id, string, class objects
   * @param {String} value -- options: id, style, class
   * @memberof Grid
   */
  checkIdStyleClass(value) {
    if (this.data.id[value]) data.id = this.data.id[value];
    if (this.data.style[value]) data.style = this.data.style[value];
    if (this.data.class[value]) data.class = this.data.class[value];
  }

  newMinorX(data) {
    this.checkIdStyleClass("minorX");
    let mulXX = this.data.minorNumX * this.data.majorNumX;
    for (let i = 1; i < mulXX; i++) {
      data.x1 = "0";
      data.x2 = "100%";
      data.y1 = ((i * 100) / mulXX).toString() + "%";
      data.y2 = ((i * 100) / mulXX).toString() + "%";
      this.minorX[i] = new Line(data);
    }
  }

  newMinorY(data) {
    this.checkIdStyleClass("minorY");
    let mulYY = this.data.minorNumY * this.data.majorNumY;
    for (let i = 1; i < mulYY; i++) {
      data.y1 = "0";
      data.y2 = "100%";
      data.x1 = ((i * 100) / mulYY).toString() + "%";
      data.x2 = ((i * 100) / mulYY).toString() + "%";
      this.minorY[i] = new Line(data);
    }
  }

  newMajorX(data) {
    this.checkIdStyleClass("majorX");
    for (let i = 0; i < 11 * this.data.majorNumX; i++) {
      data.x1 = "0";
      data.x2 = "100%";
      data.y1 = ((i * 100) / this.data.majorNumX).toString() + "%";
      data.y2 = ((i * 100) / this.data.majorNumX).toString() + "%";
      this.majorX[i] = new Line(data);
    }
  }

  newMajorY(data) {
    this.checkIdStyleClass("majorY");
    for (let i = 0; i < 11 * this.data.majorNumY; i++) {
      data.y1 = "0";
      data.y2 = "100%";
      data.x1 = ((i * 100) / this.data.majorNumY).toString() + "%";
      data.x2 = ((i * 100) / this.data.majorNumY).toString() + "%";
      this.majorY[i] = new Line(data);
    }
  }
}
