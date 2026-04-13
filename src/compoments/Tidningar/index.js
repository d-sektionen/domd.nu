import React from "react";
import { Box } from "@mui/material";

import TidningViewer from "./TidningViewer";
// Import the background

// import Bakgrund from "../../res/background/darttavla_far.jpg";
import Bakgrund from "../../res/domd2026/Affish_DOMD_REGLER.png"

const Tidningar = () => {
  return (
    <Box
    sx={{
      width: "100vw",
      minHeight: "100vh",
      backgroundImage: `url(${Bakgrund})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: { xs: "250%", sm: "180%", md: "100%" }, // Zoomar in ännu mer på små skärmar
      backgroundPosition: { xs: "center -100px", sm: "center -50px", md: "center" }, // Flyttar upp mer
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
    >
    <TidningViewer />
    
    </Box>
  );
};

export default Tidningar;
