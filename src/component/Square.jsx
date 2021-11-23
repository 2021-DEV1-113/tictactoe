import React from "react";
import PropTypes from "prop-types";

import logo from "../logo.svg";
import "./Square.css";

const Square = ({ square, onClick }) => {
  let imgClassName = "react-image";
  if(square==='o') {
    imgClassName+= " oPlayer"
  }
  let squareClassName = "square";
  if(square){
    squareClassName += " occupiedSquare";
  } else {
    squareClassName += " freeSquare";
  }
  if(square){
    
  }
  return (
    <div className={squareClassName} onClick={onClick}>
      {square && <img src={logo} className={imgClassName} alt="logo" />}
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
