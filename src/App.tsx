import React, { FunctionComponent } from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import PokemonDetail from './pages/PokemonDetail';
import PokemonList from './pages/PokemonList';
import './App.css';
import PageNotFound from './pages/PageNotFound';


const App: FunctionComponent = () => {
  return (
    <Router>
      <div>
        <nav>
          <div className="nav-wrapper header">
            <Link to="/" className="brand-logo center">
              Pokédex
            </Link>
          </div>
        </nav>
      </div>
      {/* systeme de gestion des routes */}
      <Switch>
        <Route exact path="/" component={PokemonList} />
        <Route exact path="/pokemons" component={PokemonList} />
        <Route exact path="/pokemons/:id" component={PokemonDetail} />
       {/*  bien déclarer en dernier la pageNotFound */}
        <Route  component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default App;

// les hooks a partir de React V16.8

// le state peut changer dans le temps. Freshcut

// TypeScript permet de typer le Javascript

// _______________ 3 règles _____________________

// - Appeler les Hooks uniquement au niveau racine du composant
// - Appeler les Hooks uniquement depuis des composants de fonctions
// - La modification du state efface tout et remplace. Donc pour ajouter ds un tableau il faut tout rerentrer [...array]
