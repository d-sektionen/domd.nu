import React from "react";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";

// Import Sub Components
import Slideshow from "./subComponents/slideshow";
import CountdownTimer from "./subComponents/CountdownTimer";
import Sponsors from "./subComponents/Sponsors"; 
import Aftermovies from "./subComponents/Aftermovies";
import Musicplayer from "./subComponents/Musicplayer";
import MusicPlayerButton from "./subComponents/Musicplayerbutton";


const WHITE = "#FFFFFF";

const StartPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
     {/* Countdown Timer */}
      <Box sx={{ width: "100vw"}}>
        <MusicPlayerButton />
      </Box> 


      {/* Slideshow */}
      <Box sx={{width : "100vw" }}>
        <Slideshow />
      </Box>


      {/* Countdown Timer */}
      <Box sx={{ width: "100vw" }}>
        <CountdownTimer />
      </Box>

      {/* Sponsors */}
      <Box sx={{ width: "100vw"}}>
        <Sponsors />
      </Box>

      {/* Aftermovies */}
      <Box sx={{ width: "100vw"}}>
        <Aftermovies />
      </Box>
    </Box>
  );
};

export default StartPage;
