import React, { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { PublicRoute } from '../components/routes';

const SignInPage = lazy(() => import('../pages/membership/sign-in/SignInPage'));
const RegisterPage = lazy(
  () => import('../pages/membership/register/RegisterPage')
);

export default function MembershipRouteLayout(): React.ReactElement {
  return (
    <Routes>
      <Route
        path='/'
        element={<Navigate to='/auth/login' />}
      />
      <Route element={<PublicRoute />}>
        <Route
          path='login'
          element={<SignInPage />}
        />
      </Route>
      <Route element={<PublicRoute />}>
        <Route
          path='/register'
          element={<RegisterPage />}
        />
      </Route>
    </Routes>
  );
}
