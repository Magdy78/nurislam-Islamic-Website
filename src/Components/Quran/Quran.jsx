import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography } from '@mui/material';

const QuranPage = () => {
  const [quranData, setQuranData] = useState(null);

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

  return (
    <Container>
      <Typography variant="h2" align="center" sx={{ marginBottom: '20px' }}>
        Quran Page
      </Typography>

      {/* Display Quran data */}
      {quranData && (
        <div>
          {quranData.surahs.map((surah) => (
            <div key={surah.number}>
              <h3>{surah.englishName}</h3>
              {surah.ayahs.map((ayah) => (
                <p key={ayah.number}>{ayah.text}</p>
              ))}
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default QuranPage;
