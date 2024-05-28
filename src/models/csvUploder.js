// src/CsvUploader.js
import React, { useState } from 'react';

const CsvUploader = ({ onFileLoaded }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        // Split the text by newline and commas
        const numbers = text.split(/\r?\n/).flatMap(line => line.split(',').map(num => num.trim()));

        console.log("BBB",numbers.filter(num => num))
        onFileLoaded(numbers.filter(num => num)); // Filter out any empty strings
      };
      reader.readAsText(file);
    }
  };


  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload CSV</button>
    </div>
  );
};

export default CsvUploader;
