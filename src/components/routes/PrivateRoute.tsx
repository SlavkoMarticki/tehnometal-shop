import { Navigate } from 'react-router';
import { useAuthUser } from '../../hooks';

export function PrivateRoute({ children }: any): any {
  const { user } = useAuthUser();

  if (!user) {
    // not logged in so redirect to login page with the return url
    return <Navigate to='/auth/login' />;
  }

  // authorized so return child components
  return children;
}
