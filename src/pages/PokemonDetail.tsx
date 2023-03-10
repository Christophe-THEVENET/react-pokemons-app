import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import Pokemon from '../models/pokemon';
import POKEMONS from '../models/mock-pokemon';
import formatDate from '../helper/format-date';
import formatTypeOfPokemon from '../helper/format-type-of-pokemon';

type Params = { id: string };

// on type la prop qui vient de param c est a dire de l url et on l asocie a l objet match qui contient toutes les autres  données passées par le routeur
const PokemonDetail: FunctionComponent<RouteComponentProps<Params>> = ({
  match,
}) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    // on affecte le pokemon cherché ds le state
    POKEMONS.forEach((pokemon) => {
      if (match.params.id === pokemon.id.toString()) {
        setPokemon(pokemon);
      }
    });
  }, [match.params.id]);

  return (
    <div>
      {pokemon ? (
        <div className="row">
          <div className="col s12 m8 offset-m2">
            <h2 className="header center title">{pokemon.name}</h2>
            <div className="card hoverable">
              <div className="card-image">
                <img
                  src={pokemon.picture}
                  alt={pokemon.name}
                  style={{ width: '250px', margin: '0 auto' }}
                />
                <Link
                  to={`/pokemons/edit/${pokemon.id}`}
                  className="btn btn-floating halfway-fab waves-effect wave-ligth"
                >
                  <i className="material-icons"><span className="material-symbols-outlined">
edit
</span></i>
                </Link>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <table className="bordered striped">
                    <tbody>
                      <tr>
                        <td>Nom</td>
                        <td>
                          <strong>{pokemon.name}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>Points de vie</td>
                        <td>
                          <strong>{pokemon.hp}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>Dégâts</td>
                        <td>
                          <strong>{pokemon.cp}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>Types</td>
                        <td>
                          {pokemon.types.map((type) => (
                            <span
                              key={type}
                              className={formatTypeOfPokemon(type)}
                            >
                              {type}
                            </span>
                          ))}
                        </td>
                      </tr>
                      <tr>
                        <td>Date de création</td>
                        <td>{formatDate(pokemon.created)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card-action">
                  <Link to="/">Retour</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h4 className="center">Aucun pokémon à afficher !</h4>
      )}
    </div>
  );
};

export default PokemonDetail;
