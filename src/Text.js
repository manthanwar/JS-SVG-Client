// =============================================================================
// File Name     : Text.js
// Description   : SVG Text Class
// -----------------------------------------------------------------------------
// Author        : Amit Manohar Manthanwar
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
// 23-Aug-2024   | AMM     | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

// region comment
/*
x 	The x position of the start of the text. Default is 0
y 	The y position of the start of the text. Default is 0

dx 	The horizontal shift position for text (from previous text position)
dy 	The vertical shift position for text (from previous text position)

rotate 	The rotation (in degrees) applied to each letter of text
textLength 	The width that the text must fit in

lengthAdjust 	How the text should be compressed or stretched to fit the width defined by the textLength attribute
values: lengthAdjust = spacing | spacingAndGlyphs

    spacing: It will adjust the spacing between glyphs but will not stretch or squeeze the glyphs themselves.
    spacingAndGlyphs: It will adjust both spacing between glyphs and glyph size.

// Example

<svg height="40" width="250">
  <text x="5" y="30" fill="red" font-size="35">I Love
    <tspan fill="none" stroke="green">SVG</tspan>!
  </text>
  <text x="5" y="30" fill="red" font-size="25" transform="rotate(30 20,40)">I love SVG!</text>
</svg>

*/
// endregion comment

import SvgParent from './SvgParent.js';

export default class Text extends SvgParent {
 constructor(data) {
  super(data);
  this.setData(data);
  this.obj = this.newText();
 }

 initKeyVal() {
  const kv = {};
  kv.containerId = 'body';
  kv.text = 'Sample Text';
  kv.x = '0';
  kv.y = '0';
  kv.dx = '0';
  kv.dy = '0';
  kv.fontFamily = 'inherit';
  kv.fontSize = '20';
  kv.fontWeight = 'normal';
  kv.stroke = 'black';
  kv.strokeWidth = 0;
  kv.strokeOpacity = 1;
  kv.fill = 'black';
  kv.fillOpacity = '1';
  kv.strokeLinecap = ''; // butt (default) | round | square
  kv.strokeDasharray = ''; // '20, 10, 5, 10'
  kv.strokeLinejoin = ''; // arcs| bevel|miter (default)|miter-clip|round
  kv.paintOrder = ''; // normal (default) | [ fill || stroke }| markers]
  kv.textAnchor = 'middle'; // start (default) | middle | end
  kv.alignmentBaseline = ''; // auto (default)| baseline | before-edge | text-before-edge | middle | central | after-edge | text-after-edge | ideographic | alphabetic | hanging | mathematical | top | center | bottom | inherit
  kv.textLength = '';
  kv.lengthAdjust = ''; //  spacing (default) | spacingAndGlyphs
  kv.rotate = '';
  kv.transform = '';
  kv.id = 'text';
  kv.clipPath = '';
  kv.mask = '';
  kv.style = '';
  kv.class = '';
  this.keys = Object.keys(kv);
  return kv;
 }

 newText() {
  const obj = document.createElementNS(this.data.ns, 'text');
  this.setAttr(obj);
  obj.textContent = this.data.text;
  this.data.container.appendChild(obj);
  return obj;
 }
}
