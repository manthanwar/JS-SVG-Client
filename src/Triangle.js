// =============================================================================
// File Name     : Triangle.js
// Description   : JavaScript Class Triangle Geometry
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
// 23-Aug-2024   | AMM     | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================

/**
 * @file Triangle.js
 * @since 2024-08-29
 * @description Triangle Formulae
 * @author Amit M. Manthanwar &lt;manthanwar@hotmail.com&gt;
 * @copyright (c) 2024 Amit M. Manthanwar
 *
 * @param {Number} x1 - x coordinate of point A
 * @param {Number} y1 - x coordinate of point A
 * @param {Number} x2 - x coordinate of point B
 * @param {Number} y2 - x coordinate of point B
 * @param {Number} x3 - x coordinate of point C
 * @param {Number} y3 - x coordinate of point C
 *
 * @param {Number} a - distance opposite A
 * @param {Number} b - distance opposite B
 * @param {Number} c - distance opposite C
 *
 * @param {Number} P - perimeter
 * @param {Number} s - semiperimeter
 * @param {Number} area - area of triangle
 *
 * @param {Number} angAd - angle A in degrees
 * @param {Number} angBd - angle B in degrees
 * @param {Number} angCd - angle C in degrees
 * @param {Number} angAr - angle A in radians
 * @param {Number} angBr - angle B in radians
 * @param {Number} angCr - angle C in radians
 *
 * @param {Number} cx - x coordinate of center of inner circle
 * @param {Number} cy - x coordinate of center of inner circle
 * @param {Number} r - radius of inner circle
 * @param {Number} Cx - x coordinate of center of outer circle
 * @param {Number} Cy - x coordinate of center of outer circle
 * @param {Number} R - radius of center of outer circle
 *
 * @exports
 * @class Triangle
 * @requires
 */
export default class Triangle {
 constructor(x1, y1, x2, y2, x3, y3) {
  this.name = 'Triangle';
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
  this.x3 = x3;
  this.y3 = y3;

  this.a = this.distance(x2, y2, x3, y3);
  this.b = this.distance(x1, y1, x3, y3);
  this.c = this.distance(x2, y2, x1, y1);

  // Perimeter
  this.P = this.a + this.b + this.c;

  // Semiperimeter
  this.s = this.P / 2;

  this.area = Math.sqrt(
   this.s * (this.s - this.a) * (this.s - this.b) * (this.s - this.c)
  );

  this.angAd = this.angle(this.a, this.b, this.c);
  this.angBd = this.angle(this.b, this.a, this.c);
  this.angCd = this.angle(this.c, this.a, this.b);
  this.angAr = this.angleRadian(this.a, this.b, this.c);
  this.angBr = this.angleRadian(this.b, this.a, this.c);
  this.angCr = this.angleRadian(this.c, this.a, this.b);

  // Incircle
  this.inCx = this.inCenter(this.a, this.b, this.c, this.x1, this.x2, this.x3);
  this.inCy = this.inCenter(this.a, this.b, this.c, this.y1, this.y2, this.y3);
  this.inR = this.area / this.s;

  // Circumcircle
  this.outCx = this.outCenter(
   this.angAr,
   this.angBr,
   this.angCr,
   this.x1,
   this.x2,
   this.x3
  );
  this.outCy = this.outCenter(
   this.angAr,
   this.angBr,
   this.angCr,
   this.y1,
   this.y2,
   this.y3
  );
  this.outR = (this.a * this.b * this.c) / (4 * this.area);
 }
}

Triangle.prototype.distance = (x1, y1, x2, y2) => {
 let delX = x2 - x1;
 let delY = y2 - y1;
 let sum = delX * delX + delY * delY;
 return Math.sqrt(sum);
};

Triangle.prototype.angle = (a, b, c) => {
 let cos = (b * b + c * c - a * a) / (2 * b * c);
 return (Math.acos(cos) * 180) / Math.PI;
};

Triangle.prototype.angleRadian = (a, b, c) => {
 let cos = (b * b + c * c - a * a) / (2 * b * c);
 return Math.acos(cos);
};

/**
 * @description Calculate inner circle center
 *
 * @param {Number} a - distance opposite A
 * @param {Number} b - distance opposite B
 * @param {Number} c - distance opposite C
 * @returns {Number}
 * @memberof Triangle
 * @example
 *
 */
Triangle.prototype.inCenter = (a, b, c, x1, x2, x3) => {
 return (a * x1 + b * x2 + c * x3) / (a + b + c);
};

/**
 * @description Calculates circumcenter center
 *
 * @param {NUmber} A - angle A in radians
 * @param {NUmber} B - angle C in radians
 * @param {NUmber} C - angle C in radians
 * @returns {Number}
 * @memberof Triangle
 * @example
 *
 */
Triangle.prototype.outCenter = (A, B, C, x1, x2, x3) => {
 let num = x1 * Math.sin(2 * A) + x2 * Math.sin(2 * B) + x3 * Math.sin(2 * C);
 let den = Math.sin(2 * A) + Math.sin(2 * B) + Math.sin(2 * C);
 return num / den;
};
