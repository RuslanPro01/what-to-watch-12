import FilmCards from '../../components/film-cards/film-cards';
import {Films} from '../../mock/films';
import Footer from '../../components/footer';
import Logo from '../../components/header/logo';
import UserBlock from '../../components/header/user-block';

type PropsMyList = {
  films: Films;
}

function MyList({films}: PropsMyList): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <UserBlock/>
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          <FilmCards films={films} onlyFavorite/>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default MyList;
