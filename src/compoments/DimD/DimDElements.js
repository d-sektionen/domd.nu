
import Box from '@mui/material/Box';
import styled from "styled-components"

import ListItemText from '@mui/material/ListItemText';

export const GridStyled = styled(Box)`
    background-color:black;
    color:"white";
`;
export const TextStyled = styled(ListItemText)`
  color:"white";
`;



export const Row = styled.div`
  display: flex;
  overflow: hidden;

`;
export const Col = styled.div`
  flex: ${(props) => props.size};
  padding: 2vw;
`;

export const Title = styled.h1`
  color: white;

`;

export const Regel = styled.p`
  color: white;

`;
export const List1 = styled.ul`
  color: white;
`

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
export const Vinnare = styled.li`
  color: "white"
`;
export const ÖMSpan = styled.span`
  font-size: 2.5rem;
`;
export const ÖMSpanSmall = styled.span`
  font-size: 1.0rem;
`;

