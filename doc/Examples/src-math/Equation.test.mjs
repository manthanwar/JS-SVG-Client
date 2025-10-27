// =============================================================================
// File Name     : Equation.Test.js
// Description   : Test JS Class to solve mathematical equations
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
// 23-Nov-2024   | AMM     | Initial Version
// --------------+---------+----------------------------------------------------
// https://www.mathportal.org/calculators/analytic-geometry/circle-line-intersection-calculator.php
// =============================================================================

import Equation from './Equation.js';
const eq = new Equation();

describe('Equation.solveQuadratic', () => {
 test('root of x^2 - 5x + 6', () => {
  expect(eq.solveQuadratic(1, -5, 6)).toEqual([3, 2]);
 });
});

describe('Equation.solveCircleLine', () => {
 // Example 1
 // Circle : (x-0)2 + (y-0)2 = 16
 // Line: y = 3
 // Here, h = 0, k = 0, r = 4, m = 0, c = 3.

 test('h = 0, k = 0, r = 4, m = 0, c = 3', () => {
  expect(eq.solveCircleLine(0, 0, 4, 0, 3)).toEqual([
   [2.6457513110645907, 3.0],
   [-2.6457513110645907, 3.0]
  ]);
 });

 /**
  * Circle : (x-0)2 + (y-0)2 = 144
  * Line: y = 5
  * Here, h = 0, k = 0, r = 12, m = 0, c = 5
  */
 test('h = 0, k = 0, r = 12, m = 0, c = 3', () => {
  console.log(eq.solveCircleLine(0, 0, 7, 0, 5));
  expect(eq.solveCircleLine(0, 0, 7, 0, 5)).toEqual([
   [4.898979485566356, 5.0],
   [-4.898979485566356, 5.0]
  ]);
 });
});
