#! /usr/bin/env python3
# ==============================================================================
# File Name     : testUtility.py
# Date Created  : 2026-08-09 00:40 UTC +05:30
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

from excel2tex import Utility as util
import sys
# import os
# import time
from datetime import datetime
# import pandas as pd

if __name__ == "__main__":
    # timeStarted = time.time()
    timeStarted = util.tic()

    current_datetime = datetime.now()
    # print("Current Date and Time:", current_datetime, '\n')
    # print("Current Date and Time:", current_datetime)

    # util.printClassInfo()
    # util.greet(util)
    # print('Python Version ', sys.version)
    # print('Pandas Version ', pd.__version__)
    # print('Current Working Directory:',  os.getcwd(), '')
    # print('Creating LaTeX Input Files from Excel Tables...\n')

    if len(sys.argv) > 1:
        # The first argument after the script name is at index 1
        texFile = sys.argv[1]
    else:
        print("Please provide an argument when running the script.")

    # if len(sys.argv) >= 3:
    #     dataType = sys.argv[2]
    # else:
    #     dataType = 'head'

    # if len(sys.argv) >= 4:
    #     dataRows = sys.argv[3]
    # else:
    #     dataRows = 3

    # if len(sys.argv) >= 5:
    #     dataList = sys.argv[4]
    # else:
    #     dataList = '0,1,2'


    # del xt
    # cmd = 'rm ' + excelFile

    # cmd = f'ls -sh {texFile}.tex'
    # # cmd = f"latex  -quiet {texFile}.tex"
    # result = util.runCmd(cmd)
    # print(f'\nstdout = {result}')

    cmd = f'cat {texFile}.tex'
    result = util.runCmd(cmd)

    print('----------------')
    print(f'\nstdout = {result}')
    print('----------------')



    # print(texFile)
    # util.makePdf(texFile)

    timeElapsed = util.toc(timeStarted)
    print(f'time elapsed = {timeElapsed:.4f} seconds')
    print('----------------')

