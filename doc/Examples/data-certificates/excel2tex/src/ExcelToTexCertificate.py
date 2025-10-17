#! /c/Users/amit/AppData/Local/Programs/Python/Python312/python
#! /usr/bin/env python3
# ==============================================================================
# File Name     : ExcelToTexCertificate.py
# Date Created  : 2025-10-16 16:25 UTC +02:00
# description   : Convert Excel file into LaTeX Certificate
# ------------------------------------------------------------------------------
# Author        : Amit Manohar Manthanwar
# Mailer        : manthanwar@hotmail.com
# WebURL        : https:#manthanwar.github.io
# ------------------------------------------------------------------------------
# Copyright     : (c) 2025 Amit Manohar Manthanwar
# License       : LICENSE.md
# ==============================================================================
# Revision Log  | Author  | Description
# --------------+---------+-----------------------------------------------------
# 16-Oct-2025   | AMM     | Initial Version
# --------------+---------+-----------------------------------------------------
# ==============================================================================

import time
import os
import sys
import subprocess
import pandas as pd
from .Utility import Utility as util
from typing import List

# code = open in vscode editor with command: code filename


class ExcelToTexCertificate:
    packageName: str = "excel2tex"
    moduleName: str = "excel2tex"
    className: str = "Utility"
    version: str = "1.0.0"

    def __init__(self, excelFile: str = 'data-certificate.xlsx'):
        # self.packageName = "excel2tex"
        # self.moduleName = "excel2tex"
        # self.className = "ExcelToTexCertificate"
        # self.version = "1.0.0"
        self.excelFile = excelFile
        # self.outFolder = outFolder
        self.sheetNames = pd.ExcelFile(excelFile).sheet_names
        self.sheetCount = len(self.sheetNames)

    @staticmethod
    def printClassInfo() -> None:
        wd: int = 15
        print(f"{'package name':>{wd}} : {ExcelToTexCertificate.packageName}")
        print(f"{'module name':>{wd}} : {ExcelToTexCertificate.moduleName}")
        print(f"{'class name':>{wd}} : {ExcelToTexCertificate.className}")
        print(f"{'class version':>{wd}} : {ExcelToTexCertificate.version}")
        return None

    def printClassInfo(self) -> None:
        wd: int = 15
        print(f"{'package name':>{wd}} : {ExcelToTexCertificate.packageName}")
        print(f"{'module name':>{wd}} : {ExcelToTexCertificate.moduleName}")
        print(f"{'class name':>{wd}} : {ExcelToTexCertificate.className}")
        print(f"{'class version':>{wd}} : {ExcelToTexCertificate.version}")
        print(f"{'File name':>{wd}} : {self.excelFile}")
        print(f"{'sheet names':>{wd}} : {self.sheetNames}")
        print(f"{'sheet count':>{wd}} : {self.sheetCount}\n")
        return None

    def greet(self):
        return print(f"Hello, {self.className}!")

    def createLines(self, row) -> str:
        lines = rf"""\documentclass{{amm-pst-certificate}}%
\begin{{document}}\defineColor{{{row.color}}}%
\defineCertificate{{{row.certU}}}{{{row.certN}}}{{{row.certD}}}%
\defineStudent{{{row.nameT}}}{{{row.nameF}}}{{{row.nameM}}}{{{row.nameL}}}{{{row.nameN}}}%
\defineExam{{{row.examN}}}{{{row.examD}}}{{{row.examR}}}%
\end{{document}}"""
        return lines

    def createPdf(self, sheet: str = 'data', isCode: bool = False) -> None:
        df = pd.read_excel(io=self.excelFile, sheet_name=sheet)
        # print(df)
        self.fileListTex: List[str] = list()
        self.fileListPdf: List[str] = list()
        self.fileList: List[str] = list()
        for row in df.itertuples(index=False):
            fileName = f'cert-{row.nameN}-{row.nameF}'
            filePath = f'cert-{row.nameN}-{row.nameF}.tex'
            lines = self.createLines(row)
            util.writeFile(fileName=filePath, lines=lines, isCode=isCode)
            util.makePdf(file=fileName)
            self.fileList.append(fileName)  # without extension
            self.fileListTex.append(filePath)
            self.fileListPdf.append(fileName + '.pdf')

        self.createZip()
        return None

    def createZip(self) -> None:
        pdfFile = " ".join(self.fileListPdf)
        texFile = " ".join(self.fileListTex)
        zipFile = os.path.splitext(self.excelFile)[0]
        pdfXlsx = pdfFile + ' ' + self.excelFile
        util.zip(archive=zipFile, filePath=pdfXlsx)
        # allFile = pdfFile + ' ' + texFile + ' ' + self.excelFile
        allFile = pdfFile + ' ' + texFile
        # util.createDirectory(zipFile)
        # cmd = f'mv {pdfFile} {zipFile}'
        cmd = 'rm ' + allFile
        util.runCmd(cmd)
