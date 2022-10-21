import React from 'react';

import './App.css';

import { BrowserRouter as Router} from 'react-router-dom';

import Header from './components/Header';
import Gigs from './components/Gigs';
import Footer from './components/Footer';
import Navbar from './components/Nav';

function App() {
  return (
    <>

      <Router>
        <Navbar />
      <Header/>
      <Gigs/>
        <Footer/>
         
      
      </Router>
    </>
  );
}

export default App;
