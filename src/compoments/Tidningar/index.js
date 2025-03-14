import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import Tidning2023 from "./subComponents/tidning2023";
import Tidning2024 from "./subComponents/tidning2024";
// Import the background
import Bakgrund from "../../res/background/dartBackground.jpg";

const Tidningar = () => {
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
     <Box sx={{ width: "100vw"}}>
        <Tidning2024/>
      </Box> 
     
     <Box sx={{ width: "100vw"}}>
        <Tidning2023/>
      </Box> 

    </Box>
  );
};

export default Tidningar;
