import React, { useState } from "react";

import Board from "./Board";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const onSquareClick = () => {};
  return (
    <div>
      Tic tac toe
      <Board board={board}></Board>
    </div>
  );
};

export default Game;
