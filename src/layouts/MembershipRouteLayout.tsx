import React from 'react';
import { Route, Routes } from 'react-router';
import { PublicRoute } from '../components/routes';
import { RegisterPage, SignInPage } from '../pages';

export default function MembershipRouteLayout(): React.ReactElement {
  return (
    <Routes>
      <Route path='/' element={<SignInPage />} />
      <Route path='/login' element={<SignInPage />} />
      <Route path='/register' element={<RegisterPage />} />
    </Routes>
  );
}
