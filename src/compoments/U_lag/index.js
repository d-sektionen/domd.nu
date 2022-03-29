import React from 'react';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'
import Desktop from "../../res/background/computer_back.webp";
import Mobile from "../../res/background/mobile_back.webp";
import { styled } from "@mui/material/styles";



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


function Ulag () {
    return(
        <Root>
            <Grid >
                <Typography variant="h2" guttomButtom sx={{mb:6, mx:6, pt:43}}>
                    U-Lag
                </Typography>
                <Typography  variant="h4" guttomButtom sx={{m:3}}>
                    Anmälan för U-lag är nu stängd.
                </Typography>
                <Typography  variant="h4" guttomButtom sx={{m:3}}>
                    Schemat för U-lagen är det som följer nedan:
                </Typography>
                <Typography  variant="h4" guttomButtom sx={{m:3}}>
                Torsdag:
                </Typography>
                <Typography variant="h6" guttomButtom>
                <li>GUKK vid ankomst på resecentrum</li>
                <li>Mottagningslunch</li>
                <li>Torsdagskröken på <Link href="https://goo.gl/maps/tsp8ezQskF9MxDhg8"
                variant='h6'
                underlink="hover"
                >
                Kårallen
                </Link></li>
                <li>Fulsittning</li>
                <li>Kravallen(Krav på Overall) FörD<span tyle="font-size:75%">ÖM</span>D på <Link href="https://goo.gl/maps/tsp8ezQskF9MxDhg8"
                variant='h6'
                underlink="hover"
                >
                Kårallen
                </Link> </li>
                </Typography>
                <Typography  variant="h4" guttomButtom sx={{m:3}}>
                Fredag:
                </Typography>
                <Typography variant="h6" guttomButtom>
                <li>Buss till badhus och badhus</li>
                <li>U-Lagslunch efter Badhuset</li>
                <li>Vino Tinto</li>
                <li>Eventuell Temasittning (för de med det stora paketet) </li>
                <li>D<span tyle="font-size:75%">ÖM</span>D-Fredagen ft Kollektiveriet på <Link href="https://goo.gl/maps/NipMggZE7DDpgoti9"
                variant='h6'
                underlink="hover"
                >
                KK
                </Link></li>
                </Typography>
                <Typography  variant="h4" guttomButtom sx={{m:3}}>
                Lördag:
                </Typography>
                <Typography variant="h6" guttomButtom sx={{pb:4}}>
                <li>D<span tyle="font-size:75%">ÖM</span>D-tävlingen på Kårallen incheckning kl 09:00</li>
                <li> AfterDart, vanlig klädkod på <Link href="https://goo.gl/maps/tsp8ezQskF9MxDhg8"
                variant='h6'
                underlink="hover"
                >
                Kårallen
                </Link></li>
                </Typography>

            </Grid>
        </Root>

    )
}

export default Ulag