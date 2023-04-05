import React from 'react';
import { Route, Routes } from 'react-router';
import { FavoritesPage, FavoriteProductPage } from '../pages';

export default function FavoritesRouteLayout(): React.ReactElement {
  return (
    <Routes>
      <Route path='/' element={<FavoritesPage />} />
      <Route path='/favorites' element={<FavoritesPage />} />
      <Route path='/favorites/:favoriteId' element={<FavoriteProductPage />} />
    </Routes>
  );
}
