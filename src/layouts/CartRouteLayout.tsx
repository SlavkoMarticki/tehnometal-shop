import { observer } from 'mobx-react';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import useStore from '../hooks/useStore';
import { CartPage, FinishCartPage } from '../pages';
import { ErrorBoundary, NotFound } from '../components';

export default observer(function CartRouteLayout(): React.ReactElement {
  const {
    cartStore: { cart }
  } = useStore();

  return (
    <Routes>
      <Route
        path='/'
        element={
          <ErrorBoundary>
            <CartPage />
          </ErrorBoundary>
        }
      />
      <Route
        path='/finish-cart'
        element={
          cart.length === 0 ? (
            <Navigate to='/cart' />
          ) : (
            <ErrorBoundary>
              <FinishCartPage />
            </ErrorBoundary>
          )
        }
      />

      <Route
        path='*'
        element={<NotFound />}
      />
    </Routes>
  );
});
