import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu1 from '@mui/material/Menu';
import { HiMenu} from 'react-icons/hi';
import styled from "styled-components";

import Container from '@mui/material/Container';


import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { NavLink} from "react-router-dom"
import logo from "../../res/images/D-group.png"


const Link = styled(NavLink)`
  text-decoration: none;
`;



const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    
  };


  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavLink to="/">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <img alt="logo" src={logo} width={60} height={60} component="div"/>
          </Typography>
          </NavLink>
          

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <HiMenu />
            </IconButton>
            <Menu1
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <Link to ="/">
                <MenuItem key="/" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" color="white">Start</Typography>
                </MenuItem>
                </Link>
                <Link to="dimd">
                <MenuItem key="dimd" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" color="white">DimD</Typography>
                </MenuItem>
                </Link>
                <Link to="rules">
                <MenuItem key="Rules" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" color="white">Regler</Typography>
                </MenuItem>
                </Link>
                <Link to="ulag">
                <MenuItem key="U-Lag" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"  color="white">U-Lag</Typography>
                </MenuItem>
                </Link>
              
            </Menu1>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <img alt="logo" src={logo} width={60} height={60} component="div"/>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
              
              <NavLink to="rules" sx={{ textDecoration: "none" }}>
              <Button
                key="hej"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', textDecoration: "none" }}
              >
                Regler
              </Button>
              </NavLink>
              <NavLink to="dimd" sx={{ textDecoration: "none" }}>
              <Button
                key="dimd"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', textDecoration: "none" }}
              >
                DimD
              </Button>
              </NavLink>
              <NavLink to="ulag" sx={{ textDecoration: "none" }}>
              <Button
                key="U-Lag"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', textDecoration: "none" }}
              >
                U-Lag
              </Button>
              </NavLink>
                          
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;
