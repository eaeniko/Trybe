import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterBar() {
  const { filterByNumericValues, setFilterByNumericValues,
    handleFilterByName, handleNumericValues } = useContext(PlanetsContext);
  const dropDownPlanetOptions = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const [planetsOptions, setPlanetsOptions] = useState(dropDownPlanetOptions);
  const dropDownCompareOptions = ['maior que', 'menor que', 'igual a'];
  const [typeFilter, setTypeFilter] = useState('population');
  const [iqualFilter, setIqualFilter] = useState('maior que');
  const [numberFilter, setNumberFilter] = useState(0);

  // function verification e setNumericComparison feito com ajuda do Jão victor da mesma turma.
  function optionsVerification() {
    const index = dropDownPlanetOptions.indexOf(typeFilter);
    const newOptions = [...planetsOptions];
    newOptions.splice(index, 1);
    setPlanetsOptions(newOptions);
  }
  function setNumericComparison() {
    const filterPlanets = {
      column: typeFilter,
      comparison: iqualFilter,
      value: numberFilter,
    };
    setFilterByNumericValues([...filterByNumericValues, filterPlanets]);
    handleNumericValues([...filterByNumericValues, filterPlanets]);
    optionsVerification();
  }

  return (
    <div>
      <label htmlFor="searchText">
        Pesquisar:
        <input
          type="text"
          // value={ filterByName }
          id="searchText"
          name="searchText"
          placeholder="Pesquisar por nome"
          data-testid="name-filter"
          onChange={ handleFilterByName }
        />
      </label>
      <label htmlFor="typeFilter">
        Types:
        <select
          type="dropdown"
          name="typeFilter"
          id="typeFilter"
          data-testid="column-filter"
          onChange={ ({ target }) => { setTypeFilter(target.value); } }
        >
          {
            planetsOptions.map((option) => (
              <option key={ option } value={ option }>{option}</option>
            ))
          }
        </select>
      </label>
      <label htmlFor="iqualFilter">
        <select
          type="dropdown"
          name="iqualFilter"
          id="iqualFilter"
          data-testid="comparison-filter"
          onChange={ ({ target }) => { setIqualFilter(target.value); } }
        >
          {
            dropDownCompareOptions.map((value) => (
              <option key={ value } value={ value }>{value}</option>
            ))
          }
        </select>
      </label>
      <label htmlFor="numberFilter">
        <input
          type="number"
          name="numberFilter"
          id="numberFilter"
          data-testid="value-filter"
          onChange={ ({ target }) => { setNumberFilter(target.value); } }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ setNumericComparison }
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterBar;
