import React from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { keyframes } from '@emotion/react';

const scaleAnimation = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
`;

const PageLink = ({ link, title, Logo, closeMenu }) => (
  <Button 
    onClick={closeMenu}
    component={Link}
    to={link}
    sx={{
      borderRadius: 0,
      boxSizing: 'border-box',
      color: 'inherit',
      width: '100%',
      borderWidth: 1, 
      justifyContent: 'space-between',
      height: '76px',
      borderBottom: '1px solid #000',
      '&:hover': {
        backgroundColor: '#efefef',
        animation: `${scaleAnimation} 0.3s forwards`,
      },
    }}
  >
    <Typography variant="h5" color={'black'} fontWeight="bold">{title}</Typography>
    <Logo />
  </Button>
);

export default PageLink;
