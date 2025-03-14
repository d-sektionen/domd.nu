import React from "react";
import { Typography, Grid } from "@mui/material";
import YoutubeEmbed from "./YoutubeEmbed";
import VimeoEmbed from "./VimeoEmbed";

// Import video sources
import afterMovie22 from "../movies/afterMovie22.mp4";
import afterMovie23 from "../movies/afterMovie23.mp4";

const Aftermovies = () => {
  return (
    <Grid align="center">
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
        }}
      >
        Aftermovies
      </Typography>
      <Grid container justifyContent="space-evenly">
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
        <Grid item xs={11} lg={4} margin={3}>
          <YoutubeEmbed embedId="aU4x0WtvJIs" />
        </Grid>
        <Grid item xs={11} lg={4} margin={3}>
          <YoutubeEmbed embedId="qwltF5RATTE" />
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
        }}
      >
        Taggfilmer
      </Typography>
      <Grid container justifyContent="space-evenly">
        <Grid item xs={11} lg={4} margin={3}>
          <VimeoEmbed embedId="816998178" />
        </Grid>
        <Grid item xs={11} lg={4} margin={3}>
          <VimeoEmbed embedId="694777821" />
        </Grid>
        <Grid item xs={11} lg={4} margin={3}>
          <VimeoEmbed embedId="533536885" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Aftermovies;
