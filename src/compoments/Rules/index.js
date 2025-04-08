import React from "react";

import dart from "../../res/dart.gif";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TemaEnligBakgrund from "../../res/background/4x2vepa.jpg";
import TemaEnligBakgrundMobil from "../../res/background/bakgrund_mobil_test.jpg";
import backgroundTheme from "../../res/domd2025/affish.jpg";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import logo from "../../res/images/standard.png";
import Bakgrund from '../../res/background/dartBackground.jpg';

const Root = styled(Box)(({ theme }) => ({
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",      
  color: "white",
  textAlign: "center",
  mt: { xs: 6, md: 2 },
  [theme.breakpoints.down("md")]: {
    backgroundImage: `url(${backgroundTheme})`,
    backgroundPosition: "50% 10%",
  },
  [theme.breakpoints.up("md")]: {
    backgroundImage: `url(${backgroundTheme})`,
    backgroundPosition: "50% 30%",
  },
}));

function Rules() {
  return (
    <Root container sx={{ pt: { xs: 7, md: 11 } }} align="left">
      <Grid
        xs={12}
        sx={{
          backgroundColor: "rgba(0,0,0,0.9)",
          borderRadius: "2%",
          paddingY: '60px',
          marginX: "5%",
        }}
      >
        <img alt="logo" src={logo} width={120} height={120} component="div" />
        <Typography
          variant="h2"
          guttomBottom
          sx={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
            marginTop: "3%",
          }}
        >
          Regler
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: "white", padding: { xs: 1, md: 12 }, pb: 4 }}
        >
          <li>
          §1 Gruppspel - Varje grupp innehåller fyra lag. Alla möter varandra en gång i gruppen,
          alltså varje lag får spela minst tre matcher. Laget med flest vinster går vidare till slutspel.
          <li>
          Tiebreakers:
          <li>
          Two-way tie: Laget som vunnit mot det andra går vidare.
          </li>
            <li>
            Three-way tie En bedömning genomförs på antal förlorade ben. Laget med minst
              förlorade ben går vidare. Om två lag i en three-way tie har lika många förlorade ben,
              går det laget som vunnit mot det andra vidare. Om alla lag har förlorat lika många
              ben så genomförs om möjligt en middling, annars utförs en lottning.
            </li>
            
          </li>
         <br />
              <br />              
          </li>
          <li>
              §2 Slutspel - 32 lag spelar single elimination i två poler <br />
            <br />
          </li>
          <li>
            §3.Lagen ska själva se till att de har pilar. Pilarna ska besiktigas
            av matchdomaren och godkännas innan varje match. <br />
            <br />
          </li>
          <li>
            §4. Vilken av de två motståndarna som ska börja avgörs genom
            middling. Båda tävlanden kastar varsin pil och den som kommer
            närmast mitten får börja. Om båda tävlanden träffar Bull’s Eye
            (singel eller dubbel) görs en ny middling. Vid tveksamma fall avgör
            matchdomaren utifall om-middling skall ske. <br />
            <br />
          </li>
          <li>
            §5. Varje spelare startar med 301 poäng. Efter en kastomgång
            subtraheras den uppnådda summan från spelarens tidigare poängsumma.
            En kastomgång består av tre pilar. <br />
            <br />
          </li>
          <li>
            §6. Vid summering av poäng räknas endast de pilar som sitter fast i
            tavlan efter avslutad kastomgång. Pil som studsar, lossnar, missar
            tavlan eller fastnar i andra pilar räknas inte. <br />
            <br />
          </li>
          <li>
            §7. De båda kastarna turas om att avverka sina kastomgångar och
            reducerar därmed sina respektive poängsummor. <br />
            <br />
          </li>
          <li>
            §8. Ett ben (en delmatch) avgörs med att en av spelarna träffar
            ”rätt” dubbel så att summan blir exakt noll. Detta kallas för
            utgång. Man kan bara gå ut när man har nått 50 poäng eller lägre.
            Som dubbel räknas den yttre smala delen av poängfältet samt Bull’s
            Eye (dubbelbull, 2*25). Utgång får göras på första, andra eller
            tredje pilen i kastomgången. Får en spelare 1 eller mindre poäng
            kvar utan att ha gått ut döms denne som “tjock” och kastomgången
            avbryts. Spelaren står då kvar på den tidigare poängsumman. <br />
            <br />
          </li>
          <li>
            §9. Från och med den första omgången då en spelare inleder med 50
            poäng eller lägre får han eller hon fem försök (dvs maximalt 15
            pilar) på sig att gå ut genom att träffa en dubbel. Därefter
            tillämpas enkel utgång, varvid man endast har kravet att komma ner
            till exakt noll under kastomgången. Man blir nu ”tjock” endast om
            man får mindre än noll poäng. Utgång får göras på första, andra
            eller tredje pilen i en kastomgång. <br />
            <br />
          </li>
          <li>
            §10. Om en spelare går ut efter första eller andra pilen behöver de
            återstående pilarna ej kastas. I övrigt måste alla pilar kastas för
            att kastomgången skall räknas som slutförd. <br />
            <br />
          </li>
          <li>
            §11. Spelare ska befinna sig bakom heldragen linje vid kast. Om
            spelare står framför eller på linjen döms hela kastomgången ut och
            spelaren står kvar på sin tidigare poäng. <br />
            <br />
          </li>
          <li>
            §12. Pil som tappas men inte når fram får ej kastas om. Tappas pilen
            bakom heldragen linje tillåts dock omkast. <br />
            <br />
          </li>
          <li>
            §13. Pilar får inte avlägsnas från tavlan innan domaren hunnit
            kontrollera poängen samt summerat poängsumman. Om en pil avlägsnas
            för tidigt döms kastet bort. <br />
            <br />
          </li>
          <li>
            §14. Matchdomarens beslut skall respekteras (det finns dock
            möjlighet att överklaga beslut till ÖverDomaren™). <br />
            <br />
          </li>
          <li>
            §15. Efter att en match pågått i 40 minuter kommer matchen att
            avbrytas och den som leder i matchen tilldelas segern. Om det står
            1-1 i ben avgörs matchen via middling. <br />
            <br />
          </li>
          <li>
            §16. Det är absolut förbjudet att kasta pilar på något annat än
            matchtavlan. <br />
            <br />
          </li>
          <li>
            §17. Stilpriset bedöms och bestäms enhälligt av D-Group och
            bedömningen är partisk. Mutor som är hela D-Group tillhanda innan
            tävlingsdagen bedöms likväl de som inkommer under DÖMD. <br />
            <br />
          </li>
          <li>
            §18. ÖverDomaren™ förbehåller sig rätten att diskvalificera lag som
            inte följer reglerna eller på annat sätt beter sig illa. <br />
            <br />
          </li>
          <li>
            §19. ÖverDomaren™ förbehåller sig rätten att ändra reglerna om denne
            anser detta nödvändigt.
            <br />
            <br />
          </li>
        </Typography>
      </Grid>
    </Root>
  );
}

export default Rules;
