import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import {Link, Navigate, Outlet, useNavigate, useParams} from 'react-router-dom';
import {Path} from '../../common-const';
import NavTab from './nav-tab';
import FilmCards from '../../components/film-cards/film-cards';
import {ScrollToTop} from '../../components/scroll-to-top/scrollToTop';
import {useAppSelector} from '../../hooks';
import {selectedAllFilms, selectedFilm, selectedLoadStatusFilm} from '../../store/selectors';
import {useEffect} from 'react';
import {LoadStatus} from '../../services/const';
import {Spinner} from '../../components/spiner/spinner';
import FilmContext from '../../context/film-context';
import {fetchFilmAction} from '../../store/async-actions';
import {store} from '../../store';

function MoviePage(): JSX.Element {
  const {id} = useParams<{ id: string }>();
  const navigate = useNavigate();
  const loadStatusFilm = useAppSelector(selectedLoadStatusFilm);
  const film = useAppSelector(selectedFilm);
  const films = useAppSelector(selectedAllFilms);

  useEffect(() => {
    if (id) {
      store.dispatch(fetchFilmAction(id));
    }
  }, [id]);

  if (!id) {
    return <Navigate to={Path.PageNotFound}/>;
  }

  const similarFilms = film ? [...films].filter((filmElement) => {
    if (filmElement.id === +id) {
      return false;
    }
    return filmElement.genre === film.genre;
  }) : [];

  if (loadStatusFilm === LoadStatus.Loading || loadStatusFilm === LoadStatus.Unknown) {
    return (
      <section className="film-card film-card--full">
        <Spinner/>;
      </section>
    );
  }

  if (loadStatusFilm === LoadStatus.Fail) {
    return (
      <section className="film-card film-card--full">
        <div>Error :( Please, reload this page</div>
      </section>
    );
  }

  return (
    <>
      <section className="film-card film-card--full" style={{background: film?.backgroundColor}}>
        <ScrollToTop/>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film?.backgroundImage} alt={film?.name}/>
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header/>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film?.genre}</span>
                <span className="film-card__year">{film?.released}</span>
              </p>
              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button" type="button" onClick={() => {
                    navigate(`${Path.PlayerPage.replace(':id', id)}`);
                  }}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <Link to={Path.FilmsPages.Review} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film?.posterImage} alt={`${film?.name ?? 'No'} poster`} width="218" height="327"/>
            </div>
            <div className="film-card__desc">
              <NavTab/>
              {
                loadStatusFilm === LoadStatus.Loaded ?
                  <FilmContext.Provider value={film}>
                    <Outlet/>
                  </FilmContext.Provider> :
                  null
              }
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          {
            similarFilms.length ?
              <>
                <h2 className="catalog__title">More like this</h2>
                <FilmCards films={similarFilms}/>
              </> :
              null
          }
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default MoviePage;
