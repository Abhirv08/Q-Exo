import { useState } from 'react';
import InputBox from './InputBox';
import ShowData from './ShowData';
import PropTypes from 'prop-types';

const DisplayBox = ({ csvData, distinctColumnData, setPopUpMessage }) => {

    const { hostname = [], disc_method = [], disc_year = [], disc_facility = [] } = distinctColumnData;
    const [selectedHostName, setSelectedHostName] = useState('');
    const [selectedDisc_method, setSelectedDisc_method] = useState('');
    const [selectedDisc_year, setSelectedDisc_year] = useState('');
    const [selectedDisc_facility, setselectedDisc_facility] = useState('');
    const [isDataAvailable, setIsDataAvailable] = useState(false);
    const [filteredData, setFilteredData] = useState([]);

    const filterData = () => {

        const filtered = csvData.filter((key) => {
            if (
                (selectedDisc_facility === "" || key.disc_facility === selectedDisc_facility) &&
                (selectedDisc_method === "" || key.disc_method === selectedDisc_method) &&
                (selectedDisc_year === "" || key.disc_year === selectedDisc_year) &&
                (selectedHostName === "" || key.hostname === selectedHostName)
            ) {
                return true;
            }
            return false;
        })

        setIsDataAvailable(true)
        setFilteredData(filtered);
        if (filtered.length === 0) {
            setPopUpMessage("No Exo Planet has been discovered with such conditions. Please select some other combination...");

            setTimeout(() => {
                setPopUpMessage("")
            }, 5000);
        }
    }

    const handleSearch = () => {
        if (selectedHostName === "" && selectedDisc_facility === "" && selectedDisc_method === "" && selectedDisc_year === "") {
            setFilteredData([]);
            setPopUpMessage("Please select something...");
            setTimeout(() => {
                setPopUpMessage("")
            }, 5000);
            return;
        }
        setPopUpMessage("")
        filterData()
    }

    const handleClear = () => {
        setSelectedHostName('')
        setSelectedDisc_method('')
        setSelectedDisc_year('')
        setselectedDisc_facility('')
        setIsDataAvailable(false)
    }

    return (
        <div className='bg-white h-full w-full border-2 rounded-lg p-5 overflow-hidden'>
            <div className='grid gap-2 sm:gap-4 place-content-center sm:grid-cols-2 lg:grid-cols-5'>
                <InputBox options={hostname} input_box_for="Host Name" selectedValue={selectedHostName}
                    setSelectedValue={setSelectedHostName} />
                <InputBox options={disc_method} input_box_for="Discovery Method" selectedValue={selectedDisc_method}
                    setSelectedValue={setSelectedDisc_method} />
                <InputBox options={disc_year} input_box_for="Discovery Year" selectedValue={selectedDisc_year}
                    setSelectedValue={setSelectedDisc_year} />
                <InputBox options={disc_facility} input_box_for="Discovery Facility" selectedValue={selectedDisc_facility}
                    setSelectedValue={setselectedDisc_facility} />

                <div className='flex justify-center gap-4 h-10 sm:col-span-2 lg:col-span-1'>
                    <div className='bg-[#385898] flex items-center justify-center text-white w-16 h-full rounded-md cursor-pointer' onClick={handleSearch}>Search</div>
                    <div className='bg-[#385898] flex items-center justify-center text-white w-16 h-full rounded-md cursor-pointer' onClick={handleClear}>Clear</div>
                </div>
            </div>
            {!isDataAvailable && <div className='h-full pb-10 flex items-center justify-center'>
                <div className='text-center text-2xl font-bold mt-5 '>
                    Exoplanets are planets outside the Solar System. <br />
                    Here you can query
                    <span className='text-blue-500'>
                        <a href='https://exoplanetarchive.ipac.caltech.edu/' target='_blank' rel="noopener noreferrer">{" "} {`NASA's Exoplanet Archive`}</a>
                    </span>
                    {" "}and find the one you love the most.
                </div>
            </div>}
            {
                isDataAvailable && <ShowData data={filteredData} />
            }
        </div>
    )
}

DisplayBox.propTypes = {
    csvData: PropTypes.arrayOf(
        PropTypes.shape({
            disc_facility: PropTypes.string,
            disc_method: PropTypes.string,
            disc_year: PropTypes.string,
            hostname: PropTypes.string,
            planet_name: PropTypes.string,
        })
    ).isRequired,
    distinctColumnData: PropTypes.shape({
        hostname: PropTypes.arrayOf(PropTypes.string),
        disc_method: PropTypes.arrayOf(PropTypes.string),
        disc_year: PropTypes.arrayOf(PropTypes.string),
        disc_facility: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    setPopUpMessage: PropTypes.func.isRequired,
};

export default DisplayBox   