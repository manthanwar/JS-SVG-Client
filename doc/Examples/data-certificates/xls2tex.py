#! /c/Users/amit/AppData/Local/Programs/Python/Python312/python
#! /usr/bin/env python3
# ==============================================================================
# File Name     : <xls2tex.py>
# Requires      : <excel2tex> Python Package of Amit Manohar Manthanwar
# Description   : convert excel file into latex tables for the EU RIA proposal
# ------------------------------------------------------------------------------
# Author        : Amit Manohar Manthanwar
# Mailer        : manthanwar@hotmail.com
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
# -------------+---------+------------------------------------------------------
# -------------+---------+------------------------------------------------------
# ------------------------------------------------------------------------------
# Usage: in case 'no hang up' see output in nohup.out
# nohup ./xls2tex.py data-certificate.xlsx Certificate &
# ./xls2tex.py data-certificate.xlsx Certificate
# ==============================================================================


# from excel2tex import CreateTexFromExcel as xls2tex
from excel2tex import ExcelToTexCertificate as xls2tex
from excel2tex import Utility as util
# import excel2tex
import sys
import os
import time
import pandas as pd

# timeStarted = time.time()
timeStarted = util.tic()


# print('Python Version ', sys.version)
# print('Pandas Version ', pd.__version__)
print('Current Working Directory:',  os.getcwd(), '')
print('Creating LaTeX Input Files from Excel Tables...\n')

if len(sys.argv) > 1:
    # The first argument after the script name is at index 1
    excelFile = sys.argv[1]
    # print(f"The variable from command line is: {excelFile}")
else:
    print("Please provide an argument when running the script.")

# if len(sys.argv) >= 3:
#     # print("The second argument (sys.argv[2]) was supplied.")
#     outFolder = sys.argv[2]
#     # print(f"Directory value is: {outFolder}\n")
# else:
#     print("The second argument (sys.argv[2]) was not supplied.\n")



# xl = pd.ExcelFile(excelFile)
# sheets = xl.sheet_names  # see all sheet names
# # xl.parse(sheet_name)  # read a specific sheet to DataFrame
# # print(*sheets, sep='\n')
# # print(len(sheets))


xt = xls2tex(excelFile)


# xt.printClassInfo()
# xt.greet()
xt.createPdf(sheet='data', isCode=False)
# xt.createPdf(sheet='data2', isCode=True)

util.toc(timeStarted)

# sys.exit(0)  # Exit with a success status code

