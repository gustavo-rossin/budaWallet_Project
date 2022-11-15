import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const totalExpended = expenses.reduce((a, c) => {
      const sum = a
      + (Number(c.value) * Number(c.exchangeRates[c.currency].ask));
      return sum;
    }, 0).toFixed(2);

    return (
      <header>
        <h1>TrybeWallet</h1>
        <h5 data-testid="email-field">{email}</h5>
        <h3>Total Gasto:</h3>
        <h3 data-testid="total-field">{totalExpended}</h3>
        <p>Moeda Corrente:</p>
        <h4 data-testid="header-currency-field">BRL</h4>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

const mapStateToProps = (globalState) => ({
  email: globalState.user.email,
  expenses: globalState.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
