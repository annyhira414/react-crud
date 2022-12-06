import React from "react";
import Home from "./page/Home";
import Navber from "./page/Navber";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Navber />
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
     
    
    </div>
  );
}

export default App;
