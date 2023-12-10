import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import SurahList from './SurahList';

const QuranPage = () => {
  const [quranData, setQuranData] = useState(null);
  const [selectedSurah, setSelectedSurah] = useState(null);

  useEffect(() => {
    const fetchQuranData = async () => {
      try {
        const response = await axios.get('http://api.alquran.cloud/v1/quran');
        setQuranData(response.data.data);
      } catch (error) {
        console.error('Error fetching Quran data:', error);
      }
    };

    fetchQuranData();
  }, []);

  const handleSurahClick = (surah) => {
    setSelectedSurah(surah);
  };

  return (
    <Container>
      <Typography variant='h3' align='center' style={{ marginTop: '20px' }}>
        بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <SurahList surahs={quranData?.surahs || []} onSurahClick={handleSurahClick} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default QuranPage;
