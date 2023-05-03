import {Path} from '../../common-const';
import {MyListButton} from './my-list-button';
import {AuthorizationStatus} from '../private-route/const';
import {AddReviewButton} from './add-review-button';
import {useNavigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import {selectedAuthStatus} from '../../store/user-process/selectors';

type CardButtonListProps = {
  filmId: string;
  isFavoriteFilm: boolean;
  isMainPage: boolean;
}

export function CardButtonList({filmId, isFavoriteFilm, isMainPage}: CardButtonListProps): JSX.Element {
  const navigate = useNavigate();
  const authStatus = useAppSelector(selectedAuthStatus);
  return (
    <div className="film-card__buttons">
      <button
        className="btn btn--play film-card__button" type="button" onClick={() => {
          navigate(`${Path.PlayerPage.replace(':id', filmId ?? '')}`);
        }}
      >
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <MyListButton isFavoriteFilm={isFavoriteFilm} filmId={filmId}/>
      {authStatus === AuthorizationStatus.Auth ? <AddReviewButton isMainPage={isMainPage}/> : null}
    </div>
  );
}
