import {Films} from '../../mock/films';
import FilmCard from '../film-card/film-card';
import {useState} from 'react';

function FilmCards({films}: {films: Films}): JSX.Element {
  const [activeFilm, setActiveFilm] = useState<{isActiveFilm: boolean; id: null | number}>({
    isActiveFilm: false,
    id: null
  });
  const handleFilmCardMouseEnter: (id: number) => void = (id) => {
    setActiveFilm({
      isActiveFilm: true,
      id: id
    });
  };
  const handleFilmCardMouseLeave: () => void = () => {
    setActiveFilm({
      isActiveFilm: false,
      id: null
    });
  };

  return (
    <div className="catalog__films-list">
      {
        films.map(({name, previewImage, id}) =>
          (
            <FilmCard
              name={name}
              previewImage={previewImage}
              id={id}
              key={id}
              isActiveFilm={activeFilm.isActiveFilm}
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
