import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import StartPage from "./compoments/StartPage";
import Rules from "./compoments/Rules";
import DimD from "./compoments/DimD";
import Ulag from "./compoments/U_lag";
import Lag from "./compoments/Lag";
import Error404 from "./compoments/error404";

import NavbarNew from "./compoments/Navbartest";
import ThrowDart from "./compoments/ThrowDart";
import NavBar from "./compoments/Navbartest/NavBar";
import DomdComp from "./compoments/DomdCompetition";
//<NavbarNew/>
//<Route exact path="ulag" element={<Ulag />} />
//<Route exact path="lag" element={<Lag />} />

function App() {
  const domdDate = new Date("04/11/2024");
  const currentDate = new Date();
    
  // To calculate the time difference of two dates
  const differenceInTime = domdDate.getTime() - currentDate.getTime();
    
  // To calculate the no. of days between two dates
  const daysUntilDomd = Math.floor(differenceInTime / (1000 * 3600 * 24));
  console.log(daysUntilDomd)
  
  if (daysUntilDomd >= 100) {
    return (
      <Router>
        {/* <NavbarNew /> */}
        <NavBar />
        <Routes>
          <Route exact path="/" element={<StartPage />} />
          <Route exact path="/domd.nu" element={<StartPage />} />
          <Route exact path="/dimd" element={<DimD />} />
          <Route exact path="/rules" element={<Rules />} />
          <Route exact path="/start" element={<StartPage />} />
          <Route exact path="/kastapil" element={<ThrowDart />} />
          <Route exact path="/tavling" element={<DomdComp />} />
        </Routes>
      </Router>
    );
  }
  
  return <Error404></Error404>
}

export default App;
