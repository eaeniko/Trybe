import React from 'react';
import FilterBar from '../components/FilterBar';
import Table from '../components/Table';
// import useStarwarsApi from '../hooks/useStarwarsApi';

function Home() {
  return (
    <div>
      <header><h1>Starwars Planets</h1></header>
      <FilterBar />
      <Table />

    </div>
  );
}

export default Home;
