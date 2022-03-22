import React from "react";
import Countdown from "react-countdown";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { SponsImg } from "./StartPageElements";
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
      Bara {days} dagar {hours} timmar {minutes} minuter och {seconds} sekunder
      kvar tills D<span STYLE="font-size:75%">ÖM</span>D!!
    </span>
  );
};
const mobilerender = ({ days, hours, minutes, seconds }) => {
  return (
    <span>
      Bara {days} dagar <br/>{hours} timmar <br/>{minutes} minuter och <br/>{seconds} sekunder
      <br/>kvar tills D<span STYLE="font-size:75%">ÖM</span>D!
    </span>
  );
};

function StartPage() {
  return (
    <Box
      container
      sx={{ backgroundColor: "black", color: "white", textAlign: "center" }}
    >
      <SponsImg src={dart} />
      <Grid sm={12} container>
        <Grid md={7} sx={{ my: 6, mx: 6 }}>
          <Typography variant="h4" guttomBottom sx={{display: {xs: "none", md:"inline"}}}>
            <Countdown renderer={render} date={DOMDdate} /> <br />
          </Typography>
          <Typography variant="h4" guttomBottom sx={{display: {xs: "inline", sm:"inline", md:"none"}}}>
            <Countdown renderer={mobilerender} date={DOMDdate} /> <br />
          </Typography>
          <Typography variant="h4" guttomButtom sx={{mt:3}}>
            Snart är det vår.
          </Typography>
          <Typography variant="h4" guttomButtom sx={{m:3}}>Viktiga Datum</Typography>
          <Typography variant="h4" guttomButtom sx={{m:3}}>Måndag 28/4:</Typography>
          <Typography variant="h6" guttomButtom>
            <li>Temasläpp i Collo kl: 12:15 </li>
            <li>Lagsläpp i Colo kl: 12:45</li>
          </Typography>

          <Typography variant="h4" guttomButtom sx={{m:3}}>Onsdag 30/4:</Typography>
          <Typography variant="h6" guttomButtom>
            <li>Jobbsläpp i Collo kl 12:15</li>
          </Typography>
          <Typography variant="h4" guttomButtom sx={{m:3}}>Måndag 4/4</Typography>
          <Typography variant="h6" guttomButtom>
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
            controls="True"
            width="100%"
            height="500px"
          />
        </Grid>
        <Grid md={3} sx={{ m: 4 }} /* Sponsorer */>
          <Typography variant="h4" gutterBottom sx={{ mr: 6, mt: 6, mb: 3 }}>
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
