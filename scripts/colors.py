#! /c/Users/amit/AppData/Local/Programs/Python/Python312/python
#! /usr/bin/env python3
#! /c/Program Files/QGIS 3.26.0/apps/Python39/python
# ==============================================================================
# File Name     : colors.py
# Date Created  : 2025-10-31 00:20 UTC +01:00
# description   : Bash Script Codes
# ------------------------------------------------------------------------------
# Author        : Amit Manohar Manthanwar
# WebURL        : https:#manthanwar.github.io
# ------------------------------------------------------------------------------
# Copyright     : (c) 2025 Amit Manohar Manthanwar
# License       : LICENSE.md
# ==============================================================================
# Revision Log  | Author  | Description
# --------------+---------+-----------------------------------------------------
# 31-Oct-2025   | AMM     | Initial Version
# --------------+---------+-----------------------------------------------------
# Usage: python
# import colors
# print(colors.BOLD + colors.BRED + colors.WHITE + "text" + colors.RESET)
# ==============================================================================

BOLD = '\033[1m'
UNDERLINE = '\033[4m'

# Background colors
BBLACK = '\033[40m'
BRED = '\033[41m'
BGREEN = '\033[42m'
BYELLOW = '\033[43m'
BBLUE = '\033[44m'
BMAGENTA = '\033[45m'
BCYAN = '\033[46m'
BWHITE = '\033[47m'


# Foreground colors
BLACK = '\033[30m'
RED = '\033[31m'
GREEN = '\033[32m'
YELLOW = '\033[33m'
BLUE = '\033[34m'
MAGENTA = '\033[35m'
CYAN = '\033[36m'
WHITE = '\033[37m'

# Bright foreground colors
BRIGHT_BLACK = '\033[90m'
BRIGHT_RED = '\033[91m'
BRIGHT_GREEN = '\033[92m'
BRIGHT_YELLOW = '\033[93m'
BRIGHT_BLUE = '\033[94m'
BRIGHT_MAGENTA = '\033[95m'
BRIGHT_CYAN = '\033[96m'
BRIGHT_WHITE = '\033[97m'

# Reset code to return to default terminal text color
RESET = '\033[0m'


def read_file_ignore_comments(filepath):
    """
    Reads a file line by line, ignoring lines that start with '#'.

    Args:
        filepath (str): The path to the file to read.

    Yields:
        str: Each non-comment, non-empty line from the file, stripped of leading/trailing whitespace.
    """
    data = {}
    with open(filepath, 'r') as file:
        for line in file:
            stripped_line = line.strip()
            if stripped_line and not stripped_line.startswith('#'):
                key_value = stripped_line.split('=')
                key_value = line.strip().split('=')
                if len(key_value) == 2:
                    key, value = key_value
                    data[key] = value

    return data
    # yield stripped_line


if __name__ == "__main__":
    print('helll000')
    print("Processing colors.sh:")
    # for processed_line in read_file_ignore_comments("colors.sh"):
    #     print(processed_line)

    data = read_file_ignore_comments("colors.sh")
    # black = data.get('BLACK')
    # print(black)
    print(data["BOLD"])
    print(data["BLACK"])
    print(data["RED"])
