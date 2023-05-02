import Footer from '../../components/footer/footer';
import MainCatalogFilms from '../../components/main-catalog-films/main-catalog-films';
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchPromoFilmAction} from '../../store/async-actions';
import {LoadStatus} from '../../services/const';
import {selectedLoadStatusPromoFilm, selectedPromoFilm} from '../../store/api-process/selectors';
import {changeLoadStatusPromoFilm} from '../../store/api-process/api-process';
import Header from '../../components/header/header';
import {CardButtonList} from '../../components/card-button-list/card-button-list';

function Main(): JSX.Element {
  const dispatch = useAppDispatch();
  const promoFilm = useAppSelector(selectedPromoFilm);
  const loadStatusPromoFilm = useAppSelector(selectedLoadStatusPromoFilm);

  useEffect(() => {
    if (!promoFilm) {
      dispatch(fetchPromoFilmAction());
    } else if (promoFilm && loadStatusPromoFilm === LoadStatus.Loading) {
      dispatch(changeLoadStatusPromoFilm(LoadStatus.Loaded));
    }
  }, [dispatch, loadStatusPromoFilm, promoFilm]);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm?.backgroundImage} alt={promoFilm?.name}/>
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header/>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm?.posterImage} alt={`${promoFilm?.name ?? ''} poster`} width="218" height="327"/>
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm?.genre}</span>
                <span className="film-card__year">{promoFilm?.released}</span>
              </p>
              <CardButtonList filmId={promoFilm ? String(promoFilm.id) : ''} isFavoriteFilm={!!promoFilm?.isFavorite}/>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <MainCatalogFilms/>
        <Footer/>
      </div>
    </>
  );
}


export default Main;
