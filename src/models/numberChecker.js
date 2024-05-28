import React, { useState } from 'react';

const NumberChecker = ({ csvData, jsonData }) => {
  const [isPresent, setIsPresent] = useState(null);
  const [foundNumbers, setFoundNumbers] = useState([]);

  const checkNumbers = () => {
    const flatCsvData = csvData.flat();
    const flatJsonData = jsonData.flat();
    
    // Convert JSON numbers to strings for comparison
    const jsonNumbers = flatJsonData.map(num => num.toString());

    // Check if any CSV numbers match JSON numbers
    const found = flatCsvData.filter(num => jsonNumbers.includes(num.toString()));
    setIsPresent(found.length > 0);
    setFoundNumbers(found);
  };

  return (
    <div>
      <button onClick={checkNumbers}>Check Numbers</button>
      {isPresent !== null && (
        <div>
          {isPresent ? 'Numbers found in the JSON data:' : 'No numbers found in the JSON data'}
          {isPresent && (
            <ul>
              {foundNumbers.map((number, index) => (
                <li key={index}>{number}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default NumberChecker;

