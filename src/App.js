import React from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import AboutUs from './AboutUs';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './Header';

export default function App() {
  
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/about' element={<AboutUs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

