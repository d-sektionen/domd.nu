import React from "react";
import Typography from "@mui/material/Typography";
import dart from "../../res/images/dart.png";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box'
import { NavLink} from "react-router-dom"

function DimD() {
  return (
    <Box sx={{ flexGrow: 1, color:"white" }}>
      <img src={dart} alt="dartild" style={{height:"40vh", width:"100%"}}/>
      <Grid container>
        <Grid sm={12} md={6}  sx={{m:4}}>
          <Typography variant="h2"  gutterBottom sx={{fontWeight:"bold", textAlign:"center"}}>
            {" "}
            Tidigare vinnare av D<span tyle="font-size:75%">IM</span>D
          </Typography>
          <Typography variant="h4" gutotmButtom color>
          <ul>
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
        <Grid sm={12} md={4} sx={{textAlign:"center", m:4}}>
          <Typography variant="h2" gutterBottom sx={{fontWeight:"bold"}}>
            {" "}
            Regler
          </Typography>
          <Typography variant="h5" gutterBottom >
            {" "}
            Alla regler för D<span STYLE="font-size:75%">IM</span>D och D
            <span STYLE="font-size:75%">ÖM</span>D finns på får regel sida som du kan
            komma till genom att klicka <NavLink to="rules">här</NavLink> 
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DimD;

