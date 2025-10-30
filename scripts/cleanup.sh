TARGET_DIR="/d/GitHub/JS-SVG-Client/doc/Examples/data-certificates/"
CLEANUP_FILE="./scripts/cleanup.py"

python "$CLEANUP_FILE" "$TARGET_DIR"
echo
ls --color=auto --group-directories-first "$TARGET_DIR"