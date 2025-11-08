#! /c/Users/amit/AppData/Local/Programs/Python/Python312/python
#! /usr/bin/env python3
#! /c/Program Files/QGIS 3.26.0/apps/Python39/python
# ==============================================================================
# File Name     : traffic-analysis.py
# Date Created  : 2025-11-06 14:26 UTC +01:00
# description   : Process Traffic Log and Analyse the Traffic
# ------------------------------------------------------------------------------
# Author        : Amit Manohar Manthanwar
# WebURL        : https:#manthanwar.github.io
# ------------------------------------------------------------------------------
# Copyright     : (c) 2025 Amit Manohar Manthanwar
# License       : LICENSE.md
# ==============================================================================
# Revision Log  | Author  | Description
# --------------+---------+-----------------------------------------------------
# 06-Nov-2025   | AMM     | Initial Version
# --------------+---------+-----------------------------------------------------
# ==============================================================================

# from excel2tex import CreateTexFromExcel as xls2dpr
from excel2tex import ExcelToTexArticle as xls2dpr
from excel2tex import Utility as util
# import excel2tex
import sys
import os
import time
from datetime import datetime
import pandas as pd


import re


def extract_ipv4_addresses(text):
    """
    Extracts all valid IPv4 addresses from a given string.

    Args:
        text (str): The input string to search for IP addresses.

    Returns:
        list: A list of extracted IPv4 addresses.
    """
    # Regular expression pattern for matching IPv4 addresses.
    # It accounts for numbers 0-255 in each octet.
    ipv4_pattern = r'\b(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b'

    # Find all occurrences of the pattern in the text
    ip_addresses = re.findall(ipv4_pattern, text)
    return ip_addresses


def read_file_to_list(filepath):
    """
    Reads a file and returns its content as a list of strings,
    where each element in the list represents a line from the file.

    Args:
        filepath (str): The path to the file to be read.

    Returns:
        list: A list of strings, with each string being a line from the file.
              Returns an empty list if the file is not found or is empty.
    """
    try:
        with open(filepath, 'r') as file:
            lines = file.readlines()
            # Optionally, remove newline characters from each line
            # lines = [line.strip() for line in lines]
            return lines
    except FileNotFoundError:
        print(f"Error: The file '{filepath}' was not found.")
        return []
    except Exception as e:
        print(f"An error occurred: {e}")
        return []


def read_file_line_by_line(file_path):
    """
    Reads a text file line by line and prints each line to the console.

    Args:
        file_path (str): The path to the text file.
    """
    try:
        uniqueIps = []
        with open(file_path, 'r') as file:
            for line in file:
                # The 'line' variable will include the newline character ('\n')
                # at the end of each line, except possibly the last line.
                # Use .strip() to remove leading/trailing whitespace, including '\n'.
                # print(line.strip())
                # found_ips = extract_ipv4_addresses(line)
                # print(f"Extracted IP addresses: {found_ips[0]}")
                lineArr = line.split()
                # print('IP = ' + lineArr[1])
                # uniqueIps.append(lineArr[1])
                if lineArr[1] not in uniqueIps:
                    uniqueIps.append(lineArr[1])
        uniqueIps.remove('::ffff:127.0.0.1')
        uniqueIps = sorted(uniqueIps)
        print(*uniqueIps, sep='\n')
    except FileNotFoundError:
        print(f"Error: The file '{file_path}' was not found.")
    except Exception as e:
        print(f"An error occurred: {e}")


if __name__ == "__main__":
    # timeStarted = time.time()
    timeStarted = util.tic()

    current_datetime = datetime.now()
    print("Current Date and Time:", current_datetime, '\n')
    # Example usage:
    # input_string = "Server IP: 192.168.1.10, Gateway: 10.0.0.1, Invalid IP: 256.0.0.1 and another valid one 172.16.0.5"
    # found_ips = extract_ipv4_addresses(input_string)
    # # print(f"Extracted IP addresses: {found_ips}")

    # input_string = '2025-11-06T11:56:58.014Z 103.186.41.170 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 https://robust-camel-exciting.ngrok-free.app/demo-products.html /dolphin-proposal-bank.pdf GET'

    # found_ips = extract_ipv4_addresses(input_string)
    # print(f"Extracted IP addresses: {found_ips[0]}")

    read_file_line_by_line("traffic.log")

    # keepFilesPath = os.path.abspath('../../../scripts/keepFiles.txt')
    keepFilesPath = '../../../scripts/keepFiles.txt'
    keepFiles = read_file_to_list(keepFilesPath)
    print(*keepFiles, sep='')

    # print('Python Version ', sys.version)
    # print('Pandas Version ', pd.__version__)
    # print('Current Working Directory:',  os.getcwd(), '')
    # print('Creating LaTeX Input Files from Excel Tables...\n')

    sys.exit(0)
    if len(sys.argv) > 1:
        # The first argument after the script name is at index 1
        excelFile = sys.argv[1]
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

    util.toc(timeStarted)

    # sys.exit(0)  # Exit with a success status code
