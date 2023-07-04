import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Basket from "./components/Basket";

function App() {

  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/basket" element={<Basket/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
