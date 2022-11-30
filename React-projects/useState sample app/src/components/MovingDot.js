import { useState } from 'react';

export default function MovingDot() {
  const [test, setTest] = useState(0);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    test: 'test',
  });

  const pointMoveHandlerWrong = (event) => {
    // in this case we are mutatin the state object, which doesn't work in React.
    position.x = event.clientX;
    position.y = event.clientY;
  };

  const pointMoveHandler = (event) => {
    setPosition({ ...position, x: event.clientX, y: event.clientY });
  };

  const testStateHandler = () => {
    setTest((prevState) => ++prevState);
    console.log(test);
  };

  return (
    <div
      className="canvas"
      onPointerMove={pointMoveHandler}
      style={{
        position: 'relative',
        height: '100vh',
      }}
    >
      <div
        className="dot"
        style={{
          position: 'absolute',
          backgroundColor: 'red',
          borderRadius: '50%',
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
      <button onClick={testStateHandler}>Rerender</button>
    </div>
  );
}
