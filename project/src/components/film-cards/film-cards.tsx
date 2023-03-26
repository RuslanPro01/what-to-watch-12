import {Films} from '../../mock/films';
import FilmCard from '../film-card/film-card';
import {useState} from 'react';

function FilmCards({films}: {films: Films}): JSX.Element {
  const [activeFilm, setActiveFilm] = useState<null | number>(null);
  const handleFilmCardMouseEnter: (id: number) => void = (id) => {
    setActiveFilm(id);
  };
  const handleFilmCardMouseLeave: () => void = () => {
    setActiveFilm(null);
  };

  return (
    <div className="catalog__films-list">
      {
        films.map(({name, previewImage, id, videoLink, previewVideoLink}) =>
          (
            <FilmCard
              name={name}
              previewImage={previewImage}
              id={id}
              key={id}
              isActiveFilm={id === activeFilm}
              onMouseEnter={() => handleFilmCardMouseEnter(id)}
              onMouseLeave={handleFilmCardMouseLeave}
            />
          )
        )
      }
    </div>
  );
}

export default FilmCards;
