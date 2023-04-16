import React from 'react';
import { Route, Routes } from 'react-router';
import {
  CartRouteLayout,
  CategoriesRouteLayout,
  FavoritesRouteLayout,
  MembershipRouteLayout,
  SearchRouteLayout
} from '.';
import {
  AboutUsPage,
  ContactUsPage,
  HomePage,
  NewsPage,
  CartSuccess
} from '../pages';
import { ProfilePage } from '../pages/user';
import { Loader } from '../components';
import { PrivateRoute } from '../components/routes';

export default function MainRouteLayout(): React.ReactElement {
  return (
    <>
      <Loader />
      <Routes>
        {/* routes */}
        <Route
          path='/'
          element={<HomePage />}
        />

        <Route
          path='/cart/successful'
          element={<CartSuccess />}
        />
        <Route
          path='/about-us'
          element={<AboutUsPage />}
        />
        <Route
          path='/contact-us'
          element={<ContactUsPage />}
        />
        <Route
          path='/news'
          element={<NewsPage />}
        />
        <Route element={<PrivateRoute />}>
          <Route
            path='/profile'
            element={<ProfilePage />}
          />
        </Route>

        {/* layout routes outlets */}
        <Route
          path='/auth/*'
          element={<MembershipRouteLayout />}
        />
        <Route
          path='/search/*'
          element={<SearchRouteLayout />}
        />
        <Route
          path='/cart/*'
          element={<CartRouteLayout />}
        />
        <Route
          path='/categories/*'
          element={<CategoriesRouteLayout />}
        />
        <Route
          path='/favorites/*'
          element={<FavoritesRouteLayout />}
        />
      </Routes>
    </>
  );
}
