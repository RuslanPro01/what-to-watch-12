import {useAppDispatch, useAppSelector} from '../../hooks';
import {useNavigate} from 'react-router-dom';
import {AuthorizationStatus} from '../private-route/const';
import {Path} from '../../common-const';
import {selectedAuthStatus} from '../../store/user-process/selectors';
import {useCallback, useState} from 'react';
import {selectedFavoriteFilms, selectedStatusLoadFavoriteFilms} from '../../store/api-process/selectors';
import {fetchFavoriteFilms, updateFavoriteStatus} from '../../store/async-actions';
import {toast} from 'react-toastify';
import {LoadStatus} from '../../services/const';

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
  const [favoriteFilmsCount, setFavoriteFilmsCount] = useState<number>(favoriteFilms.length);
  const loadStatusFavoriteFilms = useAppSelector(selectedStatusLoadFavoriteFilms);

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
          if (newStatus) {
            setFavoriteFilmsCount(favoriteFilmsCount + 1);
          } else {
            setFavoriteFilmsCount(favoriteFilmsCount - 1);
          }
        } catch (error) {
          toast.warn('Error');
        } finally {
          dispatch(fetchFavoriteFilms());
          setIsButtonDisabled(false);
        }
      })();
    }
  }, [authStatus, dispatch, favoriteFilmsCount, filmId, isFilmFavorite, navigate]);


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
      {authStatus === AuthorizationStatus.Auth && loadStatusFavoriteFilms === LoadStatus.Loaded ? (
        <span className="film-card__count">{favoriteFilmsCount}</span>
      ) : null}
    </button>
  );
}
