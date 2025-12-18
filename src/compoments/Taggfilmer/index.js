import React from "react";
import Box from "@mui/material/Box";
import { Typography, Grid } from "@mui/material";

import YoutubeEmbed from "../Embedders/YoutubeEmbed";
import VimeoEmbed from "../Embedders/VimeoEmbed";
import FacebookEmbed from "../Embedders/FacebookEmbed";

import background from "../../res/background/dark-gray-background.jpg";

const VideoContainer = ({ children }) => (
  <div style={{ position: "relative", paddingTop: "56.25%", width: "80%" }}>
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
      {children}
    </div>
  </div>
);

const Taggfilmer = () => {
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
        {/* Taggfilmer */}
        <Typography
            xs={12}
            variant="h4"
            gutterBottom
            fontFamily={"Courier New"}
            sx={{
                mx: 5,
                mt: 10,
                mb: 3,
                textShadow: "1px 1px 3px brown, 0 0 1em #FFD700, 0 0 0.2em #FFD700",
                color: "white", // Se till att texten syns mot bakgrunden
            }}
            >
            Taggfilmer
            </Typography>
            
            <Grid container justifyContent="center">
                <Grid item xs={11} sm={8} md={6} lg={4} margin={3} sx={{ width: "100%" }}>
                    <Typography variant="h5" sx={{ mb: 3, color: "white" }}>
                        D-Group taggar The Adventures of DÖMD 2025
                    </Typography>
                    
                    <VideoContainer>
                        <FacebookEmbed
                        src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FDGroup2324%2Fvideos%2F1529244388463034%2F%3Fidorvanity%3D1583981932308324&show_text=false&width=560&t=0"
                        />
                    </VideoContainer>
                </Grid>

                <Grid item xs={11} sm={8} md={6} lg={4} margin={3} sx={{ width: "100%" }}>
                    <Typography variant="h5" sx={{ mb: 3, color: "white" }}>
                        D-Group taggar DÖMD-Mysteriet 2023
                    </Typography>
            
                    <VideoContainer>
                        <VimeoEmbed embedId="816998178" />
                    </VideoContainer>
                </Grid>

                <Grid item xs={11} sm={8} md={6} lg={4} margin={3} sx={{ width: "100%" }}>
                    <Typography variant="h5" sx={{ mb: 3, color: "white" }}>
                        D-Group taggar The Matrix of DÖMD 2022
                    </Typography>
                    
                    <VideoContainer>
                        <VimeoEmbed embedId="694777821" />
                    </VideoContainer>
                </Grid>

                <Grid item xs={11} sm={8} md={6} lg={4} margin={3} sx={{ width: "100%" }}>
                     <Typography variant="h5" sx={{ mb: 3, color: "white" }}>
                        D-Group taggar Det Fänglsande DÖMD 2021
                    </Typography>
                        
                    <VideoContainer>
                        <VimeoEmbed embedId="533536885" />
                    </VideoContainer>
                </Grid>
        </Grid>
    </Grid>
  );
};

export default Taggfilmer;




