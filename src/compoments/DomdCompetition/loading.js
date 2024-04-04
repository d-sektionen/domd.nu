import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import pokeball from './pokemonball.png';
import { Typography, Paper } from '@mui/material';
import './style.css'

const LoadingPokemonBall = ({ loading }) => {
  const [isSpinning, setIsSpinning] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSpinning(!isSpinning);
    }, 3000); // Set the delay before spinning starts in milliseconds (here 3000 milliseconds = 3 seconds)

    // Cleanup function to clear the timer if the component unmounts or is updated
    return () => clearTimeout(timer);
  }, [isSpinning]); // Empty dependency array ensures that this effect runs only once when the component mounts


  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      {loading ? (
        <Box sx={{display: 'flex', textAlign: 'center', alignContent: 'center', alignItems: 'center'}} >
          <Paper elevation={2} sx={{ display: 'flex', padding: 2, margin: 2, justifyContent: 'center', flexDirection: 'column', alignContent: 'center', alignItems: 'center'}}>
          <Box sx={{ width: '50px', height: '50px', animation: isSpinning ? 'spin 1s linear infinite' : ''}}>
            {/* Replace 'pokemon-ball.png' with the path to your Pokémon ball image */}
            <img src={pokeball} alt="Pokémon Ball" style={{ walignItems: 'center', alignContent:'center', width: '100%', height: '100%' }} />
          </Box>
            <Typography>
              Laddar in lag. Vänligen vänta...
            </Typography>
          </Paper>
        </Box>
      ) : (
        <div/>
      )}
    </Box>
  );
};

export default LoadingPokemonBall;