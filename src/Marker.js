// =============================================================================
// File Name     : Ellipse.js
// Description   : SVG Ellipse Class
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
// 31-Aug-2024   | AMM     | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

/*
d = The unique id for the marker
markerUnits = This attribute defines the coordinate system for the attributes markerWidth, markerHeight and the contents of the <marker>.
markerHeight = The height of the marker. Default is 3
markerWidth = The width of the marker. Default is 3
refX = The x position where the marker connects with the vertex. Default is 0
refY = The y position where the marker connects with the vertex. Default is 0
orient = The orientation of the marker relative to the shape it is attached to. Can be "auto", "auto-start-reverse" or an angle. Default is 0
preserveAspectRatio = This attribute defines how the svg fragment must be deformed if it is embedded in a container with a different aspect ratio.
viewBox = This attribute defines the bound of the SVG viewport for the current SVG fragment. Value type:
*/

import SvgParent from './SvgParent.js';

export default class Marker extends SvgParent {
 constructor(data) {
  super(data);
  this.setData(data);
  this.obj = this.newMarker();
 }

 initKeyVal() {
  const kv = {};
  kv.containerId = 'svgMain';
  kv.markerUnits = ''; // userSpaceOnUse | strokeWidth (default)
  kv.markerWidth = ''; // 3 (default)
  kv.markerHeight = ''; // 3 (default)
  kv.orient = ''; // auto | auto-start-reverse | 0 (default) | 40 deg
  kv.preserveAspectRatio = ''; // ( none | xMinYMin | xMidYMin | xMaxYMin | xMinYMid | xMidYMid | xMaxYMid | xMinYMax | xMidYMax | xMaxYMax) (meet | slice)
  kv.refX = ''; // left | center | right | 0 (default);
  kv.refY = ''; // top | center | bottom | 0 (default)
  kv.viewBox = ''; // list of numbers | none (default)
  kv.stroke = 'black'; // context-stroke
  kv.strokeWidth = '4';
  kv.strokeOpacity = '1';
  kv.strokeLinecap = ''; // butt (default) | round | square
  kv.strokeDasharray = ''; // '20. 10, 5, 10'
  kv.strokeLinejoin = 'arcs'; // arcs| bevel|miter (default)|miter-clip|round
  kv.fill = ''; // context-fill
  kv.fillOpacity = '';
  kv.transform = '';
  kv.id = 'marker';
  kv.style = '';
  kv.class = '';
  this.keys = Object.keys(kv);
  return kv;
 }

 newMarker() {
  const obj = document.createElementNS(this.data.ns, 'marker');
  this.setAttr(obj);
  this.data.container.appendChild(obj);
  return obj;
 }
}
