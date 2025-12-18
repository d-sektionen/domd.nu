import React from "react";
import { Typography, Grid, Box } from "@mui/material";

import musicPlayerBackground from "../../../res/images/Slideshow/35.jpg"

const Musicplayer = () => {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(128, 128, 128, 0.6), rgba(128, 128, 128, 0.6)), url(${musicPlayerBackground})`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        textAlign: "center",
        mt: 0,
        mb: 0,
        pb: 4,
      }}
    >
      {/* Titeltext */}
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          mt: 2,
          fontWeight: "bold",
          textShadow: "1px 3px blue, 0 0 1em #051820, 0 0 0.2em #051820",
          color: "white",
          textAlign: "center",
          mb: 2,
        }}
      >
        Lyssna på DÖMD-låtar, Tagga DÖMD!
      </Typography>

      {/* SoundCloud-spelaren med rätt höjd */}
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={10} md={8} lg={6} sx={{ display: "flex", justifyContent: "center" }}>
          <iframe
            title="Soundcloud"
            width="100%"
            height="500" // Tvinga höjd så att låtförslagen alltid syns
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/d-group/&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            style={{ maxWidth: "800px", borderRadius: "10px" }}
          ></iframe>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Musicplayer;
