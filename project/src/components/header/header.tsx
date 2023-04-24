import UserAuthBlock from './user-auth-block';
import Logo from './logo';
import {useAppSelector} from '../../hooks';
import {selectedAuthStatus} from '../../store/selectors';
import {AuthorizationStatus} from '../private-route/const';
import UserUnAuthBlock from './user-unauth-block';

export function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(selectedAuthStatus);
  return (
    <header className="page-header film-card__head">
      <Logo/>
      {authorizationStatus === AuthorizationStatus.Auth ? <UserAuthBlock/> : <UserUnAuthBlock/>}
    </header>
  );
}

export default Header;
