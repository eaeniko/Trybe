import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonCart from './ButtonCart';

// import Card from './Card';

export default class CardList extends Component {
  // handleClick = (item) =>{
  // const { handleCart } = this.props;
  // handleCart(item);
  // }

  render() {
    const { productsList, handleCart } = this.props;
    const mapCart = productsList.map((product) => (
      <div key={ product.id } data-testid="product" className="product-card">
        <p>{ product.title }</p>
        <img src={ product.thumbnail } alt="product" />
        <p>
          R$
          { product.price }
        </p>
        <Link
          to={ { pathname: `/details/${product.id}`, state: { product } } }
          data-testid="product-detail-link"
        >
          Ver detalhes
        </Link>
        <ButtonCart handleCartItems={ () => handleCart(product) } />
      </div>
    ));
    return (
      <div className="cardlist">
        { mapCart }
      </div>
    );
  }
}

CardList.propTypes = {
  productsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleCart: PropTypes.func.isRequired,
};
