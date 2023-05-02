import {Films} from '../../types/films';
import FilmCard from '../film-card/film-card';
import {memo, useState} from 'react';

function FilmCards({films}: {films: Films}): JSX.Element {
  const [activeFilm, setActiveFilm] = useState<null | number>(null);

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
              videoLink={videoLink}
              previewVideoLink={previewVideoLink}
              handleMouseEnter={setActiveFilm}
              handleMouseLeave={setActiveFilm}
            />
          )
        )
      }
    </div>
  );
}

export default memo(FilmCards);
