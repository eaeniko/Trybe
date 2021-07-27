import React, { Component } from 'react';
import pokemons from './data.js'

class Pokemons extends Component {

  render() {
    return pokemons.map((pokemon) => (
      <section key={pokemon.id} className="pokemon">
        <p><span className="font">Name:</span> {pokemon.name}</p>
        <p><span className="font">Type:</span> {pokemon.type}</p>
        <p><span className="font">Weight:</span> {pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}</p>
        <img src={pokemon.image} alt= {`Pokemon: ${pokemon.name}`}/>
      </section>
    ))
  }
}

export default Pokemons