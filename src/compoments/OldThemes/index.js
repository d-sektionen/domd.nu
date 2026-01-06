import React from "react";
import { Box, Typography } from "@mui/material";

//Reuse from error404 for special charachter "ÖM"
import {Title, Row, ÖMSpan} from "../error404/error404elements"

import domd_2025 from "../../res/oldThemePictures/DOMD_2025.jpg"
import domd_2024 from "../../res/oldThemePictures/DOMD_2024.jpg"
import domd_2023 from "../../res/oldThemePictures/DOMD_2023.jpg"
import domd_2022 from "../../res/oldThemePictures/DOMD_2022.jpg"
import domd_2021 from "../../res/oldThemePictures/DOMD_2021.jpg"
import domd_2020 from "../../res/oldThemePictures/DOMD_2020(installt).jpg" //Denna är lite wonky
import domd_2019 from "../../res/oldThemePictures/DOMD_2019.jpg"
import domd_2018 from "../../res/oldThemePictures/DOMD_2018.jpg"
import domd_2017 from "../../res/oldThemePictures/DOMD_2017.jpg" //sämst kvalitet, idk om man ens kan hitta bättre
import domd_2016 from "../../res/oldThemePictures/DOMD_2016.png"
import domd_2015 from "../../res/oldThemePictures/DOMD_2015.png"
import domd_2014 from "../../res/oldThemePictures/DOMD_2014.png"
import domd_2013 from "../../res/oldThemePictures/DOMD_2013.jpg"
import domd_2012 from "../../res/oldThemePictures/DOMD_2012.jpg"

const themes = [
    {src: domd_2025, alt: "DÖMD 2025", _year: "2025"},
    {src: domd_2024, alt: "DÖMD 2024", _year: "2024"},
    {src: domd_2023, alt: "DÖMD 2023", _year: "2023"},
    {src: domd_2022, alt: "DÖMD 2022", _year: "2022"},
    {src: domd_2021, alt: "DÖMD 2021", _year: "2021"},
    {src: domd_2020, alt: "DÖMD 2020", _year: "2020"},
    {src: domd_2019, alt: "DÖMD 2019", _year: "2019"},
    {src: domd_2018, alt: "DÖMD 2018", _year: "2018"},  
    {src: domd_2017, alt: "DÖMD 2017", _year: "2017"},
    {src: domd_2016, alt: "DÖMD 2016", _year: "2016"},
    {src: domd_2015, alt: "DÖMD 2015", _year: "2015"},
    {src: domd_2014, alt: "DÖMD 2014", _year: "2014"},
    {src: domd_2013, alt: "DÖMD 2013", _year: "2013"},
    {src: domd_2012, alt: "DÖMD 2012", _year: "2012"},
];

const OldThemes = () => {
  return (
    <Box sx={{ 
      width: "100%",
      marginTop: "55px",
      paddingBottom: "10px",
      backgroundColor: "#30201D",
      }}
      >
      {themes.map((theme, index) => (
        <Box 
        key={index} 
        sx={{position: "relative",
        mb: 2,
        overflow: "hidden",
        }}>
          {/* Image */}
          <Box
          component="img"
          src = {theme.src}
          alt = {theme.alt}
          sx={{
            width:"100%",
            display: "block",
          }}
          />
          {/* Text */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            paddingLeft: "5px",
            display: "flex",
            justifyContent: "center", 
            alignItems: "center",
            zIndex: 2, 
          }}
        >
          <Typography
            variant="h2"
            sx = {{
              fontSize: {
                xs: "2rem",
                sm: "3rem",
                md: "4rem",
              },
              color: "#fff",
              textAlign: "center",
              py: 1,
              textShadow: "3px 3px 6px black",
              fontWeight: "bold",
            }}
        >
          D<ÖMSpan>ÖM</ÖMSpan>D {theme._year}
        </Typography>
            </Box>
        </Box>
      ))}
    </Box>
  );
};

export default OldThemes;


        {/* <img
          key={index}
          src={theme.src}
          alt={theme.alt}
          style={{
            width: "100%",
            display: "block",
            // marginTop: "50px", //förhoppningsvis kan lägga en "header med css DÖMD så det finns förklaring på vissa"
          }}
        /> */}