import PropTypes from "prop-types";
import React from "react";
import "./AddCardInput.css";

function AddCardInput({
  id,
  label,
  type,
  name,
  placeholder,
  value,
  addNewBoss,
  setAddNewBoss,
}) {
  const handleChange = (e) => {
    setAddNewBoss({
      ...addNewBoss,
      [e.target.name]: e.target.value,
    });
  };

  // console.log(addNewBoss);

  return (
    <div key={id} className="classNameDiv">
      <label className="classNameLabel" htmlFor={name}>
        {label}
      </label>
      <input
        onChange={handleChange}
        type={type}
        value={value}
        className="classNameInput"
        placeholder={placeholder}
        name={name}
        id={name}
      />
    </div>
  );
}

AddCardInput.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  addNewBoss: PropTypes.func.isRequired,
  setAddNewBoss: PropTypes.func.isRequired,
};

export default AddCardInput;
