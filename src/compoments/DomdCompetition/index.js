import React, { useState, useEffect } from "react";
import { Box, Typography, Select, FormControl, InputLabel, MenuItem } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import API_KEY from './config';
// import { makeStyles } from "@mui/styles";

// const theme = createTheme({
//   components: {
//     mui
//   }
// })

const SEMI_FINAL_BOARD1 = 2;
const SEMI_FINAL_BOARD2 = 5;
const FINAL_BOARD = 5;

const TOURNAMENT_URL = 'https://api.challonge.com/v1/tournaments/testAvAPI/matches.json';

const TOURNAMENT_ID = 'domd2023';
// const TEAMS_URL = `https://api.challonge.com/v1/tournaments/${year}/participants.json`;


// const TOURNAMENT_ID = 'testAvAPI';
const MATCHES_URL = `https://api.challonge.com/v1/tournaments/${TOURNAMENT_ID}/matches.json`;

// Function to get the team's next game with time and station details
async function getNextGameDetails(teamID) {
  try {
    const response = await fetch(`${MATCHES_URL}?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const matches = await response.json();
    const now = new Date();

    const nextMatch = matches.find(match => {
      const matchDate = new Date(match.match.scheduled_time || match.match.created_at);
      console.log(matchDate, 'this is matchdate')
      console.log(matchDate> now)
      console.log(match.match.player1_id == teamID )
      console.log(match.match.player1_id, 'does this do something?')
      return matchDate > now && (match.match.player1_id === teamID || match.match.player2_id === teamID);
    });
    console.log(matches);
    console.log(nextMatch, 'nextMatch');

    if (nextMatch) {
      const { scheduled_time, station } = nextMatch.match;
      console.log('Next game scheduled at:', scheduled_time);
      console.log('Station:', station || 'Not specified');
    } else {
      console.log('No upcoming match found for the team.');
    }
  } catch (error) {
    console.error('Error fetching match details:', error);
  }
}

// Call the function to get the team's next game details
// getNextGameDetails(TEAM_ID);

const MATCH_ID = 304405505;
const MATCH_URL = `https://api.challonge.com/v1/tournaments/${TOURNAMENT_ID}/matches/${MATCH_ID}.json`;

const time = '10:30';
const location = 'Baljan';
const boardNumb = '16';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuPropsTeam = {
  PaperProps: {
    sx: {
      maxHeight: ITEM_HEIGHT * 8.5 + ITEM_PADDING_TOP,
      '.MuiMenu-list': {
        backgroundColor: 'white',
        paddingTop: 0,
      },
      '.Mui-selected': {
        // backgroundColor: 'rgba(204,91,150,0.2)',
      },
      '& .MuiMenuItem-gutters': {
        borderWidth: '1px',
        borderColor: 'yellow',
        // '&:hover': {
        //   color: 'blue',
        // }
      },
      '.MuiSelect-select': {
        backgroundColor: 'blue',
      },
    },
  },
};

// Returns all games of a tournamentId
async function fetchAllGames(tournamentId, apiKey) {
  try {
    const url = `https://thingproxy.freeboard.io/fetch/https://api.challonge.com/v1/tournaments/${tournamentId}/matches.json?api_key=${apiKey}`;
    const response = await fetch(url);    
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const matches = await response.json();
    return matches;
  } catch (error) {
    console.error('Error fetching matches:', error);
  }
}

// checks if a team has a game, return true or false
function doesTeamHaveGame(allGames, teamId) {
    const matches = allGames;
    console.log("Matches json: ", matches);
    // Check if teamId is in any match
    const hasGame = matches.some(match => (match.match.player1_id == teamId || match.match.player2_id == teamId) && match.match.state !== 'complete');
    console.log("Does player have game:", hasGame);
    return hasGame;
}

// Returns the next game of a competing team
function getNextGame(allGames, teamId) {
  const matches = allGames;
  console.log("Matches json: ", matches);
  // Check if teamId is in any match
  const game = matches.find(match => (match.match.player1_id == teamId || match.match.player2_id == teamId) && match.match.state !== 'complete');
  console.log("This is the next game:", game);
  return game;
}

// Return the dartBoardNumb of a certain game
function getDartBoardNumb(tournament, allGames, game) {
  if (tournament.toLowerCase().includes('dimd')) {
    console.log(allGames.length, "amount of games")
    // return other 
    console.log(game.match.suggested_play_order, "game numb");
    if(allGames.length - game.match.suggested_play_order <= 2) {
      switch (game.match.suggested_play_order) {
        case 61: 
          return SEMI_FINAL_BOARD1;
        case 62:
          return SEMI_FINAL_BOARD2;
        case 63:
          return FINAL_BOARD;
      }
    } else {
      return game.match.suggested_play_order % 12;
    }
  }
  else if (tournament.toLowerCase().includes('domd')) {
    if(allGames.length - game.match.suggested_play_order <= 6) {
      switch (game.match.suggested_play_order) {
        case 61: 
          return SEMI_FINAL_BOARD1;
        case 62:
          return SEMI_FINAL_BOARD2;
        case 63:
          return FINAL_BOARD;
        default:
          return FINAL_BOARD;
      }
    } else {
      return game.match.suggested_play_order % 32;
    }
  }
}

export default function DomdComp() {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState('');
  const [displayTeam, setDisplayTeam] = useState(false);
  const [teamHasGame, setTeamHasGame] = useState(false);
  const [tournamentID, setTournamentID] = useState('');
  const [teamsID, setTeamsID] = useState({});
  const [allGamesOfTournament, setAllGames] = useState([]);
  const [time, setGameTime] = useState('');
  const [boardNumb, setBoardNumb] = useState('');
  const [location, setLocation] = useState('');

  const changeYear = async (event) => {
    const tournamentName = event.target.value;
    setTournamentID(tournamentName);
    setAllGames(await fetchAllGames(tournamentName, API_KEY));
  }

  const changeTeam = (event) => {
    const teamName = event.target.value;
    setSelectedTeam(teamName);
    if (teamName !== '') {
      setDisplayTeam(true);
      console.log("got in here")
    }

    console.log(allGamesOfTournament, "all games");
    // check if team has a game to play
    const teamHasGame = doesTeamHaveGame(allGamesOfTournament, teamsID[teamName]);
    if (teamHasGame) {
      setTeamHasGame(true);
      // TODO: update the time, boardNumb and location
      const nextGame = getNextGame(allGamesOfTournament, teamsID[teamName]);
      const gameTime = nextGame.match.scheduled_time;
      const formattedTime = new Date(gameTime).toLocaleTimeString('sv-SE', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false // If you want 24-hour format
      });
      setGameTime(formattedTime);

      // checks if it not the last three games

      const dartBoardNumb = getDartBoardNumb(tournamentID, allGamesOfTournament, nextGame);
      setBoardNumb(dartBoardNumb);

      if (dartBoardNumb <= 8) {
        setLocation('Baljan');
      } else if (dartBoardNumb <= 12) {
        setLocation('Nano');
      } else {
        setLocation('Matsalen');
      }
    } else {
      setTeamHasGame(false);
      console.log("team does not have game");
    }
  }

  // Function to fetch all teams of a tournament, is updated as choosen competition is changed
  useEffect(() => {
    async function getAllTeams() {
      console.log(tournamentID, 'fetching teams');
      const url = `https:/thingproxy.freeboard.io/fetch/https://api.challonge.com/v1/tournaments/${tournamentID}/participants.json?api_key=${API_KEY}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const teams = await response.json();
        // console.log(teams);
        let teamList = [];
        let teamsIdentification = {};
        for (let team of teams) {
          teamList.push(team.participant.name);
          // console.log(team.participant, "team info");
          teamsIdentification[team.participant.name] = team.participant.id;
          // console.log(team.participant.id);
        }
        teamList.sort();
        setTeams(teamList);
        setTeamsID(teamsIdentification);
        console.log(teamsIdentification);
        // console.log('All teams of the tournament:', teams[0].participant.name);
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    }
    getAllTeams();
  }, [tournamentID]);

  return (

    <Box sx={{height: '90vh', backgroundColor: 'rgba(255, 230, 0, 0.5)', paddingTop: '10vh', alignItems:'center'}}>
      <Typography variant="h4" sx={{textAlign: 'center'}}>Välj Tävling!</Typography>
        <FormControl
          sx={{
            backgroundColor: 'white',
            width: '70%',
            maxWidth: '300px',
            marginLeft:'auto',
            marginRight:'auto',
            display: 'flex',
          }}
        >
          <InputLabel id="comp-select-label">Tävling</InputLabel>
          <Select
            autoWidth
            labelId="comp-select-label"
            id="comp-select"
            value={tournamentID}
            label="comp"
            onChange={changeYear}
            MenuProps={MenuPropsTeam}
            // inputProps={{
            //   classes: {
            //     root: classes.input
            //   }
            // }}
          >
            {/* <MenuItem value={'dimd2024'} sx={{borderWidth:1}}>DIMD 2024</MenuItem> */}
            <MenuItem value={'dimd2024'}>DIMD 2024</MenuItem>
            <MenuItem value={'domd2023'}>DÖMD 2023</MenuItem>
            <MenuItem value={'dimd2023'}>DIMD 2023</MenuItem>
          </Select>
        </FormControl>
      <Typography variant="h4" sx={{textAlign:'center', marginTop: '10px'}}>Välj lag</Typography>
      <FormControl
        sx={{
          backgroundColor: 'white',
          width: '70%',
          maxWidth: '300px',
          marginLeft:'auto',
          marginRight:'auto',
          display: 'flex',
        }}
      >
        <InputLabel id="team-label">Lag</InputLabel>
        <Select
          autoWidth
          labelId="team-label"
          id="demo-simple-select"
          value={selectedTeam}
          label="team"
          onChange={changeTeam}
          MenuProps={MenuPropsTeam}
          // sx={{
          //   '.MuiMenu-list': {
          //     backgroundColor:"white",
          //     width: '300px',
          //   },
          //   '.MuiSelect-select': {
          //     color: 'blue',
          //   }
          // }}
        >
          {teams.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
          {/* <MenuItem value={1}>Lag 1</MenuItem>
          <MenuItem value={2}>Lag 2</MenuItem>
          <MenuItem value={3}>Lag 3</MenuItem>
          <MenuItem value={4}>Lag 4</MenuItem>
          <MenuItem value={5}>Lag 5</MenuItem>
          <MenuItem value={6}>Lag 6</MenuItem>
          <MenuItem value={7}>Lag 7</MenuItem>
          <MenuItem value={8}>Lag 8</MenuItem>
          <MenuItem value={9}>2022</MenuItem>
          <MenuItem value={10}>2024</MenuItem>
          <MenuItem value={11}>2023</MenuItem>
          <MenuItem value={12}>2022</MenuItem>
          <MenuItem value={13}>2024</MenuItem>
          <MenuItem value={14}>2023</MenuItem>
          <MenuItem value={15}>2021</MenuItem> */}

        </Select>
      </FormControl>
      <Box sx={{
        marginTop: '30px',
        alignItems: 'center',
        px: '10px',}}
      >
        <Typography variant="h4" sx={{textAlign: 'center', display: displayTeam ? 'none' : 'block',}}>Ta reda på när ditt lag spelar under tävlingen!</Typography>
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            display: displayTeam && teamHasGame ? 'block' : 'none',}}
        >Lag/Spelare {selectedTeam} spelar {time} i {location} på tavla {boardNumb}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            display: (displayTeam && !teamHasGame) ? 'block' : 'none',}}
        >Lag/Spelare {selectedTeam} har inga matcher att spela!
        </Typography>
      </Box>
    </Box>
  );
}


// scheduled_time: "2024-02-07T10:30:00.000-06:00" == 17.30

// scheduled_time: "2024-02-07T15:00:00.000-06:00" == 22.00