import React, { useState, useEffect, useRef } from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Container, Button, MenuItem, Slide } from "@mui/material";
import { keyframes } from '@emotion/react';
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiMusicNote1 } from 'react-icons/ci';
import { FcRules } from "react-icons/fc";
import { MdHistory } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { GiDart } from "react-icons/gi";

import { Close } from '@mui/icons-material';

import dgLogo from './../../res/images/standard.png';
import Logo from './../../res/images/dartArrow.png';

// Colors
const PINK = '#FF05C8';
const BROWN = '#30201D';

const MusicLogo = () => <CiMusicNote1 color="black" size={"40px"} />
const DgLogo = () => <img src={dgLogo} height={'40px'}/>
const DartLogo = () => <GiDart color="black" size={"40px"} />
const RulesLogo = () => <FcRules color="black" size={"40px"} />
const DimdLogo = () => <MdHistory color="black" size={"40px"} />
const HomeLogo = () => <FaHome color="black" size={"40px"} />

const scaleAnimation = keyframes`
from {
  transform: scale(1);
}
to {
  transform: scale(1.1);
}
`;
// Component for each button in the navbar
const PageLink = ({link, title, Logo, closeMenu}) => {

  return (
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
        borderBottom: '1px solid #000', // Add a bottom border
        '&:hover': {
          backgroundColor: '#efefef', // Change background color on hover
          animation: `${scaleAnimation} 0.3s forwards`, // Apply scale animation on hover
        },
      }}
    
    >
      <Typography variant="h5" color={'black'} fontWeight="bold">{title}</Typography>
      <Logo />
      
    </Button>
  );
}

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenu);

    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, []);

  // const [anchorElNav, setAnchorElNav] = React.useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: isOpen ? 'white' : 'none',
          opacity: isOpen ? '0.5' : '0',
          position: 'fixed',
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      <AppBar position="fixed" sx={{ bgcolor: BROWN, zIndex: 1}}>
        <Toolbar ref={navbarRef} sx={{ display: 'flex'}}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={Logo} alt="Logo" style={{ height: '60px', position: 'absolute', marginTop: '20px' }} />
          </Box>
          <Button href="/#/" 
            sx={{ 
              flexGrow: 0,
              textAlign: 'center', 
              width: 'fit-content',
              marginX: 'auto',
              color: 'white' 
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              D<span STYLE="font-size:75%">ÖM</span>D
            </Typography>
          </Button>
          <IconButton
            size="large"
            onClick={toggleMenu}
            color="inherit"
            sx={{position: 'absolute', right: "0"}}>
              {isOpen ? 
                <Close size='large' sx={{color: PINK, zIndex:1}}/> : 
                <GiHamburgerMenu color={PINK}/> }
            {/* <Menu /> */}
          </IconButton>
          <Slide direction="left" in={isOpen} mountOnEnter unmountOnExit>
          {/* <Button color="inherit" href="/contact">Contact</Button> */}
            <Toolbar 

              variant="dense" 
              sx={{
                background: `linear-gradient(${BROWN} 150px, transparent 170px), #ffffff`,
                flexDirection: 'column', 
                height: '100vh', 
                width: '60vw',
                maxWidth: '300px', 
                position: 'absolute', 
                top: '0', 
                right: '0',
                }}
            >
              <Box 
                height={170} 
                textAlign='center'
                justifyContent='center'
                display='flex'
                flexDirection='column'
              >

                <Typography
                  variant="h5"
                  fontWeight="bold"
                >
                  Snart är det
                </Typography>
                <Typography 
                  variant="h5"
                  fontWeight="bold"
                >
                  vår!
                </Typography>
              </Box>
              
              <PageLink link="/" title="Start" Logo={HomeLogo} closeMenu={toggleMenu}/>
              <Button 
                onClick={toggleMenu}
                component={Link}
                to="/dimd" 
                sx={{
                  borderRadius: 0,
                  boxSizing: 'border-box',
                  color: 'inherit',
                  width: '100%',
                  borderWidth: 1, 
                  justifyContent: 'space-between',
                  height: '76px',
                  borderBottom: '1px solid #000', // Add a bottom border
                  '&:hover': {
                    backgroundColor: '#efefef', // Change background color on hover
                    animation: `${scaleAnimation} 0.3s forwards`, // Apply scale animation on hover
                  },
                }}
              
              >
                <Typography 
                  variant="h5" 
                  color={'black'} 
                  fontWeight="bold"
                >
                  D<span STYLE="font-size:80%">IM</span>D
                </Typography>
                <MdHistory color="black" size='50px' />
                
              </Button>
              <PageLink link="/rules" title="Regler" Logo={RulesLogo} closeMenu={toggleMenu}/>
              <PageLink link="/tavling" title="Tävling" Logo={DartLogo} closeMenu={toggleMenu}/>
              {/* Button to link to the main page and go to dg music section, but did not work. */}
              {/* <Button 
                component="a"
                href="#dgMusik" 
                sx={{
                  borderRadius: 0,
                  boxSizing: 'border-box',
                  color: 'inherit',
                  width: '100%',
                  borderWidth: 1, 
                  justifyContent: 'space-between',
                  height: '76px',
                  borderBottom: '1px solid #000', // Add a bottom border
                  '&:hover': {
                    backgroundColor: '#efefef', // Change background color on hover
                    animation: `${scaleAnimation} 0.3s forwards`, // Apply scale animation on hover
                  },
                }}
              
              >
                <Typography 
                  variant="h5" 
                  color={'black'} 
                  fontWeight="bold"
                >
                  DG Låtar
                </Typography>
                <CiMusicNote1 color="black" size='50px' />
              </Button> */}
              <Button 
                href="https://d-group.se/" 
                sx={{
                  borderRadius: 0,
                  boxSizing: 'border-box',
                  color: 'inherit',
                  width: '100%',
                  borderWidth: 1, 
                  justifyContent: 'space-between',
                  height: '76px',
                  borderBottom: '1px solid #000', // Add a bottom border
                  '&:hover': {
                    backgroundColor: '#efefef', // Change background color on hover
                    animation: `${scaleAnimation} 0.3s forwards`, // Apply scale animation on hover
                  },
                }}
              
              >
                <Typography 
                  variant="h5" 
                  color={'black'} 
                  fontWeight="bold"
                >
                  d-group.se
                </Typography>
                <DgLogo />
                
              </Button>
            </Toolbar>
          </Slide>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavBar;
