import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { addingExpenses } from '../redux/actions';
import currenciesAPI from '../services/currenciesAPI';

class WalletForm extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
  }

  handleChanges = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleClick = () => {
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
  };

  addCostBtn = async () => {
    const { dispatch } = this.props;
    const api = await currenciesAPI();
    delete await api.USDT;
    this.setState({ exchangeRates: api }, () => {
      dispatch(addingExpenses(this.state));
      this.setState({ value: '', description: '' }, this.handleClick);
    });
  };

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            name="value"
            id="valor"
            data-testid="value-input"
            value={ value }
            onChange={ this.handleChanges }
          />
        </label>
        <br />
        <label htmlFor="description">
          Descrição:
          <input
            name="description"
            id="descricao"
            data-testid="description-input"
            placeholder="Descrição do seu gasto"
            value={ description }
            onChange={ this.handleChanges }
          />
        </label>
        <br />
        <label htmlFor="currency">
          Moeda:
          <select
            name="currency"
            id="currency"
            data-testid="currency-input"
            value={ currency }
            onChange={ this.handleChanges }
          >
            {currencies
              .map((el) => (
                <option key={ el }>
                  {el}
                </option>
              ))}
          </select>
        </label>
        <br />
        <label htmlFor="method">
          Método de pagamento:
          <select
            name="method"
            id="metodo"
            data-testid="method-input"
            value={ method }
            onChange={ this.handleChanges }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <br />
        <label htmlFor="tag">
          Categoria:
          <select
            name="tag"
            id="categoria"
            data-testid="tag-input"
            placeholder="Qual o tipo de gasto?"
            value={ tag }
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
          onClick={ this.addCostBtn }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (globalState) => ({
  currencies: globalState.wallet.currencies,
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(WalletForm);
