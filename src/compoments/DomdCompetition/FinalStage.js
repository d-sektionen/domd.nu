import React, { useState, useEffect } from "react";
import { fetchFinalStageData } from "./Services/finalService";
import { CircularProgress, Button, Box } from "@mui/material";

const FinalStage = () => {
  const [matchesByRound, setMatchesByRound] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadData = async () => {
    setLoading(true);
    setError("");
    try {
      console.log("🔍 Hämtar finalspelsdata...");
      const groupedMatches = await fetchFinalStageData();

      console.log("✅ Matcher hämtade:", groupedMatches);

      Object.keys(groupedMatches).forEach(round => {
        groupedMatches[round] = groupedMatches[round].map(match => ({
          ...match,
          station: "Baljan"
        }));
      });

      setMatchesByRound(groupedMatches);
    } catch (err) {
      console.error("❌ Fel vid hämtning av matcher:", err);
      setError("Kunde inte ladda finalspelsdata.");
    }
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div style={{ 
      textAlign: "center", 
      padding: "20px", 
      color: "#fff", 
      backgroundColor: "#121212", 
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      overflowX: "hidden"
    }}>
  
      {/* Logga */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "10px" }}>
        <img src="/DIMDlogo.png" alt="DIMD Logo" style={{ width: "300px", height: "auto", maxWidth: "100%" }} />
      </div>
  


{/* Uppdatera data-knapp */}
<Button 
  variant="outlined" 
  onClick={loadData} 
  disabled={loading} 
  sx={{ 
    marginBottom: 4, 
    color: "#FF00CC", 
    borderColor: "#FF00CC", 
    backgroundColor: loading ? "rgba(255, 0, 204, 0.5)" : "transparent",
    borderRadius: "30px",         // Rundade hörn för modern look
    padding: "12px 24px",         // Mer padding för en fylligare knapp
    width: "100%",                // Full bredd på små skärmar
    maxWidth: "300px",            // Maxbredd för att undvika en för stor knapp
    display: "block",             // Gör att knappen centreras korrekt
    marginLeft: "auto", 
    marginRight: "auto",
    fontWeight: "bold",           // Gör texten tydligare
    letterSpacing: "1px",         // Lägger till lite avstånd mellan bokstäver
    '&:hover': { 
      backgroundColor: "#FF33CC", 
      borderColor: "#FF33CC", 
      color: "#fff" 
    },
    transition: "background-color 0.3s ease, border-color 0.3s ease"
  }}
>
  {loading ? "Uppdaterar..." : "Uppdatera"}
</Button>

{/* Laddningsindikator */}
{loading && (
  <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
    <CircularProgress sx={{ color: "#FF00CC" }} /> {/* Rosa spinner */}
  </Box>
)}


      {/* Felmeddelande */}
      {error && <p style={{ color: "red", backgroundColor: "rgba(0, 0, 0, 0.7)", padding: "10px", borderRadius: "5px" }}>{error}</p>}
  
      {/* Laddar status */}
      {loading ? (
        <p style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", padding: "10px", borderRadius: "5px" }}></p>
      ) : (
        <div style={{
          display: "flex", 
          gap: "20px", 
          justifyContent: "center", // Centrerar innehållet på breda skärmar
          alignItems: "flex-start",
          flexWrap: "wrap", // Gör att innehållet bryts ner på mindre skärmar
          overflowX: "auto", 
          width: "100%",
          maxWidth: "100%",
          padding: "10px",
          WebkitOverflowScrolling: "touch", 
          scrollSnapType: "x mandatory"
        }}>
          {Object.keys(matchesByRound)
            .sort((a, b) => a - b)
            .map((round) => (
              <div key={round} style={{ 
                minWidth: "250px",
                maxWidth: "300px", // Begränsar bredden för att passa på mobiler
                flex: "0 0 auto",
                padding: "15px", 
                border: "1px solid #555", 
                borderRadius: "10px", 
                backgroundColor: "#1A1A1A",
                boxShadow: "2px 2px 10px rgba(255,255,255,0.1)",
                scrollSnapAlign: "start"
              }}>
                <h3>Runda {round}</h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
  {matchesByRound[round].map((match) => (
    <li key={match.id} style={{ 
      border: "1px solid #444", 
      padding: "10px", 
      marginBottom: "10px", 
      backgroundColor: "#1E1E1E",
      borderRadius: "8px"
    }}>
      <p><strong>{match.player1} vs {match.player2}</strong></p>
      <p>Poäng: {match.score}</p>
      <p>Vinnare: <span style={{ color: "lightgreen" }}>{match.winner}</span></p>
      <p>
        📍 {match.station}
        {match.time && ` | ⏰ ${match.time}`}
      </p>
    </li>
  ))}
</ul>


              </div>
            ))}
        </div>
      )}
    </div>
  );
  
}  

export default FinalStage;
