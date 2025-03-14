import React from "react";
import { Box } from "@mui/material";

// Import Sub Components
import Slideshow from "./subComponents/slideshow";
import CountdownTimer from "./subComponents/CountdownTimer";
import Sponsors from "./subComponents/Sponsors"; 
import Aftermovies from "./subComponents/Aftermovies";
import Musicplayer from "./subComponents/Musicplayer";
import MusicPlayerButton from "./subComponents/Musicplayerbutton";

// Import the background
import Bakgrund from "../../res/background/dartBackground.jpg";

const StartPage = () => {
  return (
    <Box
      sx={{
        width: "100vw", 
        minHeight: "100vh", 
        backgroundImage: `url(${Bakgrund})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", 
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >

     {/* Countdown Timer */}
      <Box sx={{ width: "100vw"}}>
        <MusicPlayerButton />
      </Box> 

      {/* Countdown Timer */}
      <Box sx={{ width: "100vw" }}>
        <CountdownTimer />
      </Box>

      {/* Slideshow */}
      <Box sx={{width : "100vw" }}>
        <Slideshow />
      </Box>

      {/* Sponsors */}
      <Box sx={{ width: "100vw"}}>
        <Sponsors />
      </Box>

      {/* Aftermovies */}
      <Box sx={{ width: "100vw"}}>
        <Aftermovies />
      </Box>

      {/* Soundcloud */}
      <Box sx={{ width: "100vw"}}>
        < Musicplayer />
      </Box>
    </Box>
  );
};

export default StartPage;
