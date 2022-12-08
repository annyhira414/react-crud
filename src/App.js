import React from "react";
 //import Home from "./page/Home"
import Navber from "./page/Navber";
import Add from "./component/Add";
import Details from "./component/Details";

import User from "./page/User";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Edit from "./component/Edit";


function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navber />
      <Routes>
      <Route path="/" element={<User />} />
      <Route path="/user" element={<Add />} />
      <Route path="/edit/:userId" element={<Edit/>} />
     <Route path="/details/:userId" element={<Details/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
