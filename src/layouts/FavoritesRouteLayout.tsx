import React, { lazy } from 'react';
import { Route, Routes } from 'react-router';
import { PrivateRoute } from '../components/routes';

const FavoritesPage = lazy(
  () => import('../pages/favorites/favorite-page/FavoritesPage')
);

export default function FavoritesRouteLayout(): React.ReactElement {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route
          path='/'
          element={<FavoritesPage />}
        />
      </Route>
    </Routes>
  );
}
