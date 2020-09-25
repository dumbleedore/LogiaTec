import React from 'react';
import './registerstyle.css';
const Register = () => {
  const [cond, setCond] = React.useState(false);
  function handleClick() {
    // POST request using fetch()
    const user = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    console.log(user, password);
    fetch('http://localhost:5000/api//users/add', {
      // Adding method type
      method: 'POST',

      // Adding body or contents to send
      body: JSON.stringify({
        username: user,
        password: password,
        email: email,
        name: name,
      }),

      // Adding headers to the request
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      // Converting to JSON
      .then((response) => response.json())

      // Displaying results to console
      .then((json) => console.log(json));
    document.getElementById('login').value = null;
    document.getElementById('password').value = null;
    document.getElementById('email').value = null;
    document.getElementById('name').value = null;
    setCond(true);
    setTimeout(() => {
      setCond(false);
    }, 1000);
  }
  return (
    <div>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          {cond && (
            <div class="alert alert-success" role="alert">
              Cadastro feito com sucesso!
            </div>
          )}
          <div className="fadeIn first"></div>
          <input
            type="text"
            id="name"
            className="fadeIn second"
            placeholder="Nome"
          />

          <input
            type="text"
            id="login"
            className="fadeIn second"
            placeholder="Username"
          />
          <input
            type="password"
            id="password"
            className="fadeIn third"
            placeholder="Password"
          />
          <input
            type="email"
            id="email"
            className="fadeIn third"
            placeholder="Email"
          />
          <input
            type="submit"
            className="fadeIn fourth"
            value="Register"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};
export default Register;
