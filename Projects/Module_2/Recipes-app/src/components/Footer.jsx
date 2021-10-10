import React from 'react';
import { useHistory } from 'react-router';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  const history = useHistory();
  return (
    <div className="footer-container" data-testid="footer">
      <button
        type="button"
        src={ drinkIcon }
        id="test"
        data-testid="drinks-bottom-btn"
        onClick={ () => history.push('/bebidas') }
      >
        Drink
      </button>
      <button
        type="button"
        src={ exploreIcon }
        data-testid="explore-bottom-btn"
        onClick={ () => history.push('/explorar') }
      >
        Explorer
      </button>
      <button
        type="button"
        src={ mealIcon }
        data-testid="food-bottom-btn"
        onClick={ () => history.push('/comidas') }
      >
        Food
      </button>

    </div>

  );
}

export default Footer;
