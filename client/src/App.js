import React from 'react';

function App() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    async function getUser() {
      const response = await fetch('http://localhost:5000/api/users');
      const data = await response.json();
      setUser(data);
    }
    getUser();
  }, []);

  return (
    <div className="App">
      <h1>Users:</h1>
      {user != null && (
        <ol>
          {user.map((user) => (
            <li key={user.username}>{user.username}</li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default App;
