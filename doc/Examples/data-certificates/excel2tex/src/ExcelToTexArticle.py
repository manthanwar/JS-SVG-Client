#! /c/Users/amit/AppData/Local/Programs/Python/Python312/python
#! /usr/bin/env python3
# ==============================================================================
# File Name     : ExcelToTexArticle.py
# Date Created  : 2025-10-26 07:16 UTC +01:00
# description   : Convert Excel file into LaTeX Report
# ------------------------------------------------------------------------------
# Author        : Amit Manohar Manthanwar
# WebURL        : https:#manthanwar.github.io
# ------------------------------------------------------------------------------
# Copyright     : (c) 2025 Amit Manohar Manthanwar
# License       : LICENSE.md
# ==============================================================================
# Revision Log  | Author  | Description
# --------------+---------+-----------------------------------------------------
# 26-Oct-2025   | AMM     | Initial Version
# --------------+---------+-----------------------------------------------------
# ==============================================================================

import time
import os
import sys
import subprocess
import pandas as pd
from .Utility import Utility as util
from typing import List
import random

# code = open in vscode editor with command: code filename


class ExcelToTexArticle:
    packageName: str = "excel2tex"
    moduleName: str = "excel2tex"
    className: str = "ExcelToTexArticle"
    version: str = "1.0.0"

    def __init__(self, excelFile: str = 'data-certificate.xlsx'):
        # self.packageName = "excel2tex"
        # self.moduleName = "excel2tex"
        # self.className = "ExcelToTexArticle"
        # self.version = "1.0.0"
        self.excelFile = excelFile
        self.latexFile = os.path.splitext(excelFile)[0] + '.tex'
        # self.outFolder = outFolder
        self.sheetNames = pd.ExcelFile(excelFile).sheet_names
        self.sheetCount = len(self.sheetNames)

    @staticmethod
    def printClassInfo() -> None:
        wd: int = 15
        print(f"{'package name':>{wd}} : {ExcelToTexArticle.packageName}")
        print(f"{'module name':>{wd}} : {ExcelToTexArticle.moduleName}")
        print(f"{'class name':>{wd}} : {ExcelToTexArticle.className}")
        print(f"{'class version':>{wd}} : {ExcelToTexArticle.version}")
        return None

    def printClassInfo(self) -> None:
        wd: int = 15
        print(f"{'package name':>{wd}} : {ExcelToTexArticle.packageName}")
        print(f"{'module name':>{wd}} : {ExcelToTexArticle.moduleName}")
        print(f"{'class name':>{wd}} : {ExcelToTexArticle.className}")
        print(f"{'class version':>{wd}} : {ExcelToTexArticle.version}")
        print(f"{'excel file':>{wd}} : {self.excelFile}")
        print(f"{'latex file':>{wd}} : {self.latexFile}")
        print(f"{'sheet names':>{wd}} : {self.sheetNames}")
        print(f"{'sheet count':>{wd}} : {self.sheetCount}\n")
        return None

    def greet(self):
        return print(f"Hello, {self.className}!")

    def createLines(self, row) -> str:
        lines = rf"""\documentclass[12pt]{{amm-pst-dpr-article}}%
\usepackage{{amm-pst-dpr-article}}%
\begin{{document}}\maketitle%
\section*{{Executive Summary}}%
{row['summary']}%
\clearpage
\def\sponsorNameA{{{row['sponsorA']}}}%
\def\sponsorNameB{{{row['sponsorB']}}}%
\def\sponsorNameC{{{row['sponsorC']}}}%
\def\totalAmount{{{row['totalAmount']}}}%
\meanFinance{row['meanFinance']}%
\end{{document}}"""
        return lines

    def getSummary(self, sheet: str = 'summary', isCode: bool = False) -> None:
        df = pd.read_excel(io=self.excelFile, sheet_name=sheet)
        # headers = df.columns
        # print(df.iloc[1, 0])
        self.summary = df.iloc[0, 0]
        return None

    def getMeansFinance(self, sheet: str = 'meansFinance', isCode: bool = False) -> None:
        df = pd.read_excel(io=self.excelFile, sheet_name=sheet)
        # headers = df.columns
        # print(df.iloc[1, 0])
        # self.summary = df.iloc[1, 0]
        # for row in df.itertuples(index=False):
        # print(int(row[0]))
        self.getSummary()
        sr1 = int(df.iloc[0, 0])  # serial number
        sr2 = int(df.iloc[1, 0])
        sr3 = int(df.iloc[2, 0])
        mf1 = df.iloc[0, 1]  # mean finance
        mf2 = df.iloc[1, 1]
        mf3 = df.iloc[2, 1]
        at1 = df.iloc[0, 2]  # amount
        at2 = df.iloc[1, 2]
        at3 = df.iloc[2, 2]
        att = df.iloc[3, 2]  # total
        pc1 = df.iloc[0, 3]  # project cost
        pc2 = df.iloc[1, 3]
        pc3 = df.iloc[2, 3]
        op1 = f'{{{sr1} & {mf1} & {at1:.2f} & {pc1:.2f}}}'  # option
        op2 = f'{{{sr2} & {mf2} & {at2:.2f} & {pc2:.2f}}}'
        op3 = f'{{{sr3} & {mf3} & {at3:.2f} & {pc3:.2f}}}'
        opt = f'{{{pc1:.2f}}}{{{pc2:.2f}}}{{{pc3:.2f}}}'
        row = dict(sponsorA=mf1, sponsorB=mf2, sponsorC=mf3,
                   totalAmount=att,
                   meanFinance=op1 + op2 + op3 + opt,
                   summary=self.summary)
        # print(pc1)

        # print(self.summary)
        # row = dict(summary = 'hi', cost = 10)
        # print(row['at2'])
        lines = self.createLines(row)
        # print(lines)
        # baseName = os.path.splitext(self.excelFile)[0]
        # filePath = baseName + '.tex'
        util.writeFile(fileName=self.latexFile, lines=lines, isCode=isCode)
        return None

    def createReport(self) -> None:
        self.getMeansFinance()
        # fileName = f'report-{row.nameN}-{row.nameF}'
        basFile = os.path.splitext(self.excelFile)[0]
        util.makePdf(file=basFile)
        txtFile = basFile + '.txt'
        pdfFile = basFile + '.pdf'
        elapsed = f'\nDone: {util.toc(util.timeStarted):.4f} sec\n'
        util.appendFile(fileName=txtFile, lines=elapsed)
        pdfXlsx = f'{pdfFile} {txtFile} {self.excelFile}'
        util.zip(archive=basFile, filePath=pdfXlsx)
        cmd = f'rm {self.latexFile} {txtFile}'
        util.runCmd(cmd)

        return None


    def createZip(self) -> None:
        pdfFile = " ".join(self.fileListPdf)
        texFile = " ".join(self.fileListTex)
        zipFile = os.path.splitext(self.excelFile)[0]
        txtFile = zipFile + '.txt'
        pdfXlsx = f'{pdfFile} {txtFile} {self.excelFile}'
        elapsed = f'\nDone: {util.toc(util.timeStarted):.4f} sec'
        util.appendFile(fileName=txtFile, lines=elapsed)
        util.zip(archive=zipFile, filePath=pdfXlsx)
        cmd = f'rm {texFile} {pdfFile} {txtFile}'
        util.runCmd(cmd)
