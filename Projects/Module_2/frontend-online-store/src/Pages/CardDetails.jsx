import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonCart from '../Components/ButtonCart';
import ButtonHome from '../Components/ButtonHome';

// REQUISITO 3 FEITO POR TODOS VIA PAIR PROGRAMING;
export default class CardDetails extends Component {
  render() {
    const { location: { state: { product } }, handleCartItems } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div>
        <ButtonHome />
        <p data-testid="product-detail-name">{title}</p>
        <img src={ thumbnail } alt="Produto" />
        <p>
          Preço: R$
          { price }
        </p>
        <ButtonCart
          data-testid="product-detail-add-to-cart"
          product={ product }
          productDetail="productDetail"
          handleCartItems={ handleCartItems }
        />
        <Link data-testid="shopping-cart-button" to="/shopCart">Cart</Link>
      </div>
    );
  }
}

CardDetails.propTypes = {
  location: PropTypes.objectOf(PropTypes.object).isRequired,
  handleCartItems: PropTypes.func.isRequired,
};
