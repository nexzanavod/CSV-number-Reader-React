# CSV Number Checker

This project is a React application that allows users to upload a CSV file containing numbers and check if any of those numbers exist in a predefined JSON file within the project. The application also displays the time taken to perform the check.

## Features

- Upload a CSV file and parse it to extract numbers.
- Compare the extracted numbers with numbers in a JSON file.
- Display the numbers found in the JSON file.
- Show the time taken to perform the comparison.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/nexzanavod/CSV-number-Reader-React.git
    cd CSV-number-Reader-React
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the development server:
    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

3. Upload a CSV file by clicking on the "Upload CSV" button.

4. Click on the "Check Numbers" button to see if any numbers from the CSV file are present in the JSON file and to view the time taken for the check.


## Components

CsvUploader.js
This component handles the CSV file upload and parsing. It reads the file content, extracts numbers, and passes them to the parent component.

NumberChecker.js
This component receives the parsed CSV data and the predefined JSON data. It checks for the presence of CSV numbers in the JSON file, displays the found numbers, and shows the time taken for the comparison.

## App.js

The main component that renders CsvUploader and NumberChecker components and manages their states.

## Author
Navod Amarakoon

## License
This project is licensed under the MIT License.


## Project Structure

```plaintext
csv-number-checker/
├── public/
│   ├── data.json         # JSON file with predefined numbers
│   └── index.html
├── src/
│   ├── CsvUploader.js    # Component for uploading and parsing CSV files
│   ├── NumberChecker.js  # Component for checking numbers and displaying results
│   ├── App.js            # Main application component
│   └── index.js          # Entry point for the React application
├── .gitignore
├── package.json
└── README.md

