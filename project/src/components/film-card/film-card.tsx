import {Link} from 'react-router-dom';
import classNames from 'classnames';
import {useEffect, useRef, useState} from 'react';
import {TIME_OUT_ACTIVE_VIDEO} from '../../common-const';

type FilmCardProps = {
  name: string;
  previewImage: string;
  id: number;
  isActiveFilm: boolean;
  videoLink: string;
  previewVideoLink: string;
}

function FilmCard({
  name,
  previewImage,
  id,
  isActiveFilm,
  videoLink,
  previewVideoLink
}: FilmCardProps): JSX.Element {
  const [isPlaying, setIsVideoPlayer] = useState(false);
  const timeIntervalIdRef = useRef<null | number>(null);
  const filmCardRef = useRef<HTMLDivElement | null>(null);
  const handleFilmCardMouseEnter = () => {
    timeIntervalIdRef.current = window.setTimeout(() => {
      setIsVideoPlayer(true);
    }, TIME_OUT_ACTIVE_VIDEO);
  };

  const handleFilmCardMouseLeave = () => {
    if (timeIntervalIdRef.current) {
      window.clearTimeout(timeIntervalIdRef.current);
      setIsVideoPlayer(false);
    }
  };

  useEffect(() => {
    const currentRef = filmCardRef.current;

    if (currentRef) {
      currentRef.addEventListener('mouseenter', handleFilmCardMouseEnter);
      currentRef.addEventListener('mouseleave', handleFilmCardMouseLeave);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('mouseenter', handleFilmCardMouseEnter);
        currentRef.removeEventListener('mouseleave', handleFilmCardMouseLeave);
      }
    };
  }, [isActiveFilm]);

  return (
    <article
      className={classNames('small-film-card', 'catalog__films-card', {'active-film-card': isActiveFilm})}
      ref={filmCardRef}
    >
      <div className="small-film-card__image">
        {
          isPlaying ?
            <video
              src={videoLink}
              width="280"
              height="175"
              poster={previewVideoLink}
              autoPlay
              muted
              loop
            >
            </video> :
            <img
              src={previewImage}
              alt={name}
              width="280"
              height="175"
            />
        }
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`films/${id}/`}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
