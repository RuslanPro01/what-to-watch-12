import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import {Link, Navigate, Outlet, useNavigate, useParams} from 'react-router-dom';
import {Path} from '../../common-const';
import NavTab from './nav-tab';
import {films} from '../../mock/films';
import FilmCards from '../../components/film-cards/film-cards';

function MoviePage(): JSX.Element {
  const {id} = useParams<{ id: string }>();
  const navigate = useNavigate();
  if (!id) {
    return <Navigate to={Path.PageNotFound} />;
  }

  const checkedFilm = films.find((film) => film.id === +id);

  if (!checkedFilm) {
    return <Navigate to={Path.PageNotFound} />;
  }

  const similarFilms = [...films].filter((film) => {
    if (film.id === +id) {
      return false;
    }
    return film.genre === checkedFilm.genre;
  });

  return (
    <>
      <section className="film-card film-card--full" style={{background: checkedFilm.backgroundColor}}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={checkedFilm.backgroundImage} alt={checkedFilm.name}/>
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header/>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{checkedFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{checkedFilm.genre}</span>
                <span className="film-card__year">{checkedFilm.released}</span>
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
              <img src={checkedFilm.posterImage} alt={`${checkedFilm.name} poster`} width="218" height="327"/>
            </div>
            <div className="film-card__desc">
              <NavTab/>
              <Outlet/>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          {
            similarFilms.length >= 1 ?
              <>
                <h2 className="catalog__title">More like this</h2>
                <FilmCards films={similarFilms}/>
              </> :
              false
          }
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default MoviePage;
