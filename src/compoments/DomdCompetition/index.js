import React, { useState, useEffect } from "react";
import { Box, Typography, Select, FormControl, InputLabel, MenuItem, CircularProgress, Link } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import API_KEY from './config';
import { Bracket, RoundProps} from 'react-brackets';
import Paper from '@mui/material/Paper';

import {styled} from "@mui/material/styles"
import TemaEnligBakgrund from "../../res/background/backGround2024.png"
import LoadingPokemonBall from "./loading.js";

// import { makeStyles } from "@mui/styles";

// const theme = createTheme({
//   components: {
//     mui
//   }
// })

const SEMI_FINAL_BOARD1 = 2;
const SEMI_FINAL_BOARD2 = 5;
const FINAL_BOARD = 5;

const TOURNAMENT_ID = 'domd2023';
const MATCHES_URL = `https://api.challonge.com/v1/tournaments/${TOURNAMENT_ID}/matches.json`;

// const rounds: RoundProps[] = [
//   {
//     title: 'Round one',
//     seeds: [
//       {
//         id: 1,
//         date: new Date().toDateString(),
//         teams: [{ name: 'Team A' }, { name: 'Team B' }],
//       },
//       {
//         id: 2,
//         date: new Date().toDateString(),
//         teams: [{ name: 'Team C' }, { name: 'Team D' }],
//       },
//     ],
//   },
//   {
//     title: 'Round one',
//     seeds: [
//       {
//         id: 3,
//         date: new Date().toDateString(),
//         teams: [{ name: 'Team A' }, { name: 'Team C' }],
//       },
//     ],
//   },
// ];
// Function to get the team's next game with time and station details
const Root = styled(Box)(({ theme }) => ({
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  color: "white",
  textAlign: "center",
  mt: { xs: 6, md: 2 },
  [theme.breakpoints.down("md")]: {
    backgroundImage: `url(${TemaEnligBakgrund})`,
    backgroundPosition: "50% 10%",
  },
  [theme.breakpoints.up("md")]: {
    backgroundImage: `url(${TemaEnligBakgrund})`,
    backgroundPosition: "50% 30%",
  },
}));


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
    const challongeUrl = `https://api.challonge.com/v1/tournaments/${tournamentId}/matches.json?api_key=${apiKey}`;
    const url = `https://api.allorigins.win/raw?url=${encodeURIComponent(challongeUrl)}`;
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

/*
[
  {
    opponentId: 'opponentID',
    score: '2-1',
  },
]
*/


// checks if a team has a game, return true or false
function doesTeamHaveGame(allGames, teamId) {
    const matches = allGames;
    console.log("Matches json: ", matches);
    // const previousGames = [];

    // for (let game of allGames) {
    //   const previousGameItem = {};
    //   console.log("item:", game.match.id);
    //   if(game.match.player1_id == teamId || game.match.player2_id == teamId){
    //     previousGameItem['opponentId'] = game.match.loser_id;
    //     previousGameItem['score'] = game.match.scores_csv;
    //     previousGames.push(previousGameItem);
    //   }
    // }
    // console.log("games of a player: ", previousGames);
    // Check if teamId is in any match
    const hasGame = matches.some(match => (match.match.player1_id == teamId || match.match.player2_id == teamId) && match.match.state !== 'complete');
    console.log("Does player have game:", hasGame);
    return hasGame;
}

// Returns the next game of a competing team
// TODO: GET INFORMATION ABOUT NEXT GAME AND THE PREVIOUS GAME OF A TEAM MEMBER
function getNextGame(allGames, teamId) {
  const matches = allGames;
  const previousGames = [];
  console.log("Matches json: ", matches);
  for (let game of allGames) {
    console.log("item game:", game.match.id);
  }
  // Check if teamId is in any match
  const game = matches.find(match => (match.match.player1_id == teamId || match.match.player2_id == teamId) && match.match.state !== 'complete');
  console.log("This is the next game:", game);
  return game;
}

// Return the dartBoardNumb of a certain game
async function getDartBoardNumb(tournamentID, allGames, game) {
  console.log("game id hopefully: ", game.match.id)
  const challongeUrl = `https://api.challonge.com/v1/tournaments/${tournamentID}/matches/${game.match.id}/attachments.json?api_key=${API_KEY}`;
  const url = `https://api.allorigins.win/raw?url=${encodeURIComponent(challongeUrl)}`;
  
  try {
    const response = await fetch(url);
    console.log("Hopefully din mamma: ", response)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const attachment = await response.json();
    console.log("Attachment: ", attachment[0].match_attachment.description)
    return attachment[0].match_attachment.description
  } catch (error) {
    console.error('Error fetching attachment:', error)
    alert('Något har gått fel,\n var vänligen kontakta Sekretariatet.')
  }
  // if (tournamentID.toLowerCase().includes('dimd')) {
  //   console.log(allGames.length, "amount of games")
  //   // return other 
  //   console.log(game.match.suggested_play_order, "game numb");
  //   if(allGames.length - game.match.suggested_play_order <= 2) {
  //     switch (game.match.suggested_play_order) {
  //       case 61: 
  //         return SEMI_FINAL_BOARD1;
  //       case 62:
  //         return SEMI_FINAL_BOARD2;
  //       case 63:
  //         return FINAL_BOARD;
  //     }
  //   } else {
  //     const dartBoardNumb = game.match.suggested_play_order % 12;
  //     if (dartBoardNumb == 0) {
  //       return 12
  //     } else {
  //       return game.match.suggested_play_order % 12;
  //     }
  //   }
  // }
  // else if (tournamentID.toLowerCase().includes('domd')) {
  //   if(allGames.length - game.match.suggested_play_order <= 6) {
  //     switch (game.match.suggested_play_order) {
  //       case 61: 
  //         return SEMI_FINAL_BOARD1;
  //       case 62:
  //         return SEMI_FINAL_BOARD2;
  //       case 63:
  //         return FINAL_BOARD;
  //       default:
  //         return FINAL_BOARD;
  //     }
  //   } else {
  //     return game.match.suggested_play_order % 32;
  //   }
  // }
}


