import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Gravatar from '../components/gravatar';
import { resetStateGame, resetStateUser } from '../redux/actions';

class Ranking extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.showRanking = this.showRanking.bind(this);
  }

  showRanking(name, score) {
    this.setState((prevState) => ({ ranking: [...prevState.ranking, { name, score }] }));
  }

  handleClick() {
    const { history, resetUserGlobal, resetGameGlobal } = this.props;
    history.push('/');
    resetGameGlobal();
    resetUserGlobal();
  }

  render() {
    // Logica retirada na referência https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/
    const userRanking = JSON.parse(localStorage.getItem('ranking'))
      .sort((a, b) => b.score - a.score);

    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        <ul>
          { userRanking.map((user, index) => (
            <li key={ user }>
              <Gravatar email={ user.email } />
              <p data-testid={ `player-name-${index}` }>{user.name}</p>
              <p data-testid={ `player-score-${index}` }>{user.score}</p>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={ this.handleClick }
          data-testid="btn-go-home"
        >
          Inicio
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  resetUserGlobal: () => dispatch(resetStateUser()),
  resetGameGlobal: () => dispatch(resetStateGame()),
});

export default connect(null, mapDispatchToProps)(Ranking);

Ranking.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
  resetUserGlobal: PropTypes.func.isRequired,
  resetGameGlobal: PropTypes.func.isRequired,
};
