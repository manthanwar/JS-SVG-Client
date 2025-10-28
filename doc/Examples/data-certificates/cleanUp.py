#! /c/Users/amit/AppData/Local/Programs/Python/Python312/python
#! /usr/bin/env python3
# ==============================================================================
# File Name     : cleanUp.py
# Date Created  : 2025-10-28 19:16 UTC +01:00
# description   : Clean files and folders except some files and subfolders
# ------------------------------------------------------------------------------
# Author        : Amit Manohar Manthanwar
# WebURL        : https:#manthanwar.github.io
# ------------------------------------------------------------------------------
# Copyright     : (c) 2025 Amit Manohar Manthanwar
# License       : LICENSE.md
# ==============================================================================
# Revision Log  | Author  | Description
# --------------+---------+-----------------------------------------------------
# 28-Oct-2025   | AMM     | Initial Version
# --------------+---------+-----------------------------------------------------
# ==============================================================================

import os
import shutil
import subprocess
import sys


def run_shell_command(command, capture_output=True, text=True, check=True, shell=False):
    """
    Executes a shell command and returns the result.

    Args:
        command (str or list): The shell command to execute.
                               If a string, set shell=True.
                               If a list, each element is a part of the command.
        capture_output (bool): If True, stdout and stderr are captured.
        text (bool): If True, stdout and stderr are decoded as text using default encoding.
        check (bool): If True, raises a CalledProcessError if the command returns a non-zero exit code.
        shell (bool): If True, the command is executed through the shell.
                      Use with caution for security reasons if command comes from untrusted input.

    Returns:
        subprocess.CompletedProcess: An object containing the command's return code, stdout, and stderr.
    """
    try:
        result = subprocess.run(
            command,
            capture_output=capture_output,
            text=text,
            check=check,
            shell=shell
        )
        return result
    except subprocess.CalledProcessError as e:
        print(f"Error executing command: {e}")
        print(f"Stderr: {e.stderr}")
        return None
    except FileNotFoundError:
        print(f"Error: Command '{command}' not found.")
        return None


def copy_with_exclusions(source_dir, destination_dir, excluded_items):
    """
    Copies files and folders from source_dir to destination_dir,
    excluding items specified in excluded_items.

    Args:
        source_dir (str): The path to the source directory.
        destination_dir (str): The path to the destination directory.
        excluded_items (list): A list of strings representing file/folder names
                                to exclude. These can be glob patterns.
    """

    def ignore_func(src, names):
        ignored_names = []
        for name in names:
            # Check if the current item (file or folder) should be excluded
            if name in excluded_items:
                ignored_names.append(name)
            # You can also use glob patterns for more flexible exclusion
            # For example, to exclude all .txt files:
            # if name.endswith(".txt"):
            #     ignored_names.append(name)
        return ignored_names

    # Create the destination directory if it doesn't exist
    os.makedirs(destination_dir, exist_ok=True)

    # Copy the directory tree, ignoring specified items
    shutil.copytree(source_dir, destination_dir,
                    ignore=ignore_func, dirs_exist_ok=True)


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


def clean_folder_except(folder_path, items_to_keep):
    """
    Deletes all files and subfolders within a given folder,
    except for those specified in items_to_keep.

    Args:
        folder_path (str): The path to the folder to clean.
        items_to_keep (list): A list of strings containing the names
                               (files or folders) to keep within the folder.
    """
    if not os.path.isdir(folder_path):
        print(f"Error: Folder '{folder_path}' does not exist.")
        return

    for item in os.listdir(folder_path):
        item_path = os.path.join(folder_path, item)
        if item not in items_to_keep:
            try:
                if os.path.isfile(item_path):
                    os.remove(item_path)  # Remove file
                    print(f"Deleted file: {item_path}")
                elif os.path.isdir(item_path):
                    # Remove directory and its contents
                    shutil.rmtree(item_path)
                    print(f"Deleted folder: {item_path}")
            except OSError as e:
                print(f"Error deleting {item_path}: {e}")
        else:
            print(f"Keeping: {item_path}")


# Example usage:
if __name__ == "__main__":
    if len(sys.argv) > 1:
        # The first argument after the script name is at index 1
        target_folder = sys.argv[1]  # "path/to/your/folder"
    else:
        print("Please provide an argument when running the script.")

    keepItems = ['excel2tex',
                 'amm-pst-art-university-pune.sty',
                 'amm-pst-certificate.cls',
                 'amm-pst-dpr-article.cls',
                 'amm-pst-dpr-article.sty',
                 'amm-pst-invoice.cls',
                 'amm-pst-invoice-bapatla.sty',
                 'cleanUp.py',
                 'dolphin-faq.cls',
                 'dolphin-faq.sty',
                 'dolphin-fonts.sty',
                 'fig-signature.tex',
                 'traffic.log',
                 'xls2dpr.py',
                 'xls2tex.py'
                 ]

    clean_folder_except(target_folder, keepItems)

    # Example Usage: Copy
    source = "source_folder"
    target = "destination_folder"
    exclude = ["file_to_exclude.txt", "folder_to_exclude", "*.log"]

    # copy_with_exclusions(source, target, exclude)
    # print(f'Copied from {source} to {target} excluding: {exclude}')

    # print("--- Running 'ls -l' ---")
    result = run_shell_command(["ls", "-X"])
    if result:
        print(f"Return code: {result.returncode}")
        # print("Stdout:", result.stdout)
        # print("Stderr:", result.stderr)
