# Table of Contents

1. [Installation](#installation)
1. [Library Modules](#library-modules)
1. [SVG Basics](#svg-basics)
1. [Common SVG Shapes](#common-svg-shapes)
1. [Attributes of SVG Tags](#attributes-of-svg-tags)

## Installation

### Installation using NPM

```bash
npm install js-svg-client --save-dev
```

This will download the package in the folder `node_modules/js-svg-client`.
Inside this folder you can run the following commands to build the library

```bash
npm install
npm run build
```

This will create a minified version of library `./dist/svg.min.js` for the web
using [webpack](https://webpack.js.org/) using webpack config file
`webpack.config.web.js`. Alternatively you cans simply use the prebuilt library
from the `dist` folder.

### Installation using Git

Clone the entire repository from github using the bash command

```bash
git clone https://github.com/manthanwar/JS-SVG-Client.git
```

Next, run install and build commands to create a minified library for the web
using webpack config as discussed [above](#installation-using-npm)

## Library Modules

This library and source code contains all the basic SVG elements as JavaScript
Modules. At present there are following 37 modules.

- Animate
- AnimateMotion
- AnimateSet
- AnimateTransform
- Circle
- ClipPath
- Defs
- Div
- Ellipse
- FeBlend
- FeDropShadow
- FeGaussianBlur
- FeOffset
- Filter
- GradientStop
- Grid
- Group
- Html
- Image
- index
- Line
- LinearGradient
- Link
- Marker
- Mask
- Path
- Pattern
- Polygon
- Polyline
- RadialGradient
- Rectangle
- Svg
- SvgParent
- Text
- TextPath
- Triangle
- Use

## SVG Basics

A typical SVG tag to draw a circle in the plain HTML is created as follows. It is a good practice to encapsulate `<svg>` element inside a `<div>` tag.

### [basicSvg.html](Examples/basicSvg.html)

```html
<!DOCTYPE html>
<html>
<head>
<link rel="shortcut icon" href="#" />
</head>
<body>
<div>
<svg width="200" height="200" style="border: 2px solid red">
<circle cx="100" cy="100" r="50" fill="yellow" stroke="blue" stroke-width="4"/>
</svg>
</div>
</body>
</html>
```

In order to create the same using JavaScript we supply the attributes as the data object or can create the SVG object and assign the attributes afterwards. Let us understand how we can achieve this in the following code. First create a plain bare bone HTML and then link the JavaScript file that draws the svg. You can also optionally link the css.

### [plain index.html](Examples/index.html)

```html
<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Page Title</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
  <script src="main.js"></script>
 </head>
 <body></body>
</html>
```

### [basic-circle.js](Example/basic-circle.js)

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

// circle.attr('fill', 'lime');
// circle.stroke = 'green';

// console.log(circle.fill);
// console.log(circle.obj)
}
```

This `basic-circle.js` file calls three functions after window is fully loaded. First function draws the `<dic>` element inside the `document.body` by providing containerId as the 'body' string. We assign this element its id as 'svgDiv'. Next `<svg>` element is added with appropriate attributes in the data object. Finally, circle is drawn inside the `<svg>` by providing containerId of the SVG.

After drawing the circle, you can have two different options to change its attributes either by calling a method `.attr(key, value)` or using a setter `.key = value`. Similarly, a getter function can called to get the currently set value of the attribute. These are the commented lines in the code above. Give it a try.

## Common SVG Shapes

## Attributes of SVG Tags

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
