import React from 'react';

export const User = () => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    async function getUser() {
      const response = await fetch('http://localhost:5000/api/users/');
      const data = await response.json();
      setUser(data);
    }
    getUser();
  }, []);
  return (
    <div>
      <h1>Users:</h1>
      {user != null && (
        <ol>
          {user.map((user) => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default User;
