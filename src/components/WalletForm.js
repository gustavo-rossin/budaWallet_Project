import React from 'react';
import { fetchCurrenciesAPI } from '../redux/actions';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class WalletForm extends React.Component {
  constructor() {
    super();

    state = {
      expenseValue: 0,
      description: '',
      currency: 'USD',
      paymentMethod: 'Dinheiro',
      category: 'Alimentação',
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrenciesAPI());
  }

  handleChanges = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { expenseValue, description, currency, paymentMethod, category } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input
            name="valor"
            id="valor"
            data-testid="value-input"
            value={ expenseValue }
            onChange={ this.handleChanges }
          />
        </label>
        <br />
        <label htmlFor="descricao">
          Descrição:
          <input
            name="descricao"
            id="descricao"
            data-testid="description-input"
            value={ description }
            onChange={ this.handleChanges }
          />
        </label>
        <br />
        <label htmlFor="moeda">
          Moeda:
          <select
            name="moeda"
            id="moeda"
            data-testid="currency-input"
            value={ description }
          >
            <option value="Real">Real</option>
            <option value="Dolar">Dolar</option>
          </select>
        </label>
        <br />
        <label htmlFor="metodo">
          Método de pagamento:
          <select
            name="metodo"
            id="metodo"
            data-testid="method-input"
            value={ paymentMethod }
            onChange={ this.handleChanges }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <br />
        <label htmlFor="categoria">
          Categoria:
          <select
            name="categoria"
            id="categoria"
            data-testid="tag-input"
            value={ category }
            onChange={ this.handleChanges }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <br />
        <button
          type="button"
        // onClick={}
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default WalletForm;
