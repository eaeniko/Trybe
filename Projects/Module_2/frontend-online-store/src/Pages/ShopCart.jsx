import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonHome from '../Components/ButtonHome';
// REQUISITO 3 FEITO POR TODOS VIA PAIR PROGRAMING;

export default class ShopCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }

  // handleRemove = ({ target }) => {
  // const { cartProducts } = this.state;s
  // }

  handleClick = (parameter) => {
    const { quantity } = this.state;
    if (parameter === 'plus') {
      return this.setState((old) => ({
        quantity: old.quantity + 1,
      }));
    }
    if (quantity === 0) return;
    this.setState((old) => ({
      quantity: old.quantity - 1,
    }));
  }

  // <div>
  //   {/* <p> */}
  //     {/* Total: */}
  //     {/* {product.price * quantity} */}
  //   {/* </p> */}
  //   {/* <button type="button" onClick={ () => this.handleClick() }>-</button> */}
  //   {/* { quantity } */}
  //   {/* <button type="button" onClick={ () => this.handleClick('plus') }>+</button> */}
  // {/* </div> */}

  createCart = () => {
    const { cartProducts } = this.props;
    const { quantity } = this.state;
    return (
      cartProducts.map((product) => (
        <div key={ product.id }>
          <button type="button" onClick={ this.handleRemove }>X</button>
          <p data-testid="shopping-cart-product-name">{product.title}</p>
          <img src={ product.thumbnail } alt="Produto" />
          <p>
            Preço: R$
            { product.price }
          </p>
          <span>
            Quantidade:
            <p data-testid="shopping-cart-product-quantity">
              { quantity }
            </p>
          </span>
        </div>
      ))
    );
  }

  render() {
    const { cartProducts } = this.props;
    const emptyCart = (
      <div>
        <p>Seu carrinho está vazio</p>
      </div>
    );
    return (
      <div data-testid="shopping-cart-empty-message">
        <ButtonHome />
        { cartProducts.length === 0 ? emptyCart : this.createCart()}
        <Link
          to="/checkout"
          data-testid="checkout-products"
        >
          PAGAMENTO
        </Link>
      </div>
    );
  }
}

ShopCart.propTypes = {
  cartProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
