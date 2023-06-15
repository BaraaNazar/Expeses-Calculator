import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import Home from './Pages/Home.js';

function App() {
  return (
    <Routes>
      <Route path='/Login' element={<Login />} />
      <Route path='/SignUp' element={<SignUp />} />
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default App;
