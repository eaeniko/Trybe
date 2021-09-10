import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrencyAPI, addExpenseThunk } from '../actions';
// import currencyAPI from '../services/currencyAPI';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'money',
      tag: 'food',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    // this.fetchAPI();
    const { exchangeAPI } = this.props;
    exchangeAPI();
  }

  onSubmit() {
    const { expenses } = this.props;
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
    // exchangeAPI();
    expenses(this.state);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  // async fetchAPI() {
  //   const response = await currencyAPI();
  //   const results = Object.keys(response);
  //   const currencieMaxLenght = 3;
  //   const currencies = results.filter((result) => result.length === currencieMaxLenght);
  //   this.setState({ currencies });
  // }
  loadCurrency() {
    const { currenciesProps } = this.props;
    const NEWPROPS = { ...currenciesProps };
    const filterCurrency = Object.keys(NEWPROPS);
    const maxLength = 3;
    const currencies = filterCurrency.filter((filtered) => filtered.length === maxLength);
    return currencies;
  }

  tagLabel() {
    return (
      <label htmlFor="tag">
        Tag:
        <select name="tag" id="tag" onChange={ this.handleChange }>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  paymentLabel() {
    return (
      <label htmlFor="method">
        Método de Pagamento:
        <select name="method" id="method" onChange={ this.handleChange }>
          <option value="dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  render() {
    const currencies = this.loadCurrency();
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input id="value" type="number" name="value" onChange={ this.handleChange } />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            id="description"
            type="text"
            name="description"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select name="currency" id="currency" onChange={ this.handleChange }>
            {
              currencies.map((currency) => (
                <option key={ currency } value={ currency }>{currency}</option>
              ))
            }
          </select>
        </label>
        { this.paymentLabel() }
        { this.tagLabel() }
        <button type="button" onClick={ this.onSubmit }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  currenciesProps: state.wallet.currencies,
});
const mapDispatchToProps = (dispatch) => ({
  expenses: (payload) => dispatch(addExpenseThunk(payload)),
  exchangeAPI: (payload) => dispatch(getCurrencyAPI(payload)),
  // getCurrencies: (payload) => dispatch(getCurrencyAPI(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);

ExpenseForm.propTypes = {
  exchangeAPI: PropTypes.func.isRequired,
  expenses: PropTypes.func.isRequired,
  currenciesProps: PropTypes.objectOf(PropTypes.object).isRequired,
};
