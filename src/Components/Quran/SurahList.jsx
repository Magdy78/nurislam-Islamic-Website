import React, { useState } from 'react';
import {
  List,
  ListItem,
  Card,
  CardContent,
  Typography,
  Divider,
  Container,
  Box,
} from '@mui/material';

const SurahList = ({ surahs, onSurahClick }) => {
  const [openSurah, setOpenSurah] = useState(null);

  const handleSurahClick = (surah) => {
    if (openSurah && openSurah.number === surah.number) {
      setOpenSurah(null);
    } else {
      setOpenSurah(surah);
      onSurahClick(surah);
    }
  };

  return (
    <Container>
      <List>
        {surahs.map((surah) => (
          <Card
            key={surah.number}
            elevation={openSurah && openSurah.number === surah.number ? 3 : 1}
            sx={{
              margin: 2,
              backgroundColor: openSurah && openSurah.number === surah.number ? '#f0f0f0' : 'inherit',
              cursor: 'pointer',
              borderRadius: '8px',
              transition: 'background-color 0.3s',
              width: '350%',
              margin: 'auto', 
            }}
          >
            <CardContent>
              <ListItem
                button
                onClick={() => handleSurahClick(surah)}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <Typography variant="h6" color="primary">
                    {surah.englishName}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {surah.name}
                  </Typography>
                </div>
                {openSurah && openSurah.number === surah.number && (
                  <Typography variant="subtitle1" color="primary">
                    Selected
                  </Typography>
                )}
              </ListItem>
              <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
              {openSurah && openSurah.number === surah.number && (
                <div>
                  {openSurah.ayahs.map((ayah) => (
                    <div key={ayah.number} style={{ marginTop: '8px' }}>
                      <Typography variant="body1" color="textSecondary">
                        {ayah.text}
                      </Typography>
                      <Typography variant="body2" color="primary">
                        {ayah.translation}
                      </Typography>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </List>
    </Container>
  );
};

export default SurahList;
