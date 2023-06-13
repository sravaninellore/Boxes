// index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const boxesList = [
  {
    id: 1,
    size: "Large",
    color: "#fbbf24",
    fontFamily: "Bree Serif, serif",
  },
  {
    id: 2,
    size: "Medium",
    color: "#38bdf8",
    fontFamily: "Roboto, sans-serif",
  },
  {
    id: 3,
    size: "Small",
    color: "#ec4899",
    fontFamily: "Bree Serif, serif",
  },
];

function Box({ size, color, fontFamily }) {
  const boxStyle = {
    backgroundColor: color,
    fontFamily: fontFamily,
  };

  return <div className={`box ${size}`} style={boxStyle}></div>;
}

function App() {
  return (
    <div className="app">
      <h1>Boxes</h1>
      <div className="box-container">
        <Box size="Large" color="#fbbf24" fontFamily="Bree Serif, serif" />
        <Box size="Medium" color="#38bdf8" fontFamily="Roboto, sans-serif" />
        <Box size="Small" color="#ec4899" fontFamily="Bree Serif, serif" />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
