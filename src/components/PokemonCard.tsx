import React, { FunctionComponent, useState } from 'react';
import formatDate from '../helper/format-date';
import formatTypeOfPokemon from '../helper/format-type-of-pokemon';
import Pokemon from '../models/pokemon';
import './PokemonCard.css';

// on type les props avec Type Script
type Props = {
  pokemon: Pokemon;
  borderColor?: string; // facultative
};

const PokemonCard: FunctionComponent<Props> = ({
  pokemon,
  borderColor = '#009688',
}) => {
  //
  const [color, setColor] = useState<string>();

  const showBorder = () => {
    setColor(borderColor);
  };

  const hideBorder = () => {
    setColor('#df8d8d');
  };

  // Hook personnalisé: fonction commence par use qui appele d autre Hooks

  return (
    <div
      className="col s6 m4"
      onMouseEnter={showBorder}
      onMouseLeave={hideBorder}
    >
      <div className="card horizontal" style={{ borderColor: color }}>
        <div className="card-image">
          <img src={pokemon.picture} alt={pokemon.name} />
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p className="card-name">{pokemon.name}</p>
            <p className="cardDate">
              <small>{formatDate(pokemon.created)}</small>
            </p>
            {pokemon.types.map((type) => {
              return (
                <span className={formatTypeOfPokemon(type)} key={type}>
                  {type}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
