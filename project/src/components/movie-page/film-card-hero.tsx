import Header from '../header/header';
import {Path} from '../../common-const';
import {Film} from '../../types/films';
import {Navigate} from 'react-router-dom';
import {CardButtonList} from '../card-button-list/card-button-list';

type FilmCardHeroProps = {
  film: Film | null;
}
export function FilmCardHero({film}: FilmCardHeroProps): JSX.Element {
  if (!film) {
    return <Navigate to={Path.PageNotFound}/>;
  }

  return (
    <>
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
          <CardButtonList filmId={String(film.id)} isFavoriteFilm={film.isFavorite} isMainPage={false}/>
        </div>
      </div>
    </>
  );
}
