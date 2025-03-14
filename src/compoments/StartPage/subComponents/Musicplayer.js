import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import SoundcloudPlayer from "react-player";

const Musicplayer = () => {
  return (
    <Box sx={{ textAlign: "center", paddingBottom: "10%" }}>
      
      {/* Centered Text */}
      <Typography
        id="dgMusik"
        variant="h5"
        gutterBottom
        sx={{
          mt: 3,
          mb: 3,
          fontWeight: "bold",
          textShadow: "1px 1px 3px blue, 0 0 1em #051820, 0 0 0.2em #051820",
        }}
      >
        Lyssna på D<span STYLE="font-size:75%">ÖM</span>D-låtar, Tagga D
        <span STYLE="font-size:75%">ÖM</span>D!
      </Typography>

      {/* SoundCloud Player */}
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <SoundcloudPlayer
            className="player"
            url="https://soundcloud.com/d-group/"
            controls={true}
            width="100%"
            height="500px"
          />
        </Grid>
      </Grid>
      
    </Box>
  );
};

export default Musicplayer;
