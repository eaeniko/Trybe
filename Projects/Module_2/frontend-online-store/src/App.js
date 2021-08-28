import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import ShopCart from './Pages/ShopCart';
import CardDetails from './Pages/CardDetails';
import CheckOut from './Pages/CheckOut';
// FEITO POR TODOS VIA PAIR PROGRAMING;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cartProducts: [],
    };
  }

  handleCartItems = (callback) => {
    // const { cartProducts } = this.state;
    this.setState((old) => ({
      cartProducts: [...old.cartProducts, callback],
    }));
  }

  render() {
    const { cartProducts } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (<Home
              handleCartItems={ this.handleCartItems }
            />) }
          />
          <Route
            path="/shopCart"
            render={ () => <ShopCart cartProducts={ cartProducts } /> }
          />
          <Route
            path="/details/:id"
            render={ (props) => (<CardDetails
              { ...props }
              handleCartItems={ this.handleCartItems }
            />) }
          />
          <Route
            path="/checkout"
            component={ () => <CheckOut cartProducts={ cartProducts } /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
