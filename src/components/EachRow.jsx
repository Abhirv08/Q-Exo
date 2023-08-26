import propTypes from 'prop-types'

const EachRow = ({ planet_name, hostname, disc_method, disc_year, disc_facility }) => {
    return (
        <tr className='border-b-[1px] border-gray-200'>
            <td className='pl-2 text-blue-600'>
                <a href={`https://exoplanetarchive.ipac.caltech.edu/overview/${planet_name}`} target="_blank" rel="noopener noreferrer">
                    {planet_name}
                </a>
            </td>
            <td className='pl-1.5'>{hostname}</td>
            <td className='pl-2'>{disc_method}</td>
            <td className='pl-3'>{disc_year}</td>
            <td className='pl-4'>{disc_facility}</td>
        </tr>
    )
}

EachRow.propTypes = {
    planet_name: propTypes.string,
    hostname: propTypes.string,
    disc_method: propTypes.string,
    disc_year: propTypes.string,
    disc_facility: propTypes.string
}

export default EachRow