import propTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  state = {
    totalExpended: 0,
    currency: 'BRL',
  };

  render() {
    const { totalExpended, currency } = this.state;
    const { email } = this.props;
    return (
      <header>
        <h4>TrybeWallet</h4>
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">{totalExpended}</p>
        <p data-testid="header-currency-field">{currency}</p>
      </header>
    );
  }
}

Wallet.propTypes = {
  email: propTypes.string.isRequired,
};

const mapStateToProps = (globalState) => ({
  email: globalState.user.email,
});

export default connect(mapStateToProps)(Wallet);
