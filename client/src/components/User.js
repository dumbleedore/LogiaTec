import React from 'react';

export const User = ({ user }) => {
  const [user, setUser] = React.useState(null);

  await function getUsers() {
    const response = await fetch('http://localhost:5000/api/users');
    const data = response.json()
    
    
  }

  return (
    <div>
      <h1>{user.username}</h1>
    </div>
  );
};

export default User;
