import React from "react";
import "./Piece.css";
import PropTypes from "prop-types";

function Piece(props) {
  const { name, image } = props;
  return (
    <div className="Piece">
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
