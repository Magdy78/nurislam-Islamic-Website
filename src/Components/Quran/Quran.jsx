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
      <Typography variant="h2" align="center" sx={{ marginBottom: '20px' }}>
        Quran Page
      </Typography>

      <Grid container spacing={2}>
        {/* Surah List */}
        <Grid item xs={4}>
          <SurahList surahs={quranData?.surahs || []} onSurahClick={handleSurahClick} />
        </Grid>

        {/* Selected Surah Details */}
        <Grid item xs={8}>
          {selectedSurah && (
            <Card>
              <CardContent>
                <Typography variant="h5">{selectedSurah.englishName}</Typography>
                {selectedSurah.ayahs.map((ayah) => (
                  <p key={ayah.number}>{ayah.text}</p>
                ))}
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default QuranPage;
