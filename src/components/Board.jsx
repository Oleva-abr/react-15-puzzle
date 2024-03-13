import React, { useState } from "react";

const Board = () => {
  const [tiles, setTiles] = useState([...Array(16).keys()]);
  const isWinner = checkWin();

  const handleTileClick = (clickedIndex) => {
    const zeroIndex = tiles.indexOf(0);
    const clickedRow = Math.floor(clickedIndex / 4);
    const clickedCol = clickedIndex % 4;
    const zeroRow = Math.floor(zeroIndex / 4);
    const zeroCol = zeroIndex % 4;
    const distance =
      Math.abs(clickedRow - zeroRow) + Math.abs(clickedCol - zeroCol);
    if (distance === 1) {
      const newTiles = [...tiles];
      newTiles[zeroIndex] = tiles[clickedIndex];
      newTiles[clickedIndex] = 0;
      setTiles(newTiles);
    }
  };
  const checkWin = () => {
    for (let i = 0; i < tiles.length - 1; i++) {
      if (tiles[i] !== i + 1) {
        return false;
      }
    }
    return true;
  };

  const renderTiles = () => {
    return tiles.map((tile, index) => (
      <div key={index} className="tile" onClick={() => handleTileClick(index)}>
        {tile === 0 ? "" : tile}
      </div>
    ));
  };

  return (
    <div className="board">
      {isWinner ? (
        <div className="winner-message">You Win!</div>
      ) : (
        renderTiles()
      )}
    </div>
  );
};

export default Board;
