import {Link} from 'react-router-dom';
import {Path} from '../../common-const';

function Logo(): JSX.Element {
  return (
    <div className="logo">
      <Link to={Path.MainPage.initial} className="logo__link">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
