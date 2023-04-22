import { Navigate, Outlet } from 'react-router';
import { useAuthUser } from '../../hooks';

export const PrivateRoute = (): any => {
  const { user } = useAuthUser();
  return user !== null ? <Outlet /> : <Navigate to='/auth/login' />;
};
