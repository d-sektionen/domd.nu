import React from "react";
import Countdown from "react-countdown";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box'
import Typography from "@mui/material/Typography";
import { SponsImg} from "./StartPageElements";
import dart from '../../res/images/dart.png'
import SoundcloudPlayer from 'react-player'

const DOMDdate = new Date("2022-04-09T10:00:00");

const render = ({ days, hours, minutes, seconds }) => {
  return (
    <span>
      Bara {days} dagar {hours} timmar {minutes} minuter och {seconds} sekunder
      kvar tills D<span STYLE="font-size:75%">ÖM</span>D!!
    </span>
  );
};



function StartPage() {
  return (
    <Box container sx={{backgroundColor: "black", color: "white", textAlign:"center" }}>
        <SponsImg src={dart}/>
      <Grid sm={12} container>
        <Grid md={7} sx={{my:6, mx:6}}>
          <Typography variant="h4" guttomBottom>
            <Countdown renderer={render} date={DOMDdate}/>
            
          </Typography>
        <Typography variant="h4" gutterBottom sx={{mr: 6, mt:6, mb:3}}>
            {" "}
            Lyssna på gammla D<span STYLE="font-size:75%">ÖM</span>D låtar för att tagga till!
          </Typography>
        <SoundcloudPlayer
          className="player"
          url="https://soundcloud.com/d-group/"
          controls="True"
          width="100%"
          height="500px"/>
        
        </Grid>
        <Grid md={3} sx={{m:4}} >
        <Typography variant="h4" gutterBottom sx={{mr: 6, mt:6, mb:3}}>
            {" "}
            Sponsorer
          </Typography>
         
        </Grid>
      </Grid>
    </Box>
  );
}

export default StartPage;
