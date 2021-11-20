import React, { useState } from "react";
import PropTypes from "prop-types";

import Square from "./Square";
import "./Board.css";

const Board = ({ board, onClick }) => {
  return (
    <div className="board">
      {board.map(i => {
        return (
          <Square
            value={i}
            onClick={() => {
              console.log("test");
            }}
          ></Square>
        );
      })}
    </div>
  );
};

export default Board;
