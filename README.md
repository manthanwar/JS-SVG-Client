# JS-SVG-Client

**Amit M. Manthanwar** _30 August 2024_

Client Side JavaScript for Creating Scalable Vector Graphics

![Static Badge](https://img.shields.io/badge/version-2024--09--01-blue) &nbsp;
[![NPM Downloads](https://img.shields.io/npm/dm/js-svg-client)](https://www.npmjs.com/package/js-svg-client)
&nbsp;
![GitHub repo size](https://img.shields.io/github/repo-size/manthanwar/JS-SVG-Client?&color=purple)
&nbsp;
[![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/manthanwar)
&nbsp;
[![Patreon](https://img.shields.io/badge/Patreon-F96854?style=for-the-badge&logo=patreon&logoColor=white)](https://patreon.com/manthanwar)

## Introduction

This package contains a library of JavaScript codes for data visualization (data
viz) using Scalable Vector Graphics (SVG) elements. Data viz deals with the
graphic representations of information, data, or knowledge intended to
communicate and improve cognition about information derived from variety of data
sources quickly, clearly and effectively via visual or graphical means. This
visualization library is one of the many available on the web to help understand
complex ideas, patterns and trends hidden in the data to derive meaningful
insights for informed data-driven decision making.

This library is written in pure JavaScript and SVG without any other
dependencies. This use of native browser technologies is the main advantage of
this library which can run on any server or client machine including any mobile
device without internet to render results on a browser locally from a local
filesystem or with internet by deploying it on a web server.

Using this library you can make elegant, lightweight, super-fast, fully
customizable and interactive user interfaces, vector graphics, and artworks for
your data rich websites/commercial/academic/research projects using appropriate
[license](LICENSE.md). This library is intuitive, interactive and easy to use. It supports
many data types and chart types including ability to export output results in
PDF, PNG, JPG, SVG or EPS file formats as well as ability to export input data
to CSV, XLS, or HTML table formats.

Feel free to [ask questions](https://github.com/manthanwar/JS-SVG-Client/discussions), [post issues](https://github.com/manthanwar/JS-SVG-Client/issues), [submit pull request](https://github.com/manthanwar/JS-SVG-Client/pulls), and [request new features](https://github.com/manthanwar/JS-SVG-Client/discussions/categories/ideas).

For more information about this project and how to use this package, please
check out our detailed [documentation](doc/DOCUMENTATION.md).

## Quick Start

### Example 1: Draw A Basic Circle `amit`

In this example, we add q div tag inside the document body. Next, we add a svg tag inside the div. Finally, we draw the circle inside the svg. See the following HTML and JavaScript codes on how to achieve this.

#### [index.html](./doc/Examples/index.html)

```html
<html>
 <head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Page Title</title>
  <link rel="shortcut icon" href="#" />
  <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
  <script type="module" src="basic-circle.js"></script>
 </head>
 <body></body>
</html>
```

### [basic-circle.js](./doc/Examples/basic-circle.js)

```javascript
import * as mySvg from './svg.min.js';

window.onload = (event) => {
 createDiv();
 createSvg();
 createCircle();
};

function createDiv() {
 var data = {
  containerId: 'body',
  id: 'svgDiv'
 };
 var svgDiv = new mySvg.Div(data);
}

function createSvg() {
 var data = {
  containerId: 'svgDiv',
  id: 'svgMain',
  width: 200,
  height: 200,
  style: 'border: 2px solid red'
 };
 var svgMain = new mySvg.Svg(data);
}

function createCircle() {
 var data = {
  containerId: 'svgMain',
  id: 'circle',
  cx: 100,
  cy: 100,
  r: 50,
  stroke: 'blue',
  strokeWidth: 10,
  fill: 'pink'
 };
 var circle = new mySvg.Circle(data);
}
```

### Example 2: Draw the Incircle and the Circumcircle of a Triangle

Here the objective is to draw the inner and outer circles of a triangle given the three vertices of a triangle. In this example, we first add `<div>` tag inside the html document body. In the div we add the main `<svg>`. In the main svg, we add the 10 x 10 grid to easily visualize the drawing process. Finally, we draw the triangle and corresponding inner and outer circles. The three coordinates of the vertices of triangle are specified using the grid values as percentage of the width of the svg element. See the following HTML and JavaScript files to understand the coding process how we can achieve this. The JavaScript file also contains various other example functions.

- [index.html](./test/index.html)
- [main.js](./text/main.js)

## Documentation

To check out the detailed documentation, visit

- [English](doc/DOCUMENTATION.md)
- [README.md](README.md)

Contact us if you are willing to help translate the documentation :)

## License

Please check the [Software Licenses](LICENSE.md) for details.

## Repository

This GitHub repository of package is located at

<https://github.com/manthanwar/JS-SVG-Client.git>

## Changelog

Please check the [Releases](RELEASES.md) page of this project.

## Code Languages

All codes are implemented in JS, CSS, HTML

## Contribution Guidelines

Read our [Contribution Guidelines](CONTRIBUTING.md) before you contribute.

## Supporting this project

This project is released under the [Source License](LICENSE.md). Its ongoing
development is made possible thanks to the support by these awesome
[sponsors](SPONSORS.md#sponsors). You can help make this project better by
[reporting issues](https://github.com/manthanwar/JS-SVG-Client/issues) and
supporting us at [Patreon](https://patreon.com/manthanwar) or
[Bye Me a Coffee](https://buymeacoffee.com/manthanwar). Thank you!

## Sponsors

These [GitHub Sponsors](SPONSORS.md) help push this project forward 🎉.

Please consider [donating](SPONSORS.md) to sustain our activities!
