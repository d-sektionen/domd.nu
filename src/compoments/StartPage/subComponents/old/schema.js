import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Detective1 from "../../res/images/Detective1.png";
import Detective2 from "../../res/images/Detective2.png";

function Schema() {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "rgba(0,0,0,0.7)",
        align: "center",
        marginY: "5%",
      }}
    >
      <Grid item xs={12}>
        <Typography fontFamily={"Courier New"} fontSize={"2.5em"} textShadow={"1px 1px 3px blue, 0 0 1em #051820, 0 0 2em #051820"}>Biljettsläpp 17/4 Kl 06:00 i Skrivsalen Campus Valla</Typography>
      </Grid>
      <Grid item xs={2} sm={2}>
        <img src={Detective2} width={"100%"}></img>
      </Grid>
      <Grid item xs={8} sm={8}>
        <Grid container xs={12}>
          <Grid item xs={12} sm={4}>
            <Typography fontFamily={"Courier New"} fontSize={"2em"} marginTop={"10%"}>Torsdag</Typography>
            <Typography marginTop={"5%"}>DÖMD-Kröken</Typography>
            <Typography>Nu börjar festandet på riktigt! Ta dig Torsdagskröken 14:00 där KrökenKrew kommer servera DÖMD-öl och annat gott för att komma in i äkta DÖMD-stämning!</Typography>
            <Typography marginTop={"5%"}>FörDÖMD (Pris: 145kr)</Typography>
            <Typography>
            Under kvällen är det dags för kravall på FörDÖMD där du kommer ha chansen att värma upp ordentligt inför helgen. 
            Till att börja kommer D-band att ta Gasquen med storm och därefter är det dags för ingen mindre än Tungevaag att lyfta taket på Kårallen! 
            BANGER! Dessutom kommer du mellan Torsdagskröken och FörDÖMD ha möjlighet att delta på förfesten på [hg]!

            </Typography>
            
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography fontFamily={"Courier New"} fontSize={"2em"} marginTop={"10%"}>Fredag</Typography>
            <Typography marginTop={"5%"}>Lagaktivitet: Middlingsrunda</Typography>
            
            <Typography>
Fredagen kommer att bjuda upp till dans under årets Middlingsrunda där lagen välkomnas till en hejdundrande fulvinsrunda med massa lekar och ståhej!
Därefter kl. 15:00 öppnar Brandon Boys upp dörrarna till Fredagspuben där du kan plocka en öl eller två och njuta av ett gött häng!
            </Typography>
<Typography marginTop={"5%"}> KK-Fredag (Pris: 100kr)</Typography>
<Typography>
Till kvällen kommer Kårhuset Kollektivet att slå upp portarna och ge dig möjligheten att dansa in i månljuset!
</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography fontFamily={"Courier New"} fontSize={"2em"} marginTop={"10%"}>Lördag</Typography>
            <Typography marginTop={"5%"}>Tävling</Typography>
            <Typography>Nu är det dags! Det är DÖMD-lördagen och alla vet vad det betyder. 128 lag gör upp kanske en av de främsta titlarna där ute: Norra Europas bästa dart-amatörer. Tävlingen drar igång i Kårallen kl 10.00 och alla är välkomna att heja fram sitt favoritlag! Ta en, två, tre eller till och med fyra DÖMD-öl, någon DÖMD-IPA och hjälp oss att lösa mysteriet om årets DÖMD-vinnare! Dörrarna öppnar 09:00 för incheckning av lag.</Typography>
            <Typography marginTop={"5%"}>AfterDart (Pris: 150kr)</Typography>

<Typography>
Hur ska man då kunna avsluta den här maxade helgen på bästa sätt? Jo, det gör man naturligtvis med AfterDart där världsstjärnan A7S tar plats på scen för att leverera bangers som aldrig förr!
</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={2} sm={2}>
        <img src={Detective1} width={"100%"}></img>
      </Grid>
    </Grid>
  );
}

export default Schema;
