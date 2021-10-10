// Tela principal de receitas: requisitos 25 a 32;
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { drinkRequest } from '../services/data';
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';
import handleSubmitDrinks from '../helper/helperFunctionsDrinks';
import { setLoadDrinks as setLoadDrinksAction } from '../Redux/actions';

function DrinksPage(
  { search, radioButton, searchInput, setLoadDrinks, drinksIngredients },
) {
  const history = useHistory();
  const { location: { pathname } } = history;

  useEffect(() => {
    if (drinksIngredients) {
      setLoadDrinks(drinksIngredients);
    } else {
      const initialRequest = {
        '/bebidas': async () => {
          const { drinks } = await drinkRequest('search.php?s');
          setLoadDrinks(drinks);
        },
      };
      initialRequest[pathname]();
    }
  }, [pathname, setLoadDrinks, drinksIngredients]);

  /*
  Object Literals realizado por sugestão do Gabs para resolver o problema de complexidade do código gerado
  pela dupla verificação de parametros.

  https://blog.rocketseat.com.br/substituindo-a-instrucao-switch-por-object-literal/
  */

  return (
    <div>
      <Header setTitle="Bebidas" />

      {search === true ? <SearchBar
        handleSubmitButton={ () => handleSubmitDrinks(
          searchInput, setLoadDrinks, radioButton, history,
        ) }
      />
        : null}
      <CardList />

      <Footer />
    </div>
  );
}

DrinksPage.propTypes = {
  radioButton: PropTypes.string.isRequired,
  search: PropTypes.bool.isRequired,
  searchInput: PropTypes.string.isRequired,
  setLoadDrinks: PropTypes.func.isRequired,
  drinksIngredients: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  search: state.search,
  radioButton: state.radioButton,
  searchInput: state.searchInput,
  drinks: state.drinks,
  foods: state.foods,
  drinksIngredients: state.loadDrinksIngredients,
});

const mapDispatchToProps = (dispatch) => ({
  setLoadDrinks: (payload) => dispatch(setLoadDrinksAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrinksPage);
