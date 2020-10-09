import React from 'react';

export const GlobalContext = React.createContext();

export const GlogalStorage = ({ children }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [logado, setLogado] = React.useState(false);
  return (
    <GlobalContext.Provider
      value={{
        username,
        setUsername,
        password,
        setPassword,
        logado,
        setLogado,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
