# JS-SVG-Client

**Amit M. Manthanwar** _30 August 2024_

Client Side JavaScript for Creating Scalable Vector Graphics

![Static Badge](https://img.shields.io/badge/version-2024--09--01-blue) &nbsp;
[![NPM Downloads](https://img.shields.io/npm/dm/js-svg-client)](https://www.npmjs.com/package/js-svg-client)
&nbsp;
![GitHub repo size](https://img.shields.io/github/repo-size/manthanwar/JS-SVG-Client?&color=purple)
&nbsp;
![npm bundle size](https://img.shields.io/bundlephobia/min/js-svg-client?color=olive)
&nbsp;
[![GitHub Sponsors](https://img.shields.io/github/sponsors/js-svg-client?color=teal&labelColor=maroon)](SPONSORS.md)

Please consider [donating](SPONSORS.md) to sustain our activities!

## Introduction

This package contains a library of JavaScript codes for data visualization (data
viz) using HTML SVG (Scalable Vector Graphics) elements. Data viz deals with the
graphic representations of information, data, or knowledge intended to
communicate and improve cognition about information derived from variety of data
sources quickly, clearly and effectively via visual or graphical means. This
visualization library is one of the many available on the web to help understand
complex ideas, patterns and trends hidden in the data to derive meaningful
insights for informed data-driven decision making.

This library is written in pure JavaScript, CSS and SVG without any other
dependencies. This use of native browser technologies is the main advantage of
this library which can run on any server or client machine including any mobile
device without internet to render results on a browser locally from a local
filesystem or with internet by deploying it on a web server.

Using this library you can make elegant, lightweight, super-fast, fully
customizable and interactive user interfaces, vector graphics, and artworks for
your data rich websites/commercial/academic/research projects using appropriate
license. This library is intuitive, interactive and easy to use. It supports
many data types and chart types including ability to export output results in
PDF, PNG, JPG, SVG or EPS file formats as well as ability to export input data
to CSV, XLS, or HTML table formats.

Feel free to ask questions, post issues, submit pull request, and request new
features.

For more information about this project and how to use this extension, please
check out our documentation.

## Documentation

### Quick Start

#### index.html

```html
<html>
 <head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Page Title</title>
  <link rel="shortcut icon" href="#" />
  <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
  <script type="module" src="main.js"></script>
 </head>
 <body></body>
</html>
```

#### main.js

```js
import * as mySvg from '../dist/svg.min.js';

var html = new mySvg.Html();
html.newHead(document.body, 'Draw Circle');

let data = {};
data.containerId = 'svgDiv';
data.id = 'svgText';
data.width = '100%';
data.height = '100%';
data.viewbox = '0 0 100% 100% ';
// data.viewbox = '0 0 100 100';
data.style =
 'background-color: rgba(0,200,0,0); border: 2px solid green; padding:10px; box-sizing:border-box;';
var svgText = new mySvg.Svg(data);

var data = {};
data.containerId = 'svgMain';
data.href = 'http://google.com';
data.id = 'link';
var link = new mySvg.Link(data);

data.containerId = 'link';
data.cx = 320;
data.cy = 160;
data.r = 60;
data.fillOpacity = '1';
data.strokeOpacity = '0.8';
var circ1 = new mySvg.Circle(data);
```

To check out the detailed documentation, visit

- [English](doc/js-svg-client.pdf) [coming soon!]
- [README.md](README.md)

Contact me if you are willing to help translate the documentation :)

## Attributes of SVG tags

### Circle

- r Required. The radius of the circle
- cx The x-axis center of the circle. Default is 0
- cy The y-axis center of the circle. Default is 0

### Ellipse

- The rx attribute defines the x (horizontal) radius
- The ry attribute defines the y (vertical) radius
- The cx attribute defines the x-axis center of the ellipse
- The cy attribute defines the y-axis center of the ellipse

### Rectangle

- `width` Required. The width of the rectangle
- `height` Required. The height of the rectangle
- `x` The x-position for the top-left corner of the rectangle
- `y` The y-position for the top-left corner of the rectangle
- `rx` The x radius of the corners of the rectangle (used to round the corners).
  Default is 0
- `ry` The y radius of the corners of the rectangle (used to round the corners).
  Default is 0

### Line

- `x1` The start of the line on the x-axis
- `y1` The start of the line on the y-axis
- `x2` The end of the line on the x-axis
- `y2` The end of the line on the y-axis

### Polyline or Polygon

- `points` The points attribute defines the x and y coordinates for each corner
  of the Polyline.

### Text

- `x` The x position of the start of the text. Default is 0
- `y` The y position of the start of the text. Default is 0
- `dx` The horizontal shift position for text (from previous text position)
- `dy` The vertical shift position for text (from previous text position)
- `rotate` The rotation (in degrees) applied to each letter of text
- `textLength` The width that the text must fit in
- `lengthAdjust` How the text should be compressed or stretched to fit the width
  defined by the textLength attribute
  - values: lengthAdjust = spacing (default) | spacingAndGlyphs
    - `spacing` It will adjust the spacing between glyphs but will not stretch
      or squeeze the glyphs themselves.
    - `spacingAndGlyphs` It will adjust both spacing between glyphs and glyph
      size.

#### Example

```html
<svg height="40" width="250">
 <text x="5" y="30" fill="red" font-size="35">
  I Love
  <tspan fill="none" stroke="green">SVG</tspan>
  !
 </text>
 <text x="5" y="30" fill="red" font-size="25" transform="rotate(30 20,40)">
  I love SVG!
 </text>
</svg>
```

### TextPath

- `href` The URL to the path or basic shape on which to render the text. If the
  path attribute is set, href has no effect.

  - Value type: `<URL>`; Default value: `none`; Animatable: yes

- `lengthAdjust` Where length adjustment should be applied to the text: the
  space between glyphs, or both the space and the glyphs themselves.

  - Value type: `spacing` | `spacingAndGlyphs`; Default value: `spacing`;
    Animatable: yes

- `method` Which method to render individual glyphs along the path.

  - Value type: `align` | `stretch`
  - Default value: `align`; Animatable: yes

- `path` Experimental The path on which the text should be rendered.

  - Value type: `<path_data>`; Default value: `none`; Animatable: yes

- `side` Experimental Which side of the path the text should be rendered.

  - Value type: `left|right` ; Default value: left; Animatable: yes

- `spacing` How space between glyphs should be handled.

  - Value type: `auto|exact` ; Default value: exact; Animatable: yes

- `startOffset` How far the beginning of the text should be offset from the
  beginning of the path. Value type: `<length>` | `<percentage>` | `<number>` ;
  Default value: 0; Animatable: yes

- `textLength` The width of the space into which the text will render.
  - Value type: `<length>` | `<percentage>` | `<number>` ; Default value: auto;
    Animatable: yes

#### Set TextPath Href by first removing path

```js
text1.objTextPath.removeAttribute('path');
text1.setTextHref('#id');
```

### Link

- `href` hyperlink
- `target` Options: `_self` (default) | `_blank`

### Marker

- `id` The unique id for the marker
- `markerUnits` This attribute defines the coordinate system for the attributes
- `markerHeight` The height of the marker. Default is 3
- `markerWidth` The width of the marker. Default is 3
- `refX` The x position where the marker connects with the vertex. Default is 0
- `refY` The y position where the marker connects with the vertex. Default is 0
- `orient` The orientation of the marker relative to the shape it is attached
  to. Can be "auto", "auto-start-reverse" or an angle. Default is 0
- `preserveAspectRatio` This attribute defines how the svg fragment must be
  deformed if it is embedded in a container with a different aspect ratio.
- `viewBox` This attribute defines the bound of the SVG viewport for the current
  SVG fragment. Value type:

### Stroke

- `stroke` - sets the color of the line around an element
- `stroke-width` - sets the width of the line around an element
- `stroke-opacity` - sets the opacity of the line around an element
- `stroke-linecap` - sets the shape of the end-lines for a line or open path
  - The value of the `stroke-linecap` attribute can be `"butt"`, `"round"` or
    `"square"`.
- `stroke-dasharray` - sets the line to show as a dashed line
- `stroke-linejoin` - sets the shape of the corners where two lines meet
  - The value of the `stroke-linejoin` attribute can be `"arcs"`, `"bevel"`,
    `"miter"`, `"miter-clip"` or `"round"`.

### Transforms

- `matrix(n,n,n,n,n,n)` Defines a 2D transformation, using a matrix of six
  values
  `matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY())`
- `translate(x,y)` Defines a 2D translation, moving the element along the X- and
  the Y-axis
- `translateX(n)` Defines a 2D translation, moving the element along the X-axis
- `translateY(n)` Defines a 2D translation, moving the element along the Y-axis
- `scale(x,y)` Defines a 2D scale transformation, changing the elements width
  and height
- `scaleX(n)` Defines a 2D scale transformation, changing the element's width
- `scaleY(n)` Defines a 2D scale transformation, changing the element's height
- `rotate(angle)` Defines a 2D rotation, the angle is specified in the parameter
- `skew(x-angle,y-angle)` Defines a 2D skew transformation along the X- and the
  Y-axis
- `skewX(angle)` Defines a 2D skew transformation along the X-axis
- `skewY(angle)` Defines a 2D skew transformation along the Y-axis

### Filter

- `<feBlend>`
- `<feColorMatrix>`
- `<feComponentTransfer>`
- `<feComposite>`
- `<feConvolveMatrix>`
- `<feDiffuseLighting>`
- `<feDisplacementMap>`
- `<feDropShadow>`
- `<feGaussianBlur>`
- `<feMergeNode>`
- `<feMorphology>`
- `<feOffset>`
- `<feSpecularLighting>`
- `<feTile>`

## License

Please check the [Software Licenses](LICENSE.md) for details.

## Repository

This is a repository of SVG files located at

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
