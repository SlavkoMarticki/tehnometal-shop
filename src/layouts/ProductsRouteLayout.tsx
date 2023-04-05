import React from 'react';
import { Route, Routes } from 'react-router';
import { ProductsPage } from '../pages';

export default function ProductsRouteLayout(): React.ReactElement {
  return (
    <Routes>
      <Route path='/:prodId' element={<ProductsPage />} />
    </Routes>
  );
}
