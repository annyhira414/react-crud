import React from "react";
 //import Home from "./page/Home"
import Navber from "./page/Navber";
import Add from "./component/Add";
import User from "./page/User";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navber />
      <Routes>
      <Route path="/" element={<User />} />
      <Route path="/user" element={<Add />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
