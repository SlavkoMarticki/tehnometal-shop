import { Navigate } from 'react-router';
import { useAuthUser } from '../../hooks';

export function PublicRoute({ children }: any): any {
  const { user } = useAuthUser();

  if (user) {
    // not logged in so redirect to login page with the return url
    return <Navigate to='/' />;
  }

  // authorized so return child components
  return children;
}
