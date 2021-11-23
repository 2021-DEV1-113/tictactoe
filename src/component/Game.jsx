import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

import Board from "./Board";
import { calculateWinner } from './../helpers/logicHelpers';
import './Game.css'

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaysNext, setXPlaysNext] = useState(true);
  const [occupiedSquares, setOccupiedSquares] = useState(0);
  const [message, setMessage] = useState("blue's turn");

  const onSquareClick = (index) => {    
    if(!calculateWinner(board) && !board[index]){
      const boardClone = [...board];
      boardClone[index] = xPlaysNext ? 'x' : 'o';
      setBoard(boardClone);
      const winner = calculateWinner(boardClone);
      setOccupiedSquares(occupiedSquares+1);
      if(winner){
        const message = winner === 'x' ? "blue wins" : "red wins";
        setMessage(message)
      } else {
        if(occupiedSquares >= 8) {
          setMessage('draw')
        } else {
          setXPlaysNext(!xPlaysNext);
          const message = xPlaysNext ? "blue's turn" : "red's turn";
          setMessage(message);
        }        
      }
    }
  };

  return (
    <div>
      <div className='title'>Tic tac toe</div>
      <Board board={board} onSquareClick={onSquareClick}></Board>      
      <span className="playersTurn">{message}</span>      
      <div className='restart-button'>
        <Button variant="primary" onClick={()=>{
          setBoard(Array(9).fill(null));
          setXPlaysNext(true);
          setMessage('');
          setOccupiedSquares(0);
        }}>
          Restart game
        </Button>
      </div>      
    </div>
  );
};

export default Game;
