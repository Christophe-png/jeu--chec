import React from "react";
import Piece from "./Piece";

function PieceList(props) {
  const { pieces } = props;
  return (
    <div className="page-section">
      <div className="container">
        <section>
          {pieces.map((SinglePiece) => (
            <Piece
              key={SinglePiece.id}
              name={SinglePiece.name}
              image={SinglePiece.image}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default PieceList;
