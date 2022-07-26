import React from 'react';
import { Routes, Route } from "react-router-dom"

import Top from './Component/Top/Top'
import Header from './Component/Header/Header';
import Contact from './Container/Contact/Contact'
import Home from './Container/Home/Home'
import Forms from './Container/Forms/Forms'
import Property from './Container/Property/Property'
import Accessor from './Container/Accessor/Accessor'


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Department from './Container/Department/Department';
import Footer from './Component/Footer/Footer';

function App() {
  return (
   <>
    <Top />
    <Header /> 
    <Contact />
    <Department />
    <Footer />



    <Routes>
      {/* <Route path='/' element= { <Contact /> } /> */}
      <Route path='home' element= { <Home /> } />
      <Route path='forms' element= { <Forms /> } />
      <Route path='property' element= { <Property /> } />
      <Route path='accessor' element= { <Accessor /> } />
    </Routes>
    
   </>
  );
}

export default App;