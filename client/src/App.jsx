import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
 
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<h1> Home </h1>} />
            <Route path="/cadastro" element={<h1> Cadastro </h1>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
