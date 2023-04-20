import { observer } from 'mobx-react';
import React, { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import useStore from '../hooks/useStore';

const CartPage = lazy(() => import('../pages/cart/cart-page/CartPage'));
const FinishCartPage = lazy(
  () => import('../pages/cart/finish-cart/FinishCartPage')
);

export default observer(function CartRouteLayout(): React.ReactElement {
  const {
    cartStore: { cart }
  } = useStore();
  return (
    <Routes>
      <Route
        path='/'
        element={<CartPage />}
      />
      <Route
        path='/finish-cart'
        element={
          cart.length === 0 ? <Navigate to='/cart' /> : <FinishCartPage />
        }
      />{' '}
    </Routes>
  );
});
