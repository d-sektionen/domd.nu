import React from "react";
import Countdown from "react-countdown";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import dart from "../../res//dart.gif";
import Cygate from "../../res/sponsImg/Cygate.webp";
import Xamera from "../../res/sponsImg/xameraSpons.webp";
import Ericsson from "../../res/sponsImg/ericssonSpons.webp";
import Ferroamp from "../../res/sponsImg/ferroampSpons.webp";
import Ida from "../../res/sponsImg/idaSpons.webp";
import SoundcloudPlayer from "react-player";

const DOMDdate = new Date("2022-04-09T10:00:00");

const render = ({ days, hours, minutes, seconds }) => {
  return (
    <span>
      {days} dagar {hours} timmar {minutes} minuter {seconds} sekunder
      kvar tills D<span STYLE="font-size:75%">ÖM</span>D!!
    </span>
  );
};
const mobilerender = ({ days, hours, minutes, seconds }) => {
  return (
    <span>
      {days} dagar <br/>{hours} timmar <br/>{minutes} minuter <br/>{seconds} sekunder
      <br/>kvar tills D<span STYLE="font-size:75%">ÖM</span>D!
    </span>
  );
};

function StartPage() {
  return (
    <Box
      container
      sx={{ backgroundColor: "black", color: "white", textAlign: "center", mt:{xs:6, md:2} }}
    >
      <Grid>
        <img src={dart} width="100%" alt="Dart GIf"></img>
      </Grid>
      <Grid sm={12} container>
        <Grid md={7} sx={{ py: 6, px: 6 }}>
          <Typography  variant="h4" gutterBottom sx={{display: {xs: "none", md:"inline"}}}/* Dator rendering av countdown */>
            <Countdown renderer={render} date={DOMDdate} /> <br />
          </Typography>
          <Typography variant="h4" gutterBottom sx={{display: {xs: "inline", sm:"inline", md:"none"}}}/* Mobil rendering av countdown */ >
            <Countdown renderer={mobilerender} date={DOMDdate} /> <br />
          </Typography>
          <Typography variant="h4" gutterBottom sx={{mt:3}}>
            Snart är det vår.
          </Typography>
          <Typography variant="h4" gutterBottom sx={{m:3}}>Viktiga Datum</Typography>
          <Typography variant="h4" gutterBottom sx={{m:3}}>Måndag 28/4:</Typography>
          <Typography variant="h6" gutterBottom>
            <li>Temasläpp i Collo kl: 12:15 </li>
            <li>Lagsläpp i Colo kl: 12:45</li>
          </Typography>

          <Typography variant="h4" gutterBottom sx={{m:3}}>Onsdag 30/4:</Typography>
          <Typography variant="h6" gutterBottom>
            <li>Jobbsläpp i Collo kl 12:15</li>
          </Typography>
          <Typography variant="h4" gutterBottom sx={{m:3}}>Måndag 4/4</Typography>
          <Typography variant="h6" gutterBottom>
            <li>Biljettsläpp i skrivsalen kl 06:00</li>
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ mr: 6, mt: 6, mb: 3 }}>
            {" "}
            Lyssna på gamla D<span STYLE="font-size:75%">ÖM</span>D låtar för
            att tagga till!
          </Typography>
          <SoundcloudPlayer
            className="player"
            url="https://soundcloud.com/d-group/"
            controls={true}
            width="100%"
            height="500px"
          />
        </Grid>
        <Grid md={3} sx={{ p: 4 }} /* Sponsorer */>
          <Typography align="center" variant="h4" gutterBottom >
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
    </Box>
  );
}

export default StartPage;
