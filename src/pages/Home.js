import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HeroSection from '../components/heroSection';

const Home = () => {
  const [message, setMessage] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState('Welcome to Confee!');

  useEffect(() => {
    const timeOfDay = new Date().getHours();
    if (timeOfDay < 12) {
      setWelcomeMessage('Good Morning! ICter 24 !');
    } else if (timeOfDay < 18) {
      setWelcomeMessage('Good Afternoon! ICter 24!');
    } else {
      setWelcomeMessage('Good Evening! ICter 24!');
    }
  }, []);
//An empty array [] means the effect runs only once, after the initial render.
//No array means the effect runs after every render.


  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <HeroSection />
      <Content>
        <WelcomeMessage>{welcomeMessage}</WelcomeMessage>
        <InputContainer>
          <Input
            type="text"
            value={message}
            onChange={handleChange}
            placeholder="Type a welcome message"
          />
          <Button onClick={() => setWelcomeMessage(message)}>Set Message</Button>
        </InputContainer>
        <TypedMessage>{message}</TypedMessage>
      </Content>
    </div>
  );
};

export default Home;

const Content = styled.div`
  padding: 3rem;
  text-align: center;
  background: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  max-width: 600px;
`;

const WelcomeMessage = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  color: #333;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 70%;
  padding: 1rem;
  font-size: 1rem;
  margin-right: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border 0.3s ease;

  &:focus {
    border: 1px solid #333;
  }
`;

const Button = styled.button`
  padding: 1rem 1.5rem;
  font-size: 1rem;
  color: white;
  background-color: #333;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

const TypedMessage = styled.p`
  font-size: 1.5rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #666;
  margin-top: 1rem;
`;
