import {Link} from 'react-router-dom';

type FilmCardProps = {
  name: string;
  previewImage: string;
  id: number;
  isActiveFilm: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function FilmCard({name, previewImage, id, isActiveFilm, onMouseEnter, onMouseLeave}: FilmCardProps): JSX.Element {

  return (
    <article
      className={`small-film-card catalog__films-card${isActiveFilm ? ' active-film-card' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`films/${id}/`}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
