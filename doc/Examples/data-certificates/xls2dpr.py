#!/usr/bin/env python3
# ==============================================================================
# File Name     : <xls2dpr.py>
# Requires      : <excel2tex> Python Package of Amit Manohar Manthanwar
# Description   : convert excel file into latex detailed project
# ------------------------------------------------------------------------------
# Author        : Amit Manohar Manthanwar
# GitHub        : https://manthanwar.github.io/
# ------------------------------------------------------------------------------
# Copyright     : ©2025 Amit Manohar Manthanwar
# License       : Restricted
# ==============================================================================
# Revision Log | Author  | Description
# -------------+---------+------------------------------------------------------
# 25-Apr-2022  | AMM     | Initial Version
# -------------+---------+------------------------------------------------------
# 27-JUl-2025  | AMM     | Added excel2latex python package
# -------------+---------+------------------------------------------------------
# 30-JUl-2025  | AMM     | Tested excel2latex python package
# -------------+---------+------------------------------------------------------
# 16-Oct-2025  | AMM     | Tested excel2latex python package
# -------------+---------+------------------------------------------------------
# 26-Oct-2025  | AMM     | Added excel to detailed project report functionality
# -------------+---------+------------------------------------------------------
# -------------+---------+------------------------------------------------------
# -------------+---------+------------------------------------------------------
# ------------------------------------------------------------------------------
# Usage: in case 'no hang up' see output in nohup.out
# nohup python your_script.py > output.log 2>&1 &
# nohup ./xls2dpr.py data-certificate.xlsx > output.log 2>&1 &
# nohup ./xls2dpr.py data-certificate.xlsx Certificate &
# ./xls2dpr.py data-certificate.xlsx Certificate
# ------------------------------------------------------------------------------
# Create executable
# pyinstaller --onefile xls2dpr.py
# ==============================================================================


# from excel2tex import CreateTexFromExcel as xls2dpr
from excel2tex import ExcelToTexArticle as xls2dpr
from excel2tex import Utility as util
# import excel2tex
# from datetime import datetime
import time
import sys
import os
from pathlib import Path
import pandas as pd

if __name__ == "__main__":
    # timeStarted = time.time()
    timeStarted = util.tic()

    # current_datetime = datetime.now()
    # print("Current Date and Time:", current_datetime, '\n')
    # print("Current Date and Time:", current_datetime)

    # print('Python Version ', sys.version)
    # print('Pandas Version ', pd.__version__)
    # print('Current Working Directory:',  os.getcwd(), '')
    # print('Creating LaTeX Input Files from Excel Tables...\n')

    if len(sys.argv) > 1:
        # The first argument after the script name is at index 1
        excelFile = sys.argv[1]
        print(f"[Python Output] xls filename: {excelFile}")
        # sys.stdout.flush()
    else:
        print("[Python Error:] Please provide an xls filename argument.")
        # sys.stdout.flush()
        sys.exit(1)  # Exits the script with an error code

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

    # xl = pd.ExcelFile(excelFile)
    # sheets = xl.sheet_names  # see all sheet names
    # # xl.parse(sheet_name)  # read a specific sheet to DataFrame
    # # print(*sheets, sep='\n')
    # # print(len(sheets))

    # print("[Python Output] Current working directory Old:", os.getcwd())
    # sys.stdout.flush()
    os.chdir(Path('./doc/Examples/data-certificates'))
    print("[Python Output] Current working directory New:", os.getcwd())
    # sys.stdout.flush()

    xt = xls2dpr(excelFile)

    # xt.printClassInfo()
    # xt.greet()
    # xt.getSummary()

    # xt.getMeansFinance(isCode=True)
    texFile = xt.getMeansFinance(isCode=False)
    print(f'[File Written]<br> {texFile}')
    sys.exit(0)

    # xt.createReport()
    # sys.exit(0)

    # del xt
    # cmd = 'rm ' + excelFile
    # util.runCmd(cmd)
    timeElapsed = util.toc(timeStarted)
    print(f"[Python Output] Time Elapsed: {timeElapsed}")

    # sys.exit(0)  # Exit with a success status code
