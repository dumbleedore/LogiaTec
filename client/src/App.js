import React from 'react';
import User from './components/users/User';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Register from './components/registerForm/Register';
import { Login } from './components/LoginForm/Login';
import Navbar from './components/navbar/Navbar';
import { GlogalStorage } from './components/GlobalContext/GlobalContext';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <GlogalStorage>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="users" element={<User />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </GlogalStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
