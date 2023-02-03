import PropTypes from "prop-types";
import React from "react";
import "./UpdateCardInput.css";

function updateCardInput({
  id,
  label,
  type,
  name,
  placeholder,
  value,
  updateBoss,
  setUpdateBoss,
}) {
  const handleChange = (e) => {
    setUpdateBoss({
      ...updateBoss,
      [e.target.name]: e.target.value,
    });
  };
  // console.log(updateBoss, "ICI");

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

updateCardInput.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  updateBoss: PropTypes.func.isRequired,
  setUpdateBoss: PropTypes.func.isRequired,
};

export default updateCardInput;
