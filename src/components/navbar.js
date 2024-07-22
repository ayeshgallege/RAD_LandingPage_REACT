import React, { useContext } from 'react';
import { AppBar, Toolbar, Button, IconButton, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.mode === 'dark' ? '#333' : '#050C9B',
  //transition: 'background 0.3s ease-in-out',
}));

const StyledTitle = styled(Typography)({
  flexGrow: 1,
  fontFamily: 'sans-serif',
  fontWeight: 'bold',
  color: '#FFF',
});

const StyledButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  fontWeight: 'bold',
  textTransform: 'none',
  color: '#fff',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  transition: 'transform 0.2s',
  color: '#fff',
  '&:hover': {
    transform: 'rotate(20deg)',
  },
}));

const LogoImage = styled('img')({
  height: 40, // Set the height of the logo
  marginRight: 16, // Add some margin to the right of the logo
});

const NavBar = () => {
  const { toggleTheme } = useContext(ThemeContext);//light mode and dark mode

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <LogoImage src="/images/logo.jpg" alt="Conffee Logo" /> {/* Add the logo image */}
        <StyledTitle variant="h6">
          Conffee
        </StyledTitle>
        <StyledButton color="inherit" component={NavLink} to="/" exact>
          Home
        </StyledButton>
        <StyledButton color="inherit" component={NavLink} to="/about">
          About
        </StyledButton>
       
        <StyledButton color="inherit" component={NavLink} to="/contact">
          Contact Us
        </StyledButton>
       
        <StyledIconButton color="inherit" onClick={toggleTheme}>
          <Brightness4Icon />
        </StyledIconButton>
      </Toolbar>
    </StyledAppBar>
  );
};

export default NavBar;
