import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Gigs from './components/Gigs';
import Footer from './components/Footer';
import Navbar from './components/Nav';
import Gigpage from './components/Gigpage';
import Homepage from './components/Homepage';

function App() {
  return (
    <>

      <Router>
        <Navbar />
       
        <Routes>
        <Route path='/' exact element={<Homepage/>} />
        <Route path='/Gigpage' element={Gigpage()} />



</Routes>
     

      </Router>
    </>
  );
}

export default App;
