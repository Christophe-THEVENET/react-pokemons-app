import React, { FunctionComponent, useState } from 'react';
import Pokemon from '../models/pokemon';
import './PokemonCard.css';

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
            <p>
              <small>{pokemon.created.toUTCString()}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

type Props = {
  pokemon: Pokemon;
  borderColor?: string; // facultative
};

export default PokemonCard;
