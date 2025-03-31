import React from "react";
import { Box, Typography, Grid } from "@mui/material";

// Import sponsor logos
import Ericsson from "../../../res/companyLogos/ericssonSpons.webp";
import Xamera from "../../../res/companyLogos/xamera.png";
import Opera from "../../../res/companyLogos/opera-logo.png";
import Ida from "../../../res/companyLogos/idainfront-logo.png";
import Dartstore from "../../../res/companyLogos/dartstore1.png";

// Import background image
import SponsorBackground from "../../../res/domd2025/tintin.png";

// Sponsor data
const sponsors = [
  { name: "Ericsson", imgSrc: Ericsson, link: "https://www.ericsson.com/en/careers" },
  { name: "Xamera", imgSrc: Xamera, link: "https://xamera.se/" },
  { name: "Opera", imgSrc: Opera, link: "https://www.opera.com/" },
  { name: "Ida Infront", imgSrc: Ida, link: "https://idainfront.se/en/" },
  { name: "Dartstore", imgSrc: Dartstore, link: "https://www.dartstore.se/" },
];

const Sponsors = () => {
  return (
    <Box
      sx={{
        // Kombinera gradient och bakgrundsbild med linear-gradient
        backgroundImage: `linear-gradient(rgba(128, 128, 128, 0.6), rgba(128, 128, 128, 0.6)), url(${SponsorBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        paddingY: 4,
        width: "100%",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" fontFamily={"Brush Script MT"} sx={{ color: "white", marginBottom: 2 }}>
        Samarbetspartners
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {sponsors.map((sponsor, index) => (
          <Grid
            item
            xs={6}
            sm={6}
            md={4}
            key={index}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
              <img
                src={sponsor.imgSrc}
                alt={sponsor.name}
                style={{
                  maxWidth: "90%",
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </a>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Sponsors;
