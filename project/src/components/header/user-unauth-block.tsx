import {Link} from 'react-router-dom';
import {ApiRoute} from '../../services/const';

function UserUnAuthBlock(): JSX.Element {
  return (
    <div className="user-block">
      <Link to={ApiRoute.Login} className="user-block__link">Sign in</Link>
    </div>
  );
}

export default UserUnAuthBlock;
