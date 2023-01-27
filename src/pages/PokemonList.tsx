import React, { FunctionComponent } from 'react';
import PokemonCard from '../components/PokemonCard';
import usePokemons from '../hooks/usePokemons';


const PokemonList: FunctionComponent = () => {
  // l 'état des pokemon est renvoyé par le Hook perso
  
  const pokemons = usePokemons();

  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container">
        <div className="row">
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
