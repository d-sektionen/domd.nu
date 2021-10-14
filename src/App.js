import "./App.css";
import styled from "styled-components";
import Countdown from "react-countdown";

const hundreddays = new Date("2021-12-31T00:00:00");

const render = ({ days, hours, minutes, seconds }) => {
  return (
    <span>
      {" "}
      {days} days {hours} hours {minutes} minutes and {seconds} seconds left
    </span>
  );
};

const Title = styled.h1`
  font-family: "Courier New", monospace;
  color: white;
  font-size: 2rem;
  text-align: center;
  margin-top: 10%;
`;

const Grid = styled.div`
  background-color: black;
  height: 100vh;
  margin-left: auto;
  
  
`;

const Row = styled.div`
  
  padding-top: 2vh;
  
  
  
`;
export const Col = styled.div`
  flex: ${(props) => props.size};
  padding: 2vw;
`;

export const ÖMSpan = styled.span`
  font-size: 1.5rem;
  
`;

const error404 = () => {
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
            It is days <Countdown date={hundreddays} renderer={render} /> until
            100 days left until D<ÖMSpan>ÖM</ÖMSpan>D
          </Title>
        </Row>
      </Grid>
    </>
  );
};

export default error404;
