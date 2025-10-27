#! /c/Users/amit/AppData/Local/Programs/Python/Python312/python
#! /usr/bin/env python3
# ==============================================================================
# File Name     : <file-management.py>
# Description   : python script for managing files
# ------------------------------------------------------------------------------
# Author        : Amit Manohar Manthanwar
# GitHub        : https://manthanwar.github.io/
# ------------------------------------------------------------------------------
# Copyright     : ©2024 Amit Manohar Manthanwar
# License       : LaTeX Project Public License
# ==============================================================================
# GNU make also has -s, --silent, --quiet options to quieten globally
# ==============================================================================
# -------------+---------+------------------------------------------------------
# Revision Log | Author  | Description
# -------------+---------+------------------------------------------------------
#  09-Nov-2024 | AMM     | Initial Version
# -------------+---------+------------------------------------------------------
# -------------+---------+------------------------------------------------------
# -------------+---------+------------------------------------------------------
# ------------------------------------------------------------------------------
# ==============================================================================


import requests
from bs4 import BeautifulSoup

# page_url = 'https://www.punefloodcontrol.com/bhima-basin.php'

page_url = 'https://www.punefloodcontrol.com/bhima-water.php'
headers = {
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36',
}
rawpage = requests.get(page_url, headers=headers)

soup = BeautifulSoup(rawpage.content, 'html.parser')
# content = soup.input
soup.input.value = '10/10/2024'

# print(content)

# print(soup.prettify())

f = open("bhima-water-u.html", "w", encoding='utf-8')
f.write(soup.prettify())
f.close()




# import mechanize
# import re
# print('Hello, world!')


# # browser = mechanize.Browser()

# # # Bhima sub basin
# # # response = browser.open("https://www.punefloodcontrol.com/bhima-water.php")


# # response = browser.Request("https://www.punefloodcontrol.com/bhima-basin.php")


# # req.add_header(
# #     'Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8')
# # page = mechanize.urlopen(req)


# # # browser["date"] = "myusername"

# # print(response)


# req = mechanize.Request("https://www.punefloodcontrol.com/bhima-basin.php")
# req.add_header(
#     'Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8')
# page = mechanize.urlopen(req)


# print(page)