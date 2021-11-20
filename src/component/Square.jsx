import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import logo from "../logo.svg";
import "./Square.css";

const Square = ({ value, onClick }) => {
  console.log("aaaaaaaaaaaaaaaaaa");
  console.log(value);
  return (
    <div className={"square"} onClick={onClick}>
      {value === 1 && <img src={logo} className="App-logo" alt="logo" />}
      {value}a{/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  );
};

Square.propTypes = {
  value: PropTypes.array,
  squareClick: PropTypes.func,
  columnIndex: PropTypes.number,
  rowIndex: PropTypes.number
};

export default Square;
