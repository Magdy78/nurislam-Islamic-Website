import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';

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

const MenuButton = styled(IconButton)({
  marginRight: '16px',
});

const NavButton = styled(Button)({
  color: '#ecf0f1',
  marginLeft: '8px',
});

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2c3e50' }}>
      <NavbarContainer>
        <MenuButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </MenuButton>
        <Logo variant="h6" component="div" to="/" as="a">
          Nur Al'Islam
        </Logo>
        <NavButton href="/">Home</NavButton>
        <NavButton href="/quran">Quran</NavButton>
        <NavButton href="/hadith">Hadith</NavButton>
        {/* Add more buttons as needed */}
      </NavbarContainer>
    </AppBar>
  );
};

export default Navbar;
