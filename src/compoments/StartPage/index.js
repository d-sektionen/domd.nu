import React from "react";
import Countdown from "react-countdown";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
//import dart from "../../res//dart.gif";
import Cygate from "../../res/sponsImg/Cygate.webp";
import Xamera from "../../res/sponsImg/xamera.png";
import Ericsson from "../../res/sponsImg/ericssonSpons.webp";
import Microtec from "../../res/sponsImg/microtec.png";
import Ida from "../../res/sponsImg/idaSpons.webp";
import Desktop from "../../res/background/computer_back.webp";
import Mobile from "../../res/background/mobile_back.webp";
import Darttavla from "../../res/background/darttavla_svart_vit.jpg";
import TemaEnligBakgrund from "../../res/background/4x2vepa.jpg";
import TemaEnligBakgrundMobil from "../../res/background/bakgrund_mobil_test.jpg";
import SoundcloudPlayer from "react-player";
import YoutubeEmbed from "./YoutubeEmbed";
import "./style.css";
import VimeoEmbed from "./VimeoEmbed";
import Schema from "./schema";

import Tidning from "./tidning";

const DOMDdate = new Date("2023-04-22T10:00:00");

const render = ({ days, hours, minutes, seconds }) => {
  return (
    <span>
      {days} dagar {hours} timmar {minutes} minuter {seconds} sekunder kvar
      tills D<span STYLE="font-size:75%">ÖM</span>D!
    </span>
  );
};
const mobilerender = ({ days, hours, minutes, seconds }) => {
  return (
    <span>
      {days} Dagar <br />
      {hours} Timmar <br />
      {minutes} Minuter <br />
      {seconds} Sekunder
      <br />
      Kvar Tills D<span STYLE="font-size:75%">ÖM</span>D!
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
    backgroundImage: `url(${TemaEnligBakgrundMobil})`,
    backgroundPosition: "50% 10%",
  },
  [theme.breakpoints.up("md")]: {
    backgroundImage: `url(${TemaEnligBakgrund})`,
    backgroundPosition: "50% 30%",
  },
}));

const TextGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

const TextLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "darkblue",

  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

/*<Grid>
        <img src={dart} width="100%" alt="Dart GIf"></img>
      </Grid> <br/> länk till eventet */

function StartPage() {
  return (
    <Root container sx={{ pt: { xs: 5, md: 10 } }}>
      <Grid sm={12} container>
        <Grid xs={12} sx={{ pb: 0, px: 6, pt: 30 }}>
          <Grid
            xs={12}
            sx={{
              backgroundColor: "rgba(0,0,0,0.7)",
              paddingY: "5%",
              marginTop: "10%",
              marginX: "5%",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              fontFamily={"Courier New"}
              align="center"
              sx={{
                display: {
                  xs: "none",
                  md: "inline",
                  textShadow:
                    "1px 1px 3px blue, 0 0 1em #051820, 0 0 0.2em #051820",
                },
              }} /* Dator rendering av countdown */
            >
              <Countdown renderer={render} date={DOMDdate} /> <br />
            </Typography>
            <Typography
              variant="h4"
              fontFamily={"Courier New"}
              gutterBottom
              align="center"
              sx={{
                display: {
                  xs: "inline",
                  sm: "inline",
                  md: "none",
                  textShadow:
                    "1px 1px 3px blue, 0 0 1em #051820, 0 0 0.2em #051820",
                },
              }} /* Mobil rendering av countdown */
            >
              <Countdown renderer={mobilerender} date={DOMDdate} /> <br />
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              align="center"
              fontFamily={"Courier New"}
              sx={{
                mt: 5,
                textShadow:
                  "1px 1px 3px blue, 0 0 1em #051820, 0 0 0.2em #051820",
                fontSize: "38px",
              }}
            >
              Nu Är Det Vår.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Schema></Schema>

      <Grid xs={12} sx={{ mt: "20%", px: 1 }} align="center" /* Sponsorer */>
        <Typography
          align="center"
          variant="h4"
          fontFamily={"Brush Script MT"}
          gutterBottom
          sx={{ textShadow: "2px 2px 6px black" }}
        >
          {" "}
          Samarbetspartners
        </Typography>
      </Grid>
      <Grid container margin={0}>
        <Grid xs={3} sx={{ marginTop: "5%" }}>
          <img
            src={Microtec}
            alt="Microtec Sponsor"
            width={"100%"}
            height={"auto"}
          />
        </Grid>
        <Grid xs={3}>
          <img
            src={Ericsson}
            alt="Ericsson Sponsor"
            width={"50%"}
            height={"auto"}
          />
        </Grid>
        <Grid xs={3} sx={{ marginTop: "8%" }}>
          <img src={Ida} alt="Ida Sponsor" width={"100%"} height={"auto"} />
        </Grid>
        <Grid xs={3}>
          <img
            src={Xamera}
            alt="Xamera Sponsor"
            width={"60%"}
            height={"auto"}
          />
        </Grid>
      </Grid>

      <Grid align="center" sx={{ marginTop: "5%" }}>
        <Grid overflow="hidden" xs={10}>
          <Typography
            align="center"
            variant="h4"
            fontFamily={"Brush Script MT"}
            gutterBottom
            sx={{ textShadow: "2px 2px 6px black" }}
          >
            {" "}
            Årets D<span STYLE="font-size:75%">ÖM</span>D-Tidning
          </Typography>

          <Tidning></Tidning>
        </Grid>

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
          {" "}
          Aftermovies
        </Typography>
        <Grid lg={9} margin={5} alignItems="center">
          <YoutubeEmbed embedId="aU4x0WtvJIs" />
        </Grid>

        <Grid lg={9} margin={5}>
          <YoutubeEmbed embedId="qwltF5RATTE" />
        </Grid>

        <Typography
          variant="h4"
          gutterBottom
          fontFamily={"Courier New"}
          sx={{
            mx: 10,
            mt: 6,
            mb: 3,
            textShadow: "1px 1px 3px blue, 0 0 1em #051820, 0 0 0.2em #051820",
          }}
        >
          {" "}
          Taggfilmer
        </Typography>
        <Grid xs={12} lg={9} margin={5}>
          <VimeoEmbed embedId="694777821" />
        </Grid>
        <Grid xs={12} lg={9} margin={5}>
          <VimeoEmbed embedId="533536885" />
        </Grid>
      </Grid>

      <Typography
        variant="h5"
        gutterBottom
        sx={{
          mx: 6,
          mt: 6,
          mb: 3,
          textShadow: "1px 1px 3px blue, 0 0 1em #051820, 0 0 0.2em #051820",
        }}
      >
        {" "}
        Lyssna på D<span STYLE="font-size:75%">ÖM</span>
        D-låtar, Tagga D<span STYLE="font-size:75%">ÖM</span>
        D!
      </Typography>
      <Grid xs={12} align="center" sx={{ paddingBottom: "10%" }}>
        <SoundcloudPlayer
          className="player"
          url="https://soundcloud.com/d-group/"
          controls={true}
          width="50%"
          height="500px"
        />
      </Grid>
    </Root>
  );
}

export default StartPage;
