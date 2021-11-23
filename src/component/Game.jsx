import React, { useState } from "react";

import Board from "./Board";
import { calculateWinner } from './../helpers/logicHelpers';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaysNext, setXPlaysNext] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const onSquareClick = (index) => {
    const boardClone = [...board];
    if(calculateWinner(board)){
      setErrorMessage('there is already a winner');
      return;
    } else if(boardClone[index]){
      setErrorMessage('the square is already occupied');
      return
    } else {
      boardClone[index] = xPlaysNext ? 'x' : 'o';
      setBoard(boardClone);
      setXPlaysNext(!xPlaysNext);
    }
  };

  return (
    <div>
      Tic tac toe
      <Board board={board}></Board>
    </div>
  );
};

export default Game;
