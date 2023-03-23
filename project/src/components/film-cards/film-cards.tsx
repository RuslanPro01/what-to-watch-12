import {Films} from '../../mock/films';
import FilmCard from '../film-card/film-card';
import {useEffect, useRef, useState} from 'react';
import {timeOutActiveVideo} from '../../common-const';

function FilmCards({films}: {films: Films}): JSX.Element {
  const [activeFilm, setActiveFilm] = useState<null | number>(null);
  const [isActiveFilm, setIsActiveFilm] = useState<boolean>(false);
  const timeoutIdRef = useRef<null | number>(null);
  const handleFilmCardMouseEnter: (id: number) => void = (id) => {
    timeoutIdRef.current = window.setTimeout(() => {
      setActiveFilm(id);
    }, timeOutActiveVideo);
    setIsActiveFilm(true);
  };
  const handleFilmCardMouseLeave: () => void = () => {
    setActiveFilm(null);
    if (timeoutIdRef.current !== null) {
      window.clearTimeout(timeoutIdRef.current);
    }
    setIsActiveFilm(false);
  };

  useEffect(() => {
    if (timeoutIdRef.current !== null) {
      window.clearTimeout(timeoutIdRef.current);
    }
  }, []);

  return (
    <div className="catalog__films-list">
      {
        films.map(({name, previewImage, id, videoLink, previewVideoLink}) =>
          (
            <FilmCard
              name={name}
              previewImage={previewImage}
              videoLink={videoLink}
              previewVideoLink={previewVideoLink}
              id={id}
              key={id}
              isActiveFilm={isActiveFilm}
              isNeedVideoPlayer={id === activeFilm}
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
