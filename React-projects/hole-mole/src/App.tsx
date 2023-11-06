import { useState, useEffect } from 'react';

import './App.css';
import Hole from './assets/hole.png';
import Mole from './assets/mole.png';

function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function App() {
  const [score, setScore] = useState(0);
  const [showIndex, setShowIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const rndInt = randomIntFromInterval(0, 8);
      setShowIndex(rndInt);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function handleClick() {
    setScore((current) => ++current);
  }

  const content = [];

  for (let i = 0; i < 9; i++) {
    let item = <img src={Hole}></img>;

    if (showIndex === i) {
      item = <img src={Mole} onClick={handleClick}></img>;
    }

    content.push(item);
  }

  return (
    <div>
      <h1>Score: {score}</h1>
      <div className="container">{content}</div>
    </div>
  );
}

export default App;
