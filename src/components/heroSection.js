import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>25 th Icter International Conference</HeroTitle>
        <HeroSubtitle>05th to 08th November, 2024</HeroSubtitle>
        <HeroButton 
  variant="contained" 
  color="secondary" 
  sx={{ backgroundColor: '#050C9B', '&:hover': { backgroundColor: '#003366' } }}
>
  Get Started
</HeroButton>

      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

const HeroContainer = styled.div`
  background-image: url('/images/z2.jpg'); // Ensure this path is correct
  height: 45vh;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
  text-align: center;
  padding: 0 20px;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.5);
`;

const HeroContent = styled.div`
  max-width: 600px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-family:  sans-serif;
  font-weight: 700;
`;

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-family:  sans-serif;
  font-weight: 300;
`;

const HeroButton = styled(Button)`
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: #050C9B; // add my color
  color: black;
  &:hover {
    background-color: #003366; // Darker shade for hover effect
  }
`;

