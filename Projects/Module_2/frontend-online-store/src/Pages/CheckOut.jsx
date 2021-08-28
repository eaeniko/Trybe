import React, { Component } from 'react';

export default class CheckOut extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome completo
          <input data-testid="checkout-fullname" id="name" type="text" />
        </label>
        <label htmlFor="Email">
          Email
          <input data-testid="checkout-email" id="Email" type="text" />
        </label>
        <label htmlFor="CPF">
          CPF
          <input data-testid="checkout-cpf" id="CPF" type="text" />
        </label>
        <label htmlFor="Telefone">
          Telefone
          <input data-testid="checkout-phone" id="Telefone" type="tel" />
        </label>
        <label htmlFor="CEP">
          CEP
          <input data-testid="checkout-cep" id="CEP" type="text" />
        </label>
        <label htmlFor="Endereço">
          Endereço
          <input data-testid="checkout-address" id="Endereço" type="text" />
        </label>
      </form>
    );
  }
}
