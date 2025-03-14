import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

// Set the event date
const EVENT_DATE = new Date("2025-04-10T22:00:00");

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
  const baseFontSize = windowWidth < 768 ? "6vw" : "4vw"; // Bigger font on mobile
  const labelFontSize = windowWidth < 768 ? "4vw" : "1.5vw"; // Adjust label size dynamically
  const spacing = windowWidth < 768 ? "5vw" : "2vw"; // Adjust spacing

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: spacing,
        fontFamily: "Courier New",
        color: "#FF69B4",
        textShadow: "0 0 5px #FFD700, 0 0 10px #FFD700",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        marginTop : 6
      }}
    >
      {[
        { label: "DAYS", value: timeLeft.days },
        { label: "HRS", value: timeLeft.hours },
        { label: "MIN", value: timeLeft.minutes },
        { label: "SEC", value: timeLeft.seconds },
      ].map((item) => (
        <Box key={item.label} textAlign="center">
          <Typography sx={{ fontSize: baseFontSize, fontWeight: "bold" }}>
            {item.value}
          </Typography>
          <Typography sx={{ fontSize: labelFontSize }}>{item.label}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default CountdownTimer;
