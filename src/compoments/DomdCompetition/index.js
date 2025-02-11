import React, { useState } from "react";
import GroupStage from "./GroupStage";
import FinalStage from "./FinalStage";
import { Button, Box } from "@mui/material";

const DomD = () => {
  const [currentStage, setCurrentStage] = useState("group");

  const themeStyle = {
    backgroundColor: "#121212", // Dark mode
    color: "#ffffff",
    minHeight: "100vh",
  };

  return (
    <Box sx={{ textAlign: "center", padding: "20px" }} style={themeStyle}>
      <h1>''</h1>

      {/* Toggle Buttons */}
      <Box sx={{ marginBottom: "20px" }}>
        <Button
          variant={currentStage === "group" ? "contained" : "outlined"}
          onClick={() => setCurrentStage("group")}
          sx={{
            margin: "10px",
            color: currentStage === "group" ? "#fff" : "#FF00CC",
            backgroundColor: currentStage === "group" ? "#FF00CC" : "transparent",
            borderColor: "#FF00CC",
            '&:hover': {
              backgroundColor: currentStage === "group" ? "#FF33CC" : "#FF33CC",
              borderColor: "#FF33CC",
              color: "#fff",
            },
            transition: "background-color 0.3s ease, border-color 0.3s ease"
          }}
        >
          Gruppspel
        </Button>

        <Button
          variant={currentStage === "final" ? "contained" : "outlined"}
          onClick={() => setCurrentStage("final")}
          sx={{
            margin: "10px",
            color: currentStage === "final" ? "#fff" : "#FF00CC",
            backgroundColor: currentStage === "final" ? "#FF00CC" : "transparent",
            borderColor: "#FF00CC",
            '&:hover': {
              backgroundColor: currentStage === "final" ? "#FF33CC" : "#FF33CC",
              borderColor: "#FF33CC",
              color: "#fff",
            },
            transition: "background-color 0.3s ease, border-color 0.3s ease"
          }}
        >
          Slutspel
        </Button>
      </Box>

      {/* Render Components Based on Current Stage */}
      {currentStage === "group" && <GroupStage />}
      {currentStage === "final" && <FinalStage />}
    </Box>
  );
};

export default DomD;
