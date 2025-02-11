import { API_KEY, TOURNAMENT_ID } from "../utils/config";

const PARTICIPANTS_URL = (apiKey, tournamentId) =>
  `https://api.challonge.com/v1/tournaments/${tournamentId}/participants.json?api_key=${apiKey}`;

const MATCHES_URL = (apiKey, tournamentId) =>
  `https://api.challonge.com/v1/tournaments/${tournamentId}/matches.json?api_key=${apiKey}`;

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second
const FETCH_TIMEOUT = 5000; // 5 seconds

/**
 * Fetch with retry and timeout
 */
const fetchWithRetry = async (url, options = {}, retries = MAX_RETRIES) => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT);

    const response = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
  } catch (error) {
    if (retries > 0) {
      console.warn(`Retrying... (${retries} attempts left)`);
      await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
      return fetchWithRetry(url, options, retries - 1);
    } else {
      console.error("Max retries reached. Giving up.");
      throw error;
    }
  }
};

export const fetchFinalStageData = async (apiKey = API_KEY, tournamentId = TOURNAMENT_ID, timestamp = Date.now()) => {
  try {
    const [participantsData, matchesData] = await Promise.all([
      fetchWithRetry(`https://api.allorigins.win/raw?url=${encodeURIComponent(PARTICIPANTS_URL(apiKey, tournamentId))}&timestamp=${timestamp}`)
        .then(res => res.json()),
      fetchWithRetry(`https://api.allorigins.win/raw?url=${encodeURIComponent(MATCHES_URL(apiKey, tournamentId))}&timestamp=${timestamp}`)
        .then(res => res.json())
    ]);

    const participants = {};
    participantsData.forEach(({ participant }) => {
      participants[participant.id] = {
        id: participant.id,
        name: participant.name,
      };
    });

    const resolveName = (playerId) => {
      if (!playerId) return "Unknown Player";
      return participants[playerId]?.name || "Unknown Player";
    };

    let matches = matchesData.filter(({ match }) => match.group_id === null).map(({ match }) => {
      const time = match.scheduled_time 
        ? new Date(match.scheduled_time).toLocaleTimeString("sv-SE", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Stockholm" }) 
        : null;
      
      return {
        id: match.id,
        round: match.round,
        player1: resolveName(match.player1_id),
        player2: resolveName(match.player2_id),
        score: match.scores_csv || "0-0",
        winner: match.winner_id ? resolveName(match.winner_id) : "TBD",
        station: time ? `${match.location || "Baljan"} | ⏰ ${time}` : (match.location || "Baljan"),
        time: time || ""
      };
    });

    const groupedMatches = matches.reduce((acc, match) => {
      if (!acc[match.round]) acc[match.round] = [];
      acc[match.round].push(match);
      return acc;
    }, {});

    console.log("Final Processed Matches:", groupedMatches);
    return groupedMatches;
  } catch (error) {
    console.error("Error fetching final stage data:", error);
    throw error;
  }
};
