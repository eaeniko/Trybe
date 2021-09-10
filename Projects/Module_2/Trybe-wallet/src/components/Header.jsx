import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { setEmail } from '../actions';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleChange = this.handleChange.bind(this);
  }

  getTotalExpenses(expense) {
    const totalExpense = Object.values(expense);
    // console.log(totalExpense);
    // let currencyAPI = null;
    if (totalExpense.length === 0) {
      return 0;
    }
    const total = totalExpense.reduce((acc, expenses) => {
      const subTotal = expenses.value * expenses.exchangeRates[expenses.currency].ask;
      acc += subTotal;
      return acc;
    }, 0);
    return parseFloat(total).toFixed(2);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, expenses } = this.props;
    return (
      <header>
        Email:
        {' '}
        <span data-testid="email-field">{email}</span>
        <span data-testid="total-field">
          Despesa total: R$
          <span>{this.getTotalExpenses(expenses)}</span>
          <span data-testid="header-currency-field"> BRL</span>
        </span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.func.isRequired,
  expenses: PropTypes.objectOf(PropTypes.object).isRequired,
  // userState: PropTypes.func.isRequired,
};
