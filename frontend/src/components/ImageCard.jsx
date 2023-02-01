import PropTypes from "prop-types";
import React from "react";

function ImageCard({ picture }) {
  return (
    <div>
      <img src={picture} alt="boss_image" />
    </div>
  );
}

ImageCard.propTypes = {
  picture: PropTypes.string.isRequired,
};

export default ImageCard;
