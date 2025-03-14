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
  const slideshowStyles = {
    width: "100%",
    maxHeight: isMobile ? "85vh" : "1100px",
    objectFit: isMobile ? "contain" : "cover",
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: slideshowStyles.maxHeight,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
        height : "relative",
      }}
    >
      <img
        src={current.imgPath}
        alt="Slideshow"
        style={{
          width: "100%",
          height: "auto",
          maxHeight: slideshowStyles.maxHeight,
          objectFit: slideshowStyles.objectFit,
        }}
      />
    </Box>
  );
};

export default Slideshow;
