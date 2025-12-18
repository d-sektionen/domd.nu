import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";


// Här läggs temat för DÖMD
import domd from "../../../res/domd2025/Kopia av dömd temalös logga 4 appen.png";
import backgroundImage from "../../../res/dart_utan_banner.gif";

// Set the event date
const EVENT_DATE = new Date("2026-04-23T22:00:00");

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function getTimeRemaining() {
    const now = new Date().getTime();
    const distance = EVENT_DATE - now;

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine font sizes based on screen width
  const baseFontSize = `clamp(50px, 10vw, 150px)`; // Min 24px, max 80px, skalar dynamiskt
  const labelFontSize = `clamp(16px, 4vw, 40px)`; // Min 12px, max 30px
  const spacing = `clamp(15px, 6vw, 80px)`; // Min 10px, max 50px
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        minHeight: "100vh", // Säkerställer att hela sidan fylls
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      {/* Overlay för bättre kontrast */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Mörklägger bakgrunden något
        }}
      />

      {/* Timer & innehåll */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1, // Lägger detta ovanpå overlay
          padding: "2vw",
          borderRadius: "10px",
        }}
      >
        {/* Timer */}
  
        <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: spacing,
    fontFamily: "Courier New",
    color: "#FF69B4",
    textShadow: "0 0 10px #FFD700, 0 0 20px #FFD700",
    padding: "2vw 4vw",
    borderRadius: "10px",
    width: "100%",
    marginTop: 5,
  }}
>
  {[
    { label: "DAYS", value: timeLeft.days },
    { label: "HRS", value: timeLeft.hours },
    { label: "MIN", value: timeLeft.minutes },
    { label: "SEC", value: timeLeft.seconds },
  ].map((item) => (
    <Box key={item.label} textAlign="center">
      <Typography sx={{ fontSize: baseFontSize, fontWeight: "bold", lineHeight: 1.1 }}>
        {item.value}
      </Typography>
      <Typography sx={{ fontSize: labelFontSize }}>{item.label}</Typography>
    </Box>
  ))}
</Box>


        {/* Bilden */}
        <img
          src={domd}
          alt="Event Countdown"
          style={{
            width: "100%",
            maxWidth: "1000px",
            height: "auto",
            borderRadius: "10px",
            marginTop: "-50px",
          }}
        />
      </Box>
    </Box>
  );
};

export default CountdownTimer;
