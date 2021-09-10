import React from 'react';
import Header from '../components/Header';
import ExpenseForm from '../components/ExpenseForm';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <div>TrybeWallet</div>
        <Header />
        <ExpenseForm />
      </>
    );
  }
}

export default Wallet;
