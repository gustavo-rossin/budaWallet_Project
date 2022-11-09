import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <input
          type="email"
          data-testid="email-input"
          // onChange=
          // value=
          // name=
          placeholder="Digite seu e-mail"
        />
        <input
          type="password"
          data-testid="password-input"
          // onChange=
          // value=
          // name=
          placeholder="Digite sua senha"
        />
        <button
          type="button"
        // disabled={ isWorking }
        // onClick={}
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
