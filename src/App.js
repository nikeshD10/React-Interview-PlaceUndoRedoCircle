import { useState } from "react";
import "./App.css";

function App() {
  const [points, setPoints] = useState([]);
  const [undoPoints, setUndoPoints] = useState([]);

  // Handling Undo
  const handleUndo = () => {
    const poppedPoints = points.pop();
    setPoints([...points]);
    setUndoPoints((undoPoints) => [...undoPoints, poppedPoints]);
  };

  // Handling Redo
  const handleRedo = () => {
    const redoPoints = undoPoints.pop();
    setPoints((points) => [...points, redoPoints]);
  };

  // Handling Place Circle
  const handlePlaceCircle = (event) => {
    const { clientX, clientY } = event;
    setPoints((points) => [...points, { x: clientX, y: clientY }]);
  };
  return (
    <>
      <button disabled={points.length === 0} onClick={handleUndo}>
        Undo
      </button>
      <button disabled={undoPoints.length === 0} onClick={handleRedo}>
        Redo
      </button>
      <div className="App" onClick={handlePlaceCircle}>
        {points.map((point, index) => (
          <div
            key={index}
            className="point"
            style={{ left: point.x - 9 + "px", top: point.y - 8 + "px" }}
          ></div>
        ))}
      </div>
    </>
  );
}

export default App;
