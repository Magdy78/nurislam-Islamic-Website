// SurahList.jsx
import React, { useState } from 'react';
import { List, ListItem, ListItemText, Card, CardContent } from '@mui/material';

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
    <List>
      {surahs.map((surah) => (
        <Card key={surah.number} sx={{ margin: 1 }}>
          <CardContent>
            <ListItem button onClick={() => handleSurahClick(surah)}>
              <ListItemText primary={surah.englishName} />
            </ListItem>
          </CardContent>
        </Card>
      ))}
    </List>
  );
};

export default SurahList;
