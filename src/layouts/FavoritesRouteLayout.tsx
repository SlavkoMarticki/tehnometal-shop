import React from 'react';
import { Route, Routes } from 'react-router';
import { FavoritesPage, FavoriteProductPage } from '../pages';
import { PrivateRoute, PublicRoute } from '../components/routes';

export default function FavoritesRouteLayout(): React.ReactElement {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route
          path='/'
          element={<FavoritesPage />}
        />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route
          path='/:favoriteId'
          element={<FavoriteProductPage />}
        />
      </Route>
    </Routes>
  );
}
