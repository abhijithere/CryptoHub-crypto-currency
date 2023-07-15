import React from 'react';
import './App.css';
import Home from './Components/Home';
import Coin from './Components/Coin';
import Exchanges from './Components/Exchanges';
import CoinDetails from './Components/CoinDetails';
import Header from './Components/Header';
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/coin" element={<Coin/>} />
        <Route path="/exchanges" element={<Exchanges/>} />
        <Route path="/coin/:id" element={ <CoinDetails/>} />
      </Routes>
    </Router>
    );
}

export default App;
