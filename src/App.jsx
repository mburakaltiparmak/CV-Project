import Header from './components/Header';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Contact from './components/Contact';
import React, { useEffect,useState } from 'react';
import './App.css'
import axios from 'axios';
import useLocalStorage from './hooks/useLocalStorage';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';

function App() {
  
  

  
  const {t,i18n} = useTranslation();

  return (
    
      <div
        id="main-container">
        <Header  />
        <Skills  />
        <Profile  />
        <Projects  />
        <Contact  />
      </div>
    
  )
}

export default App;
