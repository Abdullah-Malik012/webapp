import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

import Header from './components/HeroSection';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <>

      <Router>
        <Navbar />
      <Header/>
      <Cards/>
        <Footer/>
         
      
      </Router>
    </>
  );
}

export default App;
