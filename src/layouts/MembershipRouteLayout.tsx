import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { RegisterPage, SignInPage } from '../pages';
import { PublicRoute } from '../components/routes';
import { ErrorBoundary, NotFound } from '../components';

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
          element={
            <ErrorBoundary>
              <SignInPage />
            </ErrorBoundary>
          }
        />
      </Route>
      <Route element={<PublicRoute />}>
        <Route
          path='/register'
          element={
            <ErrorBoundary>
              <RegisterPage />
            </ErrorBoundary>
          }
        />
      </Route>

      <Route
        path='*'
        element={<NotFound />}
      />
    </Routes>
  );
}
