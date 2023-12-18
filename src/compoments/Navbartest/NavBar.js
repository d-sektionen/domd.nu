import React, { useState } from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Container, Button, MenuItem, Slide } from "@mui/material";

import { HiMenu } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Menu, Close } from '@mui/icons-material';

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import logo from "../../res/images/D-group.png";

import Xamera from "../../res/sponsImg/xamera.png";
import Ericsson from "../../res/sponsImg/ericssonSpons.webp";
import Microtec from "../../res/sponsImg/microtec.png";
import Ida from "../../res/sponsImg/idaSpons.webp";
import { Paper } from "@material-ui/core";
import { ClassNames } from "@emotion/react";

import dgLogo from './../../res/images/standard.png';
import Logo from './../../res/images/dartArrow.png';
//import logotheme from "../../res/images/logotheme.png";

/*<NavLink to="ulag" sx={{ textDecoration: "none" }}>
<Button
key="U-Lag"
onClick={handleCloseNavMenu}
sx={{ my: 2, color: 'white', display: 'block', textDecoration: "none" }}
>
U-Lag
</Button>
</NavLink>
<NavLink to="lag" sx={{ textDecoration: "none" }}>
<Button
key="Lag"
onClick={handleCloseNavMenu}
sx={{ my: 2, color: 'white', display: 'block', textDecoration: "none" }}
>
LagAktiviteter
</Button>
</NavLink>

*/

/*<Link to="ulag">
                  <MenuItem key="U-Lag" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color="white">
                      U-Lag
                    </Typography>
                  </MenuItem>
                </Link>
                <Link to="lag">
                  <MenuItem key="lag" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color="white">
                      LagAktiviteter
                    </Typography>
                  </MenuItem>
                </Link>
  */

// Colors
const PINK = '#FF05C8';
const BROWN = '#30201D';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const [anchorElNav, setAnchorElNav] = React.useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#051820",
      },
    },
  });

  const useStyles = createTheme({
    palette: {
      background: {
        default: "#000000",
      },
    },
  });

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
        <Toolbar sx={{ display: 'flex'}}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={Logo} alt="Logo" style={{ height: '60px', position: 'absolute', marginTop: '20px' }} />
          </Box>
          <Button href="/" 
            sx={{ 
              flexGrow: 0,
              textAlign: 'center', 
              width: 'fit-content',
              marginX: 'auto',
              color: 'white' 
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              DöMD
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

              <Button href="/" 
                sx={{
                  borderRadius: 0,
                  boxSizing: 'border-box',
                  color: 'inherit',
                  width: '100%',
                  borderWidth: 1, 
                  justifyContent: 'space-between',
                  height: '76px',
                  borderBottom: '1px solid #000', // Add a bottom border
                }}
              
              >
                <Typography variant="h5" color={'black'} fontWeight="bold">Start</Typography>
                <img src={dgLogo} height={'50px'}/>
                
              </Button>
              <Button href="/dimd" 
                sx={{
                  borderRadius: 0,
                  boxSizing: 'border-box',
                  color: 'inherit',
                  width: '100%',
                  borderWidth: 1, 
                  justifyContent: 'space-between',
                  height: '76px',
                  borderBottom: '1px solid #000', // Add a bottom border
                }}
              
              >
                <Typography variant="h5" color={'black'} fontWeight="bold">DIMD</Typography>
                <img src={dgLogo} height={'50px'}/>
                
              </Button>
              <Button href="/rules" 
                sx={{
                  borderRadius: 0,
                  boxSizing: 'border-box',
                  color: 'inherit',
                  width: '100%',
                  borderWidth: 1, 
                  justifyContent: 'space-between',
                  height: '76px',
                  borderBottom: '1px solid #000', // Add a bottom border
                }}
              
              >
                <Typography variant="h5" color={'black'} fontWeight="bold">Regler</Typography>
                <img src={dgLogo} height={'50px'}/>
                
              </Button>
              <Button href="/tavling" 
                sx={{
                  borderRadius: 0,
                  boxSizing: 'border-box',
                  color: 'inherit',
                  width: '100%',
                  borderWidth: 1, 
                  justifyContent: 'space-between',
                  height: '76px',
                  borderBottom: '1px solid #000', // Add a bottom border
                }}
              
              >
                <Typography variant="h5" color={'black'} fontWeight="bold">Tävling</Typography>
                <img src={dgLogo} height={'50px'}/>
                
              </Button>
              <Button href="/bangers" 
                sx={{
                  borderRadius: 0,
                  boxSizing: 'border-box',
                  color: 'inherit',
                  width: '100%',
                  borderWidth: 1, 
                  justifyContent: 'space-between',
                  height: '76px',
                  borderBottom: '1px solid #000', // Add a bottom border
                }}
              
              >
                <Typography variant="h5" color={'black'} fontWeight="bold">DG Låtar</Typography>
                <img src={dgLogo} height={'50px'}/>
                
              </Button>
              {/* <Button color="secondary" href="/dimd">DIMD</Button>
              <Button color="error" href="/rules">Regler</Button>
              <Button color="warning" href="/tavling">DöMDTävling</Button>
              <Button color="info" href="/bangers">DG Låtar</Button> */}
            </Toolbar>
          </Slide>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavBar;
