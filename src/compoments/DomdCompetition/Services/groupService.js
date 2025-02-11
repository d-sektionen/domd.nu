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

/**
 * Fetch participants from the Challonge API and map participant IDs to names and group player IDs.
 */
export const fetchParticipants = async (apiKey, tournamentId) => {
  try {
    const url = `https://api.allorigins.win/raw?url=${encodeURIComponent(
      PARTICIPANTS_URL(apiKey, tournamentId)
    )}`;
    const response = await fetchWithRetry(url);

    const participants = await response.json();
    const participantMap = participants.reduce((acc, curr) => {
      const participant = curr.participant;
      acc[participant.id] = {
        name: participant.name,
        groupId: participant.group_id,
        alternateIds: participant.group_player_ids || [], // Include alternate IDs
      };
      return acc;
    }, {});

    return participantMap;
  } catch (error) {
    console.error("Error fetching participants:", error);
    throw error;
  }
};

/**
 * Fetch matches from the Challonge API and resolve player IDs to participant names.
 */
export const fetchGroupMatches = async (apiKey, tournamentId, participants) => {
  try {
    const url = `https://api.allorigins.win/raw?url=${encodeURIComponent(
      MATCHES_URL(apiKey, tournamentId)
    )}`;
    const response = await fetchWithRetry(url);

    const matches = await response.json();

    // Attach participant names to matches using both IDs and alternate IDs
    const enrichedMatches = matches
      .filter((match) => match.match.group_id !== null) // Filter group stage matches
      .map((match) => {
        const matchData = match.match;

        // Resolve player names using participant IDs and alternate IDs
        const resolveName = (playerId) =>
          Object.values(participants).find(
            (p) => p.alternateIds.includes(playerId) || p.id === playerId
          )?.name || "Unknown Player";

        return {
          id: matchData.id,
          groupId: matchData.group_id,
          player1: resolveName(matchData.player1_id),
          player2: resolveName(matchData.player2_id),
          score1: matchData.scores_csv
            ? matchData.scores_csv.split("-")[0]
            : "0",
          score2: matchData.scores_csv
            ? matchData.scores_csv.split("-")[1]
            : "0",
          winner: matchData.winner_id
            ? resolveName(matchData.winner_id)
            : "TBD",
        };
      });

    return enrichedMatches;
  } catch (error) {
    console.error("Error fetching group matches:", error);
    throw error;
  }
};

export const fetchGroupsWithParticipantsAndMatches = async (apiKey, tournamentId, timestamp) => {
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
        groupId: participant.group_id,
        alternateIds: participant.group_player_ids || [],
      };
    });

    const resolveName = (playerId) => {
      if (!playerId) return "Unknown Player";
      return (
        Object.values(participants).find(
          (p) => p.id === playerId || (p.alternateIds && p.alternateIds.includes(playerId))
        )?.name || "Unknown Player"
      );
    };

    let groups = {};
    matchesData.forEach(({ match }) => {
      if (!match.group_id) return;

      if (!groups[match.group_id]) {
        groups[match.group_id] = {
          participants: [],
          matches: [],
          station: match.location || match.identifier || "Unknown Station",
          originalId: match.group_id,
        };
      }

      groups[match.group_id].matches.push({
        id: match.id,
        groupId: match.group_id,
        player1: resolveName(match.player1_id),
        player2: resolveName(match.player2_id),
        score1: match.scores_csv ? match.scores_csv.split("-")[0] : "0",
        score2: match.scores_csv ? match.scores_csv.split("-")[1] : "0",
        winner: match.winner_id ? resolveName(match.winner_id) : "TBD",
      });
    });

    Object.values(participants).forEach((participant) => {
      if (participant.groupId && groups[participant.groupId]) {
        groups[participant.groupId].participants.push(participant.name);
      }
    });

    let sortedGroups = Object.values(groups).sort((a, b) => a.originalId - b.originalId);
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    sortedGroups = sortedGroups.map((group, index) => ({
      ...group,
      name: letters[index] || `Group ${index + 1}`
    }));

    groups = sortedGroups.reduce((acc, group) => {
      acc[group.name] = group;
      return acc;
    }, {});

    console.log("Final Processed Groups:", groups);
    return groups;
  } catch (error) {
    console.error("Error fetching groups, participants, and matches:", error);
    throw error;
  }
};
