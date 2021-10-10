// Tela de Login: requisitos 2 a 8;
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { cocktailsTokenAction, mealsTokenAction, userAction } from '../Redux/actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

let buttonStats = true;

function Login(props) {
  const { setEmail, setMealsToken, setCocktailsToken } = props;
  const [state, setState] = useState(INITIAL_STATE);
  const { password, email } = state;
  const history = useHistory();
  const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailValid = emailValidator.test(email);
  const passwordValidator = 6;

  if (emailValid && password.length > passwordValidator) {
    buttonStats = false;
  } else buttonStats = true;

  function handleChange({ target }) {
    const { value, id } = target;
    setState({
      ...state,
      [id]: value,
    });
  }

  function handleClick() {
    setEmail(email);
    setMealsToken(1);
    setCocktailsToken(1);
    localStorage.mealsToken = 1;
    localStorage.cocktailsToken = 1;
    localStorage.user = JSON.stringify({ email });
    history.push('/comidas');
  }

  return (
    <div>
      <input
        id="email"
        value={ email }
        onChange={ handleChange }
        type="email"
        placeholder="seuemail@gmail.com"
        data-testid="email-input"
      />
      <input
        id="password"
        value={ password }
        onChange={ handleChange }
        type="password"
        placeholder="senha"
        data-testid="password-input"
      />
      <button
        disabled={ buttonStats }
        onClick={ handleClick }
        type="button"
        data-testid="login-submit-btn"
      >
        Entrar
      </button>
    </div>
  );
}

Login.propTypes = {
  setEmail: PropTypes.func,
  setMealsToken: PropTypes.func,
  setCocktailsToken: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  setEmail: (email) => dispatch(userAction(email)),
  setMealsToken: (mealsToken) => dispatch(mealsTokenAction(mealsToken)),
  setCocktailsToken: (cocktailsToken) => dispatch(cocktailsTokenAction(cocktailsToken)),
});

export default connect(null, mapDispatchToProps)(Login);
