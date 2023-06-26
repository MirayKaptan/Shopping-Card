import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Basket from "./components/Basket";

function App() {
  const[card, setCard] = useState([])
  return (
    <Router>
      <div className="App">
        <Header card={card} setCard={setCard}/>
        <Routes>
          <Route path="/" element={<Home card={card} setCard={setCard}/>} />
          <Route path="/basket" element={<Basket card={card} setCard={setCard}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
