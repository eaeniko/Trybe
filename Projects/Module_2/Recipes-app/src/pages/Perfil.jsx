// Tela de perfil: requisito 82 a 87;
import React from 'react';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Perfil() {
  const history = useHistory();
  // const { email } = props;
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    // const title = 'perfil'
    <div className="wrapper">
      <Header setTitle="Perfil" />
      {/* Requisito 82 e 83 */}
      <p data-testid="profile-email">
        {
          Object.values((!user) ? 'email@email.com' : user)
        }
      </p>
      <button
        type="button"
        data-testid="profile-done-btn"
        onClick={ () => history.push('/receitas-feitas') }
      >
        Receitas Feitas
      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ () => history.push('/receitas-favoritas') }
      >
        Receitas Favoritas
      </button>
      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ () => {
          localStorage.clear();
          history.push('/');
        } }
      >
        Sair
      </button>
      <Footer />
    </div>
  );
}

export default Perfil;
