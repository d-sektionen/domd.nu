import Grid from '@mui/material/Grid';
import styled from "styled-components"

export const GridStyled = styled(Grid)`
    background-color:black;
`

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
export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;