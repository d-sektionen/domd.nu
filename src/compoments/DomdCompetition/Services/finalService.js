import { API_KEY, TOURNAMENT_ID } from "../utils/config";

const API_BASE_URL = `https://api.challonge.com/v1/tournaments/${TOURNAMENT_ID}`;
const API_PUBLIC_PROXY = "https://thingproxy.freeboard.io/fetch/"; // 🔹 Public CORS proxy (Fallback)

const checkCORS = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/matches.json?api_key=${API_KEY}`, { mode: "no-cors" });
    return response.ok;
  } catch (error) {
    return false;
  }
};

// 🕒 Convert UTC Time to Swedish Local Time (HH:MM)
const formatToSwedishTime = (utcTime) => {
  if (!utcTime) return null; // No time set
  const date = new Date(utcTime);
  
  return date.toLocaleTimeString("sv-SE", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Stockholm", // ✅ Converts to Swedish time (CET/CEST)
  });
};

// 📍 Determine Match Location (Station)
const getMatchStation = async (tournamentID, matchID) => {
  try {
    const url = `${API_BASE_URL}/matches/${matchID}/attachments.json?api_key=${API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) throw new Error(`API Error: ${response.status}`);

    const attachments = await response.json();

    if (attachments.length > 0 && attachments[0].match_attachment.description) {
      return attachments[0].match_attachment.description.trim();
    }

    return "Ej angiven"; // Default if no station found
  } catch (error) {
    console.error("❌ Error fetching match location:", error);
    return "Ej angiven"; // Fallback
  }
};

// 🛠 Fetch Participants & Create ID Map
export const fetchFinalParticipants = async () => {
  try {
    let url = `${API_BASE_URL}/participants.json?api_key=${API_KEY}`;
    if (!(await checkCORS())) url = `${API_PUBLIC_PROXY}${url}`;

    const response = await fetch(url);
    if (!response.ok) throw new Error(`API Error: ${response.status}`);
    const data = await response.json();

    return data.reduce((acc, curr) => {
      acc[curr.participant.id] = curr.participant.name;
      return acc;
    }, {});
  } catch (error) {
    throw error;
  }
};

// 🛠 Fetch Final Stage Matches & Include Station & Time
let lastFetchedAt = null; // Timestamp for incremental updates
export const fetchFinalMatches = async (participants) => {
  try {
    let url = `${API_BASE_URL}/matches.json?api_key=${API_KEY}`;
    if (lastFetchedAt) url += `&updated_since=${lastFetchedAt}`;
    if (!(await checkCORS())) url = `${API_PUBLIC_PROXY}${url}`;

    lastFetchedAt = Math.floor(Date.now() / 1000); // Update timestamp

    const response = await fetch(url);
    if (!response.ok) throw new Error(`API Error: ${response.status}`);
    const data = await response.json();

    // Fetch stations for each match asynchronously
    const matchDataPromises = data
      .filter((match) => match.match.group_id === null) // ✅ Exclude group stage matches
      .map(async (match) => {
        const station = await getMatchStation(TOURNAMENT_ID, match.match.id);
        return {
          id: match.match.id,
          round: match.match.round,
          player1: participants[match.match.player1_id] || "TBD",
          player2: participants[match.match.player2_id] || "TBD",
          score: match.match.scores_csv || "0-0",
          winner: match.match.winner_id ? participants[match.match.winner_id] : "TBD",
          station: station, // ✅ Correct location from API
          time: formatToSwedishTime(match.match.scheduled_time), // ✅ Converts UTC to Swedish time
        };
      });

    return await Promise.all(matchDataPromises);
  } catch (error) {
    throw error;
  }
};

// 🛠 Fetch All Final Stage Data (Participants + Matches) and Group by Rounds
export const fetchFinalStageData = async () => {
  try {
    const participants = await fetchFinalParticipants();
    const matches = await fetchFinalMatches(participants);

    // ✅ Grouping Matches by Round
    const groupedMatches = matches.reduce((acc, match) => {
      if (!acc[match.round]) acc[match.round] = [];
      acc[match.round].push(match);
      return acc;
    }, {});

    return groupedMatches;
  } catch (error) {
    throw error;
  }
};

// 🔄 Polling for Auto Updates (Adjust interval time)
export const startAutoRefresh = (setMatches, interval = 15000) => {
  const refreshData = async () => {
    const updatedMatches = await fetchFinalStageData();
    setMatches(updatedMatches);
  };

  const intervalId = setInterval(refreshData, interval);
  return () => clearInterval(intervalId); // Cleanup on unmount
};
// 📍 DEBUG FUNCTION: Fetch raw station data for a single match
const debugMatchStation = async (matchID) => {
  try {
    const url = `${API_BASE_URL}/matches/${matchID}/attachments.json?api_key=${API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) throw new Error(`API Error: ${response.status}`);

    const attachments = await response.json();
    console.log("📍 RAW STATION DATA:", attachments);

    return attachments;
  } catch (error) {
    console.error("❌ Error debugging match location:", error);
    return "ERROR";
  }
};
