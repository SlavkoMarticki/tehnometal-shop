import React from 'react';
import { Route, Routes } from 'react-router';
import { CartPage, FinishCartPage } from '../pages';

export default function CartRouteLayout(): React.ReactElement {
  return (
    <Routes>
      <Route path='/' element={<CartPage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/cart/finish-cart/:id' element={<FinishCartPage />} />{' '}
      {/* id: finishing cart id */}
    </Routes>
  );
}
