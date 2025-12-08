#!/bin/bash

# Get the absolute path of the script itself
SCRIPT_PATH=$(realpath "${BASH_SOURCE[0]}")

# Get the directory of the script
SCRIPT_DIR=$(dirname "${SCRIPT_PATH}")

# SCRIPT_DIR=$(dirname "${BASH_SOURCE[0]}")

source "$SCRIPT_DIR/colors.sh"

TARGET_DIR="$SCRIPT_DIR/../doc/Examples/data-certificates/"
TARGET_DIR_SRC_TEX_DATA="$SCRIPT_DIR/../doc/Examples/src-tex-data/"

# BACKUP_DIR="/e/junk/Dolphin-Data/"
BACKUP_DIR="$SCRIPT_DIR/../../../Junk/Dolphin-Data/"
mkdir -p "$BACKUP_DIR"

CLEANUP_FILE="./scripts/cleanup.py"

cp -r "$TARGET_DIR_SRC_TEX_DATA" "$BACKUP_DIR"
python "$CLEANUP_FILE" "$TARGET_DIR_SRC_TEX_DATA"
echo -e "${BOLD}${BRIGHT_YELLOW}cleaned ${TARGET_DIR_SRC_TEX_DATA} ${RESET}"
ls --color=auto --group-directories-first "$TARGET_DIR_SRC_TEX_DATA"
echo

cp -r "$TARGET_DIR" "$BACKUP_DIR"
python "$CLEANUP_FILE" "$TARGET_DIR"
echo -e "${BOLD}${BRIGHT_YELLOW}cleaned ${BACKUP_DIR} ${RESET}"
ls --color=auto --group-directories-first "$TARGET_DIR"

