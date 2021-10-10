import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanetsApi from '../helpers/fecthPlanetsApi';

function PlanetsProvider({ children }) {
  const [data, setData] = useState();
  const [dataFiltered, setDataFiltered] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {},
    filterByNumericValues: [],
  });

  // function handleNumericValues feito com ajuda do Jão victor da mesma turma.
  function handleNumericValues(filterNumbers) {
    const arrayFiltered = filterNumbers.reduce((acc, filter) => {
      const { comparison, column, value } = filter;
      acc = dataFiltered.filter((planet) => {
        if (comparison === 'maior que') { return Number(planet[column]) > Number(value); }
        if (comparison === 'menor que') { return Number(planet[column]) < Number(value); }
        return Number(planet[column]) === Number(value);
      });
      return acc;
    }, []);
    setDataFiltered(arrayFiltered);
  }

  function handleFilterByName({ target }) {
    setFilterByName({ name: target.value });
    const filtered = data.filter((planet) => (
      planet.name.includes(target.value)));
    setDataFiltered(filtered);
  }

  const dataValue = {
    data,
    dataFiltered,
    setDataFiltered,
    filterByNumericValues,
    setFilterByNumericValues,
    setFilterByName,
    filterByName,
    filters,
    handleFilterByName,
    handleNumericValues,
  };

  useEffect(() => {
    async function fetch() {
      setData(await fetchPlanetsApi());
      setDataFiltered(await fetchPlanetsApi());
    }
    fetch();
  }, []);

  useEffect(() => {
    setFilters((prevState) => ({
      ...prevState,
      filterByName: { ...filterByName },
      filterByNumericValues: [...filterByNumericValues],
    }));
  }, [filterByName, filterByNumericValues]);

  return (
    <PlanetsContext.Provider value={ dataValue }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
