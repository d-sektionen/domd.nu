import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Courier New", monospace;
  color: white;
  font-size: 2rem;
  text-align: center;
  margin-top: 10%;
`;

export const Grid = styled.div`
  background-color: black;
  height: auto;
  margin-left: auto;
`;

export const Row = styled.div`
  padding-top: 2vh;
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
  padding: 2vw;
`;

export const ÖMSpan = styled.span`
  font-size: 1.5rem;
  
`;
