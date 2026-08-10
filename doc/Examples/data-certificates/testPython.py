#! /usr/bin/env python3
# ==============================================================================
# File Name     : testPython.py
# Date Created  : 2026-08-09 01:40 UTC +05:30
# description   :
# ------------------------------------------------------------------------------
# Author        : Amit Manohar Manthanwar
# WebURL        : https:#manthanwar.github.io
# ------------------------------------------------------------------------------
# Copyright     : (c) 2026 Amit Manohar Manthanwar
# License       : LICENSE.md
# ==============================================================================
# Revision Log  | Author  | Description
# --------------+---------+-----------------------------------------------------
# 09-Aug-2026   | AMM     | Initial Version
# --------------+---------+-----------------------------------------------------
# ==============================================================================

# import time
# import os
import sys
import subprocess
# import pandas as pd
# from typing import Any
# import gc # built in
from excel2tex import Utility as util

def runCmd(cmd: str) -> str:
    try:
        result = subprocess.run(cmd, shell=True, check=True,
                                capture_output=True, text=True)
        # print(result.stdout.strip())
        return result.stdout.strip()
    except subprocess.CalledProcessError as e:
        # print(f"Command failed with error: {e}")
        return f"Command failed with error: {e}"


# print('Hello Python!')

# cmd = 'latex --version'

if len(sys.argv) > 1:
    # The first argument after the script name is at index 1
    texFile = sys.argv[1]

print('\n----------------Python\n')
print(texFile)
print('\n----------------\n')

# cmd = 'ls'
# result = runCmd(cmd)
# print(result)
print('\n----------------')


# cmd = f'cat {texFile}.tex'
# result = util.runCmd(cmd)


