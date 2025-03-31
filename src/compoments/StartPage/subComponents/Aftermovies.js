import React from "react";
import { Typography, Grid } from "@mui/material";
import YoutubeEmbed from "./YoutubeEmbed";
import VimeoEmbed from "./VimeoEmbed";

// Import video sources
import afterMovie22 from "../movies/afterMovie22.mp4";
import afterMovie23 from "../movies/afterMovie23.mp4";

import Musicplayer  from "./Musicplayer";

import background from "../../../res/domd2025/affish.jpg";

const VideoContainer = ({ children }) => (
  <div style={{ position: "relative", paddingTop: "56.25%", width: "100%" }}>
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
      {children}
    </div>
  </div>
);

const Aftermovies = () => {
  return (
    <Grid
      align="center"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        minHeight: "100vh", // Säkerställer att hela sidan fylls
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        marginTop: 0
      }}
    >
      {/* Aftermovies */}
      <Typography
        xs={12}
        variant="h4"
        gutterBottom
        fontFamily={"Courier New"}
        sx={{
          mx: 5,
          mt: 6,
          mb: 3,
          textShadow: "1px 1px 3px brown, 0 0 1em #FFD700, 0 0 0.2em #FFD700",
          color: "white", // Se till att texten syns mot bakgrunden
        }}
      >
        Aftermovies
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={11} lg={4} margin={3}>
          <video width="100%" controls>
            <source src={afterMovie23} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Grid>
        <Grid item xs={11} lg={4} margin={3}>
          <video width="100%" controls>
            <source src={afterMovie22} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Grid>
        <Grid item xs={11} sm={8} md={6} lg={4} margin={3} sx={{ width: "100%" }}>
          <VideoContainer>
            <YoutubeEmbed embedId="aU4x0WtvJIs" />
          </VideoContainer>
        </Grid>
        <Grid item xs={11} sm={8} md={6} lg={4} margin={3} sx={{ width: "100%" }}>
          <VideoContainer>
            <YoutubeEmbed embedId="qwltF5RATTE" />
          </VideoContainer>
        </Grid>
        <Grid item xs={11} sm={8} md={6} lg={4} margin={3} sx={{ width: "100%" }}>
          <VideoContainer>
            <VimeoEmbed embedId="816998178" />
          </VideoContainer>
        </Grid>
      </Grid>

      {/* Taggfilmer */}
      <Typography
        variant="h4"
        gutterBottom
        fontFamily={"Courier New"}
        sx={{
          mt: 6,
          mb: 3,
          textShadow: "1px 1px 3px blue, 0 0 1em #051820, 0 0 0.2em #051820",
          color: "white",
        }}
      >
        Taggfilmer
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={11} sm={8} md={6} lg={4} margin={3} sx={{ width: "100%" }}>
          <VideoContainer>
            <VimeoEmbed embedId="816998178" />
          </VideoContainer>
        </Grid>
        <Grid item xs={11} sm={8} md={6} lg={4} margin={3} sx={{ width: "100%" }}>
          <VideoContainer>
            <VimeoEmbed embedId="694777821" />
          </VideoContainer>
        </Grid>
        <Grid item xs={11} sm={8} md={6} lg={4} margin={3} sx={{ width: "100%" }}>
          <VideoContainer>
            <VimeoEmbed embedId="533536885" />
          </VideoContainer>
        </Grid>

        
      </Grid>
      <Musicplayer>/</Musicplayer>
    </Grid>

    
  );
};

export default Aftermovies;
