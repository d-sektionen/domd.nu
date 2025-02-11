import React, { useState, useEffect } from "react";
import { Box, Typography, CircularProgress, Grid, TextField, Autocomplete } from "@mui/material";
import { fetchGroupsWithParticipantsAndMatches } from "./Services/groupService";

const GroupStage = () => {
  const [groups, setGroups] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState("");

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError("");
      try {
        const groupsData = await fetchGroupsWithParticipantsAndMatches();
        setGroups(groupsData);
      } catch (err) {
        setError("Kunde inte hämta gruppspelsdata. Försök igen.");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const getLocation = (index) => {
    if (index < 9) return `Tavla ${index + 1}, Baljan`;
    if (index >= 9 && index < 13) return `Tavla ${index - 8 + 9}, Nano`;
    if (index >= 13 && index < 16) return `Tavla ${index - 13 + 14}, Gasquen`;
    return "Okänd plats";
  };

  const handleSearch = (event, value) => {
    setSearchQuery(value);
    if (!value) {
      setSearchResult("");
      return;
    }

    Object.keys(groups).forEach((groupName, index) => {
      const group = groups[groupName];
      if (group.participants.includes(value)) {
        const location = getLocation(index);
        setSearchResult(`${value}s Grupp börjar 17.15 den 12/2 på ${location}.`);
      }
    });
  };

  const allParticipants = Object.values(groups).flatMap(group => group.participants);

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

      {/* Search Functionality */}
      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 4 }}>
        <Autocomplete
          options={allParticipants}
          value={searchQuery}
          onChange={handleSearch}
          renderInput={(params) => (
            <TextField 
              {...params} 
              label="Sök spelare" 
              variant="outlined"
              sx={{ 
                width: "300px", 
                backgroundColor: "#2C2C2C", 
                borderRadius: "8px", 
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: "#FF00CC",
                  },
                  '&:hover fieldset': {
                    borderColor: "#FF33CC",
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: "#FF33CC",
                  },
                  color: "#fff",
                  backgroundColor: "#2C2C2C"
                },
                '& .MuiInputLabel-root': {
                  color: "#FF00CC",
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: "#FF33CC",
                }
              }} 
              InputProps={{
                ...params.InputProps,
                sx: {
                  backgroundColor: "#2C2C2C",
                  color: "#fff",
                  '& .MuiSvgIcon-root': { color: "#FF00CC" }
                }
              }}
            />
          )}
          sx={{
            '& .MuiAutocomplete-paper': {
              backgroundColor: "#2C2C2C",
              color: "#fff",
              borderRadius: "8px"
            }
          }}
          PaperComponent={({ children }) => (
            <Box sx={{ backgroundColor: "#2C2C2C", color: "#fff", borderRadius: "8px" }}>
              {children}
            </Box>
          )}
        />
      </Box>

      {searchResult && (
        <Typography variant="h6" align="center" sx={{ marginBottom: 4, color: "#FF00CC" }}>
          {searchResult}
        </Typography>
      )}

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
                    textAlign: "center",
                    borderRadius: "8px",
                    backgroundColor: "#1E1E1E",
                    color: "#ffffff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: { xs: "140px", sm: "160px", md: "180px" },
                  }}
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