// const Bracket = ()

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
  const [loading, setLoading] = useState(false);  // State to manage loading indicator

  const changeTournament = async (event) => {
    const tournamentName = event.target.value;
    setTournamentID(tournamentName);
    setAllGames(await fetchAllGames(tournamentName, API_KEY));
  }

  const changeTeam = async (event) => {
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
      // const previousGames = 
      const nextGame = getNextGame(allGamesOfTournament, teamsID[teamName]);
      const gameTime = nextGame.match.scheduled_time;
      const formattedTime = new Date(gameTime).toLocaleTimeString('sv-SE', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false // If you want 24-hour format
      });

      const dartBoardNumb = await getDartBoardNumb(tournamentID, allGamesOfTournament, nextGame);
      setGameTime(formattedTime);
      setBoardNumb(dartBoardNumb);

      if (dartBoardNumb <= 8) {
        setLocation('Baljan');
      } else if (dartBoardNumb <= 18) {
        setLocation('Grillen');
      } else if (dartBoardNumb <= 29) {
        setLocation('Matsalen');
      } else if (dartBoardNumb <= 32) {
        setLocation('Entrén');
      } else {
        setLocation('Matsalen')
      }
    } else {
      setTeamHasGame(false);
    }
  }

  // Function to fetch all teams of a tournament, is updated as choosen competition is changed
  useEffect(() => {
    async function getAllTeams() {
      console.log(tournamentID, 'fetching teams');
      if(!tournamentID) {
        return;
      }
      setLoading(true);  // Set loading state to true before starting the fetch
      const challongeUrl = `https://api.challonge.com/v1/tournaments/${tournamentID}/participants.json?api_key=${API_KEY}`;
      const url = `https://api.allorigins.win/raw?url=${encodeURIComponent(challongeUrl)}`;
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
          const teamCapitlizedName = team.participant.name.charAt(0).toUpperCase() + team.participant.name.slice(1)
          teamList.push(teamCapitlizedName);
          // console.log(team.participant, "team info");
          teamsIdentification[teamCapitlizedName] = team.participant.id;
          // console.log(team.participant.id);
        }
        teamList.sort();
        setTeams(teamList);
        setTeamsID(teamsIdentification);
        // console.log('All teams of the tournament:', teams[0].participant.name);
      } catch (error) {
        console.error('Error fetching teams:', error);
        alert('Något har gått fel,\n var vänligen kontakta Sekretariatet.');
      } finally {
        setLoading(false);
      }
    }
    getAllTeams();
  }, [tournamentID]);

  return (
    <Root container sx={{ pt: { xs: 10, md: 11 }, height: '89vh'}} align="left">

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
            onChange={changeTournament}
            MenuProps={MenuPropsTeam}
            // inputProps={{
            //   classes: {
            //     root: classes.input
            //   }
            // }}
          >
            {/* <MenuItem value={'dimd2024'} sx={{borderWidth:1}}>DIMD 2024</MenuItem> */}
            <MenuItem value={'domd2024'}>DÖMD 2024</MenuItem>
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
        >
          {teams.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box sx={{
        marginTop: '30px',
        alignItems: 'center',
        px: '10px',}}
      >
        <Paper elevation={2} sx={{ padding: 2, margin: 2, maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto'}}>
          <Typography variant="h4" sx={{textAlign: 'center', display: displayTeam ? 'none' : 'block',}}>Ta reda på när ditt lag spelar under tävlingen!</Typography>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              display: displayTeam && teamHasGame ? 'block' : 'none',}}
              >Lag {selectedTeam} spelar {time} i {location} på tavla {boardNumb}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              display: (displayTeam && !teamHasGame) ? 'block' : 'none',}}
              >Lag {selectedTeam} har inga matcher att spela! Njut av en kall DömD-IPA!
          </Typography>
        </Paper>
      </Box>
      {/* <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {loading && <CircularProgress/>}
      </Box> */}
      <LoadingPokemonBall loading={loading} />
      <Box 
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          // paddingX: '20px',  
          paddingY: '20px',
          width: '100%',
          bgcolor: 'background.paper',
          color: 'text.primary',
          textAlign: 'center',
          boxShadow: 'rgba(0, 0, 0, 0.1) 0px -2px 10px',
        }}
        >
        <Typography>
          För mer info om DÖMD 2024 kontakta sekretariatet eller gå till <Link href={`https://challonge.com/domd2024`} target="_blank">CHALLONGE</Link>
        </Typography>
      </Box>      
    </Root>
  );
}


// scheduled_time: "2024-02-07T10:30:00.000-06:00" == 17.30

// scheduled_time: "2024-02-07T15:00:00.000-06:00" == 22.00