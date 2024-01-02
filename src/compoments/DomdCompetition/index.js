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

const TOURNAMENT_URL = 'https://api.challonge.com/v1/tournaments/testAvAPI/matches.json';

const TOURNAMENT_ID = 'domd2023';
// const TEAMS_URL = `https://api.challonge.com/v1/tournaments/${year}/participants.json`;



const API_URL = 'https://jsonplaceholder.typicode.com/todos/1';

// Function to fetch JSON data from the API
async function testFetchFunc() {
  try {
    const response = await fetch(API_URL); // Fetch data from the API
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json(); // Parse response body as JSON
    console.log('Fetched data:', data); // Log the fetched data
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

// const TOURNAMENT_ID = 'testAvAPI';
const TEAM_ID = '192163634';
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

export default function DomdComp() {
  const [teams, setTeams] = useState([]);
  const [year, setYear] = useState('');
  const [selectedTeam, setSelectTeam] = useState('');
  const [displayTeam, setDisplayTeam] = useState(false);
  const [tournamentID, setTournamentID] = useState('');
  let TEAMS_URL = `https://api.challonge.com/v1/tournaments/${year}/participants.json`;

  const changeYear = (event) => {
    setYear(event.target.value);
    setTournamentID(event)
    
    console.log(year);
  }

  const changeTeam = (event) => {
    setSelectTeam(event.target.value);
    if (year !== '') {
      setDisplayTeam(true);
    }
    console.log(event.target.value);
  }

    // Function to fetch all teams of a tournament
  useEffect(() => {
    async function getAllTeams() {
      console.log(year, 'fetching teams');
      const url = 'https://corsproxy.io/?' + encodeURIComponent(`https://cors-anywhere.herokuapp.com/https://api.challonge.com/v1/tournaments/${year}/participants.json?api_key=${API_KEY}`); 
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const teams = await response.json();
        console.log(teams);
        let teamList = []
        for (let team of teams) {
          teamList.push(team.participant.name);
          console.log(team.participant.name);
        }
        setTeams(teamList);
        // console.log('All teams of the tournament:', teams[0].participant.name);
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    }
    getAllTeams();
  }, [tournamentID]);

  // Call the function to fetch all teams of the tournament
  // getAllTeams();

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
            value={year}
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
        {/* <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            display: displayTeam ? 'block' : 'none',}}
        >Lag {selectedTeam} spelar {time} i {location} på tavla {boardNumb}
        </Typography> */}
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            display: displayTeam ? 'block' : 'none',}}
        >Lag {selectedTeam} har inga matcher att spela!
        </Typography>
      </Box>
    </Box>
  );
}