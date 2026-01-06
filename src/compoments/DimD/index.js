import React from "react";
import { Box, Typography } from "@mui/material";

import DIMD_background from "../../res/background/DIMD_background.webp";

const winners = [
  { year: 2025, name: "Marc Taylor" },
  { year: 2024, name: "Anton Bergman" },
  { year: 2023, name: "Linus Göransson" },
  { year: 2022, name: "Carl Wikström" },
  { year: 2021, name: "Payam Tavakoli" },
  { year: 2020, name: "Theodor Fällman" },  
  { year: 2019, name: "Theodor Fällman" },
  { year: 2018, name: "Marcus Jonsson" },
  { year: 2017, name: "Tim Lestander" },
  { year: 2016, name: "Sebastian Ragnarsson" },
  { year: 2015, name: "Tobias Hultqvist" },
];

function DimD() {
  return (
    <Box
      sx={{
        width: "100%",
        marginTop: "55px",
        paddingBottom: "10px",
        backgroundColor: "#000000", 
      }}
    >
    {winners.map((winner) => (
      <Box 
      key={winner.year} 
      sx={{
        position: "relative",
        // mb: 3,
        overflow: "hidden",
      }}>
        {/* Blurred layer */}
      <Box
        sx={{
          filter: {xs:"blur(2px)", md:"blur(4px)"},
          transform: {xs:"scale(1.05)", md:"scale(1.1)"},
        }}
        >
        {/* Background Image */}
        <Box
          component="img"
          src={DIMD_background}
          alt = {winner.name}
          sx={{
            width: "100%",
            display: "block",
          }}
        /> 
        {/* Behind the winner text */}
        <Typography
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",   
              alignItems: "flex-start",
              justifyContent: "center",
              pointerEvents: "none",
              textAlign: "center",
              paddingLeft: "10%",
            }}
          >
            {/* Small text */}
            <Box
              component="span"
              sx={{
                fontSize: "clamp(1.2rem, 3vw, 2.5rem)",
                fontWeight: 700,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "rgba(255, 255, 255, 0.9)",
                opacity: 0.7,
                marginBottom: "-0.5rem", 
              }}
            >
              Winner of DIMD
            </Box>

            {/* Big year */}
            <Box
              component="span"
              sx={{
                fontSize: "clamp(6rem, 20vw, 16rem)",
                fontWeight: 900,
                letterSpacing: "0.1em",
                lineHeight: 0.9,
                color: "rgba(255, 255, 255, 0.9)",
              }}
            >
              {winner.year}
            </Box>
        </Typography>
      </Box>

        {/* Dark Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: 1,
          }} 
        />

        {/* THE WINNER */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: {
                xs: "2rem",
                sm: "4rem",
                md: "6.5rem",
              },
              color: "#fff",
              textAlign: "center",
              py: 1,
              textShadow: "0 4px 12px black",
              fontWeight: "bold",
            }}
          >
            {winner.name} 
            </Typography>
        </Box>
      </Box>
    ))}
  </Box>
  );
};

export default DimD;
