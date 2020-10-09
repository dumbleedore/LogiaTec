import React from 'react';
import './loginstyle.css';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../GlobalContext/GlobalContext';
export const Login = () => {
  const global = React.useContext(GlobalContext);
  const [resposta, setResposta] = React.useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:5000/api/login', {
      method: 'POST',

      body: JSON.stringify({
        username: global.username,
        password: global.password,
      }),

      headers: {
        'Content-type': 'application/json',
      },
    }).then(async (response) => {
      console.log(response);
      if (response.status === 500) {
        setResposta(true);
        setTimeout(() => {
          setResposta(false);
        }, 5000);
      } else {
        const resposta = await response.json();
        localStorage.setItem('token', resposta.token);
        global.setLogado(true);
        navigate('/');
      }
    });
  }

  return (
    <div>
      {resposta && (
        <div className="alert alert-danger" role="alert">
          Seu username ou sua senha estão incorretos.
        </div>
      )}
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <form onSubmit={handleSubmit}>
            <div className="fadeIn first"></div>
            <input
              type="text"
              id="username"
              className="fadeIn second"
              placeholder="Username"
              value={global.username}
              onChange={(event) => {
                global.setUsername(event.target.value);
              }}
              required
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              placeholder="Password"
              value={global.password}
              onChange={(event) => {
                global.setPassword(event.target.value);
              }}
              required
            />

            <input type="submit" className="fadeIn fourth" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
};
