import './PreferenceDropDown.css'

const PreferenceDropDown = ({options, selectedOption, handleSelect, label}) => {

  return (
    <div className='preference'>
     <label htmlFor={label}>{label} </label>
     <select onChange={handleSelect} id={label} required>
      <option value={selectedOption}>Select an option</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    </div>
  );
};

export default PreferenceDropDown;
