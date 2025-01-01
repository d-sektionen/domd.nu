import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import { Grid, Box, Link, Typography, TextField, Button, IconButton, InputAdornment, Paper} from '@mui/material';
import ReactPlayer from "react-player";
import { useTheme, useMediaQuery } from "@mui/material";

import { Send } from '@mui/icons-material';
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
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
import FacebookEventWidget from "./FacebookEmbed";
import { FacebookProvider } from "react-facebook";
import Schema from "./schema";
import Bakgrund from '../../res/background/dartBackground.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

import Tidning from "./tidning";
import { BrowserRouter } from "react-router-dom";
import { pink } from "@mui/material/colors";

import afterMovie22 from "./movies/afterMovie22.mp4";
import afterMovie23 from "./movies/afterMovie23.mp4";

// Colors
const PINK = '#FF05C8';
const BROWN = '#30201D';
const DOMDdate = new Date("2025-04-10T22:00:00");
const TOTIMG = 34;
const U_LAG_EVENT = 'https://www.facebook.com/events/802960461639286/?acontext=%7B%22event_action_history%22%3A[%7B%22mechanism%22%3A%22your_upcoming_events_unit%22%2C%22surface%22%3A%22bookmark%22%7D]%2C%22ref_notif_type%22%3Anull%7D';


// Larger size countdown Renderer component
const render = ({ days, hours, minutes, seconds }) => {
  return (
    <span>
      {days} dagar {hours} timmar {minutes} minuter {seconds} sekunder kvar
      tills D<span STYLE="font-size:75%">ÖM</span>D!
    </span>
  );
};
const mobilerender = ({ days, hours, minutes, seconds }) => (
  <Box
    sx={{
      textAlign: "center",
      fontFamily: "Courier New",
      color: "#5C4033", 
      textShadow: "0 0 5px #FF69B4, 0 0 10px #FF69B4", // Pink hue glow
      fontSize: "50px", 
      mt: 2,
    }}
  >
    <Typography
      variant="h4"
      sx={{
        fontWeight: "bold",
      }}
    >
      {days} Dagar
    </Typography>
    <Typography variant="h5">{hours} Timmar</Typography>
    <Typography variant="h5">{minutes} Minuter</Typography>
    <Typography variant="h5">{seconds} Sekunder</Typography>
    <Typography variant="h6">Kvar Tills D<span STYLE="font-size:75%">ÖM</span>D!</Typography>
  </Box>
);

// Component for social media
const SocialIcons = () => {
  const openInstagram = () => {
    // Open Instagram URL
    window.open('https://www.instagram.com/dgroup2425/', '_blank');
  };

  const openFacebook = () => {
    // Open Facebook URL
    window.open('https://www.facebook.com/DGroup2324', '_blank');
  };

  const openMail = () => {
    // Open Mail URL or mailto link
    window.open('mailto:info@d-group.se');
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item>
        <IconButton 
          onClick={openInstagram} 
          sx={{
            backgroundColor: 'white',
            '&:hover': {
              backgroundColor: 'white', // Ensure the same color on hover
            },          
          }}
        >
          <InstagramIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton onClick={openFacebook} 
          sx={{
            backgroundColor: 'white',
            '&:hover': {
              backgroundColor: 'white', // Ensure the same color on hover
            },          
          }}
        >
          <FacebookIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton onClick={openMail} 
          sx={{
            backgroundColor: 'white',
            '&:hover': {
              backgroundColor: 'white', // Ensure the same color on hover
            },          
          }}
        >
          <EmailIcon />
        </IconButton>
      </Grid>
    </Grid>
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

const mobilerenderProportional = ({ days, hours, minutes, seconds }) => (
  <Box
    position="absolute"
    top="20px"
    left="700px"
    transform="translate(-50%, 0)"
    zIndex={2}
    sx={{
      textAlign: "center",
      fontFamily: "Courier New",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 15, // Adjusts spacing between items
    }}
  >
    <Box textAlign="center">
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          color: "#FF69B4", // Pink text color
          textShadow: "0 0 5px #FFD700, 0 0 10px #FFD700", // Yellow glow
        }}
      >
        {days}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: "16px",
          color: "#FF69B4",
          textShadow: "0 0 5px #FFD700, 0 0 10px #FFD700", // Yellow glow
        }}
      >
        DAYS
      </Typography>
    </Box>
    <Box textAlign="center">
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          color: "#FF69B4",
          textShadow: "0 0 5px #FFD700, 0 0 10px #FFD700", // Yellow glow
        }}
      >
        {hours}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: "16px",
          color: "#FF69B4",
          textShadow: "0 0 5px #FFD700, 0 0 10px #FFD700", // Yellow glow
        }}
      >
        HRS
      </Typography>
    </Box>
    <Box textAlign="center">
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          color: "#FF69B4",
          textShadow: "0 0 5px #FFD700, 0 0 10px #FFD700", // Yellow glow
        }}
      >
        {minutes}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: "16px",
          color: "#FF69B4",
          textShadow: "0 0 5px #FFD700, 0 0 10px #FFD700", // Yellow glow
        }}
      >
        MIN
      </Typography>
    </Box>
    <Box textAlign="center">
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          color: "#FF69B4",
          textShadow: "0 0 5px #FFD700, 0 0 10px #FFD700", // Yellow glow
        }}
      >
        {seconds}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: "16px",
          color: "#FF69B4",
          textShadow: "0 0 5px #FFD700, 0 0 10px #FFD700", // Yellow glow
        }}
      >
        SEC
      </Typography>
    </Box>
  </Box>
);


