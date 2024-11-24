// =============================================================================
// File Name     : Equation.js
// Description   : JS Class to solve mathematical equations
// -----------------------------------------------------------------------------
// Author        : Amit Manohar Manthanwar
// Mailer        : manthanwar@hotmail.com
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
// =============================================================================

export default class Equation {
 constructor() {} //end constructor

 solveQuadratic(A, B, C) {
  const discriminant = B ** 2 - 4 * A * C;
  if (discriminant < 0) return [];
  else if (discriminant == 0) return [-B / (2 * A)];
  else {
   const sqrt_discriminant = Math.sqrt(discriminant);
   const x1 = (-B + sqrt_discriminant) / (2 * A);
   const x2 = (-B - sqrt_discriminant) / (2 * A);
   return [x1, x2];
  } //else
 } //solveQuadratic

 solveCircleLine(h, k, r, m, c) {
  const A = 1 + m ** 2;
  const B = 2 * (m * (c - k) - h);
  const C = h ** 2 + (c - k) ** 2 - r ** 2;
  const roots = this.solveQuadratic(A, B, C);
  if (roots.length === 0) return [];
  else if (roots.length === 1) {
   const x = roots[0];
   const y = m * x + c;
   return [x, y];
  } else {
   const [x1, x2] = roots;
   const [y1, y2] = [m * x1 + c, m * x2 + c];
   return [x1, y1, x2, y2];
  }
 } //solveCircleLine

 solveLine2Pt(x1, y1, x2, y2) {
  const m = (y2 - y1) / (x2 - x1); // slope
  const c = m * x1 + y1; // y intercept
  return [m, c];
 } //solveLine2Pt

 solveCircleLine2Pt(h, k, r, x1, y1, x2, y2) {
  const [m, c] = this.solveLine2Pt(x1, y1, x2, y2);
  return this.solveCircleLine(h, k, r, m, c);
 } //solveCircleLine2Pt
} //end class

// export const sum = (a, b) => a + b;
