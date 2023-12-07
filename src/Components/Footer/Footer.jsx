

import React from 'react';
import { Container, Typography, Link, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Container component="footer" sx={{ mt: 4, py: 3, backgroundColor: '#f8f9fa' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6">About Us</Typography>
          <Typography variant="body2">This is NonProfit project for foreginer muslims or new muslims <br />
          Where you can find Quran and Hadith and some Azkars to help you becoming good Muslim.</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Quick Links 🌟</Typography>
          <nav>
            <Link href="#" color="inherit" underline="hover" variant="body2">Azkar</Link>
            <br />
            <Link href="#" color="inherit" underline="hover" variant="body2">Quran</Link>
            <br />
            <Link href="#" color="inherit" underline="hover" variant="body2">Hadith</Link>
          </nav>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Contact Me 🧉​🧉​</Typography>
          <Typography variant="body2">📨​ Email: ahmed.magdybus@gmail.com</Typography>
          <Typography variant="body2">📞​ Phone: +201289579998</Typography>
        </Grid>
      </Grid>
      <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 2 }}>
        © {new Date().getFullYear()} Nur Al-Islam ☪. All rights reserved.
      </Typography>
    </Container>
  );
};

export default Footer;
