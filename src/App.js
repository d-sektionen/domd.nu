import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import StartPage from "./compoments/StartPage";
import Rules from "./compoments/Rules";
import DimD from "./compoments/DimD";
import Ulag from "./compoments/U_lag";
import Lag from "./compoments/Lag";
import Error404 from "./compoments/error404";

import NavbarNew from "./compoments/Navbartest";

//<NavbarNew/>
//<Route exact path="ulag" element={<Ulag />} />
//<Route exact path="lag" element={<Lag />} />

function App() {
  return (
    <Router>
      <NavbarNew />
      <Routes>
        <Route exact path="/" element={<StartPage />} />
        <Route exact path="/domd.nu" element={<StartPage />} />
        <Route exact path="/dimd" element={<DimD />} />
        <Route exact path="/rules" element={<Rules />} />
        <Route exact path="/start" element={<StartPage />} />
      </Routes>
    </Router>
  );
}

export default App;