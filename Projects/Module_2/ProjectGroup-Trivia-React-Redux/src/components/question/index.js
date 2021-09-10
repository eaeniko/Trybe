import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import shuffleList from '../../services/suffleList';
import './Question.css';
import { setTimer, resetTimer, setScore, setCorrectAnswer } from '../../redux/actions';

class Question extends React.Component {
  constructor(props) {
    super(props);
    const { correctAnswer } = this.props;
    this.state = {
      correctAnswerIdentifier: correctAnswer,
      answerList: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.setAnswersList = this.setAnswersList.bind(this);
  }

  componentDidMount() {
    const { correctAnswer, incorrectAnswers } = this.props;
    const answerList = [correctAnswer, ...incorrectAnswers];
    const shuffledList = shuffleList(answerList);
    this.setAnswersList(shuffledList);
  }

  setAnswersList(list) {
    this.setState({
      answerList: list,
    });
  }

  handleClick({ target }) {
    const { correctAnswer, setTimeGlobal } = this.props;
    const AllButtons = document.querySelectorAll('button');
    AllButtons.forEach((button) => (correctAnswer === button.innerText
      ? button.classList.add('answer-correct')
      : button.classList.add('answer-wrong')));
    setTimeGlobal(true);
    if (target.innerText === correctAnswer) { this.calcPonts(); }
  }

  calcPonts() {
    const {
      difficulty, setScoreGlobal, setCorrectAnswersGlobal, correctAnswers, score,
    } = this.props;
    const timer = document.querySelector('#timer').innerHTML;
    const pontDifficulty = {
      hard: 3,
      medium: 2,
      easy: 1,
    };
    const TEN_NUMBER = 10;
    const total = TEN_NUMBER + (timer * pontDifficulty[difficulty]);
    const stateLocal = JSON.parse(localStorage.getItem('state'));
    const newLocal = {
      ...stateLocal,
      player: {
        ...stateLocal.player, score: score + total, assertions: correctAnswers + 1,
      },
    };
    localStorage.setItem('state', JSON.stringify(newLocal));
    setScoreGlobal(score + total);
    setCorrectAnswersGlobal(correctAnswers + 1);
  }

  renderNexButton() {
    const { nextClick, setTimeGlobal, resetTimeGlobal } = this.props;
    return (
      <button
        type="button"
        data-testid="btn-next"
        onClick={ () => {
          nextClick();
          setTimeGlobal(false);
          resetTimeGlobal(true);
        } }
      >
        Próxima
      </button>
    );
  }

  render() {
    const { category, question, isTimer } = this.props;
    const { correctAnswerIdentifier, answerList } = this.state;
    return (
      <div>
        <div data-testid="question-category">
          Categoria:
          { category }
        </div>
        <div data-testid="question-text">
          Pergunta:
          { question }
        </div>
        { answerList.map((element) => {
          if (element === correctAnswerIdentifier) {
            return (
              <button
                onClick={ this.handleClick }
                type="button"
                data-testid="correct-answer"
                key={ element }
                disabled={ isTimer }
              >
                {element}
              </button>
            );
          }
          return (
            <button
              onClick={ this.handleClick }
              type="button"
              data-testid="wrong-answer"
              key={ element }
              disabled={ isTimer }
            >
              {element}
            </button>
          );
        }) }
        { isTimer ? this.renderNexButton() : undefined }
      </div>
    );
  }
}

Question.propTypes = {
  category: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  correctAnswer: PropTypes.string.isRequired,
  isTimer: PropTypes.bool.isRequired,
  incorrectAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
  nextClick: PropTypes.func.isRequired,
  resetTimeGlobal: PropTypes.func.isRequired,
  setTimeGlobal: PropTypes.func.isRequired,
  setScoreGlobal: PropTypes.func.isRequired,
  difficulty: PropTypes.string.isRequired,
  setCorrectAnswersGlobal: PropTypes.func.isRequired,
  correctAnswers: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

const MapStateToProps = (state) => ({
  isTimer: state.game.stopWatch.isTimer,
  correctAnswers: state.user.assertions,
  score: state.user.score,
});

const MapDispachToProps = (dispatch) => ({
  setTimeGlobal: (payload) => dispatch(setTimer(payload)),
  resetTimeGlobal: (payload) => dispatch(resetTimer(payload)),
  setScoreGlobal: (payload) => dispatch(setScore(payload)),
  setCorrectAnswersGlobal: (payload) => dispatch(setCorrectAnswer(payload)),
});

export default connect(MapStateToProps, MapDispachToProps)(Question);
