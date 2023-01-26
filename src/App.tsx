import React, { FunctionComponent } from 'react';
import PokemonList from './pages/PokemonList';

const App: FunctionComponent = () => {
  return (
    <div>
      <PokemonList />
    </div>
  );
};

export default App;

// les hooks a partir de React V16.8

// le state peut changer dans le temps. Freshcut

// TypeScript permet de typer le Javascript

// _______________ 3 règles _____________________

// - Appeler les Hooks uniquement au niveau racine du composant
// - Appeler les Hooks uniquement depuis des composants de fonctions
// - lL modification du state efface tout et remplace. Donc pour ajouter ds un tableau il faut tout rerentrer [...array]
