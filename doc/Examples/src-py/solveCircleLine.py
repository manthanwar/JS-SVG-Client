#! /c/Users/amit/AppData/Local/Programs/Python/Python312/python
#! /usr/bin/env python3
# ==============================================================================
# File Name     : <solveCircleLine.py>
# Description   : python script for circle and line intersection
# ------------------------------------------------------------------------------
# Author        : Amit Manohar Manthanwar
# GitHub        : https://manthanwar.github.io/
# ------------------------------------------------------------------------------
# Copyright     : ©2024 Amit Manohar Manthanwar
# License       : LaTeX Project Public License
# ==============================================================================
# GNU make also has -s, --silent, --quiet options to quieten globally
# ==============================================================================
# -------------+---------+------------------------------------------------------
# Revision Log | Author  | Description
# -------------+---------+------------------------------------------------------
#  23-Nov-2024 | AMM     | Initial Version
# -------------+---------+------------------------------------------------------
# -------------+---------+------------------------------------------------------
# -------------+---------+------------------------------------------------------
# ------------------------------------------------------------------------------
# ref: https://www.geeksforgeeks.org/most-efficient-way-to-find-the-intersection-of-a-line-and-a-circle-in-python/
# https://www.mathportal.org/calculators/analytic-geometry/circle-line-intersection-calculator.php
# ==============================================================================

import math


def find_intersections(h, k, r, m, c):
    A = 1 + m**2
    B = 2 * (m * (c - k) - h)
    C = h**2 + (c - k)**2 - r**2

    discriminant = B**2 - 4 * A * C

    if discriminant < 0:
        return []
    elif discriminant == 0:
        x = -B / (2 * A)
        y = m * x + c
        return [(x, y)]
    else:
        sqrt_discriminant = math.sqrt(discriminant)
        x1 = (-B + sqrt_discriminant) / (2 * A)
        x2 = (-B - sqrt_discriminant) / (2 * A)
        y1 = m * x1 + c
        y2 = m * x2 + c
        return [(x1, y1), (x2, y2)]


# Example usage
h, k, r = 0, 0, 4  # Circle with center (0,0) and radius 4
m, c = 0, 3        # Line y = x
# Output = [(2.6457513110645907, 3.0), (-2.6457513110645907, 3.0)]

# Example 2:
# Circle: (x-0)2 + (y-0)2 = 144
# Line: y = 5
# Here, h = 0, k = 0, r = 7, m = 0, c = 5
h, k, r, m, c = 0, 0, 7, 0, 5

# Example 3
h, k, r, m, c = 2, 2, 1.4, 1.3333, 0.5333

# Example 4
# https://www.bbc.co.uk/bitesize/guides/z9pssbk/revision/5
# ans = [(-3.0, -2.0), (-17.0, -16.0)]
h, k, r, m, c = -9, -10, 10, 1, 1

# Example 5
# https://www.bbc.co.uk/bitesize/guides/z9pssbk/revision/5
# ans = [(-3.0, -2.0), (-17.0, -16.0)]
h, k, r, m, c = -9, -10, 10, 1, 0


h, k, r, m, c = 2, 2, 1.4, 1.3333, 0.5333
intersections = find_intersections(h, k, r, m, c)
print(intersections)
