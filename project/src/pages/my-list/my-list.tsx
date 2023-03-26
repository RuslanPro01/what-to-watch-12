import FilmCards from '../../components/film-cards/film-cards';
import {Films} from '../../mock/films';
import Footer from '../../components/footer/footer';
import Logo from '../../components/header/logo';
import UserBlock from '../../components/header/user-block';
import {Helmet} from 'react-helmet-async';

type PropsMyList = {
  films: Films;
}

function MyList({films}: PropsMyList): JSX.Element {
  const favoriteFilms = [...films].filter(({isFavorite}) => isFavorite === true);
  return (
    <div className="user-page">
      <Helmet>
        <title>Favorite films</title>
      </Helmet>
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favoriteFilms.length}</span></h1>
        <UserBlock/>
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmCards films={favoriteFilms}/>
      </section>
      <Footer/>
    </div>
  );
}

export default MyList;
