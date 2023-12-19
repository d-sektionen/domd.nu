import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import { Grid, Box, Link, Typography, TextField, Button, IconButton, InputAdornment, Paper} from '@mui/material';

import { Send } from '@mui/icons-material';
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
import Bakgrund from '../../res/background/dartBackground.jpg';
import imgTest from '../../res/images/Slideshow/1.jpg';

import Tidning from "./tidning";
import { BrowserRouter } from "react-router-dom";

const DOMDdate = new Date("2024-04-11T10:00:00");

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
    backgroundImage: `url(${Bakgrund})`,
    backgroundPosition: "50% 10%",
  },
  [theme.breakpoints.up("md")]: {
    backgroundImage: `url(${Bakgrund})`,
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

const slides = [
  {
    label: 'Slide 1',
    imgPath: imgTest,
  },
  {
    label: 'Slide 2',
    imgPath: '../../res/images/Slideshow/1.jpg',
  },
  // Add more slide objects as needed
];

// for (let i = 1; i <= 100; i++) {
//   slides.push({label: `Slide ${i}`, imgPath})
// }

// Slideshow component
const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Paper>
        <img src={slides[currentSlide].imgPath} alt={slides[currentSlide].label} style={{ width: '100%' }} />
        <Typography>{slides[currentSlide].label}</Typography>
        <Button onClick={nextSlide}>Next Slide</Button>
      </Paper>
    </div>
  );
};



function StartPage() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Use 'email' state for further processing or validation
    console.log('Entered Email:', email);
    // You can add further logic here (e.g., validation, API calls, etc.)
  };

  return (
    <Root container sx={{ pt: { xs: 5, md: 10 } }}>
      <Slideshow />
      <Grid sm={12} container>
        <Grid xs={12} sx={{ pb: 0, px: 2, pt: 0 }}>
          <Grid
            xs={12}
            sx={{
              backgroundColor: "rgba(0,0,0,0.5)",
              paddingY: "5px",
              paddingX: "5px",
            }}
          >
            <Typography
              variant="h5"
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
              variant="h5"
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
              variant="h5"
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
              Snart Är Det Vår.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* <Schema></Schema> */}

      {/*Benims försök i att göra en responsiv sponsorlista */}
      <Box
        container
        sx={{
          backgroundColor: "rgba(0,0,0,0.5)",
          paddingY: "10px",
          paddingX: "5px",
          marginX: "16px",
          marginTop: 16,
        }}
      >
        <Typography 
          variant="h4"
          fontFamily={"Brush Script MT"}
        >
          Samarbetspartners
        </Typography>
        <Grid container alignItems="center" justifyContent="space-evenly">
          {/* On small screens, display 2 logos per row */}
          <Grid item xs={6} sm={3}>
            <a href="https://www.microtec.eu/sv-se">
              <img src={Microtec} alt="Logo 1" style={{ width: '80%' }} />
            </a>
          </Grid>
          <Grid item xs={6} sm={3}>
            <a href="https://www.ericsson.com/en/careers">
              <img src={Ericsson} alt="Logo 2" style={{ width: '80%' }} />
            </a>
          </Grid>

          {/* On medium or larger screens, display 4 logos per row */}
          <Grid item xs={6} sm={3}>
            <a href="https://idainfront.se/en/">
              <img src={Ida} alt="Logo 3" style={{ width: '80%' }} />
            </a>
          </Grid>
          <Grid item xs={6} sm={3}>
            <a href="https://xamera.se/">
              <img src={Xamera} alt="Logo 4" style={{ width: '80%' }} />
            </a>
          </Grid>
        </Grid>
      </Box>

      <Grid align="center" sx={{ marginTop: "5%" }}>
        {/* DömD tidningen */}
        {/* <Grid overflow="hidden" xs={10}>
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
        </Grid> */}

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
        <Grid container justifyContent="space-evenly">
          <Grid xs={11} lg={4} margin={3}>
            <YoutubeEmbed embedId="aU4x0WtvJIs" />
          </Grid>

          <Grid xs={11} lg={4} margin={3}>
            <YoutubeEmbed embedId="qwltF5RATTE" />
          </Grid>
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
        <Grid container justifyContent="space-evenly">
          <Grid xs={11} lg={4} margin={3}>
            <VimeoEmbed embedId="694777821" />
          </Grid>
          <Grid xs={11} lg={4} margin={3}>
            <VimeoEmbed embedId="533536885" />
          </Grid>
        </Grid>
      </Grid>

      <Typography
        id="dgMusik"
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
          width="90%"
          height="500px"
          sx={{maxWidth: '400px'}}
        />
      </Grid>

      
      <Box bgcolor="#30201D" height={190} padding={2}>
        <Typography variant="h6" >
          Vill du bli uppdaterad inför <br />
          D<span STYLE="font-size:75%">ÖM</span>D?
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={handleEmailChange}
            fullWidth
            margin="normal"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton type="submit">
                    <Send />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </form>
      </Box>
    </Root>
  );
}

export default StartPage;
