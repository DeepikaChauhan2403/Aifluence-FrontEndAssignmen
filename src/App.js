import "./App.css";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
