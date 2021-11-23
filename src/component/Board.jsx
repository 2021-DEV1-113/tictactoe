import React from "react";

import Square from "./Square";
import "./Board.css";

const Board = ({ board, onSquareClick }) => {
  return (
    <div className="board">
      {board.map((square, i) => {        
        return (
          <Square
            key={`square-${i}`}
            square={square}
            onClick={() => {
              onSquareClick(i)
            }}
          ></Square>
        );
      })}
    </div>
  );
};

export default Board;
