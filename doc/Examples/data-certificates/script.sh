#!/bin/bash
# ==============================================================================
# File Name     : script.sh
# Date Created  : 2026-08-08 22:36 UTC +05:30
# description   : Script to build latex
# ------------------------------------------------------------------------------
# Author        : Amit Manohar Manthanwar
# Mailer        : manthanwar@hotmail.com
# WebURL        : https:#manthanwar.github.io
# ------------------------------------------------------------------------------
# Copyright     : (c) 2026 Amit Manohar Manthanwar
# License       : LICENSE.md
# ==============================================================================
# Revision Log  | Author  | Description
# --------------+---------+-----------------------------------------------------
# 08-Aug-2026   | AMM     | Initial Version
# --------------+---------+-----------------------------------------------------
# ==============================================================================


echo "Hello World"

# latex -quiet $1 && dvips -q $1.dvi -o $1.ps && ps2pdf -dNOSAFER -dALLOWPSTRANSPARENCY $1.ps $1.pdf

# latex --version > zzz.tex

echo "$0"
echo "$1"
# latex --version

make nodelatex file=$1

