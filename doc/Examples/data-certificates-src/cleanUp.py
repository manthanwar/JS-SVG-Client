#! /c/Users/amit/AppData/Local/Programs/Python/Python312/python
#! /usr/bin/env python3
# ==============================================================================
# File Name     : cleanup.py
# Date Created  : 2025-10-27 20:28 UTC +01:00
# description   : clean data-certificate folder by removing files
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


def delete_files_except(directory_path, files_to_keep):
    """
    Deletes all files in a specified directory except those listed in files_to_keep.

    Args:
        directory_path (str): The path to the directory to clean.
        files_to_keep (list): A list of filenames (strings) to retain in the directory.
    """
    try:
        for filename in os.listdir(directory_path):
            file_path = os.path.join(directory_path, filename)

            # Check if it's a file and not in the list of files to keep
            if os.path.isfile(file_path) and filename not in files_to_keep:
                os.remove(file_path)
                print(f"Deleted: {filename}")
            elif os.path.isdir(file_path):
                print(f"Skipping directory: {filename}")
            else:
                print(f"Keeping: {filename}")

    except FileNotFoundError:
        print(f"Error: Directory not found at {directory_path}")
    except Exception as e:
        print(f"An error occurred: {e}")


# Example usage:
if __name__ == "__main__":
    target_directory = "my_folder"  # Replace with your directory path
    files_to_retain = ["important_doc.txt", "config.ini", "script.py"]

    # Create dummy files for demonstration
    if not os.path.exists(target_directory):
        os.makedirs(target_directory)
    with open(os.path.join(target_directory, "delete_me_1.txt"), "w") as f:
        f.write("This file will be deleted.")
    with open(os.path.join(target_directory, "important_doc.txt"), "w") as f:
        f.write("This file will be kept.")
    with open(os.path.join(target_directory, "delete_me_2.log"), "w") as f:
        f.write("Another file to delete.")
    with open(os.path.join(target_directory, "config.ini"), "w") as f:
        f.write("Configuration settings.")

    print(
        f"Files before cleanup in '{target_directory}': {os.listdir(target_directory)}")

    delete_files_except(target_directory, files_to_retain)

    print(
        f"Files after cleanup in '{target_directory}': {os.listdir(target_directory)}")
