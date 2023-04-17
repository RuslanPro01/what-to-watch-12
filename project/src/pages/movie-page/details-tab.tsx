import {Path} from '../../common-const';
import {Helmet} from 'react-helmet-async';
import {useContext} from 'react';
import FilmContext from '../../context/film-context';
import {createHumanizeTime} from '../../utils';

function DetailsTab(): JSX.Element {
  const film = useContext(FilmContext);
  return (
    <div className="film-card__text film-card__row">
      <Helmet>
        <title>{film?.name} {film?.genre} — {Path.FilmsPages.Tabs.Details}</title>
      </Helmet>
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{film?.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {
              film?.starring.map((star, index) => (
                <>
                  {star}{index !== film?.starring.length - 1 ? ',' : null}{index !== film?.starring.length - 1 ? <br/> : null}
                </>
              ))
            }
          </span>
        </p>
      </div>
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{createHumanizeTime(film?.runTime)}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{film?.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{film?.released}</span>
        </p>
      </div>
    </div>
  );
}

export default DetailsTab;
