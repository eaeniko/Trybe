import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchEditMovie = this.fetchEditMovie.bind(this);
  }

  componentDidMount() {
    this.fetchEditMovie();
  }

  handleSubmit(updatedMovie) {
    this.setState({ shouldRedirect: true });
    movieAPI.updateMovie(updatedMovie);
  }

  async fetchEditMovie() {
    const { match: { params: { id } } } = this.props;
    this.setState({ status: 'loading' });
    const fetchedMovie = await movieAPI.getMovie(id);
    this.setState({
      movie: fetchedMovie,
      status: false,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
      return (
        <Redirect to="/" />
      );
    }

    if (status === 'loading') {
      // render Loading
      return (
        <Loading />
      );
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default EditMovie;
