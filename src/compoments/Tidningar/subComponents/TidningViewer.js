import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Grid, useMediaQuery, useTheme } from "@mui/material";
import HTMLFlipBook from "react-pageflip";
import imagePaths from "../../../res/images/Tidning/imagePaths"; // Import image paths

const availableYears = Object.keys(imagePaths).reverse(); // Reverse order of years

const TidningViewer = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [loadedImages, setLoadedImages] = useState([]);
  const [flipBookKey, setFlipBookKey] = useState(0); // Unique key to force re-render
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (selectedYear) {
      setLoadedImages(imagePaths[selectedYear] || []);
      setFlipBookKey((prevKey) => prevKey + 1); // Change key to force re-render
    }
  }, [selectedYear]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="90vh" textAlign="center">
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
        sx={{
          color: "#FFC0CB",
          textShadow: "1px 1px 2px black, 0 0 3px #FF1493, 0 0 5px #FF69B4",
          textAlign: "center",
        }}
      >
        DÖMD Tidningar
      </Typography>

      {/* Year selection buttons */}
      <Grid container spacing={2} justifyContent="center">
        {availableYears.map((year) => (
          <Grid item key={year}>
            <Button
              variant={selectedYear === year ? "contained" : "outlined"}
              sx={{ 
                backgroundColor: selectedYear === year ? "#FF69B4" : "#5D4037", 
                color: "#FFC0CB", 
                '&:hover': { backgroundColor: selectedYear === year ? "#FF1493" : "#4E342E" } 
              }}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </Button>
          </Grid>
        ))}
      </Grid>

      {/* Show FlipBook if a year is selected */}
      {selectedYear && loadedImages.length > 0 ? (
        <Box mt={4} textAlign="center">
          <HTMLFlipBook
            key={flipBookKey} // Force re-render when key changes
            width={isMobile ? 500 : 1300} // Adjusted book size
            height={isMobile ? 800 : 1800}
            size="stretch"
            minWidth={500}
            maxWidth={1300}
            minHeight={800}
            maxHeight={1800}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            className="tidning"
            drawShadow={false}
            startPage={0}
            flippingTime={500}
            useMouseEvents={true}
            usePortrait={isMobile} // One side flip on mobile
            showPageCorners={true}
            clickEventForward={true}
          >
            {/* Cover page */}
            <div className="cover" data-density="hard">
              <img src={loadedImages[0]} width="100%" alt="Omslag" />
            </div>

            {/* Inner pages */}
            {loadedImages.slice(1, -1).map((src, index) => (
              <div key={index} className="page">
                <img src={src} width="100%" alt={`Sida ${index + 1}`} />
              </div>
            ))}

            {/* Back cover */}
            <div className="cover" data-density="hard">
              <img src={loadedImages[loadedImages.length - 1]} width="100%" alt="Baksida" />
            </div>
          </HTMLFlipBook>
        </Box>
      ) : (
        selectedYear && (
          <Typography variant="h6" sx={{ mt: 3, color: "red" }}>
            🚨 Inga bilder hittades för {selectedYear}! 🚨
          </Typography>
        )
      )}
    </Box>
  );
};

export default TidningViewer;
