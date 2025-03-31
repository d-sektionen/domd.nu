import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

// Constants
const TOTIMG = 34;

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const slides = Array.from({ length: TOTIMG }, (_, i) => ({
    imgPath: `slideshow/${i + 1}.jpg`,
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const current = slides[currentSlide];
  const isMobile = windowWidth < 768;

  return (
    <Box
      sx={{
        width: "100vw",
        height: isMobile ? "auto" : "100vh", // Auto på mobil, 100vh på desktop
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
        marginTop: "55px"
      }}
    >
      <img
        src={current.imgPath}
        alt="Slideshow"
        style={{
          width: "100%",
          height: isMobile ? "auto" : "100%",
          maxHeight: "100vh",
          objectFit: isMobile ? "contain" : "cover",
          display: "block", // Tar bort eventuella extra marginaler
        }}
      />
    </Box>
  );
};

export default Slideshow;
