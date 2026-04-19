import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Calendar from './pages/Calendar.jsx';
import BirdHuts from './pages/BirdHuts.jsx';

const Navigate = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/birdhuts" element={<BirdHuts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigate;