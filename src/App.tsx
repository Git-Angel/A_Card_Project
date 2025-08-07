import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import CardValid from "./views/CardValid";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card-valid" element={<CardValid />} />
      </Routes>
    </Router>
  );
};

export default App;
