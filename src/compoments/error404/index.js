
import Countdown from "react-countdown";
import {Title, Grid, Row, ÖMSpan} from "./error404elements"
import React from 'react';

const hundreddays = new Date("2021-12-31T00:00:00");

const render = ({ days, hours, minutes, seconds }) => {
  return (
    <span>
      {" "}
      {days} days {hours} hours {minutes} minutes and {seconds} seconds left
    </span>
  );
};

const Error404 = () => {
  return (
    <>
      <Grid>
        <Row>
          <Title>
            Error 404: not 100 days left until D<ÖMSpan>ÖM</ÖMSpan>D yet
          </Title>
        </Row>
        <Row>
          <Title >
            It is days <Countdown date={hundreddays} renderer={render}></Countdown> until
            100 days left until D<ÖMSpan>ÖM</ÖMSpan>D
          </Title>
        </Row>
      </Grid>
    </>
  );
};

export default Error404;
