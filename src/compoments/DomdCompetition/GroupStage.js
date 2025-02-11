import React, { useState, useEffect, useCallback } from "react";
import { Box, Typography, CircularProgress, Button, Grid } from "@mui/material";
import { fetchGroupsWithParticipantsAndMatches } from "./Services/groupService";
import { API_KEY, TOURNAMENT_ID } from "./utils/config";

const GroupStage = () => {
  const [groups, setGroups] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [showLogo, setShowLogo] = useState(false);

  const loadData = useCallback(async () => {
    setLoading(true);
    setShowLogo(true);
    setError("");
    try {
      console.log("Hämtar färska gruppdata...");
      const groupsData = await fetchGroupsWithParticipantsAndMatches(API_KEY, TOURNAMENT_ID, Date.now());
      console.log("Hämtade grupper:", groupsData);
      setGroups(groupsData);
    } catch (err) {
      console.error("Fel vid hämtning av gruppspelsdata:", err);
      setError("Kunde inte hämta gruppspelsdata. Försök igen senare.");
    } finally {
      setLoading(false);
      setTimeout(() => setShowLogo(false), 2000);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const refreshMatches = async () => {
    setGroups({});
    await loadData();
    if (selectedGroup) {
      setSelectedGroup(null);
      setTimeout(() => setSelectedGroup(selectedGroup), 0);
    }
  };

  useEffect(() => {
    console.log("Gruppernas tillstånd uppdaterat:", groups);
  }, [groups]);

  const getLocation = (index) => {
    if (index < 9) return `Tavla ${index + 1}, Baljan`;
    if (index >= 9 && index < 13) return `Tavla ${index - 8 + 9}, Nano`;
    if (index >= 13 && index < 16) return `Tavla ${index - 13 + 14}, Gasquen`;
    return "Okänd plats";
  };

  if (selectedGroup && groups[selectedGroup]) {
    const group = groups[selectedGroup];
    return (
      <Box sx={{ padding: 2, maxWidth: { xs: "100%", sm: "90%", md: "800px" }, margin: "0 auto", backgroundColor: "#121212", color: "#ffffff", minHeight: "100vh" }}>
        <Typography variant="h4" gutterBottom align="center">
          Matcher för Grupp {selectedGroup}
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ marginBottom: 2 }}>
          ⏰ 12/2 17.15
        </Typography>

        <Button 
          variant="outlined" 
          onClick={() => setSelectedGroup(null)} 
          sx={{ 
            marginBottom: 4, 
            color: "#FF00CC", 
            borderColor: "#FF00CC", 
            borderRadius: "30px",
            padding: "12px 24px", 
            width: "100%", 
            maxWidth: "300px", 
            display: "block", 
            marginLeft: "auto", 
            marginRight: "auto",
            fontWeight: "bold",
            letterSpacing: "1px",
            '&:hover': { 
              backgroundColor: "#FF33CC", 
              borderColor: "#FF33CC", 
              color: "#fff" 
            },
            transition: "background-color 0.3s ease, border-color 0.3s ease"
          }}
        >
          Tillbaka till grupper
        </Button>
        
        <Button 
          variant="outlined" 
          onClick={refreshMatches} 
          disabled={loading} 
          sx={{ 
            marginBottom: 4, 
            color: "#FF00CC", 
            borderColor: "#FF00CC", 
            backgroundColor: loading ? "rgba(255, 0, 204, 0.5)" : "transparent",
            borderRadius: "30px", 
            padding: "12px 24px", 
            width: "100%", 
            maxWidth: "300px", 
            display: "block", 
            marginLeft: "auto", 
            marginRight: "auto",
            fontWeight: "bold", 
            letterSpacing: "1px", 
            '&:hover': { 
              backgroundColor: "#FF33CC", 
              borderColor: "#FF33CC", 
              color: "#fff" 
            },
            transition: "background-color 0.3s ease, border-color 0.3s ease"
          }}
        >
          {loading ? "Uppdaterar matcher..." : "Uppdatera matcher"}
        </Button>

        {group.matches && group.matches.length > 0 ? (
          group.matches.map((match) => (
            <Box key={match.id} sx={{ padding: 2, border: "1px solid #444", marginBottom: 2, borderRadius: "8px", textAlign: "center", boxShadow: "0px 2px 8px rgba(255,255,255,0.1)", backgroundColor: "#1E1E1E", color: "#fff" }}>
              <Typography variant="h6" sx={{ fontSize: { xs: "16px", md: "20px" } }}>
                {match.player1} vs {match.player2}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold", fontSize: { xs: "14px", md: "18px" } }}>
                Poäng: {match.score1}-{match.score2}
              </Typography>
              <Typography variant="body2" sx={{ color: "lightgreen", fontWeight: "bold", fontSize: { xs: "14px", md: "16px" } }}>
                Vinnare: {match.winner}
              </Typography>
            </Box>
          ))
        ) : (
          <Typography align="center">Inga matcher tillgängliga för denna grupp.</Typography>
        )}
      </Box>
    );
  }

  return (
    <Box sx={{ 
      padding: 2, 
      maxWidth: { xs: "100%", sm: "90%", md: "1200px" }, 
      margin: "0 auto", 
      backgroundColor: "#121212", 
      color: "#ffffff", 
      minHeight: "100vh"
    }}>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 2 }}>
        <img src="/DIMDlogo.png" alt="DIMD Logo" style={{ width: "300px", height: "auto", maxWidth: "100%" }} />
      </Box>
  
      <Button 
        variant="outlined" 
        onClick={loadData} 
        disabled={loading} 
        sx={{ 
          marginBottom: 4, 
          color: "#FF00CC", 
          borderColor: "#FF00CC", 
          backgroundColor: loading ? "rgba(255, 0, 204, 0.5)" : "transparent",
          borderRadius: "30px", 
          padding: "12px 24px", 
          width: "100%", 
          maxWidth: "300px", 
          display: "block", 
          marginLeft: "auto", 
          marginRight: "auto",
          fontWeight: "bold", 
          letterSpacing: "1px", 
          '&:hover': { backgroundColor: "#FF33CC", borderColor: "#FF33CC", color: "#fff" },
          transition: "background-color 0.3s ease, border-color 0.3s ease"
        }}
      >
        {loading ? "Uppdaterar..." : "Uppdatera"}
      </Button>
  
      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
          <CircularProgress sx={{ color: "#FF00CC" }} /> 
        </Box>
      )}
  
      {error && (
        <Typography color="error" sx={{ textAlign: "center", marginTop: 2 }}>
          {error}
        </Typography>
      )}
  
      {!loading && (
        <Grid container spacing={2} justifyContent="center">
          {Object.keys(groups).map((groupName, index) => {
            const group = groups[groupName];
            const location = getLocation(index);
  
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={groupName}>
                <Box
                  sx={{
                    padding: 3,
                    border: "1px solid #444",
                    cursor: "pointer",
                    textAlign: "center",
                    borderRadius: "8px",
                    transition: "all 0.3s ease",
                    "&:hover": { backgroundColor: "#222", boxShadow: "0px 4px 8px rgba(255,255,255,0.1)" },
                    backgroundColor: "#1E1E1E",
                    color: "#ffffff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: { xs: "140px", sm: "160px", md: "180px" },
                  }}
                  onClick={() => setSelectedGroup(groupName)}
                >
                  <Typography variant="h5" sx={{ fontSize: { xs: "16px", md: "22px" } }}>
                    Grupp {groupName}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontSize: { xs: "12px", md: "18px" }, color: "lightblue" }}>
                    📍 {location}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontSize: { xs: "12px", md: "16px" }, color: "#FFD700", marginBottom: 1 }}>
                    ⏰ 12/2 17.15
                  </Typography>
                  <Box>
                    {group.participants.map((p, i) => (
                      <Typography key={i} variant="body1" sx={{ fontSize: { xs: "12px", md: "16px" } }}>
                        {p}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      )}
    </Box>
  );
};

export default GroupStage;
