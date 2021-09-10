import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { resetTimer, setTimer } from '../../redux/actions';

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 30,
    };
    this.limiteTempo = this.limiteTempo.bind(this);
    this.stopWatch = this.stopWatch.bind(this);
    this.resetStopWatch = this.resetStopWatch.bind(this);
  }

  componentDidMount() {
    this.stopWatch();
  }

  componentDidUpdate() {
    this.resetStopWatch();
    this.limiteTempo();
  }

  resetStopWatch() {
    const { time } = this.state;
    const { resetTime, resetTimeGlobal } = this.props;
    const LIMIT_TIME = 30;
    if (resetTime && time !== LIMIT_TIME) {
      this.setState({ time: 30 }, () => {
        this.stopWatch();
        resetTimeGlobal(false);
      });
    }
  }

  stopWatch() {
    const ONE_SECOND = 1000;
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({ time: prevState.time - 1 }));
    }, ONE_SECOND);
  }

  limiteTempo() {
    const { time } = this.state;
    const { isTimer, setTimeGlobal } = this.props;
    const LIMIT_SECONDS = 0;
    if (time === LIMIT_SECONDS || isTimer) {
      setTimeGlobal(true);
      clearInterval(this.intervalId);
    }
  }

  render() {
    const { time } = this.state;
    return (
      <div>
        <h1 id="timer">{time}</h1>
      </div>
    );
  }
}

StopWatch.propTypes = {
  isTimer: PropTypes.bool.isRequired,
  setTimeGlobal: PropTypes.func.isRequired,
  resetTimeGlobal: PropTypes.func.isRequired,
  resetTime: PropTypes.bool.isRequired,
};

const MapStateToProps = ({ game: { stopWatch: { isTimer, resetTime } } }) => ({
  isTimer,
  resetTime,
});

const MapDispatchToProps = (dispatch) => ({
  setTimeGlobal: (payload) => dispatch(setTimer(payload)),
  resetTimeGlobal: (payload) => dispatch(resetTimer(payload)),
});

export default connect(MapStateToProps, MapDispatchToProps)(StopWatch);
