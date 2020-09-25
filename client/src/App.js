import React from 'react';
import User from './components/users/User';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Register from './components/registerForm/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<User />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
