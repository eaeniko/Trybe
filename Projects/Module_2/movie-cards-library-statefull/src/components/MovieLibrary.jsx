import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      favBooks: false,
      genre: '',
    };
    this.searchTextChange = this.searchTextChange.bind(this);
    this.handleBookFavCheck = this.handleBookFavCheck.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
  }

  handleBookFavCheck() {
    const { favBooks } = this.state;
    this.setState({
      favBooks: !favBooks,
    });
  }

  handleGenreChange(event) {
    this.setState({
      genre: event.target.value,
    });
  }

  searchTextChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  render() {
    const { searchText, favBooks, genre } = this.state;
    const { movies } = this.props;
    // const { title } = data;
    return (
      <section>
        <div className="SearchBar">
          <SearchBar
            searchText={ searchText }
            onSearchTextChange={ this.searchTextChange }
            bookmarkedOnly={ favBooks }
            onBookmarkedChange={ this.handleBookFavCheck }
            selectedGenre={ genre }
            onSelectedGenreChange={ this.handleGenreChange }
          />
        </div>
        <div className="movieList">
          <MovieList movies={ movies } />
        </div>
        <AddMovie onClick={ () => {} } />
      </section>
    );
  }
}
MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
