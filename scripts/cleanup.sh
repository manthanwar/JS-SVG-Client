TARGET_DIR="/d/GitHub/JS-SVG-Client/doc/Examples/data-certificates/"
TARGET_DIR_SRC_TEX_DATA="/d/GitHub/JS-SVG-Client/doc/Examples/src-tex-data/"
BACKUP_DIR="/e/junk/Dolphin-Data/"
CLEANUP_FILE="./scripts/cleanup.py"

cp -r "$TARGET_DIR_SRC_TEX_DATA" "$BACKUP_DIR"
python "$CLEANUP_FILE" "$TARGET_DIR_SRC_TEX_DATA"
echo
ls --color=auto --group-directories-first "$TARGET_DIR_SRC_TEX_DATA"

cp -r "$TARGET_DIR" "$BACKUP_DIR"
python "$CLEANUP_FILE" "$TARGET_DIR"
echo
ls --color=auto --group-directories-first "$TARGET_DIR"

