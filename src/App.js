// src/App.js
import React, { useState } from 'react';
import CsvUploader from './models/csvUploder';
import NumberChecker from './models/numberChecker';
import './App.css';
import jsonData from './numbers.json';

const App = () => {
  const [csvData, setCsvData] = useState([]);

  const handleFileLoaded = (data) => {
    setCsvData(data);
  };

  return (
    <div className="App">
      <h1>CSV Number Checker</h1>
      <CsvUploader onFileLoaded={handleFileLoaded} />
      {csvData.length > 0 && <NumberChecker csvData={csvData} jsonData={jsonData} />}
    </div>
  );
};

export default App;
