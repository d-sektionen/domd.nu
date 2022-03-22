import React from "react";

import dart from "../../res/dart.gif";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box'

//

function Rules() {
  return (
    <Box sx={{backgroundColor:"black"}}>
      <Box>
      <img src={dart} alt="dart.png" style={{height:"40vh", width:"100%"}}/>
      </Box>
      
      <Typography variant="h2" guttomBottom sx={{ color: "white", textAlign:"center", fontWeight:"bold" }}>
        Regler
      </Typography>
      
      <Typography variant="h6" sx={{ color: "white",  padding:{xs:1,  md:10}, pb:4 }}>
        <ul >
          <li>
        §1. Lagen ska själva se till att de har pilar. Pilarna ska besiktigas av
        matchdomaren och godkännas innan varje match. <br/><br/>
        </li>
        <li>
        §2. Vilken av de två
        motståndarna som ska börja avgörs genom middling. Båda tävlanden kastar
        varsin pil och den som kommer närmast mitten får börja. Om båda
        tävlanden träffar Bull’s Eye (singel eller dubbel) görs en ny middling.
        Vid tveksamma fall avgör matchdomaren utifall om-middling skall ske. <br/><br/>
        </li>
        <li>
        §3.
        Varje spelare startar med 301 poäng. Efter en kastomgång subtraheras den
        uppnådda summan från spelarens tidigare poängsumma. En kastomgång består
        av tre pilar. <br/><br/>
        </li>
        <li>
        §4. Vid summering av poäng räknas endast de pilar som
        sitter fast i tavlan efter avslutad kastomgång. Pil som studsar,
        lossnar, missar tavlan eller fastnar i andra pilar räknas inte. <br/><br/>
        </li>
        <li>
        §5. De
        båda kastarna turas om att avverka sina kastomgångar och reducerar
        därmed sina respektive poängsummor. <br/><br/>
        </li>
        <li>
        §6. Ett ben (en delmatch) avgörs med
        att en av spelarna träffar ”rätt” dubbel så att summan blir exakt noll.
        Detta kallas för utgång. Man kan bara gå ut när man har nått 50 poäng
        eller lägre. Som dubbel räknas den yttre smala delen av poängfältet samt
        Bull’s Eye (dubbelbull, 2*25). Utgång får göras på första, andra eller
        tredje pilen i kastomgången. Får en spelare 1 eller mindre poäng kvar
        utan att ha gått ut döms denne som “tjock” och kastomgången avbryts.
        Spelaren står då kvar på den tidigare poängsumman. <br/><br/>
        </li>
        <li>
        §7. Från och med den 
        första omgången då en spelare inleder med 50 poäng eller lägre får han
        eller hon fem försök (dvs maximalt 15 pilar) på sig att gå ut genom att
        träffa en dubbel. Därefter tillämpas enkel utgång, varvid man endast har
        kravet att komma ner till exakt noll under kastomgången. Man blir nu
        ”tjock” endast om man får mindre än noll poäng. Utgång får göras på
        första, andra eller tredje pilen i en kastomgång. <br/><br/>
        </li>
        <li>
        §8. Om en spelare går
        ut efter första eller andra pilen behöver de återstående pilarna ej
        kastas. I övrigt måste alla pilar kastas för att kastomgången skall
        räknas som slutförd. <br/><br/>
        </li>
        <li>
        §9. Spelare ska befinna sig bakom heldragen linje
        vid kast. Om spelare står framför eller på linjen döms hela kastomgången
        ut och spelaren står kvar på sin tidigare poäng. <br/><br/>
        </li>
        <li>
        §10. Pil som tappas men
        inte når fram får ej kastas om. Tappas pilen bakom heldragen linje
        tillåts dock omkast. <br/><br/>
        </li>
        <li>
        §11. Pilar får inte avlägsnas från tavlan innan
        domaren hunnit kontrollera poängen samt summerat poängsumman. Om en pil
        avlägsnas för tidigt döms kastet bort. <br/><br/>
        </li>
        <li>
        §12. Matchdomarens beslut skall
        respekteras (det finns dock möjlighet att överklaga beslut till
        ÖverDomaren™). <br/><br/>
        </li>
        <li>
        §13. Efter att en match pågått i 60 minuter kommer
        matchen att avbrytas och den som leder i matchen tilldelas segern. Om
        det står 1-1 i ben avgörs matchen via middling. <br/><br/>
        </li>
        <li>
        §14. Det är absolut
        förbjudet att kasta pilar på något annat än matchtavlan. <br/><br/>
        </li>
        <li>
        §15. Stilpriset
        bedöms och bestäms enhälligt av D-Group och bedömningen är partisk.
        Mutor som är hela D-Group tillhanda innan tävlingsdagen bedöms likväl de
        som inkommer under DÖMD. <br/><br/>
        </li>
        <li>
        §16. ÖverDomaren™ förbehåller sig rätten att
        diskvalificera lag som inte följer reglerna eller på annat sätt beter
        sig illa. <br/><br/>
        </li>
        <li>
        §17. ÖverDomaren™ förbehåller sig rätten att ändra reglerna om
        denne anser detta nödvändigt.<br/><br/>
        </li>
        </ul>
      </Typography>
    </Box>
  );
}

export default Rules;
