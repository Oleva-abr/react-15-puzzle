import React, { useState } from "react";

const Board = () => {
  const [tiles, setTiles] = useState([...Array(16).keys()]);

  const renderTiles = () => {
    return tiles.map((tile, index) => (
      <div key={index} className="tile">
        {tile === 0 ? "" : tile}
      </div>
    ));
  };

  return <div className="board">{renderTiles()}</div>;
};

export default Board;
