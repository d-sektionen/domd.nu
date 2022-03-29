import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Desktop from "../../res/background/computer_back.webp";
import Mobile from "../../res/background/mobile_back.webp";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";


const Root = styled(Box)(({ theme }) => ({
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    color: "white",
    textAlign: "center",
    mt: { xs: 6, md: 2 },
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${Mobile})`,
      backgroundPosition: "50% 30%",
    },
    [theme.breakpoints.up("md")]: {
      backgroundImage: `url(${Desktop})`,
      backgroundPosition: "50% 30%",
    },
  }));

function lag(){
    return(
        <Root container sx={{ pt: { xs: 5, md: 10 } }}>
            <Grid sm={12} container>
                <Grid xs={12} sx={{ pb: 0, px: 6, pt:43 }}>
                    <Typography variant="h3">
                        Välkommen till lag-sidan <br/>
                        Här hittar du all information om era lag aktiviteter under D<span STYLE="font-size:75%">ÖM</span>D veckan                     
                    </Typography>
                    <Typography variant="h4" gutterButtom sx={{pt:6}}>
                        Tordag 7/4
                    </Typography>
                    <Typography variant="h6" gutterButtom>
                        <li>Fulsittning i två omgångar med insläpp kl:X och kl:Y</li>
                        <li>Kravallen FörD<span STYLE="font-size:75%">ÖM</span>D ft Imenlla</li>
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        Fredag 8/4
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        <li>Middlingsrunda 18-21</li>
                        <li>KK-fredagen ft. Kollektiveriet 22-03</li>
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        Lördag 9/4
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{pb:6}}>
                        <li>D<span STYLE="font-size:75%">ÖM</span>D tävlingen! Insläpp och incheckning börjar 09:00 och tävlingen böjar 10:00 <br/> se till att komma i tid</li>
                        <li>Finsittning, fördrinken börjar kl 17:00</li>
                        <li>AfterDart ft Basshunter</li>
                    </Typography>
                    
                </Grid>

            </Grid>

        </Root>
    )

}

export default lag

