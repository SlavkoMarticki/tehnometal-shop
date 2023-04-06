import { Route, Navigate } from 'react-router-dom';
import { useAuthUser } from '../../hooks';

interface IPrivateRouteProps {
  element: JSX.Element;
  redirectTo: string;
  path: string;
}

function PrivateRoute(props: IPrivateRouteProps) {
  const { redirectTo, element, path } = props;
  const { user } = useAuthUser();

  if (user != null) {
    return <Route path={path} element={element} />;
  } else {
    <Navigate to={redirectTo} replace />;
  }
}

export default PrivateRoute;
