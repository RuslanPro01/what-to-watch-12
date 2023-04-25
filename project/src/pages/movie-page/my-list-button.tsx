import {useAppSelector} from '../../hooks';
import {selectedAuthStatus} from '../../store/selectors';
import {useNavigate} from 'react-router-dom';
import {AuthorizationStatus} from '../../components/private-route/const';
import {Path} from '../../common-const';

export function MyListButton():JSX.Element {
  const authStatus = useAppSelector(selectedAuthStatus);
  const navigate = useNavigate();
  const handleMyListClick = () => {
    if (authStatus === AuthorizationStatus.NoAuth) {
      navigate(Path.Login);
    }
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleMyListClick}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
      <span className="film-card__count">9</span>
    </button>
  );
}
