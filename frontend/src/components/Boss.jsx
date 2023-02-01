import PropTypes from "prop-types";
import React from "react";
import "./Boss.css";

function Boss({ name, location, mandatory, description, difficulty, picture }) {
  return (
    <div className="card">
      <span className="name">{name}</span>
      <span className="location">{location}</span>
      <span className="mandatory">{`Obligatoire: ${mandatory}`}</span>
      <div className="description">{description}</div>
      <span className="difficulty">{`🌶️ ${difficulty}/10`}</span>
      <div style={{ backgroundImage: `url(${picture}` }} className="image" />
    </div>
  );
}

Boss.propTypes = {
  description: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  mandatory: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default Boss;
