import React from 'react';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import dart from "../../res//dart.gif";
import { Link } from '@mui/material';

function Ulag () {
    return(
        <Box sx={{backgroundColor:"black", color:"white", textAlign:"center", overflow:"hidden"}} height="91vh">
            <Grid >
                <img src={dart} alt="DartImg" style={{height:"40vh", width:"100%"}} />
                <Typography variant="h2" guttomButtom sx={{mb:6, mx:6}}>
                    U-Lag
                </Typography>
                <Typography variant="h4" guttomButtom>
                    Anmälan för U-lag är öppen
                </Typography>
                <Link href="https://forms.gle/zrgqvW8ugDxueJvP9"
                variant='h4'
                underlink="hover"
                sx={{ textDecoration: "none" }}>
                Klicka här för att komma till anmälan
                </Link>

            </Grid>
        </Box>

    )
}

export default Ulag