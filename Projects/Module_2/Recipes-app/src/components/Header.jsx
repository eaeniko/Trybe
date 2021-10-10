import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { setSearchbar as setSearchbarAction } from '../Redux/actions/index';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ setTitle, setSearchbar, search }) {
  const history = useHistory();
  const { location: { pathname } } = history;

  function openSearchBar() {
    setSearchbar(!search);
  }

  function perfilRoute() {
    history.push('/perfil');
  }

  function renderSearchButton() {
    return (<input
      type="image"
      data-testid="search-top-btn"
      src={ searchIcon }
      alt="pesquisar"
      onClick={ openSearchBar }
    />);
  }
  const verifyPathName = {
    '/comidas': renderSearchButton(),
    '/bebidas': renderSearchButton(),
    '/explorar/comidas/area': renderSearchButton(),
    '/explorar/bebidas/ingredientes': null,
    '/perfil': null,
  };

  // function checkRouteToSearchButton(pathnamePage) {
  //   console.log(pathnamePage);
  //   if (pathnamePage === '/explorar') {
  //     return null;
  //   }
  //   if (pathnamePage === '/explorar/comidas') {
  //     return null;
  //   }
  //   if (pathnamePage === '/explorar/bebidas') {
  //     return null;
  //   }
  //   return (<input
  //     type="image"
  //     data-testid="search-top-btn"
  //     src={ searchIcon }
  //     alt="pesquisar"
  //     onClick={ openSearchBar }
  //   />);
  // }

  return (
    <header>
      <nav>
        <input
          type="image"
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="perfil"
          onClick={ perfilRoute }
        />
        <h1 data-testid="page-title">{ setTitle }</h1>
        {verifyPathName[pathname]}
      </nav>
    </header>
  );
}

Header.propTypes = {
  setTitle: PropTypes.string.isRequired,
  setSearchbar: PropTypes.func.isRequired,
  search: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  search: state.search,
});

const mapDispatchToProps = (dispatch) => ({
  setSearchbar: (payload) => dispatch(setSearchbarAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
