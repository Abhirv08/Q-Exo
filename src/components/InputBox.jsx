

const InputBox = ({ options, input_box_for, selectedValue, setSelectedValue }) => {

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div className="select">
            <select value={selectedValue} onChange={handleChange}>
                <option key="name_of_input_box" value="">{input_box_for}</option>
                {options.map((option) => <option value={option} key={option} >{option}</option>)}
            </select>
            <span className="focus"></span>
        </div>
    )
}

export default InputBox