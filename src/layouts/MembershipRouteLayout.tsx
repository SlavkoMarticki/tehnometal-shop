import React from 'react';
import { Route, Routes } from 'react-router';
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
