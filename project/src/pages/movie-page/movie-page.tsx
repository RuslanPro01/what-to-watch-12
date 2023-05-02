import Footer from '../../components/footer/footer';
import {Navigate, Outlet, useParams} from 'react-router-dom';
import {Path} from '../../common-const';
import NavTab from './nav-tab';
import FilmCards from '../../components/film-cards/film-cards';
import {ScrollToTop} from '../../components/scroll-to-top/scrollToTop';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {LoadStatus} from '../../services/const';
import {Spinner} from '../../components/spiner/spinner';
import FilmContext from '../../context/film-context';
import {fetchFilmAction, fetchSimilarFilmsAction} from '../../store/async-actions';
import {
  selectedFilm,
  selectedLoadStatusFilm,
  selectedSimilarFilms, selectedStatusLoadSimilarFilms
} from '../../store/api-process/selectors';
import {changeLoadStatusSimilarFilms, resetSimilarFilms} from '../../store/api-process/api-process';
import {FilmCardHero} from '../../components/movie-page/film-card-hero';

function MoviePage(): JSX.Element {
  const {id} = useParams<{ id: string }>();
  const loadStatusFilm = useAppSelector(selectedLoadStatusFilm);
  const film = useAppSelector(selectedFilm);
  const similarFilms = useAppSelector(selectedSimilarFilms);
  const loadStatusSimilarFilms = useAppSelector(selectedStatusLoadSimilarFilms);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchFilmAction(id));
      changeLoadStatusSimilarFilms(LoadStatus.Unknown);
      dispatch(resetSimilarFilms);
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (id) {
      dispatch(fetchSimilarFilmsAction(id));
    }
  }, [id, dispatch]);

  if (!id) {
    return <Navigate to={Path.PageNotFound}/>;
  }

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
          <FilmCardHero film={film}/>
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
            similarFilms && loadStatusSimilarFilms === LoadStatus.Loaded ?
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
