import './App.css'
import RegisterUser from './Page/RegisterUser';
import UserDisplay from './Page/UserDisplay'
import React from 'react'
import {BrowserRouter ,Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<UserDisplay/>} />
          <Route path='/Register' element={<RegisterUser/>} />
      </Routes>
    </BrowserRouter>
    
 
    
  );
}

export default App;
