import React from "react";
import { Box } from "@mui/material";


// Test picture
import testBild from "../../res/domd2025/test.png";
import testBild2 from "../../res/domd2025/test.png";
import testBild3 from "../../res/domd2025/test.png";
import testBild4 from "../../res/domd2025/test.png";
import testBild5 from "../../res/domd2025/test.png";


const themes = [
    {src: testBild, alt: "DÖMD 2025"},
    {src: testBild2, alt: "DÖMD 2024"},
    {src: testBild3, alt: "DÖMD 2023"},
    {src: testBild4, alt: "DÖMD 2022"},
    {src: testBild5, alt: "DÖMD 2021"},
];

const OldThemes = () => {
  return (
    <Box sx={{ width: "100%" }}>
      {themes.map((theme, index) => (
        <img
          key={index}
          src={theme.src}
          alt={theme.alt}
          style={{
            width: "100%",
            display: "block", // removes image gaps
          }}
        />
      ))}
    </Box>
  );
};

export default OldThemes;
