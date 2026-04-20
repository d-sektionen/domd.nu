import React, { useState } from "react";
import { Box } from "@mui/material";
import SoundcloudPlayer from "react-player";



const trackUrl = "https://soundcloud.com/d-group/du-vill-pa-doemd?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"

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
        top="85px" //65px - tidigare innan bredare navbar
        right="20px"
        zIndex={3}
        onClick={handlePlayPause}
        sx={{
          cursor: "pointer",
          backgroundColor: "rgb(255, 50, 50)",
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