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
