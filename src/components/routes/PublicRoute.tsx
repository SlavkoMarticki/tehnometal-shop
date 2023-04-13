import { Navigate, Outlet } from 'react-router';
import { useAuthUser } from '../../hooks';

export const PublicRoute = (): any => {
  const { user } = useAuthUser();
  return user === null ? (
    <Outlet />
  ) : (
    <Navigate
      to='/'
      replace
    />
  );
};
