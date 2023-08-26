import PropTypes from 'prop-types'

const ColumnHeading = ({ column_Heading, setSortData }) => {

    const handleDescClick = () => {

        setSortData(`desc@${column_Heading}`);
    }

    const handleAscClick = () => {
        setSortData(`asc@${column_Heading}`);
    }

    return (
        <div className='flex items-center gap-5'>
            <p>{column_Heading}</p>
            <div className='flex'>
                <div className='relative'>
                    <svg viewBox="0 0 24 24" onClick={handleDescClick} focusable="false" className="w-4 h-4 cursor-pointer text-black sort"><path fill="currentColor" d="M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"></path></svg>
                    <p className="tooltip" >Descending Order</p>
                </div>
                <div className="relative">
                    <svg viewBox="0 0 24 24" onClick={handleAscClick} focusable="false" className="w-4 h-4 cursor-pointer text-black sort"><path fill="currentColor" d="M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"></path></svg>
                    <p className='tooltip'>Ascending Order</p>
                </div>
            </div>
        </div>
    )
}

ColumnHeading.propTypes = {
    column_Heading: PropTypes.string.isRequired,
    setSortData: PropTypes.func.isRequired
}

export default ColumnHeading