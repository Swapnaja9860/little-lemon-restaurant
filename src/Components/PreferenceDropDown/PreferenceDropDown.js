import './PreferenceDropDown.css'

const PreferenceDropDown = ({options, selectedOption, handleSelect, label}) => {

  return (
    <div className='preference'>
     <label>{label} </label>
     <select onChange={handleSelect}>
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
