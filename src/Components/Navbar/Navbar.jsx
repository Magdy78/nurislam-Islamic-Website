import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link
import { styled } from '@mui/system';
import QuranPage from '../Quran/Quran';

const NavbarContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Logo = styled(Typography)({
  color: '#ecf0f1',
  textDecoration: 'none',
  marginRight: '16px',
  fontSize: '1.5rem',
  fontWeight: 'bold',
});

const NavButton = styled(Link)({
  color: '#ecf0f1',
  marginLeft: '8px',
  textDecoration: 'none',
});

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2c3e50' }}>
      <NavbarContainer>
        <Logo variant="h6" component={Link} to="/">
          Nur Al'Islam
        </Logo>
        <NavButton to="/" component={Link}>
          Home
        </NavButton>
        <NavButton to="/Quran" component={QuranPage}>
          Quran
        </NavButton>
        <NavButton to="/Hadith" component={Link}>
          Hadith
        </NavButton>
      </NavbarContainer>
    </AppBar>
  );
};

export default Navbar;
