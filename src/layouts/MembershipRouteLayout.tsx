import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { RegisterPage, SignInPage } from '../pages';
import { PublicRoute } from '../components/routes';

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
