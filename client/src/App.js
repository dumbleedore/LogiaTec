import React from 'react';
import User from './components/users/User';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
