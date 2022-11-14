import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class WalletForm extends React.Component {
  handleChanges = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { currencies } = this.props;
    console.log(currencies);
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input
            name="valor"
            id="valor"
            data-testid="value-input"
            placeholder="Valor dos seus gastos aqui"
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
            placeholder="Descrição do seu gasto"
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
            placeholder="Moeda a utilizar"
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
        <label htmlFor="metodo">
          Método de pagamento:
          <select
            name="metodo"
            id="metodo"
            data-testid="method-input"
            placeholder="Método de pagamento"
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
            placeholder="Qual o tipo de gasto?"
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

const mapStateToProps = (globalState) => ({
  currencies: globalState.wallet.currencies,
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(WalletForm);
