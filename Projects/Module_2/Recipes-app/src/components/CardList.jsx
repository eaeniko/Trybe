import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import Card from './Card';
//
function CardList({ loadFoods, loadDrinks }) {
  const MAX_CARD_LENGTH = 11;
  const { location: { pathname } } = useHistory();
  return (
    <div>
      {(pathname === '/comidas') ? loadFoods
        .filter((_, index) => index <= MAX_CARD_LENGTH)
        .map((food, index) => (
          <Card
            key={ index }
            id={ index }
            image={ food.strMealThumb }
            name={ food.strMeal }
          />
        )) : null}

      {(pathname === '/bebidas') ? loadDrinks
        .filter((_, index) => index <= MAX_CARD_LENGTH)
        .map((drink, index) => (
          <Card
            key={ index }
            id={ index }
            image={ drink.strDrinkThumb }
            name={ drink.strDrink }
          />
        )) : null}

    </div>
  );
}

const mapStateToProps = (state) => ({
  loadDrinks: state.loadDrinks,
  loadFoods: state.loadFoods,
});

CardList.propTypes = {
  loadFoods: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadDrinks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(CardList);
