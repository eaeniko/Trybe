import React from 'react';
import PropTypes from 'prop-types';

class InputLabel extends React.Component {
  render() {
    const { name, type = 'text', textContent, handleChange, value } = this.props;
    // const { title, subtitle, imagePath, storyline } = addMovieState;
    // imagePath, storyline, rating title,
    return (
      <label
        htmlFor={ name }
        data-testid={ `${(name === 'imagePath') ? 'image' : name}-input-label` }
      >
        {textContent}
        <input
          type={ type }
          name={ name }
          value={ value }
          data-testid={ `${(name === 'imagePath') ? 'image' : name}-input` }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputLabel.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  textContent: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number]).isRequired,
  handleChange: PropTypes.func.isRequired,
};

// InputLabel.defaultProps = {
//   handleChange: PropTypes.objectOf(PropTypes.object),
// };

export default InputLabel;
