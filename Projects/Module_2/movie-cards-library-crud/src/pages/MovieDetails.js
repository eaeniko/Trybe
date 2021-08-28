import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      movie: '',
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { match: { params: { id } } } = this.props;
    this.setState({ loading: true });
    const fetchedMovie = await movieAPI.getMovie(id);
    this.setState({
      movie: fetchedMovie,
      loading: false,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { match: { params: { id } } } = this.props;

    return (
      <div data-testid="movie-details">
        { loading ? <Loading />
          : (
            <>
              <p>{ `Title: ${title}` }</p>
              <img alt="Movie Cover" src={ `../${imagePath}` } />
              <p>{ `Subtitle: ${subtitle}` }</p>
              <p>{ `Storyline: ${storyline}` }</p>
              <p>{ `Genre: ${genre}` }</p>
              <p>{ `Rating: ${rating}` }</p>
              <Link to="/">VOLTAR</Link>
              <Link
                to={ {
                  pathname: `/movies/${id}/edit`,
                } }
              >
                EDITAR
              </Link>
              <Link to="/">DELETAR</Link>
            </>
          )}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
