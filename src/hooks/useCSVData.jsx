import { useState, useEffect } from 'react';
import Papa from 'papaparse';

function useCSVData() {
    const [csvData, setCSVData] = useState([]);

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

    return csvData;
}

export { useCSVData };