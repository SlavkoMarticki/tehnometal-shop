import { ReactNode } from 'react';
import { Route, Navigate, RouteProps, PathRouteProps } from 'react-router-dom';
import { useAuthUser } from '../../hooks';

interface IPublicRouteProps {
  element: any;
  path: string;
  redirectTo: string;
}

function PublicRoute(props: IPublicRouteProps) {
  const { user } = useAuthUser();
  const { redirectTo, element, path } = props;

  if (user == null) {
    <Route path={path} element={element} />;
  } else {
    return <Navigate to={redirectTo} replace />;
  }
}

export default PublicRoute;
