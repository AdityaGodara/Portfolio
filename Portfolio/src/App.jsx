import React, { useState } from 'react'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects';
import ErrorPage from './Components/ErrorPage';
import Experience from './Components/Experience'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css'

const App = () => {

  return (
    <div className='relative h-screen overflow-hidden'>
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<About />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/skills" element={<Skills/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/*" element={<ErrorPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App