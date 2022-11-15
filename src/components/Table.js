import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeExpenses } from '../redux/actions';
import './TableCSS.css';

class Table extends Component {
  handleDelete = ({ target: { id } }) => {
    const { dispatch, expenses } = this.props;
    console.log('name1', id);
    const deleteCost = expenses.filter((el) => el.id !== Number(id));
    dispatch(removeExpenses(deleteCost));
  };

  render() {
    const { expenses } = this.props;
    // console.log('table1:', expenses);

    return (
      <table className="table-exchange">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((el) => (
            <tr key={ el.id }>
              <td>{el.description}</td>
              <td>{el.tag}</td>
              <td>{el.method}</td>
              <td>{(Number(el.value).toFixed(2))}</td>
              <td>{el.exchangeRates[el.currency].name}</td>
              <td>{(Number(el.exchangeRates[el.currency].ask).toFixed(2))}</td>
              <td>
                {(Number(el.value)
              * Number(el.exchangeRates[el.currency].ask)).toFixed(2)}
              </td>
              <td>Real</td>
              <td>
                <span className="table-btn">
                  <button
                    type="button"
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    id={ el.id }
                    data-testid="delete-btn"
                    onClick={ this.handleDelete }
                  >
                    Deletar
                  </button>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (globalState) => ({
  expenses: globalState.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
