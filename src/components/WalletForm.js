import React from 'react';

class WalletForm extends React.Component {
  state = {
    expenseValue: 0,
    description: '',
    currency: 'USD',
    paymentMethod: 'Dinheiro',
    category: 'Alimentação',
  };

  render() {
    const { expenseValue, description, currency, paymentMethod, category } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input
            name="valor"
            data-testid="value-input"
            value={ expenseValue }
          // onChange={}
          />
        </label>
        <br />
        <label htmlFor="descricao">
          Descrição:
          <input
            name="descricao"
            data-testid="description-input"
            value={ description }
          // onChange={}
          />
        </label>
        <br />
        <label htmlFor="moeda">
          Moeda:
          <select
            name="moeda"
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
            data-testid="method-input"
            value={ paymentMethod }
            // onChange={}
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
            data-testid="tag-input"
            value={ category }
            // onChange={}
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

export default WalletForm;
