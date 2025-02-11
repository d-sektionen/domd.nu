const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second
const FETCH_TIMEOUT = 5000; // 5 seconds

/**
 * Return static participants data
 */
export const fetchParticipants = async () => {
  return {
    1: { name: "Marcus Döberl", groupId: 1, alternateIds: [] },
    2: { name: "Olle Morberg", groupId: 1, alternateIds: [] },
    3: { name: "Axel Genar", groupId: 1, alternateIds: [] },
    4: { name: "Jens Viberg", groupId: 1, alternateIds: [] },
    5: { name: "Daniel Wendin", groupId: 2, alternateIds: [] },
    6: { name: "Edvin Sångberg", groupId: 2, alternateIds: [] },
    7: { name: "Cora Gelin", groupId: 2, alternateIds: [] },
    8: { name: "Darja Saed", groupId: 2, alternateIds: [] },
    9: { name: "Marc Taylor", groupId: 3, alternateIds: [] },
    10: { name: "Gustav Viberg", groupId: 3, alternateIds: [] },
    11: { name: "Emelie Santesson", groupId: 3, alternateIds: [] },
    12: { name: "Elisabet Hammarberg", groupId: 3, alternateIds: [] },
    13: { name: "Dan Suleiman", groupId: 4, alternateIds: [] },
    14: { name: "Alvin Bragd", groupId: 4, alternateIds: [] },
    15: { name: "Erik Luttu", groupId: 4, alternateIds: [] },
    16: { name: "Edvin Dyremark", groupId: 4, alternateIds: [] },
    17: { name: "Linus Göransson", groupId: 5, alternateIds: [] },
    18: { name: "Rickard Hjerpe", groupId: 5, alternateIds: [] },
    19: { name: "Simon Hansson", groupId: 5, alternateIds: [] },
    20: { name: "Carl Rosvall", groupId: 5, alternateIds: [] },
    21: { name: "Adam Rylander", groupId: 6, alternateIds: [] },
    22: { name: "Sebastian Persson", groupId: 6, alternateIds: [] },
    23: { name: "Ludvig Mårtén", groupId: 6, alternateIds: [] },
    24: { name: "Shamil Limbasiya", groupId: 6, alternateIds: [] },
    25: { name: "Viktor Axén", groupId: 7, alternateIds: [] },
    26: { name: "William Thordson", groupId: 7, alternateIds: [] },
    27: { name: "Kacper Orzel", groupId: 7, alternateIds: [] },
    28: { name: "Jacob Slunga", groupId: 7, alternateIds: [] },
    29: { name: "Junia Mannervik", groupId: 8, alternateIds: [] },
    30: { name: "Ludvig Bengtsson", groupId: 8, alternateIds: [] },
    31: { name: "Anton Bergman", groupId: 8, alternateIds: [] },
    32: { name: "Emil Duchosal", groupId: 8, alternateIds: [] },
    33: { name: "Mehmet Yildirim", groupId: 9, alternateIds: [] },
    34: { name: "Erik Hilke", groupId: 9, alternateIds: [] },
    35: { name: "David Sjöberg", groupId: 9, alternateIds: [] },
    36: { name: "Hugo Staaff", groupId: 9, alternateIds: [] },
    37: { name: "Daneyal Abdul", groupId: 10, alternateIds: [] },
    38: { name: "Gustav Bornander", groupId: 10, alternateIds: [] },
    39: { name: "Ludvig Wrethman", groupId: 10, alternateIds: [] },
    40: { name: "Samuel Malmfors", groupId: 10, alternateIds: [] },
    41: { name: "Simon Harrysson", groupId: 11, alternateIds: [] },
    42: { name: "Eleanor Brunskog", groupId: 11, alternateIds: [] },
    43: { name: "Filip Jakobsson", groupId: 11, alternateIds: [] },
    44: { name: "Felix Johansson", groupId: 11, alternateIds: [] },
    45: { name: "Kajsa Näsman", groupId: 12, alternateIds: [] },
    46: { name: "Axel Peters", groupId: 12, alternateIds: [] },
    47: { name: "Oliver Sannicolò", groupId: 12, alternateIds: [] },
    48: { name: "Simon Ganning", groupId: 12, alternateIds: [] },
    49: { name: "Felix Ramnelöv", groupId: 13, alternateIds: [] },
    50: { name: "Filip Nygren", groupId: 13, alternateIds: [] },
    51: { name: "Philip Beiming", groupId: 13, alternateIds: [] },
    52: { name: "Axel Östberg", groupId: 13, alternateIds: [] },
    53: { name: "Jacob Volz", groupId: 14, alternateIds: [] },
    54: { name: "Disa Kärnbring", groupId: 14, alternateIds: [] },
    55: { name: "Jimi Henricsson", groupId: 14, alternateIds: [] },
    56: { name: "Andreas Arrestam", groupId: 14, alternateIds: [] },
    57: { name: "Mateo Zalabardo", groupId: 15, alternateIds: [] },
    58: { name: "Fredrik Martinsson", groupId: 15, alternateIds: [] },
    59: { name: "Jack Ydehall", groupId: 15, alternateIds: [] },
    60: { name: "Henrik Thorén", groupId: 15, alternateIds: [] },
    61: { name: "Elliot Eriksson", groupId: 16, alternateIds: [] },
    62: { name: "Alexander Bucht Linde", groupId: 16, alternateIds: [] },
    63: { name: "Christian Bagler", groupId: 16, alternateIds: [] },
    64: { name: "Eric Abramian", groupId: 16, alternateIds: [] }
  };
};

/**
 * Return static matches data
 */
export const fetchGroupMatches = async () => {
  const participants = await fetchParticipants();
  const matches = [];

  Object.values(participants).forEach((p1, index) => {
    Object.values(participants).forEach((p2) => {
      if (p1.groupId === p2.groupId && p1.name !== p2.name) {
        matches.push({
          id: matches.length + 1,
          groupId: p1.groupId,
          player1: p1.name,
          player2: p2.name,
          score1: "0",
          score2: "0",
          winner: "TBD"
        });
      }
    });
  });

  return matches;
};

/**
 * Return static groups with participants and matches
 */
export const fetchGroupsWithParticipantsAndMatches = async () => {
  const participants = await fetchParticipants();
  const matches = await fetchGroupMatches();

  const groups = {};

  Object.values(participants).forEach(participant => {
    const groupName = `${String.fromCharCode(64 + participant.groupId)}`;

    if (!groups[groupName]) {
      groups[groupName] = {
        participants: [],
        matches: [],
        station: `Station ${participant.groupId}`,
        originalId: participant.groupId
      };
    }

    groups[groupName].participants.push(participant.name);
  });

  matches.forEach(match => {
    const groupName = `${String.fromCharCode(64 + match.groupId)}`;
    if (groups[groupName]) {
      groups[groupName].matches.push(match);
    }
  });

  console.log("Static Processed Groups:", groups);
  return groups;
};
