import React from "react";
 //import Home from "./page/Home";
import User from "./page/User";
import Navber from "./page/Navber";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Navber />
      <BrowserRouter>
        <Routes>
          {/* <Route  path="/" element={<Home />} /> */}
          <Route  path="/" element={<User />} />
        </Routes>
      </BrowserRouter>
     
    
    </div>
  );
}

export default App;
