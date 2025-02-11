import React from "react";
import GroupStage from "./GroupStage";
import { Box } from "@mui/material";

const DomD = () => {
  const themeStyle = {
    backgroundColor: "#121212", // Dark mode
    color: "#ffffff",
    minHeight: "100vh",
  };

  return (
    <Box sx={{ fontSize: 30, textAlign: "center", padding: "20px", marginTop : "60px", marginBottom: "0px"}} style={themeStyle}>
      <h1>GruppSpel</h1>

      {/* Render Only Group Stage */}
      <GroupStage />
    </Box>
  );
};

export default DomD;
