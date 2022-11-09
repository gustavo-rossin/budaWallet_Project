import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { addEmail } from '../redux/actions';

class Login extends React.Component {
  state = {
    btnDisable: true,
    userEmail: '',
    userPassword: '',
  };

  passwordCheck = () => {
    const minLength = 6;
    const { userEmail, userPassword } = this.state;
    const regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

    if (regex.test(userEmail) && userPassword.length >= minLength) {
      this.setState({
        btnDisable: false,
      });
    } else {
      this.setState({
        btnDisable: true,
      });
    }
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => this.passwordCheck());
  };

  afterLogin = () => {
    const { userEmail } = this.state;
    const { history, dispatch } = this.props;
    dispatch(addEmail(userEmail));
    history.push('/carteira');
  };

  render() {
    const { btnDisable, userEmail, userPassword } = this.state;
    return (
      <form>
        <input
          type="email"
          data-testid="email-input"
          onChange={ this.handleChange }
          value={ userEmail }
          name="userEmail"
          placeholder="Digite seu e-mail"
        />
        <input
          type="password"
          data-testid="password-input"
          onChange={ this.handleChange }
          value={ userPassword }
          name="userPassword"
          placeholder="Digite sua senha"
        />
        <button
          type="button"
          disabled={ btnDisable }
          onClick={ this.afterLogin }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
