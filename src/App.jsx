import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Compare from './components/Compare';
import Tariff from './components/Tariff';
import About from './components/About';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/tariff" element={<Tariff />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;