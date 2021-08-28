import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// REQUISITO 3 FEITO POR TODOS VIA PAIR PROGRAMING;

export default class ButtonCart extends Component {
  render() {
    if (Object.keys(this.props).length === 0) {
      return <Link data-testid="shopping-cart-button" to="/shopCart">Cart</Link>;
    }
    const { productDetail } = this.props;
    if (productDetail === 'productDetail') {
      const { product, handleCartItems } = this.props;
      return (
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          cartProducts={ product }
          onClick={ () => handleCartItems(product) }
        >
          Adicionar ao carrinho
        </button>
      );
    }
    const { product, handleCartItems } = this.props;
    return (
      <button
        data-testid="product-add-to-cart"
        type="button"
        cartProducts={ product }
        onClick={ () => handleCartItems(product) }
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

ButtonCart.propTypes = {
  product: PropTypes.objectOf(PropTypes.object).isRequired,
  handleCartItems: PropTypes.func.isRequired,
  productDetail: PropTypes.string.isRequired,
};
