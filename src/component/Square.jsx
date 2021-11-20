import React, { useEffect } from "react";
import PropTypes from "prop-types";

import logo from "../logo.svg";
import "./Square.css";

const Square = ({ squareValue, squareClick, columnIndex, rowIndex }) => {
  console.log(squareValue);
  useEffect(
    squareValue => {
      console.log(squareValue);
    },
    [squareValue]
  );

  return (
    <div
      className={"square"}
      onClick={() => {
        console.log("squareValue");
        console.log(squareValue);
        squareClick(columnIndex, rowIndex);
        console.log(squareValue);
        console.log("squareValue");
      }}
    >
      {squareValue === 1 && <img src={logo} className="App-logo" alt="logo" />}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  );
};

Square.propTypes = {
  squareValue: PropTypes.array,
  squareClick: PropTypes.func,
  columnIndex: PropTypes.number,
  rowIndex: PropTypes.number
};

export default Square;
