// =============================================================================
// File Name  : AreaBezier.js
// Description: JS Class to calculate area under Bezier Curve
// Source: https://stackoverflow.com/questions/10039679/how-can-i-calculate-the-area-of-a-bezier-curve
// -----------------------------------------------------------------------------
// Author     : Amit Manohar Manthanwar
// Mailer     : manthanwar@hotmail.com
// WebURL     : https://manthanwar.github.io
// -----------------------------------------------------------------------------
// Copyright  : (c) 2024 Amit Manohar Manthanwar
// License    : MIT License
// ----------------------------------------------------------------------------
// This program can be redistributed and/or modified under the terms
// of the MIT License. For details see the file license.txt
// =============================================================================
// Revision Log  | Author  | Description
// --------------+---------+----------------------------------------------------
// 06-Nov-2024   | AMM | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

export default class AreaBezier {
 constructor(data) {} //constructor

 /**
  * Approximate the bezier curve points.
  *
  *  @param bezier_points: object, the points that define the
  *                          bezier curve
  *  @param point_number:  int, the number of points to use to
  *                          approximate the bezier curve
  *
  *  @return Array, an array which contains arrays where the
  *    index 0 contains the x and the index 1 contains the
  *     y value as floats
  */
 getBezierApproxPoints(bezier_points, point_number) {
  if (typeof bezier_points == 'undefined' || bezier_points === null) {
   return [];
  }

  var approx_points = [];
  // add the starting point
  approx_points.push([bezier_points['x0'], bezier_points['y0']]);

  // implementation of the bezier curve as B(t), for futher
  // information visit
  // https://wikipedia.org/wiki/B%C3%A9zier_curve#Cubic_B%C3%A9zier_curves
  var bezier = function (t, p0, p1, p2, p3) {
   return (
    Math.pow(1 - t, 3) * p0 +
    3 * Math.pow(1 - t, 2) * t * p1 +
    3 * (1 - t) * Math.pow(t, 2) * p2 +
    Math.pow(t, 3) * p3
   );
  };

  // Go through the number of points, divide the total t (which is
  // between 0 and 1) by the number of points. (Note that this is
  // point_number - 1 and starting at i = 1 because of adding the
  // start and the end points.)
  // Also note that using the t parameter this will make sure that
  // the order of the points is correct.
  for (var i = 1; i < point_number - 1; i++) {
   let t = i / (point_number - 1);
   approx_points.push([
    // calculate the value for x for the current t
    bezier(
     t,
     bezier_points['x0'],
     bezier_points['x1'],
     bezier_points['x2'],
     bezier_points['x3']
    ),
    // calculate the y value
    bezier(
     t,
     bezier_points['y0'],
     bezier_points['y1'],
     bezier_points['y2'],
     bezier_points['y3']
    )
   ]);
  }

  // Add the end point. Note that it is important to do this
  // **after** the other points. Otherwise the polygon will
  // have a weird form and the shoelace formular for calculating
  // the area will get a weird result.
  approx_points.push([bezier_points['x3'], bezier_points['y3']]);

  return approx_points;
 }

 /**
  *  Get the bezier curve values of the given path.
  *
  *  The returned array contains objects where each object
  *  describes one cubic bezier curve. The x0/y0 is the start
  *  point and the x4/y4 is the end point. x1/y1 and x2/y2 are
  *  the control points.
  *
  *  Note that a path can also contain other objects than
  *  bezier curves. Arcs, quadratic bezier curves and lines
  *  are ignored.
  *
  *  @param svg:     SVGElement, the svg
  *  @param path_id: String, the id of the path element in the
  *                    svg
  *
  *  @return array, an array of plain objects where each
  *    object represents one cubic bezier curve with the values
  *    x0 to x4 and y0 to y4 representing the x and y
  *    coordinates of the points
  */
 getBezierPathPoints(svg, path_id) {
  var path = svg.getElementById(path_id);
  if (path === null || !(path instanceof SVGPathElement)) {
   return [];
  }

  var path_segments = this.splitPath(path);
  var points = [];

  var x = 0;
  var y = 0;
  for (let index in path_segments) {
   if (path_segments[index]['type'] == 'C') {
    let bezier = {};
    // start is the end point of the last element
    bezier['x0'] = x;
    bezier['y0'] = y;
    bezier['x1'] = path_segments[index]['x1'];
    bezier['y1'] = path_segments[index]['y1'];
    bezier['x2'] = path_segments[index]['x2'];
    bezier['y2'] = path_segments[index]['y2'];
    bezier['x3'] = path_segments[index]['x'];
    bezier['y3'] = path_segments[index]['y'];
    points.push(bezier);
   }

   x = path_segments[index]['x'];
   y = path_segments[index]['y'];
  }

  return points;
 }

 /**
  *  Split the given path to the segments.
  *
  *  @param path:           SVGPathElement, the path
  *
  *  @return object, the split path `d`
  */
 splitPath(path) {
  let d = path.getAttribute('d');
  d = d.split(/\s*,|\s+/);

  let segments = [];
  let segment_names = {
   M: ['x', 'y'],
   m: ['dx', 'dy'],
   H: ['x'],
   h: ['dx'],
   V: ['y'],
   v: ['dy'],
   L: ['x', 'y'],
   l: ['dx', 'dy'],
   Z: [],
   C: ['x1', 'y1', 'x2', 'y2', 'x', 'y'],
   c: ['dx1', 'dy1', 'dx2', 'dy2', 'dx', 'dy'],
   S: ['x2', 'y2', 'x', 'y'],
   s: ['dx2', 'dy2', 'dx', 'dy'],
   Q: ['x1', 'y1', 'x', 'y'],
   q: ['dx1', 'dy1', 'dx', 'dy'],
   T: ['x', 'y'],
   t: ['dx', 'dy'],
   A: ['rx', 'ry', 'rotation', 'large-arc', 'sweep', 'x', 'y'],
   a: ['rx', 'ry', 'rotation', 'large-arc', 'sweep', 'dx', 'dy']
  };
  let current_segment_type;
  let current_segment_value;
  let current_segment_index;
  for (let i = 0; i < d.length; i++) {
   if (
    typeof current_segment_value == 'number' &&
    current_segment_value < segment_names[current_segment_type].length
   ) {
    let segment_values = segment_names[current_segment_type];
    segments[current_segment_index][segment_values[current_segment_value]] =
     d[i];
    current_segment_value++;
   } else if (typeof segment_names[d[i]] !== 'undefined') {
    current_segment_index = segments.length;
    current_segment_type = d[i];
    current_segment_value = 0;
    segments.push({ type: current_segment_type });
   } else {
    // delete current_segment_type;
    // delete current_segment_value;
    // delete current_segment_index;
   }
  }

  return segments;
 }

 /**
  *  Calculate the area of a polygon. The pts are the
  *  points which define the polygon. This is
  *  implementing the shoelace formular.
  *
  *  @param pts: Array, the points
  *
  *  @return float, the area
  */
 polyArea(pts) {
  var area = 0;
  var n = pts.length;
  for (var i = 0; i < n; i++) {
   area +=
    (pts[i][1] + pts[(i + 1) % n][1]) * (pts[i][0] - pts[(i + 1) % n][0]);
  }
  return Math.abs(area / 2);
 }
} //class
