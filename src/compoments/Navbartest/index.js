import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu1 from '@mui/material/Menu';
import { HiMenu} from 'react-icons/hi';
import Container from '@mui/material/Container';


import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { NavLink} from "react-router-dom"
import logo from "../../res/images/D-group.png"



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
                <NavLink to ="/">
                <MenuItem key="/" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Start</Typography>
                </MenuItem>
                </NavLink>
                <NavLink to="dimd">
                <MenuItem key="dimd" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">DimD</Typography>
                </MenuItem>
                </NavLink>
                <NavLink to="rules">
                <MenuItem key="Rules" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Regler</Typography>
                </MenuItem>
                </NavLink>
                <NavLink to="ulag">
                <MenuItem key="U-Lag" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">U-Lag</Typography>
                </MenuItem>
                </NavLink>
              
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
            
              
              <NavLink to="rules">
              <Button
                key="hej"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Regler
              </Button>
              </NavLink>
              <NavLink to="dimd">
              <Button
                key="dimd"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                DimD
              </Button>
              </NavLink>
              <NavLink to="ulag">
              <Button
                key="U-Lag"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
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
