import React from "react";
import Box from "@mui/material/Box";
import { Typography, Grid } from "@mui/material";

import YoutubeEmbed from "../Embedders/YoutubeEmbed";
import VimeoEmbed from "../Embedders/VimeoEmbed";
import FacebookEmbed from "../Embedders/FacebookEmbed";

//Jag försökte göra en embedder för IG, det ser inte bra ut över-
//huvudtaget, om du lyckas gj annars be om mp4 typ eller fb. Mvh Max
//import InstagramEmbed from "../Embedders/InstagramEmbed";

// Import video sources
import afterMovie22 from "./movies/afterMovie22.mp4";
import afterMovie23 from "./movies/afterMovie23.mp4";


// import background from "../../res/background/dark-gray-background.jpg";
import background from "../../res/domd2026/domd_ipa.png"

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
             {/* Blurred overlay layer */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.3)",  // semi-transparent dark tint
          backdropFilter: "blur(4px)",         // blur effect
          zIndex: 0,                            // sits behind content
        }}
      />

      <Box sx={{ position: "relative", zIndex: 1, width: "100%" }}>
      {/* Aftermovies */}
      <Typography
        xs={12}
        variant="h4"
        gutterBottom
        fontFamily={"Courier New"}
        sx={{
          mx: 5,
          mt: 10,
          mb: 3,
          display: "inline-block",
          textShadow: "1px 1px 3px brown, 0 0 1em #FFD700, 0 0 0.2em #FFD700",
          color: "white", // Se till att texten syns mot bakgrunden 
          backgroundColor: "rgba(0, 0, 0, 0.6)", // semi-transparent dark background
          padding: "8px 12px",                 // some padding around text
          borderRadius: "8px",                  // rounded corners
          textAlign: "center",                  // optional centering
          boxShadow: "0 4px 6px rgba(0,0,0,0.3)" // subtle shadow for depth
        }}
      >
      Aftermovies
      </Typography>

      <Grid container justifyContent="center">

       
        
         <Grid item xs={11} lg={4} margin={3}>
          <Typography variant="h4"
          sx={{ mb: 3, 
                    display: "inline-block",
                    color: "white",
                    textShadow: "1px 1px 3px brown, 0 0 1em #FFD700, 0 0 0.2em #FFD700",
                    backgroundColor: "rgba(0, 0, 0, 6)", // semi-transparent dark background
                    padding: "8px 12px",                 // some padding around text
                    borderRadius: "8px",                  // rounded corners
                    textAlign: "center",                  // optional centering
                    boxShadow: "0 4px 6px rgba(0,0,0,0.3)"  }}>
              DÖMD 2023 Aftermovie 
          </Typography>

          <video width="100%" controls>
            <source src={afterMovie23} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Grid>

        <Grid item xs={11} lg={4} margin={3}>
           <Typography variant="h4" 
           sx={{ mb: 3, 
                    display: "inline-block",
                    color: "white",
                    textShadow: "1px 1px 3px brown, 0 0 1em #FFD700, 0 0 0.2em #FFD700",
                    backgroundColor: "rgba(0, 0, 0, 6)", // semi-transparent dark background
                    padding: "8px 12px",                 // some padding around text
                    borderRadius: "8px",                  // rounded corners
                    textAlign: "center",                  // optional centering
                    boxShadow: "0 4px 6px rgba(0,0,0,0.3)"  }}>
              DÖMD 2022 Aftermovie 
          </Typography>

          <video width="100%" controls>
            <source src={afterMovie22} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Grid>

       

        <Grid item xs={11} sm={8} md={6} lg={4} margin={3} sx={{ width: "100%" }}>
       
           <Typography variant="h4" 
           sx={{ mb: 3, 
                    display: "inline-block",
                    color: "white",
                    textShadow: "1px 1px 3px brown, 0 0 1em #FFD700, 0 0 0.2em #FFD700",
                    backgroundColor: "rgba(0, 0, 0, 6)", // semi-transparent dark background
                    padding: "8px 12px",                 // some padding around text
                    borderRadius: "8px",                  // rounded corners
                    textAlign: "center",                  // optional centering
                    boxShadow: "0 4px 6px rgba(0,0,0,0.3)"  }}>
              DÖMD 2018 Aftermovie 
          </Typography>

          <VideoContainer>
            <YoutubeEmbed embedId="aU4x0WtvJIs" />
          </VideoContainer>
        </Grid>

        <Grid item xs={11} sm={8} md={6} lg={4} margin={3} sx={{ width: "100%" }}>
           <Typography variant="h4" 
           sx={{ mb: 3, 
                    display: "inline-block",
                    color: "white",
                    textShadow: "1px 1px 3px brown, 0 0 1em #FFD700, 0 0 0.2em #FFD700",
                    backgroundColor: "rgba(0, 0, 0, 6)", // semi-transparent dark background
                    padding: "8px 12px",                 // some padding around text
                    borderRadius: "8px",                  // rounded corners
                    textAlign: "center",                  // optional centering
                    boxShadow: "0 4px 6px rgba(0,0,0,0.3)"  }}>
              DÖMD 2015 Aftermovie 
          </Typography>

          <VideoContainer>
            <YoutubeEmbed embedId="qwltF5RATTE" />
          </VideoContainer>
        </Grid>
      </Grid>
      </Box>
    </Grid> 
  );
};

export default Aftermovies;
