import {Path} from '../../common-const';
import {Helmet} from 'react-helmet-async';
import {useContext} from 'react';
import FilmContext from '../../context/film-context';
import {convertRatingToText} from '../../utils';

function OverviewTab(): JSX.Element {
  const film = useContext(FilmContext);
  return (
    <>
      <Helmet>
        <title>{film?.name} {film?.genre} — {Path.FilmsPages.Tabs.Overview}</title>
      </Helmet>
      <div className="film-rating">
        <div className="film-rating__score">{film?.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{convertRatingToText(film?.rating)}</span>
          <span className="film-rating__count">{film?.scoresCount.toLocaleString('en-EN')} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{film?.description}</p>
        <p className="film-card__director"><strong>Director: {film?.director}</strong></p>
        <p className="film-card__starring">
          <strong>Starring: {film?.starring.join(', ')} and other</strong>
        </p>
      </div>
    </>
  );
}

export default OverviewTab;
