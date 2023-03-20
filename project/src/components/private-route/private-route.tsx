import {AuthorizationStatus} from './const';
import {Navigate} from 'react-router-dom';
import {Path} from '../../common-const';

type PrivateRouteProps = {
  authorizationStatus: string;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={Path.Login}/>
  );
}

export default PrivateRoute;
