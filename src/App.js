import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import './theme.css';
import { v4 as uuidv4 } from 'uuid'
import Navbar from './components/Navbar';
import ReactDOM from "react-dom/client"
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Book from './components/pages/Book';
import Articles from './components/pages/Articles';
import About from './components/pages/About';
import Footer from './components/Footer';
import PrivacyPolicy from './components/pages/PrivacyPolicy';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/book' element={<Book/>} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/about' element={<About />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
