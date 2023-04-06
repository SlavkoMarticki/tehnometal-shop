import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { RegisterPage, SignInPage } from '../pages';

export default function MembershipRouteLayout(): React.ReactElement {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/auth/login' />} />
      <Route path='/login' element={<SignInPage />} />
      <Route path='/register' element={<RegisterPage />} />
    </Routes>
  );
}
