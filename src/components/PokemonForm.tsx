import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Pokemon from '../models/pokemon';
import formatType from '../helper/format-type-of-pokemon';
import { type } from 'os';

type Props = {
  pokemon: Pokemon;
};

// modéliation du champ du formulaire
type Field = {
  value?: any;
  error?: string;
  isValid?: boolean;
};

// modélisation du formulaire avec liste des champs
type Form = {
  name: Field;
  hp: Field;
  cp: Field;
  types: Field;
};

const PokemonForm: FunctionComponent<Props> = ({ pokemon }) => {
  const types: string[] = [
    'Plante',
    'Feu',
    'Eau',
    'Insecte',
    'Normal',
    'Electrik',
    'Poison',
    'Fée',
    'Vol',
    'Combat',
    'Psy',
  ];

  // fonction pour cocher la checkbox du type du pokemon
  // est ce que le type appartient au tableau types (includes)
  const hasType = (type: string): boolean => {
    return form.types.value.includes(type);
  };

  // push les valeurs modifiées du formulaire ds le state
  // a chaque modif d'un input
  const hadleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName: string = e.target.name;
    const fieldValue: string = e.target.value;
    // fusionne les données
    const newField: Field = { [fieldName]: { value: fieldValue } };

    setForm({ ...form, ...newField });
  };

  // on initialise le state du formulaire avec les données du pokemon reçues ds l url les champs sont valide puisqu on est en edit
  const [form, setForm] = useState<Form>({
    name: { value: pokemon.name, isValid: true },
    hp: { value: pokemon.hp, isValid: true },
    cp: { value: pokemon.cp, isValid: true },
    types: { value: pokemon.types, isValid: true },
  });

  // pour push les données des types du pokemon (cases a cocher)
  const selectType = (
    type: string,
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const checked = e.target.checked;
    let newField: Field;

    if (checked) {
      // si l utilisateur coche un type, ajoute a la liste des types du pokemon
      // concat fusionne 2 tableux
      const newTypes: string[] = form.types.value.concat([type]);
      newField = { value: newTypes };
    } else {
      // si l utilisateur décoche un type, retire de la liste des types du pokjemon
      // filter renvoi nouveau tableau sans le type décoché
      const newTypes: string[] = form.types.value.filter(
        (currentType: string) => currentType !== type
      );
      newField = { value: newTypes };
    }

    setForm({ ...form, ...{ types: newField } });
  };

  // soumission du formulaire
  const history = useHistory(); // on récup l historique du navigateur
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    
    history.push(`/pokemons/${pokemon.id}`); // redirection
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card hoverable">
            <div className="card-image">
              <img
                src={pokemon.picture}
                alt={pokemon.name}
                style={{ width: '250px', margin: '0 auto' }}
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                {/* ****************************** Pokemon name ********** */}
                <div className="form-group">
                  <label htmlFor="name">Nom</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control"
                    value={form.name.value}
                    onChange={(e) => hadleInputChange(e)}
                  ></input>
                </div>
                {/* ****************************** Pokemon hp ************* */}
                <div className="form-group">
                  <label htmlFor="hp">Point de vie</label>
                  <input
                    id="hp"
                    name="hp"
                    type="number"
                    className="form-control"
                    value={form.hp.value}
                    onChange={(e) => hadleInputChange(e)}
                  ></input>
                </div>
                {/* ****************************** Pokemon cp ************* */}
                <div className="form-group">
                  <label htmlFor="cp">Dégâts</label>
                  <input
                    id="cp"
                    name="cp"
                    type="number"
                    className="form-control"
                    value={form.cp.value}
                    onChange={(e) => hadleInputChange(e)}
                  ></input>
                </div>
                {/* ***************************** Pokemon types *********** */}
                <div className="form-group">
                  <label>Types</label>
                  {types.map((type) => (
                    <div key={type} style={{ marginBottom: '10px' }}>
                      <label>
                        <input
                          id={type}
                          type="checkbox"
                          className="filled-in"
                          value={type}
                          checked={hasType(type)}
                          onChange={(e) => selectType(type, e)}
                        ></input>
                        <span>
                          <p className={formatType(type)}>{type}</p>
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-action center">
                {/* ********************************* Submit button ******** */}
                <button type="submit" className="btn">
                  Valider
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PokemonForm;
