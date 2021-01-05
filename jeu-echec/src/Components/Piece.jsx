import React from "react";
import PropTypes from "prop-types";

function Piece(props) {
  const { name, image } = props;
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt={name} />
    </div>
  );
}

Piece.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Piece;
