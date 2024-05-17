import React from 'react'
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import About from './components/About';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'   element={<Home/> } />
          <Route path='/about' element={<About/> } />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
