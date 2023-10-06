import React from "react";
import Typography from "@mui/material/Typography";
import dart from "../../res//dart.gif";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import Darttavla from "../../res/background/darttavla_svart_vit.jpg";
import interact from "interactjs";
import "./style.css"
import Canvas from './Canvas.js';

// Bracket till DimD, redo att läggas in
/*<Grid xs={12} sx={{ m: { xs: 4, m: 4 } }}>
<Typography
  variant="h4"
  gutterBottom
  sx={{ fontWeight: "bold", textAlign: "center" }}
>
  {" "}
  Bracket D<span tyle="font-size:75%">IM</span>D 2022
</Typography>
<iframe
  src="https://challonge.com/dimd2022/module"
  title="DimD2022"
  width="100%"
  height="500"
  frameborder="0"
  scrolling="auto"
  allowtransparency="true"
></iframe>
</Grid>*/

function ThrowDart() {

  interact('.tap-target')
  .on('tap', function (event) {
    event.currentTarget.classList.toggle('switch-bg')
    event.preventDefault()
  })
  .on('doubletap', function (event) {
    event.currentTarget.classList.toggle('large')
    event.currentTarget.classList.remove('rotate')
    event.preventDefault()
  })
  .on('hold', function (event) {
    event.currentTarget.classList.toggle('rotate')
    event.currentTarget.classList.remove('large')
  })
  
  return (
    <Box
      sx={{
        flexGrow: 1,
        //color: "white",
        textShadow: "4px 4px 6px black",
        //backgroundImage: `url(${Darttavla})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "50% 0%",
        backgroundAttachment: "fixed",
      }}
    >
      <Grid container>
        <Grid sm={12} md={6} sx={{}}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            {" "}
            Tidigare Vinnare av D<span tyle="font-size:75%">IM</span>D
          </Typography>
          <Typography variant="h4" gutotmButtom color fontSize={"1.75em"}>
            <ul>
              <li>2023 - Linus Göransson</li>
              <li>2022 - Carl Wikström </li>
              <li>2021 - Payam Tavakoli </li>
              <li>2020 - Theodor Fällman</li>
              <li>2019 - Theodor Fällman</li>
              <li>2018 - Marcus Jonsson</li>
              <li>2017 - Tim Lestander</li>
              <li>2016 - Sebastian Ragnarsson</li>
              <li>2015 - Tobias Hultqvist</li>
            </ul>
          </Typography>
        </Grid>
        <Grid sm={12} md={4} sx={{ textAlign: "center", m: 4 }}></Grid>
      </Grid>
      <div class="tap-target">
        <p>Tap to change color</p>
        <p>Doubletap to change size</p>
        <p>Hold to rotate</p>
      </div>
      <Canvas width={window.innerWidth} height={window.innerHeight+500}>
        this is textAlign
      </Canvas>
    </Box>
  );
}

export default ThrowDart;
