import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar.js';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import { ThemeProvider } from './contexts/ThemeContext';


function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
