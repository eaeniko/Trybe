// Tela de receitas feitas: requisitos 54 a 59;
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import Header from '../components/Header';

const STATE_DONE = {
  buttonFilter: null,
};

function buttonChangeFilter(setState) {
  return (
    <>
      <button
        data-testid="filter-by-food-btn"
        type="button"
        onClick={ () => (setState({ buttonFilter: 'comida' })) }
      >
        Food
      </button>
      <button
        data-testid="filter-by-drink-btn"
        type="button"
        onClick={ () => (setState({ buttonFilter: 'bebida' })) }
      >
        Drinks
      </button>
      <button
        data-testid="filter-by-all-btn"
        type="button"
        onClick={ () => (setState({ buttonFilter: null })) }
      >
        All
      </button>
    </>
  );
}

function RecipesMade() {
  const history = useHistory();
  const [state, setState] = useState(STATE_DONE);
  const { buttonFilter } = state;
  const [dataFoods, setFoods] = useState();
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes') || '[]');
  const [visibleMessage, setVisibleMessage] = useState(true);

  useEffect(() => {
    async function updateData() {
      const urlFoods = 'https://www.themealdb.com/api/json/v1/1/search.php?s';
      const responseFoods = await fetch(urlFoods).then((res) => res.json());
      setFoods(responseFoods.meals);
    }

    updateData();
  }, []);

  function buttonCopy(event) {
    setVisibleMessage(false);
    const oneSecond = 1000;
    const { id } = event.target.parentNode;
    const validation = dataFoods.some((food) => (food.idMeal === id));
    if (!validation) {
      copy(`http://localhost:3000/comidas/${id}`);
    } else {
      copy(`http://localhost:3000/bebidas/${id}`);
    }
    setTimeout(() => setVisibleMessage(true), oneSecond);
  }

  function itemDone(item, index) {
    const { id, type, area, category, alcoholicOrNot, name, image,
      doneDate, tags } = item;
    if (type === 'comida') {
      return (
        <div id={ id }>
          <input
            type="image"
            width="150px"
            data-testid={ `${index}-horizontal-image` }
            src={ image }
            alt={ name }
            onClick={ () => (history.push(`/comidas/${id}`)) }
          />
          <br />
          <button
            type="button"
            onClick={ () => (history.push(`/comidas/${id}`)) }
            data-testid={ `${index}-horizontal-name` }
          >
            { name }
          </button>
          <p data-testid={ `${index}-horizontal-top-text` }>{`${area} - ${category}`}</p>
          { tags.map((tag, i) => (
            <p
              data-testid={ `0-${tag}-horizontal-tag` }
              key={ i }
            >
              {tag}
            </p>
          ))}
          <p data-testid={ `${index}-horizontal-done-date` }>{ doneDate }</p>
          <input
            data-testid={ `${index}-horizontal-share-btn` }
            type="image"
            onClick={ buttonCopy }
            src={ shareIcon }
            alt="shareIcon"
          />
        </div>
      );
    }
    return (
      <div id={ id }>
        <input
          type="image"
          width="150px"
          data-testid={ `${index}-horizontal-image` }
          src={ image }
          alt={ name }
          onClick={ () => (history.push(`/bebidas/${id}`)) }
        />
        <br />
        <button
          type="button"
          onClick={ () => (history.push(`/bebidas/${id}`)) }
          data-testid={ `${index}-horizontal-name` }
        >
          { name }
        </button>
        <p>{ category }</p>
        <p data-testid={ `${index}-horizontal-top-text` }>{ alcoholicOrNot }</p>
        <p data-testid={ `${index}-horizontal-done-date` }>{ doneDate }</p>
        <input
          data-testid={ `${index}-horizontal-share-btn` }
          type="image"
          onClick={ buttonCopy }
          src={ shareIcon }
          alt="shareIcon"
        />
      </div>
    );
  }

  if (!dataFoods) {
    return (
      <>
        <Header setTitle="Receitas Feitas" />
        <h1> Carregando...</h1>
      </>
    );
  }

  if (doneRecipes.length === 0) { return (<Header setTitle="Receitas Feitas" />); }

  if (buttonFilter === 'comida') {
    return (
      <>
        <Header setTitle="Receitas Feitas" />
        <p hidden={ visibleMessage }>Link copiado!</p>
        { buttonChangeFilter(setState) }
        {
          doneRecipes
            .filter((item) => (item.type === 'comida'))
            .map((item, index) => (
              <div key={ item.id }>
                { itemDone(item, index) }
              </div>
            ))
        }
      </>
    );
  }

  if (buttonFilter === 'bebida') {
    return (
      <>
        <Header setTitle="Receitas Feitas" />
        <p hidden={ visibleMessage }>Link copiado!</p>
        { buttonChangeFilter(setState) }
        {
          doneRecipes
            .filter((item) => (item.type === 'bebida'))
            .map((item, index) => (
              <div key={ index }>
                { itemDone(item, index) }
              </div>
            ))
        }
      </>
    );
  }

  return (
    <>
      <Header setTitle="Receitas Feitas" />
      <p hidden={ visibleMessage }>Link copiado!</p>
      { buttonChangeFilter(setState) }
      {
        doneRecipes.map((item, index) => (
          <div key={ item.id }>
            { itemDone(item, index) }
          </div>
        ))
      }
    </>
  );
}

export default RecipesMade;
