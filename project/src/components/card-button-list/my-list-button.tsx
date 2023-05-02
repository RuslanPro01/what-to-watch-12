import {useAppSelector} from '../../hooks';
import {useNavigate} from 'react-router-dom';
import {AuthorizationStatus} from '../private-route/const';
import {Path} from '../../common-const';
import {selectedAuthStatus} from '../../store/user-process/selectors';
import {useState} from 'react';

type MyListButtonProps = {
  isFavoriteFilm: boolean;
}

export function MyListButton({isFavoriteFilm}: MyListButtonProps):JSX.Element {
  const authStatus = useAppSelector(selectedAuthStatus);
  const navigate = useNavigate();
  const [isFilmFavorite, setIsFilmFavorite] = useState<boolean>(isFavoriteFilm);
  const handleMyListClick = () => {
    if (authStatus === AuthorizationStatus.NoAuth) {
      navigate(Path.Login);
    }
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleMyListClick}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={isFilmFavorite ? '#in-list' : '#add'}></use>
      </svg>
      <span>My list</span>
      {
        authStatus === AuthorizationStatus.Auth ? <span className="film-card__count">9</span> : null
      }
    </button>
  );
}
