import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';

const HeroSection = () => {
  const [randomAyah, setRandomAyah] = useState(null);

  useEffect(() => {
    const generateRandomInteger = () => {
      // Generate a random integer between 1 and 6236 (inclusive)
      return Math.floor(Math.random() * 6236) + 1;
    };

    const fetchRandomAyah = async () => {
      try {
        const reference = generateRandomInteger();
        const response = await fetch(`http://api.alquran.cloud/v1/ayah/${reference}`);
        const data = await response.json();

        console.log('API Response:', data);

        // Assuming the API response has a structure like { code: 200, data: { number, text } }
        const ayahText = data.data.text;

        setRandomAyah(ayahText);
      } catch (error) {
        console.error('Error fetching random Ayah:', error);
      }
    };

    fetchRandomAyah();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <Box
      sx={{
        height: '70vh',
        backgroundColor: '#3498db', // Set your desired background color
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography variant="h2" gutterBottom>
        Welcome to Your Website
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {randomAyah ? `"${randomAyah}"` : 'Loading Ayah...'}
      </Typography>
      <Button variant="contained" color="secondary" size="large" href="/explore">
        Explore Now
      </Button>
    </Box>
  );
};

export default HeroSection;
