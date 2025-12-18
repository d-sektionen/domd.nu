
import Countdown from "react-countdown";
import {Title, Row, ÖMSpan} from "./error404elements"
import React from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

//Not used, can be used if you want countdown timer to when 100 days is to DÖMD
const hundreddays = new Date("2021-12-31T00:00:00");

const render = ({ days, hours, minutes, seconds }) => {
  return (
    <span>
      {" "}
      {days} days {hours} hours {minutes} minutes and {seconds} seconds left
    </span>
  );
};

const Root = styled(Box)(({ theme }) => ({
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  backgroundColor:"black",
  color: "white",
  textAlign: "center",
  width:"100vw",
  height:"100vh"  
}));
/*<Row>
          <Title >
            It is days <Countdown date={hundreddays} renderer={render}></Countdown> until
            100 days left until D<ÖMSpan>ÖM</ÖMSpan>D
          </Title>
        </Row> */
const Error404 = () => {
  return (
    <Root container>
      <Grid >
        <Row>
          <Typography variant="h4" sx={{color:"white", pt:{md:40, xs:35}}}>
            Error 404: not 100 days left until D<ÖMSpan>ÖM</ÖMSpan>D yet
          </Typography>
        </Row>
      </Grid>
    </Root>
  );
};

export default Error404;
