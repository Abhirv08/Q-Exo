import PropTypes from 'prop-types';
import ColumnHeading from './ColumnHeading';
import EachRow from './EachRow';
import { useEffect, useState } from 'react';
import { mergeSort, getKey } from './consants';


const ShowData = ({ data }) => {

    const [sortData, setSortData] = useState("")
    const [sortedData, setSortedData] = useState([])

    useEffect(() => {
        if (sortData === "") {
            setSortedData(data)
            return;
        }

        let [order, columnName] = sortData.split("@");
        columnName = getKey(columnName);

        let newlySortedData = [...data]
        mergeSort(newlySortedData, columnName, 0, newlySortedData.length - 1);
        if (order === 'desc') {
            newlySortedData.reverse();
        }

        setSortedData(newlySortedData);
    }, [sortData, data])

    console.log("sortedData", sortedData)
    return (
        <div className='mt-5 '>
            <table className='w-full'>
                <thead className=''>
                    <tr className='border-b-[1px] border-gray-200 text-gray-500 text-left'>
                        <th className='mr-5 py-2 text-left '>
                            <ColumnHeading column_Heading="Planet Name" setSortData={setSortData} />
                        </th>
                        <th className='mr-5 py-2 text-left '>
                            <ColumnHeading column_Heading="Host Name" setSortData={setSortData} />
                        </th>
                        <th className='mr-5 py-2 text-left '>
                            <ColumnHeading column_Heading="Discovery Method" setSortData={setSortData} />
                        </th>
                        <th className='mr-5 py-2 text-left '>
                            <ColumnHeading column_Heading="Discovery Year" setSortData={setSortData} />
                        </th>
                        <th className='mr-5 py-2 text-left '>
                            <ColumnHeading column_Heading="Discovery Facility" setSortData={setSortData} />
                        </th>
                    </tr>
                </thead>
                <tbody className='text-left'>
                    {
                        sortedData.map((d, index) => {
                            return (
                                <EachRow key={index} {...d} />
                            )
                        })
                    }
                </tbody>
            </table>
            <div className='text-center mt-5 absolute bottom-7 left-1/3'>Data collected from <span className='text-blue-500'> <a href="https://exoplanetarchive.ipac.caltech.edu/cgi-bin/TblView/nph-tblView?app=ExoTbls&config=PSCompPars" target='_blank' rel="noopener noreferrer">this table</a></span>. You can read about it <span className='text-blue-500'><a href="https://exoplanetarchive.ipac.caltech.edu/docs/pscp_about.html" target='_blank' rel="noopener noreferrer">
                here</a></span>.
            </div>
        </div>
    )
}

ShowData.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            disc_facility: PropTypes.string,
            disc_method: PropTypes.string,
            disc_year: PropTypes.string,
            hostname: PropTypes.string,
            planet_name: PropTypes.string,
        })
    ).isRequired
}

export default ShowData