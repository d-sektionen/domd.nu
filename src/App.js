import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import StartPage from "./compoments/StartPage";
import Rules from "./compoments/Rules";
import DimD from "./compoments/DimD";
import Error404 from "./compoments/error404";

import ThrowDart from "./compoments/ThrowDart";
import NavBar from "./compoments/Navbartest/NavBar";
import Tidningar from "./compoments/Tidningar/";

// Import Material-UI Icons
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const SocialMediaIcons = () => (
  <div
    style={{
      position: "fixed",
      top: "10px",
      right: "60px", // Moved to the left from the edge
      display: "flex",
      gap: "10px",
      zIndex: 1000,
    }}
  >
    <a
      href="https://www.instagram.com/dgroup2425/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#E1306C", textDecoration: "none" }}
    >
      <InstagramIcon fontSize="large" />
    </a>
    <a
      href="https://www.facebook.com/DGroup2324"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#4267B2", textDecoration: "none" }}
    >
      <FacebookIcon fontSize="large" />
    </a>
  </div>
);


function App() {
  const domdDate = new Date("04/12/2025");
  const currentDate = new Date();

  // To calculate the time difference of two dates
  const differenceInTime = domdDate.getTime() - currentDate.getTime();

  // To calculate the no. of days between two dates
  const daysUntilDomd = Math.floor(differenceInTime / (1000 * 3600 * 24));
  console.log(daysUntilDomd);

  if (daysUntilDomd <= 100) {
    return (
      <Router>
        {/* Include the Social Media Icons */}
        <SocialMediaIcons />
        {/* Navigation Bar */}
        <NavBar />
        <Routes>
          <Route exact path="/" element={<StartPage />} />
          <Route exact path="/domd.nu" element={<StartPage />} />
          <Route exact path="/dimd" element={<DimD />} />
          <Route exact path="/rules" element={<Rules />} />
          <Route exact path="/start" element={<StartPage />} />
          <Route exact path="/kastapil" element={<ThrowDart />} />
          <Route exact path="/Tidningar" element={<Tidningar />} />
        </Routes>
      </Router>
    );
  }

  return <Error404 />;
}

export default App;
