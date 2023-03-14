import {useState} from 'react';
import {Link} from 'react-router-dom';

type SmallFilm = {
  name: string;
  previewImage: string;
  id: number;
}

function SmallFilmCard({name, previewImage, id}: SmallFilm): JSX.Element {
  const [activeFilm, setActiveFilm] = useState<{id: number} | null>(null);
  const handleFilmCardMouseEnter: () => void = () => {
    setActiveFilm({id});
  };
  const handleFilmCardMouseLeave: () => void = () => {
    setActiveFilm(null);
  };
  return (
    <article
      className={`small-film-card catalog__films-card${activeFilm ? ' active-film-card' : ''}`}
      onMouseEnter={handleFilmCardMouseEnter}
      onMouseLeave={handleFilmCardMouseLeave}
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

export default SmallFilmCard;
