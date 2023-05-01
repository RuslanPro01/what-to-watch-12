import FilmCards from '../../components/film-cards/film-cards';
import Footer from '../../components/footer/footer';
import Logo from '../../components/header/logo';
import UserAuthBlock from '../../components/header/user-auth-block';
import {Helmet} from 'react-helmet-async';
import {useAppSelector} from '../../hooks';
import {selectedAllFilms} from '../../store/api-process/selectors';

function MyList(): JSX.Element {
  const films = useAppSelector(selectedAllFilms);
  const favoriteFilms = [...films].filter(({isFavorite}) => isFavorite);
  return (
    <div className="user-page">
      <Helmet>
        <title>Favorite films</title>
      </Helmet>
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favoriteFilms.length}</span></h1>
        <UserAuthBlock/>
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
