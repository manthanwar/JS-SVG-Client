#! /c/Users/amit/AppData/Local/Programs/Python/Python312/python
#! /usr/bin/env python3
# ==============================================================================
# File Name     : listFiles.py
# Date Created  : 2025-10-27 20:55 UTC +01:00
# description   : List all files in folder
# ------------------------------------------------------------------------------
# Author        : Amit Manohar Manthanwar
# WebURL        : https:#manthanwar.github.io
# ------------------------------------------------------------------------------
# Copyright     : (c) 2025 Amit Manohar Manthanwar
# License       : LICENSE.md
# ==============================================================================
# Revision Log  | Author  | Description
# --------------+---------+-----------------------------------------------------
# 27-Oct-2025   | AMM     | Initial Version
# --------------+---------+-----------------------------------------------------
# ==============================================================================

import os
import sys


def list_directory_contents(directory_path):
    """
    Lists all files and folders in a given directory as a Python list.

    Args:
      directory_path (str): The path to the directory to be scanned.

    Returns:
      list: A list containing the names of all files and folders in the directory.
            Returns an empty list if the directory does not exist or is not accessible.
    """
    try:
        contents = os.listdir(directory_path)
        return contents
    except FileNotFoundError:
        print(f"Error: The directory '{directory_path}' was not found.")
        return []
    except PermissionError:
        print(f"Error: Permission denied to access '{directory_path}'.")
        return []
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        return []


def list_only_folders(directory_path):
    """Lists only folders in a given directory."""
    try:
        contents = os.listdir(directory_path)
        folders = [item for item in contents if os.path.isdir(
            os.path.join(directory_path, item))]
        return folders
    except Exception as e:
        print(f"Error listing folders: {e}")
        return []


def list_only_files(directory_path):
    """Lists only files in a given directory."""
    try:
        contents = os.listdir(directory_path)
        files = [item for item in contents if os.path.isfile(
            os.path.join(directory_path, item))]
        return files
    except Exception as e:
        print(f"Error listing files: {e}")
        return []


def get_files_in_folder(folder_path):
    """
    Lists all files within a specified folder.

    Args:
        folder_path (str): The path to the folder.

    Returns:
        list: A list containing the names of all files in the folder.
    """
    file_list = []
    # Get all entries (files and directories) in the folder
    entries = os.listdir(folder_path)

    # Filter out only the files
    for entry in entries:
        full_path = os.path.join(folder_path, entry)
        if os.path.isfile(full_path):
            file_list.append(entry)
    return file_list


# Example usage:
if __name__ == "__main__":
    # Replace 'your_folder_path' with the actual path to your folder
    # folder_path = 'your_folder_path'
    if len(sys.argv) > 1:
        # The first argument after the script name is at index 1
        folder_path = sys.argv[1]
    else:
        print("Please provide an argument when running the script.")

    # files = get_files_in_folder(folder_path)
    # print(files)

    files = list_only_files(folder_path)
    print(files)

    folders = list_only_folders(folder_path)
    print(folders)

    all_contents = list_directory_contents(folder_path)

    # if all_contents:
    #     print(f"Contents of '{folder_path}':")
    #     for item in all_contents:
    #         print(item)
