import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

import Board from "./Board";
import { calculateWinner } from './../helpers/logicHelpers';
import './Game.css'

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaysNext, setXPlaysNext] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [winner, setWinner] = useState(null);

  const onSquareClick = (index) => {    
    setErrorMessage('');
    if(calculateWinner(board)){
      setErrorMessage('there is already a winner');
      return;
    } else if(board[index]){
      setErrorMessage('the square is already occupied');
      return
    } else {
      const boardClone = [...board];
      boardClone[index] = xPlaysNext ? 'x' : 'o';
      setBoard(boardClone);
      const winner = calculateWinner(boardClone);
      if(winner){
        setWinner(winner)
      } else {
        setXPlaysNext(!xPlaysNext);
      }
    }
  };

  return (
    <div>
      <span className='title'>Tic tac toe</span>
      <Board board={board} onSquareClick={onSquareClick} xPlaysNext={xPlaysNext} errorMessage={errorMessage}></Board>
      {
        winner
          ? <span>{winner==='x' ? "blue wins" : "red wins"}</span>
          : errorMessage
            ? <span className="errorMessage">{errorMessage}</span>
            : <span className="playersTurn">{xPlaysNext ? "blue's turn" : "red's turn"}</span>
      }
      <Button variant="primary" className='restart-button' onClick={()=>{
        setBoard(Array(9).fill(null));
        setWinner(null);
        setXPlaysNext(true);
        setErrorMessage('');
      }}>Restart game</Button>
    </div>
  );
};

export default Game;
