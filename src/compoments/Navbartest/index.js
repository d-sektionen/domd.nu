import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { HiMenu } from "react-icons/hi";
import styled from "styled-components";
import "./navbar.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import logo from "../../res/images/D-group.png";

import Xamera from "../../res/sponsImg/xamera.png";
import Ericsson from "../../res/sponsImg/ericssonSpons.webp";
import Microtec from "../../res/sponsImg/microtec.png";
import Ida from "../../res/sponsImg/idaSpons.webp";
import { Paper } from "@material-ui/core";
import { ClassNames } from "@emotion/react";
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
      mode: "dark",
      primary: {
        main: "#051820",
      },
    },
  });

  const useStyles = createTheme({
    palette: {
      background: {
        default: "#051820",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="fixed" color="primary" enableColorOnDark>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <NavLink to="/">
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              >
                <img
                  alt="logo"
                  src={logo}
                  width={60}
                  height={60}
                  component="div"
                />
              </Typography>
            </NavLink>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
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
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{}}
              >
                <Link to="/">
                  <MenuItem key="/" onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      color="white"
                      fontFamily="Monaco"
                    >
                      Start
                    </Typography>
                  </MenuItem>
                </Link>
                <Link to="dimd">
                  <MenuItem key="dimd" onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      color="white"
                      fontFamily="Monaco"
                    >
                      DimD
                    </Typography>
                  </MenuItem>
                </Link>
                <Link to="rules">
                  <MenuItem key="Rules" onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      color="white"
                      fontFamily="Monaco"
                    >
                      Regler
                    </Typography>
                  </MenuItem>
                </Link>
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              textAlign="center"
              sx={{ flexGrow: 1.5, display: { xs: "flex", md: "none" } }}
            >
              <img
                alt="logo"
                src={logo}
                width={60}
                height={60}
                component="div"
              />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <NavLink to="rules" style={{ textDecoration: "none" }}>
                <Button
                  key="hej"
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontFamily: "Monaco",
                    fontSize: "100%",
                  }}
                >
                  Regler
                </Button>
              </NavLink>
              <NavLink to="dimd" style={{ textDecoration: "none" }}>
                <Button
                  key="dimd"
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontFamily: "Monaco",
                    fontSize: "100%",
                  }}
                >
                  DimD
                </Button>
              </NavLink>
              <NavLink to="kastapil" style={{ textDecoration: "none" }}>
                <Button
                  key="kastapil"
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontFamily: "Monaco",
                    fontSize: "100%",
                  }}
                >
                  Träna
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
