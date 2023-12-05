import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Container } from '@mui/material';
// import { Link } from 'react-router-dom';

const GridPage = () => {
  return (
    <Container>
      <Grid container spacing={2} sx={{ marginTop: '20px' }}>
       
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Quran
              </Typography>
              <Typography variant="body2">
                Explore the holy Quran and its verses.
              </Typography>
            </CardContent>
            <Button  color="primary">
              Go to Quran
            </Button>
          </Card>
        </Grid>

        
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Hadith
              </Typography>
              <Typography variant="body2">
                Discover the teachings of Prophet Muhammad (PBUH).
              </Typography>
            </CardContent>
            <Button color="primary">
              Go to Hadith
            </Button>
          </Card>
        </Grid>

      
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Azkar & Feelings
              </Typography>
              <Typography variant="body2">
                Find comfort in supplications and expressions of gratitude.
              </Typography>
            </CardContent>
            <Button color="primary">
              Go to Azkar
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GridPage;
