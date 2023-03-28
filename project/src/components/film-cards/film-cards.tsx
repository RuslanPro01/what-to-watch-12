import {Films} from '../../mock/films';
import FilmCard from '../film-card/film-card';
import {useState} from 'react';

function FilmCards({films}: {films: Films}): JSX.Element {
  const [activeFilm,] = useState<null | number>(null);

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
            />
          )
        )
      }
    </div>
  );
}

export default FilmCards;
