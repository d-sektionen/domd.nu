import React from "react";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";

import StartPage from "./compoments/StartPage"
import Rules from "./compoments/Rules"
import DimD from "./compoments/DimD";
import Ulag from "./compoments/U_lag";


import NavbarNew from "./compoments/Navbartest";



function App() {

  return (
    <Router>
      <NavbarNew/>
      <Routes>
        <Route exact path="/" element={<StartPage/>} />
        <Route exact path="/domd.nu" element={<StartPage/>} />
        <Route exact path="/dimd" element={<DimD/>} />
        <Route exact path="/rules" element={<Rules/>} />
        <Route exact path="/start" element={<StartPage/>} />
        <Route exact path="ulag" element={<Ulag/>}/>
      </Routes>
    </Router>
  );
}

export default App;
