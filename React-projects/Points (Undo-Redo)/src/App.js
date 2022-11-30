import { useState } from 'react';

function App() {
  const [points, setPoints] = useState([]);
  const [removedPoints, setRemovedPoints] = useState([]);

  const mouseClickHandler = (event) => {
    const { clientX: x, clientY: y } = event;

    setPoints((prevState) => {
      return [...prevState, { x, y }];
    });
  };

  const undoPointHandler = () => {
    const lastPoint = points.pop();
    const newPoints = points.slice(0, points.length);
    setPoints(newPoints);
    //add the removed point into the removedPoints collection
    setRemovedPoints((prevState) => {
      return [...prevState, lastPoint];
    });
  };

  const redoPointHandler = () => {
    const lastRemovedPoint = removedPoints.pop();
    const newRemovedPoints = removedPoints.slice(0, removedPoints.length);
    setRemovedPoints(newRemovedPoints);
    // return the point to the points collection
    setPoints((prevState) => {
      return [...prevState, lastRemovedPoint];
    });
  };

  const pointsContent = points.map((point, index) => (
    <div
      key={index}
      className="point"
      style={{ position: 'absolute', left: point.x - 3, top: point.y - 3 }}
    ></div>
  ));

  return (
    <>
      <div className="actions">
        <button onClick={undoPointHandler} disabled={points.length === 0}>
          Undo
        </button>
        <button
          onClick={redoPointHandler}
          disabled={removedPoints.length === 0}
        >
          Redo
        </button>
      </div>
      <div className="canvas" onMouseDown={mouseClickHandler}>
        {pointsContent}
      </div>
    </>
  );
}

export default App;
