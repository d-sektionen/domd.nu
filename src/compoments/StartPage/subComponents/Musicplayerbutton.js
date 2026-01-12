import React, { useState } from "react";
import { Box } from "@mui/material";
import SoundcloudPlayer from "react-player";


// const trackUrl = "https://soundcloud.com/d-group/the-adventures-of-domd-1";
const trackUrl = "https://soundcloud.com/d-group/afterdart-det-ar-ju-lordag?si=3856d06c29e448b5a32770e9cc70e7a5&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing";

const MusicPlayerButton = ({ }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* Play Button */}
      <Box
        position="absolute"
        top="65px"
        right="20px"
        zIndex={3}
        onClick={handlePlayPause}
        sx={{
          cursor: "pointer",
          backgroundColor: "rgba(255, 255, 50, 1)",
          padding: "1px 4px",
          borderRadius: "40%",
          //boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isPlaying ? "⏸️" : "🎵"}
      </Box>

      {/* SoundCloud Player (Hidden) */}
      <Box sx={{ display: "none" }}>
        <SoundcloudPlayer url={trackUrl} playing={isPlaying} controls={false} />
      </Box>
    </>
  );
};

export default MusicPlayerButton;