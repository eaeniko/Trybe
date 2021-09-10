import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import ConfigPage from './pages/ConfigPage';
import Ranking from './pages/Ranking';
import Results from './pages/Results';

import './App.css';

// requisito 1
class App extends React.Component {
  componentDidMount() {
    const state = {
      player: {
        name: '',
        assertions: '',
        score: 0,
        gravatarEmail: '',
      },
    };
    const ranking = [];
    if (JSON.parse(localStorage.getItem('ranking')) === null) {
      localStorage.setItem('ranking', JSON.stringify(ranking));
    }
    localStorage.setItem('state', JSON.stringify(state));
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/game" component={ Home } />
        <Route exact path="/ranking" component={ Ranking } />
        <Route exact path="/results" component={ Results } />
        <Route exact path="/ConfigPage" component={ ConfigPage } />
      </Switch>
    );
  }
}
export default App;
