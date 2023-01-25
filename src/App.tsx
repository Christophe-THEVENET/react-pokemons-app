import React, { FunctionComponent, useState, useEffect } from 'react';
import POKEMONS from './models/mock-pokemon';
import Pokemon from './models/pokemon';

const App: FunctionComponent = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    setPokemons(POKEMONS);
  }, []);

  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="center">
        <div className="row">
          {pokemons.map(({ id, name, picture, created }) => (
            <div className="col s6 m4" key={id}>
              <div className="card horizontal">
                <div className="card-image">
                  <img src={picture} alt={name} />
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <p>{name}</p>
                    <p>
                      <small>{created.toString()}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
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
