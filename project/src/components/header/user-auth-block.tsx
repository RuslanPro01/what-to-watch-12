import {useAppDispatch, useAppSelector} from '../../hooks';
import {selectedAuthStatus, selectedUserData} from '../../store/user-process/selectors';
import {AuthorizationStatus} from '../private-route/const';
import {Spinner} from '../spiner/spinner';
import {Link} from 'react-router-dom';
import {logOutAction} from '../../store/async-actions';
import {MouseEvent} from 'react';

function UserAuthBlock(): JSX.Element {
  const user = useAppSelector(selectedUserData);
  const authStatus = useAppSelector(selectedAuthStatus);
  const dispatch = useAppDispatch();

  const handleSignOutButtonClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logOutAction());
  };

  if (authStatus === AuthorizationStatus.Unknown) {
    return <Spinner/>;
  }

  return (
    <ul className="user-block">
      <li className="user-block__item" title={user?.name}>
        <div className="user-block__avatar">
          <img src={user?.avatarUrl ?? 'https://dummyimage.com/63/fd612e/fff.jpg&text=LOADING'} alt={user?.name ? `${user.name} avatar` : 'Placeholder image'} width="63" height="63"/>
        </div>
      </li>
      <li className="user-block__item">
        <Link
          to=''
          className="user-block__link"
          onClick={handleSignOutButtonClick}
        >
          Sign out
        </Link>
      </li>
    </ul>
  );
}

export default UserAuthBlock;
