import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/header';

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.hadlerCLickRanking = this.hadlerCLickRanking.bind(this);
  }

  handleClick() {
    const { history } = this.props;
    history.push('/');
  }

  hadlerCLickRanking() {
    const { history } = this.props;
    history.push('/ranking');
  }

  render() {
    const { correctAnswers, score } = this.props;
    let feedback;
    const feedback2 = 'Você acertou: ';
    const feedback3 = 'Sua pontuação foi: ';
    const treshold = 3;
    if (correctAnswers < treshold) {
      feedback = 'Podia ser melhor...';
    } else if (correctAnswers >= treshold) {
      feedback = 'Mandou bem!';
    }
    return (
      <div>
        <Header />
        <p data-testid="feedback-text">{ feedback }</p>
        <p>{ feedback2 }</p>
        <p data-testid="feedback-total-question">{ correctAnswers }</p>
        <p>{ feedback3 }</p>
        <p data-testid="feedback-total-score">{ score }</p>
        <button
          type="button"
          onClick={ this.handleClick }
          data-testid="btn-play-again"
        >
          Jogar novamente
        </button>
        <button
          type="button"
          data-testid="btn-ranking"
          onClick={ this.hadlerCLickRanking }
        >
          Ver Ranking
        </button>
      </div>
    );
  }
}

Results.propTypes = {
  correctAnswers: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  correctAnswers: state.user.assertions,
  score: state.user.score,
});

export default connect(mapStateToProps)(Results);
