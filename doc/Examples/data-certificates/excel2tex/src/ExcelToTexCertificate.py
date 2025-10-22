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
import random

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

    def get_random_int_array(self, arraySize: int, lower_bound: int, upper_bound: int) -> List[int]:
        """
        Generates a list containing 4 random integers within the specified range.

        Args:
            lower_bound (int): The inclusive lower limit of the random integers.
            upper_bound (int): The inclusive upper limit of the random integers.

        Returns:
            list: A list containing 4 random integers.
        """
        random_integers = []
        for _ in range(arraySize):
            random_integers.append(random.randint(lower_bound, upper_bound))
        return random_integers

    def getDfRows(self, df: pd.DataFrame, how: str = 'head', dataRows: str = '3') -> pd.DataFrame:
        if how == 'head':
            df = df.head(int(dataRows))

        if how == 'tail':
            df = df.tail(int(dataRows))

        if how == 'random':
            size: int = len(df)
            desired_indices = self.get_random_int_array(int(dataRows), 0, size)
            df = df.iloc[desired_indices]

        if how == 'indices':
            desired_indices = list(map(int, dataRows.split(',')))
            if len(desired_indices) > 5:
                desired_indices = desired_indices[:5]
            desired_indices = list(set(desired_indices))
            df = df.iloc[desired_indices]

        return df

    def createPdf(self, sheet: str = 'data', dataType: str = 'head', dataRows: str = '3', isCode: bool = False) -> None:
        df = pd.read_excel(io=self.excelFile, sheet_name=sheet)
        df = self.getDfRows(df, how=dataType, dataRows=dataRows)
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
        txtFile = zipFile + '.txt'
        pdfXlsx = f'{pdfFile} {txtFile} {self.excelFile}'
        elapsed = f'\nDone: {util.toc(util.timeStarted):.4f} sec'
        util.appendFile(fileName=txtFile, lines=elapsed)
        util.zip(archive=zipFile, filePath=pdfXlsx)
        cmd = f'rm {texFile} {pdfFile} {txtFile}'
        util.runCmd(cmd)
