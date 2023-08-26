import DisplayBox from "./components/DisplayBox"
import { useState, useEffect, useMemo } from 'react';
import Papa from 'papaparse';

function App() {

  const [csvData, setCSVData] = useState([]);

  const columnNames = useMemo(() => {
    if (csvData.length > 0) {
      return Object.keys(csvData[0]);
    }
    return [];
  }, [csvData]);

  const distinctColumnData = useMemo(() => {
    const distinctValues = {};

    csvData.forEach((row) => {
      columnNames.forEach((col) => {
        if (!distinctValues[col]) {
          distinctValues[col] = new Set();
        }
        distinctValues[col].add(row[col]);
      });
    });

    const distinctDataObject = {};
    columnNames.forEach((col) => {
      distinctDataObject[col] = Array.from(distinctValues[col]);
      distinctDataObject[col].pop();
      distinctDataObject[col].sort()
    });

    return distinctDataObject;
  }, [csvData, columnNames]);


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/exoplanet_csv.csv');
        const text = await response.text();
        const result = await Papa.parse(text, { header: true }).data;
        setCSVData(result);
      } catch (error) {
        console.error('Error loading CSV data:', error);
      }
    }

    fetchData();
  }, []);



  return (
    <div className="bg-[url('/bg-picture.webp')] h-[100vh] px-10 py-5 flex flex-col justify-center items-center gap-5">
      <h1 className="text-white text-5xl font-semibold">Q-Exo</h1>
      <DisplayBox csvData={csvData} distinctColumnData={distinctColumnData} />
    </div>
  )
}

export default App
