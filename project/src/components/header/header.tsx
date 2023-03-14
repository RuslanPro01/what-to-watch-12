import UserBlock from './user-block';
import Logo from './logo';

export function Header(): JSX.Element {
  return (
    <header className="page-header film-card__head">
      <Logo/>
      <UserBlock/>
    </header>
  );
}

export default Header;
