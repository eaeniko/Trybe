import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/header';
import Question from '../components/question';
import { fetchTriviaQuestions } from '../services/API';
import StopWatch from '../components/stopWatch';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      currentQuestionIndex: 0,
      currentQuestion: {},
      loading: true,
    };

    this.fetchAndStoreQuestions = this.fetchAndStoreQuestions.bind(this);
    this.nextClick = this.nextClick.bind(this);
    this.setCurrentQuestion = this.setCurrentQuestion.bind(this);
    this.setRankingInLocal = this.setRankingInLocal.bind(this);
  }

  componentDidMount() {
    this.fetchAndStoreQuestions();
    this.setLocalStorageInitial();
  }

  setCurrentQuestion(index) {
    const { questions } = this.state;
    this.setState({
      currentQuestion: questions[index],
    });
  }

  setLocalStorageInitial() {
    const state = {
      player: {
        name: '',
        assertions: 0,
        score: 0,
        gravatarEmail: '',
      },
    };
    localStorage.setItem('state', JSON.stringify(state));
  }

  setRankingInLocal() {
    const { email, user, score } = this.props;
    const localRanking = JSON.parse(localStorage.getItem('ranking'));
    const newLocal = localRanking.map((userRank) => {
      if (userRank.picture === email && userRank.name === user) {
        return { ...userRank, score };
      }
      return userRank;
    });

    localStorage.setItem('ranking', JSON.stringify(newLocal));
  }

  async fetchAndStoreQuestions() {
    const { token } = this.props;
    const { currentQuestionIndex } = this.state;
    const re2 = await fetchTriviaQuestions(token);
    const { results } = re2;
    this.setState({
      questions: [...results],
    });
    this.setCurrentQuestion(currentQuestionIndex);
    this.setState({
      loading: false,
    });
  }

  nextClick() {
    const { currentQuestionIndex, questions } = this.state;
    const newQuestionIndex = currentQuestionIndex + 1;
    if (newQuestionIndex === questions.length) {
      const { history } = this.props;
      this.setRankingInLocal();
      history.push('/results');
    } else {
      this.setState({
        currentQuestionIndex: newQuestionIndex,
      });
      this.setCurrentQuestion(newQuestionIndex);
    }
  }

  render() {
    const { loading, currentQuestion } = this.state;
    if (loading) {
      return (
        <div>carregando...</div>
      );
    }

    return (
      <>
        <Header />
        <Question
          key={ currentQuestion.question }
          category={ currentQuestion.category }
          question={ currentQuestion.question }
          correctAnswer={ currentQuestion.correct_answer }
          incorrectAnswers={ currentQuestion.incorrect_answers }
          answerClick={ this.answerClick }
          nextClick={ this.nextClick }
          difficulty={ currentQuestion.difficulty }
        />
        <StopWatch />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.game.token.token,
  user: state.user.user,
  email: state.user.email,
  score: state.user.score,
});

export default connect(mapStateToProps)(Home);

Home.propTypes = {
  token: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  history: PropTypes.func.isRequired,
};
