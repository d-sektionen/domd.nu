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
      <Canvas width={window.innerWidth} height={window.innerHeight*0.5}>
        This is test.
      </Canvas>
      <div class="tap-target">
        <p>Tap to change color</p>
        <p>Doubletap to change size</p>
        <p>Hold to rotate</p>
      </div>
    </Box>
  );
}

export default ThrowDart;
