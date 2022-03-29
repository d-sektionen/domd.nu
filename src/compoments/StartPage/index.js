import React from "react";
import Countdown from "react-countdown";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
//import dart from "../../res//dart.gif";
import Cygate from "../../res/sponsImg/Cygate.webp";
import Xamera from "../../res/sponsImg/xameraSpons.webp";
import Ericsson from "../../res/sponsImg/ericssonSpons.webp";
import Ferroamp from "../../res/sponsImg/ferroampSpons.webp";
import Ida from "../../res/sponsImg/idaSpons.webp";
import Desktop from "../../res/background/computer_back.webp";
import Mobile from "../../res/background/mobile_back.webp";


import SoundcloudPlayer from "react-player";

const DOMDdate = new Date("2022-04-09T10:00:00");

const render = ({ days, hours, minutes, seconds }) => {
  return (
    <span>
      {days} dagar {hours} timmar {minutes} minuter {seconds} sekunder kvar
      tills D<span STYLE="font-size:75%">ÖM</span>D!!
    </span>
  );
};
const mobilerender = ({ days, hours, minutes, seconds }) => {
  return (
    <span>
      {days} dagar <br />
      {hours} timmar <br />
      {minutes} minuter <br />
      {seconds} sekunder
      <br />
      kvar tills D<span STYLE="font-size:75%">ÖM</span>D!
    </span>
  );
};

const Root = styled(Box)(({ theme }) => ({
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  color: "white",
  textAlign: "center",
  mt: { xs: 6, md: 2 },
  [theme.breakpoints.down("md")]: {
    backgroundImage: `url(${Mobile})`,
    backgroundPosition: "50% 30%",
  },
  [theme.breakpoints.up("md")]: {
    backgroundImage: `url(${Desktop})`,
    backgroundPosition: "50% 30%",
  },
}));

const TextGrid = styled(Grid)(({ theme }) => ({
  
  
  [theme.breakpoints.down("md")]: {
    textAlign:"center",
  },
  [theme.breakpoints.up("md")]: {
    textAlign:"left",
  },
}));

/*<Grid>
        <img src={dart} width="100%" alt="Dart GIf"></img>
      </Grid> */

function StartPage() {
  return (
    <Root container sx={{ pt: { xs: 5, md: 10 } }}>
      <Grid sm={12} container>
        <Grid xs={12} sx={{ pb: 0, px: 6, pt:43 }}>
          <Typography
            variant="h4"
            gutterBottom
            
            align="center"
            sx={{
              display: { xs: "none", md: "inline" },
            }} /* Dator rendering av countdown */
          >
            <Countdown renderer={render} date={DOMDdate} /> <br />
          </Typography>
          <Typography
            variant="h4"
            gutterBottom
            align="center"
            sx={{
              display: { xs: "inline", sm: "inline", md: "none" },
            }} /* Mobil rendering av countdown */
          >
            <Countdown renderer={mobilerender} date={DOMDdate} /> <br />
          </Typography>
          <Typography variant="h4" gutterBottom sx={{ mt: 3 }}>
            Nu är det vår.
          </Typography> 
        </Grid>
        <TextGrid md={9} sx={{px:5}} >
          
          <Typography variant="h4" gutterBottom sx={{ m: 3 }}>
            D<span STYLE="font-size:75%">ÖM</span>D schema
          </Typography>
          <Typography variant="h4" gutterBottom sx={{ m: 3 }}>
            Måndag 28/3:
          </Typography>
          <Typography variant="h6" gutterBottom>
            <li>Temasläpp i Collo kl: 12:15 </li>
            <li>Lagsläpp i Collo kl: 12:45</li>
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ m: 3 }}>
            Onsdag 30/3:
          </Typography>
          <Typography variant="h6" gutterBottom>
            <li>Jobbsläpp i Collo kl 12:15</li>
          </Typography>
          <Typography variant="h4" gutterBottom sx={{ m: 3 }}>
            Måndag 4/4
          </Typography>
          <Typography variant="h6" gutterBottom>
            <li>Biljettsläpp i skrivsalen kl 06:00</li>
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ mr: 6, mt: 6, mb: 3 }}>
            {" "}
            Lyssna på D<span STYLE="font-size:75%">ÖM</span>D låtar för
            att tagga till!
          </Typography>
          <Grid md={5} align="center">
          <SoundcloudPlayer
            className="player"
            url="https://soundcloud.com/d-group/"
            controls={true}
            width="100%"
            height="500px"
          />
          </Grid>
        </TextGrid>
        <Grid md={3} sx={{ py: 6, px: 1 }} align="right" /* Sponsorer */>
          <Typography align="center" variant="h4" gutterBottom>
            {" "}
            Sponsorer
          </Typography>
          <Box sx={{ px: 0 }}>
            <img src={Ida} alt="Ida Sponsor" width={"100%"} height={"100%"} />
          </Box>
          <Box sx={{ px: 0 }}>
            <img
              src={Ericsson}
              alt="Ericsson Sponsor"
              width={"100%"}
              height={"100%"}
            />
          </Box>
          <Box sx={{ px: 0 }}>
            <img
              src={Ferroamp}
              alt="Ferroamp Sponsor"
              width={"100%"}
              height={"100%"}
            />
          </Box>
          <Box sx={{ px: 0 }}>
            <img
              src={Cygate}
              alt="Cygate Sponsor"
              width={"100%"}
              height={"100%"}
            />
          </Box>
          <Box sx={{ px: 0 }}>
            <img
              src={Xamera}
              alt="Xamera Sponsor"
              width={"100%"}
              height={"100%"}
            />
          </Box>
        </Grid>
      </Grid>
    </Root>
  );
}

export default StartPage;
