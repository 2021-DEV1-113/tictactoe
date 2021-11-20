import React from "react";
import PropTypes from "prop-types";

import Square from "./Square";
import "./Board.css";

const boardSize = 3;

const grid = Array(boardSize)
  .fill(0)
  .map(columns => Array(boardSize).fill(0));

console.log(grid);

const squareClick = (columnIndex, rowIndex) => {
  console.log("r");
  grid[columnIndex][rowIndex] = 1;
  console.log(grid);
};

const rows = grid.map((row, rowIndex) => {
  return (
    <tr className="row">
      {row.map((column, columnIndex) => {
        return (
          <Square
            squareValue={grid[columnIndex][rowIndex]}
            squareClick={squareClick}
            columnIndex={columnIndex}
            rowIndex={rowIndex}
          />
        );
      })}
    </tr>
  );
});

const Board = ({}) => {
  return <div className="board">{rows}</div>;
};

export default Board;
