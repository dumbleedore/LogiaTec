import React from 'react';
import './homestyle.css';
import { GlobalContext } from '../GlobalContext/GlobalContext';
export const Home = () => {
  global = React.useContext(GlobalContext);
  return <div>{global.logado ? 'Logado' : 'Não está Logado'}</div>;
};
export default Home;
