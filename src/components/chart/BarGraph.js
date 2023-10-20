import React from "react";
import "./BarGraph.css"; // Create a CSS file for your styling

const data = [180, 180, 180, 180]; // Sample data for the bars
const content = [
  "<500 Followings",
  "500-1k Followings",
  "1-1.5k Followings",
  ">1.5k Followings",
];

function BarGraph() {
  const maxValue = Math.max(...data);

  return (
    <div className="bar-graph">
      {data.map((value, index) => (
        <div key={index} className="bar-container">
          <div
            className="bar-filled"
            style={{
              height: 120 - value + "%",
              backgroundColor: "#4B6188", // Blue color for filled bars
            }}
          >
            tt
          </div>
          <div
            className="content"
            style={{ fontSize: "8px", color: "#000" }} // Set the color to black for unfilled bars
          >
            {content[index]}
          </div>
        </div>
      ))}
    </div>
  );
}

export default BarGraph;
