import React, { FunctionComponent, useState } from 'react';
import POKEMONS from './models/mock-pokemon';
import Pokemon from './models/pokemon';

const App: FunctionComponent = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>(POKEMONS);

  return <h1>Il y a {pokemons.length} Pokemons dans la liste</h1>;
};

export default App;

// les hooks a partir de React V16.8

// le state peut changer dans le temps. Freshcut

// TypeScript permet de typer le Javascript
