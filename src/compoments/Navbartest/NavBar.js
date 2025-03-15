import React, { useState, useEffect, useRef } from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Button, Slide } from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";
import { Close } from '@mui/icons-material';

import Logo from "./../../res/images/dartArrow.png";
import PageLink from "./subComponents/PageLink";
import DgLogo from "./subComponents/DgLogo";
import RulesLogo from "./subComponents/RulesLogo";
import DimdLogo from "./subComponents/DimdLogo";
import HomeLogo from "./subComponents/HomeLogo";
import NewspaperLogo from "./subComponents/NewspaperLogo";



const PINK = '#FF05C8';
const BROWN = '#30201D';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

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
      <AppBar position="fixed" sx={{ bgcolor: BROWN, zIndex: 1, height: 50 }}>
        <Toolbar ref={navbarRef} sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={Logo} alt="Logo" style={{ height: '60px', position: 'absolute', marginTop: '20px' }} />
          </Box>
          <Button href="/#/" sx={{ flexGrow: 0, textAlign: 'center', width: 'fit-content', marginX: 'auto', color: 'white' }}>
            <Typography variant="h5" fontWeight="bold">D<span style={{ fontSize: '75%' }}>ÖM</span>D</Typography>
          </Button>
          <IconButton size="large" onClick={toggleMenu} color="inherit" sx={{ position: 'absolute', right: "0" }}>
            {isOpen ? <Close size='large' sx={{ color: PINK, zIndex: 1 }} /> : <GiHamburgerMenu color={PINK} />}
          </IconButton>
          <Slide direction="left" in={isOpen} mountOnEnter unmountOnExit>
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
              <Box height={170} textAlign='center' justifyContent='center' display='flex' flexDirection='column'>
                <Typography variant="h5" fontWeight="bold">Snart är det</Typography>
                <Typography variant="h5" fontWeight="bold">vår!</Typography>
              </Box>
              <PageLink link="/" title="Start" Logo={HomeLogo} closeMenu={toggleMenu} />
              <PageLink link="/dimd" title="DimD" Logo={DimdLogo} closeMenu={toggleMenu} />
              <PageLink link="/rules" title="Regler" Logo={RulesLogo} closeMenu={toggleMenu} />
              <PageLink link="/Tidningar" title="Tidningar" Logo={NewspaperLogo} closeMenu={toggleMenu} />
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
                  borderBottom: '1px solid #000',
                  '&:hover': {
                    backgroundColor: '#efefef',
                  },
                }}
              >
                <Typography variant="h5" color={'black'} fontWeight="bold">d-group.se</Typography>
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