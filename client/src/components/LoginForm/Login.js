import React from 'react';
import './loginstyle.css';

export const Login = () => {
  const [form, setForm] = React.useState({
    username: '',
    password: '',
  });

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }
  function handleSubmit(event, window) {
    event.preventDefault();
    fetch('http://localhost:5000/api/login', {
      // Adding method type
      method: 'POST',

      // Adding body or contents to send
      body: JSON.stringify(form),

      // Adding headers to the request
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        localStorage.setItem('token', json.token);
        console.log(json);
      });
  }

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <form onSubmit={handleSubmit}>
          <div className="fadeIn first"></div>
          <input
            type="text"
            id="username"
            className="fadeIn second"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            id="password"
            className="fadeIn third"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <input type="submit" className="fadeIn fourth" value="Register" />
        </form>
      </div>
    </div>
  );
};
