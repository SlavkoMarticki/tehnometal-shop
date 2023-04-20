import { observer } from 'mobx-react';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import useStore from '../hooks/useStore';
import { CartPage, FinishCartPage } from '../pages';

export default observer(function CartRouteLayout(): React.ReactElement {
  const {cartStore:{cart}} = useStore();
  return (
    <Routes>
      <Route path='/' element={<CartPage />} />
      <Route path='/finish-cart' element={cart.length === 0 ? <Navigate to="/cart"/>:<FinishCartPage />} />{' '}
    </Routes>
  );
})
