# testSpawn.py

from pathlib import Path
import sys
import json
import time

def main():
    # Get the absolute path of the current file
    file_path = Path(__file__).resolve()
    print(f"File path: {file_path}")

    sys.stdout.flush()

    # time.sleep(3)

    # Get the directory containing the current file
    dir_path = Path(__file__).resolve().parent
    print(f"Directory path: {dir_path}")
    sys.stdout.flush()

    xls = sys.argv[1] if len(sys.argv) > 1 else "No xlx provided"
    print(f"xls file: {xls}")
    sys.stdout.flush()


    # # message = sys.argv[1] if len(sys.argv) > 1 else "No message provided"
    # # Check if argument is provided
    # if len(sys.argv) > 1:
    #     json_string = sys.argv[1]
    #     # Convert JSON string to Python dictionary
    #     data = json.loads(json_string)
    #     print("Received name:", data.get("name"))
    # else:
    #     print("No JSON argument provided.")


    # # Read data from Node.js through stdin
    # input_data = sys.stdin.read()

    # if input_data:
    #     # Parse the JSON string received from Node.js
    #     parsed_json = json.loads(input_data)

    #     # Modify or process the data
    #     parsed_json["message"] = "Hello from Python!"
    #     parsed_json["received_val"] = parsed_json.get("val") * 2

    #     # Output the result as a JSON string back to Node.js
    #     print(json.dumps(parsed_json))

    #     # Flush the buffer to ensure immediate transmission
    #     sys.stdout.flush()

if __name__ == '__main__':
    main()
