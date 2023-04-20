import React from 'react';
import { Route, Routes } from 'react-router';
import { FavoritesPage, FavoriteProductPage } from '../pages';
import { PrivateRoute } from '../components/routes';
import { ErrorBoundary, NotFound } from '../components';

export default function FavoritesRouteLayout(): React.ReactElement {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route
          path='/'
          element={
            <ErrorBoundary>
              <FavoritesPage />
            </ErrorBoundary>
          }
        />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route
          path='/:favoriteId'
          element={
            <ErrorBoundary>
              <FavoriteProductPage />
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
