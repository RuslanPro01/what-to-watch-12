import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import {Link, Navigate, Outlet, useNavigate, useParams} from 'react-router-dom';
import {Path} from '../../common-const';
import NavTab from './nav-tab';
import FilmCards from '../../components/film-cards/film-cards';
import {ScrollToTop} from '../../components/scroll-to-top/scrollToTop';
import {useAppSelector} from '../../hooks';
import {selectedAllFilms} from '../../selectors';
import {useEffect, useState} from 'react';
import {loadStatuses} from '../../types/load-statuses';
import {Film} from '../../types/films';
import {ApiRoute, LoadStatus} from '../../services/const';
import {Spinner} from '../../components/spiner/spinner';
import {api} from '../../store';
import FilmContext from '../../context/film-context';

function MoviePage(): JSX.Element {
  const {id} = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loadStatus, setLoadStatus] = useState<loadStatuses>(LoadStatus.Loading);
  const [film, setFilm] = useState<null | Film>(null);
  useEffect(() => {
    const loadFilm = async () => {
      try {
        if (id) {
          const {data} = await api.get<Film>(ApiRoute.Film(id));
          setFilm(data);
          setLoadStatus(LoadStatus.Loaded);
        }
      }
      catch (e) {
        setLoadStatus(LoadStatus.Fail);
      }
    };
    loadFilm();
  }, [id]);

  const films = useAppSelector(selectedAllFilms);
  if (!id) {
    return <Navigate to={Path.PageNotFound} />;
  }

  if (loadStatus === LoadStatus.Loaded && !film) {
    return <Navigate to={Path.PageNotFound} />;
  }

  const similarFilms = film ? [...films].filter((filmElement) => {
    if (filmElement.id === +id) {
      return false;
    }
    return filmElement.genre === film.genre;
  }) : [];

  if (loadStatus === LoadStatus.Loading) {
    return <Spinner />;
  }

  if (loadStatus === LoadStatus.Fail) {
    return <div>Error :( Please, reload this page</div>;
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
                    navigate(`${Path.PlayerPage.replace(':id', id )}`);
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
              <FilmContext.Provider value={film}>
                <Outlet/>
              </FilmContext.Provider>
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
