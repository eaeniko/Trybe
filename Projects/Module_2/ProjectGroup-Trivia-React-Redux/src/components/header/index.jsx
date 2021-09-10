import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Gravatar from '../gravatar';

class Header extends Component {
  render() {
    const { user, score, email } = this.props;
    return (
      <header data-testId="header-player-name">
        <Gravatar email={ email } />
        <span data-testId="header-player-game">{user}</span>
        <span data-testId="header-score">{score}</span>
      </header>
    );
  }
}

const mapStateToProps = ({ user: { user, score, email } }) => ({
  user,
  score,
  email,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  user: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};
