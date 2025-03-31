import React from "react";
import { Grid, Box } from "@mui/material";
import Tidning2023 from "./subComponents/tidning2023";
import Tidning2024 from "./subComponents/tidning2024";
import Tidning2022 from "./subComponents/tidning2022";
import TidningViewer from "./subComponents/TidningViewer";
// Import the background
import Bakgrund from "../../res/domd2025/affish.jpg";

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
  <Box sx={{ width: "100vw"}}>
        <TidningViewer/>
      </Box> 
    </Box>
  );
};

export default Tidningar;
