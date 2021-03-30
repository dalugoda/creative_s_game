import React, { useEffect, useState } from "react";

import "./App.css";
import Grid from "./components/Grid";
import { useInterval } from "./hooks/useInterval";

function App() {
  const [score, setScore] = useState(0);
  const [activeCell, setActiveCell] = useState(0);
  const [won, setWon] = useState(false);
  const [counterIncrement, setCounterIncrement] = useState(1);
  const [sliderValue, setSliderValue] = useState(0);

  useEffect(() => {
    setActiveCell(0);
  }, []);

  useInterval({
    callback: () => {
      const count = sliderValue + counterIncrement;
      if (count === 0 || count === 100) {
        setCounterIncrement(-counterIncrement);
      }

      setSliderValue(count);
    },
    delay: 20,
  });

  const onGoPress = (): void => {
    if (sliderValue > 40 && sliderValue < 60) {
      setScore(score + 10);

      //Move the player to next box
      setActiveCell(activeCell + 1);

      if (activeCell + 1 === 8) {
        setWon(true);
      }
    } else {
      //Else reset the player to first box
      setActiveCell(0);
    }
  };

  const onRestartPress = () => {
    setActiveCell(0);
    setScore(0);
    setWon(false);
  };

  return (
    <div className="container" data-testid="app">
      {won && (
        <div className="won-overlay">
          <h1>You WON !</h1>
          <button onClick={onRestartPress} className="button">
            Restart
          </button>
        </div>
      )}

      <div className="slider-container">
        <div className="slider-divider"></div>
        <input
          type="range"
          min="1"
          max="100"
          value={sliderValue}
          className="slider"
          readOnly
        />
      </div>

      <Grid activeIndex={activeCell} />
      <div className="score">
        Score: <span data-testid="score">{score}</span>
      </div>

      <button onClick={onGoPress} className="button" disabled={won}>
        GO !
      </button>
    </div>
  );
}

export default App;
