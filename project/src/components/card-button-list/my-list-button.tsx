import { useAppDispatch, useAppSelector } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { AuthorizationStatus } from '../private-route/const';
import { Path } from '../../common-const';
import { selectedAuthStatus } from '../../store/user-process/selectors';
import { useState, useCallback } from 'react';
import { selectedFavoriteFilms } from '../../store/api-process/selectors';
import { updateFavoriteStatus } from '../../store/async-actions';
import {toast} from 'react-toastify';

type MyListButtonProps = {
  filmId: string;
  isFavoriteFilm: boolean;
};

export function MyListButton({ filmId, isFavoriteFilm }: MyListButtonProps): JSX.Element {
  const authStatus = useAppSelector(selectedAuthStatus);
  const navigate = useNavigate();
  const [isFilmFavorite, setIsFilmFavorite] = useState<boolean>(isFavoriteFilm);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const favoriteFilms = useAppSelector(selectedFavoriteFilms);

  const handleMyListClick = useCallback(() => {
    if (authStatus === AuthorizationStatus.NoAuth) {
      navigate(Path.Login);
    } else {
      (async () => {
        try {
          setIsButtonDisabled(true);
          const newStatus = isFilmFavorite ? 0 : 1;
          const updatedFilm = await dispatch(updateFavoriteStatus({ filmId, status: newStatus })).unwrap();
          setIsFilmFavorite(updatedFilm.isFavorite);
        } catch (error) {
          toast.warn('Error');
        } finally {
          setIsButtonDisabled(false);
        }
      })();
    }
  }, [authStatus, dispatch, filmId, isFilmFavorite, navigate]);


  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={handleMyListClick}
      disabled={isButtonDisabled}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={isFilmFavorite ? '#in-list' : '#add'}></use>
      </svg>
      <span>My list</span>
      {authStatus === AuthorizationStatus.Auth ? (
        <span className="film-card__count">{favoriteFilms.length}</span>
      ) : null}
    </button>
  );
}
