import sys
import os

def main():
    # Ensure a file path argument was passed
    if len(sys.argv) < 2:
        print("Error: No file path provided.")
        sys.exit(1)

    file_path = sys.argv[1]

    # Verify that the file actually exists
    if not os.path.exists(file_path):
        print(f"Error: File not found at {file_path}")
        sys.exit(1)

    # Read and process the file
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Example processing: Count the number of words
    word_count = len(content.split())

    # Send the result back to Node.js via standard output (stdout)
    print(f"Successfully processed file. Word count: {word_count}")

if __name__ == "__main__":
    main()
