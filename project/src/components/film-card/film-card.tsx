import {Link} from 'react-router-dom';
import classNames from 'classnames';

type FilmCardProps = {
  name: string;
  previewImage: string;
  id: number;
  isActiveFilm: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function FilmCard({
  name,
  previewImage,
  id,
  isActiveFilm,
  onMouseEnter,
  onMouseLeave
}: FilmCardProps): JSX.Element {

  return (
    <article
      className={classNames('small-film-card', 'catalog__films-card', {'active-film-card': isActiveFilm})}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="small-film-card__image">
        <img
          src={previewImage}
          alt={name}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`films/${id}/`}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
