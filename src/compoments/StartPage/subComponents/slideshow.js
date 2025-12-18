import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

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

  const goNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

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

      {/* Left arrow */}
      <IconButton
        onClick={goPrev}
        sx={{
          position: "absolute",
          left: 10,
          zIndex: 2,
          color: "white",
          backgroundColor: "rgba(0,0,0,0.3)",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
        }}
      >
        <ChevronLeftIcon fontSize="large" />
      </IconButton>

      {/* Right arrow */}
      <IconButton
        onClick={goNext}
        sx={{
          position: "absolute",
          right: 10,
          zIndex: 2,
          color: "white",
          backgroundColor: "rgba(0,0,0,0.3)",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
        }}
      >
        <ChevronRightIcon fontSize="large" />
      </IconButton>



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