const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackUrl, setTrackUrl] = useState(
    "https://soundcloud.com/d-group/sets/doemd-2024"
  );

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const slides = Array.from({ length: TOTIMG }, (_, i) => ({
    label: `Slide ${i + 1}`,
    imgPath: `slideshow/${i + 1}.jpg`,
  }));

  const shufflePlaylist = () => {
    const playlist = [
      "https://soundcloud.com/d-group/karallen-star-i-brand-prod",
      "https://soundcloud.com/d-group/doemd-girl",
      "https://soundcloud.com/d-group/alla-alskar-min-d",
    ];
    const shuffledTrack = playlist[Math.floor(Math.random() * playlist.length)];
    setTrackUrl(shuffledTrack);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = slides[currentSlide];

  const handlePlayPause = () => {
    if (!isPlaying) {
      shufflePlaylist();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      {/* Slideshow */}
      <Box
        position="relative"
        sx={{
          width: "100%",
          height: isMobile ? "60vh" : "1100px",
          overflow: "hidden",
          mt: isMobile ? "0" : "unset", // remove margin for mobile.
        }}
      >
        <img
          src={current.imgPath}
          alt={current.label}
          style={{
            width: "100%",
            height: "100%",
            objectFit: isMobile ? "contain" : "cover",
          }}
        />

        {/* Timer on slideshow for PC */}
        {!isMobile && (
          <Box
            position="absolute"
            top="10px"
            transform="translateX(-50%)"
            zIndex={3}
            sx={{
              textAlign: "center",
              fontFamily: "Courier New",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 15,
              color: "#FF69B4", // Pink text color
              textShadow: "0 0 5px #FFD700, 0 0 10px #FFD700", // Yellow glow
            }}
          >
            <Countdown renderer={mobilerenderProportional} date={DOMDdate} />
          </Box>
        )}

        {/* Play Button */}
        <Box
          position="absolute"
          top="40px"
          right="20px"
          zIndex={3}
          onClick={handlePlayPause}
          sx={{
            cursor: "pointer",
            backgroundColor: "rgba(255, 255, 50, 255)",
            padding: "10px 15px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isPlaying ? "⏸️" : "🎵"}
        </Box>

        {/* SoundCloud Player (Hidden) */}
        <Box sx={{ display: "none" }}>
          <SoundcloudPlayer
            url={trackUrl}
            playing={isPlaying}
            controls={false}
            className="soundcloud-player"
          />
        </Box>
      </Box>

      {/* Timer below slideshow for mobile */}
      {isMobile && (
        <Box
          sx={{
            mt: 2,
            textAlign: "center",
            fontFamily: "Courier New",
            color: "#FF69B4",
            textShadow: "0 0 5px #FFD700, 0 0 10px #FFD700", // Yellow glow
          }}
        >
          <Countdown renderer={mobilerender} date={DOMDdate} />
        </Box>
      )}
    </Box>
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

    // // Send the email data to Google Sheets using fetch or XMLHttpRequest
    // fetch('https://script.google.com/macros/s/AKfycbytBhPLXhR9yXRR-uIldoWbsuwBpmO-jW8aOesL7JxhY0qgzSwwjHnTzeY73u3IVo06cw/exec', {
    //   method: 'POST',
    //   mode: 'no-cors',
    //   body: JSON.stringify({ email }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then(response => console.log(response))
    // .catch(error => console.error(error));
    // alert("Your email has been saved!")
    // You can add further logic here (e.g., validation, API calls, etc.)
  };

  return (
    <Root container sx={{ pt: { xs: 5, md: 5 } }}>
      <Slideshow />

      {/* <Schema></Schema> */}
      {/* <Box
        container
        sx={{
          backgroundColor: "rgba(0,0,0,0.5)",
          paddingY: "10px",
          paddingX: "5px",
          marginX: "16px",
          marginTop: 16,
        }}
      >
        <FacebookProvider>
          <FacebookEventWidget eventUrl={U_LAG_EVENT} />
        </FacebookProvider>
      </Box> */}
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
          {/* <Grid item xs={6} sm={3}>
            <a href="https://www.microtec.eu/sv-se">
              <img src={Microtec} alt="Logo 1" style={{ width: '80%' }} />
            </a>
          </Grid> */}
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
          <video width="100%" controls>
              <source src={afterMovie23} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Grid> 
          <Grid xs={11} lg={4} margin={3}>
            <video width="100%" controls>
              <source src={afterMovie22} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Grid>
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
            mt: 6,
            mb: 3,
            textShadow: "1px 1px 3px blue, 0 0 1em #051820, 0 0 0.2em #051820",
          }}
        >
          Taggfilmer
        </Typography>
        <Grid container justifyContent="space-evenly">
        <Grid xs={11} lg={4} margin={3}>
            <VimeoEmbed embedId="816998178" />
          </Grid>
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
          mt: 3,
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

      <Box bgcolor={BROWN} height={190} padding={2}>
        <Typography variant="h6" >
          Vill du bli uppdaterad inför <br />
          D<span STYLE="font-size:75%">ÖM</span>D?
        </Typography>
        <Box sx={{maxWidth: '350px', marginX: 'auto'}}>
          <form onSubmit={handleSubmit} sx={{maxWidth: '350px'}}>
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              value={email}
              onChange={handleEmailChange}
              fullWidth
              margin="normal"
              InputProps={{
                style: {backgroundColor: 'white', color: {PINK}, },
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
        <SocialIcons />
      </Box>
    </Root>
  );
}

export default StartPage;



