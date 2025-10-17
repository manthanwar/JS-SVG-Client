#! python3qgis
#! /c/Users/amit/AppData/Local/Programs/Python/Python312/python
#! /usr/bin/env python3
#! /c/Program Files/QGIS 3.26.0/apps/Python39/python
# ==============================================================================
# File Name     : Utility.py
# Date Created  : 2025-10-16 19:59 UTC +02:00
# description   : Utility Class with Uility Functions
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

# code = open in vscode editor with command: code filename


class Utility:
    packageName: str = "excel2tex"
    moduleName: str = "excel2tex"
    className: str = "Utility"
    version: str = "1.0.0"
    timeStarted: float = time.time()  # current time in seconds

    # def __init__(self):
    # self.name = 'amit'

    @staticmethod
    def printClassInfo() -> None:
        width: int = 15
        print(f"{'package name':>{width}} : {Utility.packageName}")
        print(f"{'module name':>{width}} : {Utility.moduleName}")
        print(f"{'class name':>{width}} : {Utility.className}")
        print(f"{'class version':>{width}} : {Utility.version}")
        return None

    def greet(self):
        return print(f"Hello, {Utility.className}!")

    @staticmethod
    def tic() -> float:
        timeStarted = time.time()
        return timeStarted

    @staticmethod
    def toc(timeStarted: float) -> float:
        timeStopped = time.time()
        timeElapsed = timeStopped - timeStarted
        print(f'\ntime elapsed = {timeElapsed:.4f} seconds')
        return timeElapsed

    @staticmethod
    def runCmd(cmd: str) -> str:
        try:
            result = subprocess.run(cmd, shell=True, check=True,
                                    capture_output=True, text=True)
            # print(result.stdout.strip())
            return result.stdout.strip()
        except subprocess.CalledProcessError as e:
            # print(f"Command failed with error: {e}")
            return f"Command failed with error: {e}"

    @staticmethod
    def code(fileName: str) -> None:
        cmd = 'code ' + fileName
        Utility.runCmd(cmd)
        return None

    @staticmethod
    def printSuccess(fileName: str, isCode: bool = False) -> None:
        if isCode:
            print(f'Created file {fileName}')
            Utility.code(fileName)
        return None

    @staticmethod
    def writeFile(fileName: str, lines: str, isCode: bool = False) -> None:
        with open(fileName, 'w', encoding='utf-8') as file:
            file.write(lines)
            Utility.printSuccess(fileName=fileName, isCode=isCode)
        return None

    @staticmethod
    def makePdf(file: str) -> None:
        cmd = f"latex  -quiet {file}.tex && "
        # cmd += f"latex  -quiet {file}.tex && "
        cmd += f"dvips -q {file}.dvi && "
        cmd += f"ps2pdf -dNOSAFER -dALLOWPSTRANSPARENCY {file}.ps && "
        cmd += f"rm {file}.aux {file}.dvi {file}.log "
        cmd += f"{file}.out.ps {file}.ps"
        Utility.runCmd(cmd)
        return None

    # zip archive_name.zip file1.txt file2.jpg another_file.pdf
    @staticmethod
    def zip(archive: str, filePath: str):
        cmd = f"zip {archive}.zip {filePath}"
        Utility.runCmd(cmd)

    # unzip <zip_file_name>.zip -d /path/to/destination_directory
    @staticmethod
    def unzip(archive: str, filePath: str):
        cmd = f"zip {archive}.zip -d {filePath}"
        Utility.runCmd(cmd)

    # tar -czvf archive_name.tar.gz /path/to/directory_or_files
    @staticmethod
    def tar(archive: str, filePath: str):
        cmd = f"tar -cf {archive}.tar {filePath}"
        Utility.runCmd(cmd)

    @staticmethod
    def tarGz(archive: str, filePath: str):
        cmd = f"tar -czf {archive}.tar.gz {filePath}"
        Utility.runCmd(cmd)

    # tar -xzvf archive_name.tar.gz -C /path/to/destination_directory/
    @staticmethod
    def untar(archive: str, filePath: str):
        cmd = f"tar -xf {archive}.tar -C {filePath}"
        Utility.runCmd(cmd)

    @staticmethod
    def untarGz(archive: str, filePath: str):
        cmd = f"tar -xzf {archive}.tar.gz -C {filePath}"
        Utility.runCmd(cmd)

    @staticmethod
    def createDirectory(dirName: str) -> str:
        try:
            os.mkdir(dirName)
            # print(f"Directory '{dirName}' created successfully.\n")
            return f"Directory '{dirName}' created successfully.\n"
        except FileExistsError:
            # print(f"Directory '{dirName}' already exists.\n")
            return f"Directory '{dirName}' already exists.\n"
        except Exception as e:
            # print(f"An error occurred: {e}\n")
            return f"An error occurred: {e}\n"
