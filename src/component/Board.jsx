import React, { useState } from "react";
import PropTypes from "prop-types";

import Square from "./Square";
import "./Board.css";

const Board = ({ board, onSquareClick }) => {
  return (
    <div className="board">
      {board.map((square, i) => {
        
        return (
          <Square
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
