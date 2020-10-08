import React from 'react';
import Navbar from '../navbar/Navbar';
import './homestyle.css';
export const Home = () => {
  return (
    <div>
      <body className="body">
        <Navbar />
        <h1 className="h1">LogiaTec</h1>
      </body>
    </div>
  );
};
export default Home;
