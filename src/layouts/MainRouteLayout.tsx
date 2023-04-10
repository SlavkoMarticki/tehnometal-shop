import React from 'react';
import { Route, Routes } from 'react-router';
import {
  CartRouteLayout,
  CategoriesRouteLayout,
  FavoritesRouteLayout,
  MembershipRouteLayout,
  SearchRouteLayout
} from '.';
import { PrivateRoute, PublicRoute } from '../components/routes';
import { AboutUsPage, ContactUsPage, HomePage, NewsPage } from '../pages';
import { ProfilePage } from '../pages/user';

export default function MainRouteLayout(): React.ReactElement {
  return (
    <Routes>
      {/* routes */}
      <Route path='/' element={<HomePage />} />
      <Route path='/about-us' element={<AboutUsPage />} />
      <Route path='/contact-us' element={<ContactUsPage />} />
      <Route path='/news' element={<NewsPage />} />
      <Route
        path='/profile'
        element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        }
      />

      {/* layout routes outlets */}
      <Route
        path='/auth/*'
        element={
          <PublicRoute>
            <MembershipRouteLayout />
          </PublicRoute>
        }
      />
      <Route path='/search/*' element={<SearchRouteLayout />} />
      <Route path='/cart/*' element={<CartRouteLayout />} />
      <Route path='/categories/*' element={<CategoriesRouteLayout />} />
      <Route
        path='/favorites/*'
        element={
          <PrivateRoute>
            <FavoritesRouteLayout />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
