import React from 'react';
import { MD5 } from 'crypto-js';
import PropTypes from 'prop-types';

function Gravatar({ email }) {
  const emailString = MD5(email).toString;
  return (
    <img
      src={ `https://www.gravatar.com/avatar/${emailString}` }
      alt="Icon's User"
      data-testid="header-profile-picture"
    />
  );
}

export default Gravatar;

Gravatar.propTypes = {
  email: PropTypes.string.isRequired,
};
