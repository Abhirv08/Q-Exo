import { useMemo } from "react";

function useDistinctColumnData(csvData) {
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
            distinctDataObject[col].sort();
        });

        return distinctDataObject;
    }, [csvData, columnNames]);

    return { columnNames, distinctColumnData };
}

export { useDistinctColumnData };