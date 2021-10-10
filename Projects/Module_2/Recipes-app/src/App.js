import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
import Comidas from './pages/Comidas';
import Bebidas from './pages/Bebidas';
// import Footer from './components/Footer';
import Explorer from './pages/Explorer';
import ExplorerCountries from './pages/ExplorerCountries';
import FavoritesRecipes from './pages/FavoritesRecipes';
import RecipesMade from './pages/RecipesMade';
import Perfil from './pages/Perfil';
import RecipesDetails from './pages/RecipesDetails';
import RecipesInProgress from './pages/RecipesInProgress';
import ExplorerFoods from './pages/ExplorerFoods';
import ExplorerDrinks from './pages/ExplorerDrinks';
import ExploreFoodsIngredients from './pages/ExploreFoodsIngredients';
import ExploreDrinksIngredients from './pages/ExploreDrinksIngredients';

function App() {
  return (

    <div className="wrapper">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Comidas } />
        <Route exact path="/bebidas" component={ Bebidas } />
        <Route exact path="/comidas/:id" component={ RecipesDetails } />
        <Route exact path="/bebidas/:id" component={ RecipesDetails } />
        <Route exact path="/comidas/:id/in-progress" component={ RecipesInProgress } />
        <Route exact path="/bebidas/id/in-progress" component={ RecipesInProgress } />
        <Route exact path="/explorar" component={ Explorer } />
        <Route exact path="/explorar/comidas" component={ ExplorerFoods } />
        <Route exact path="/explorar/bebidas" component={ ExplorerDrinks } />
        <Route
          exact
          path="/explorar/comidas/ingredientes"
          component={ ExploreFoodsIngredients }
        />
        <Route
          exact
          path="/explorar/bebidas/ingredientes"
          component={ ExploreDrinksIngredients }
        />
        <Route exact path="/explorar/comidas/area" component={ ExplorerCountries } />
        <Route exact path="/perfil" component={ Perfil } />
        <Route exact path="/receitas-feitas" component={ RecipesMade } />
        <Route exact path="/receitas-favoritas" component={ FavoritesRecipes } />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;

/*

Obs:
A medida que formos desenvolvendo, vamos alterando o que será renderizado em cada Rota

*/
