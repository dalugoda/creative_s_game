import React, { useEffect, useState } from "react";
import marker from "../assets/marker.png";

interface GridProps {
  activeIndex: Number;
}

const Grid = ({ activeIndex }: GridProps) => {
  const [grid, setGrid] = useState(Array(9).fill(null));

  useEffect(() => {
    const newGrid = Array(9).fill(null);

    if (activeIndex >= 0 && activeIndex < newGrid.length) {
      newGrid[parseInt(activeIndex.toString())] = true;
    }

    setGrid(newGrid);
  }, [activeIndex]);

  return (
    <div className="grid-container" data-testid="grid-container">
      {grid.map((item: boolean | null, index: any) => {
        return (
          <div
            className="grid-item"
            key={index}
            data-key={index}
            data-testid="grid-block"
          >
            <div className="grid-item-inner">
              <div className="box-number">{index}</div>
              {item === true && (
                <div className="im-here" data-testid="pointer">
                  <img src={marker} alt="I'm here" />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
