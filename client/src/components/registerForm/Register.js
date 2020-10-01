import React from 'react';
import './registerstyle.css';
const Register = () => {
  const [cond, setCond] = React.useState(false);
  const [form, setForm] = React.useState({
    nome: '',
    username: '',
    password: '',
    email: '',
  });

  function handleSubmit(event) {
    // POST request using fetch()
    event.preventDefault();
    fetch('http://localhost:5000/api//users/add', {
      // Adding method type
      method: 'POST',

      // Adding body or contents to send
      body: JSON.stringify(form),

      // Adding headers to the request
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      // Converting to JSON
      .then((response) => response.json())

      // Displaying results to console
      .then((json) => console.log(json));
    setCond(true);
    setTimeout(() => {
      setCond(false);
    }, 1000);
  }
  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }
  return (
    <div>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          {cond && (
            <div className="alert alert-success" role="alert">
              Cadastro feito com sucesso!
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="fadeIn first"></div>
            <input
              type="text"
              id="nome"
              className="fadeIn second"
              placeholder="Nome"
              value={form.nome}
              required
              onChange={handleChange}
            />

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
            <input
              type="email"
              id="email"
              className="fadeIn third"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input type="submit" className="fadeIn fourth" value="Register" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
