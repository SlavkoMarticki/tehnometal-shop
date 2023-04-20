import React, { lazy } from 'react';
import { Route, Routes } from 'react-router';

import { Loader, ErrorPage, NotFound } from '../components';
import { PrivateRoute } from '../components/routes';

// lazy loading components
const HomePage = lazy(() => import('../pages/homepage/HomePage'));
const CartSuccess = lazy(
  () => import('../pages/cart/cart-success/CartSuccess')
);
const AboutUsPage = lazy(() => import('../pages/about-us/AboutUsPage'));
const ContactUsPage = lazy(() => import('../pages/contact-us/ContactUsPage'));
const NewsPage = lazy(() => import('../pages/news/NewsPage'));
const ProfilePage = lazy(() => import('../pages/user/ProfilePage'));
const MembershipRouteLayout = lazy(
  () => import('../layouts/MembershipRouteLayout')
);
const SearchRouteLayout = lazy(() => import('../layouts/SearchRouteLayout'));
const CartRouteLayout = lazy(() => import('../layouts/CartRouteLayout'));
const CategoriesRouteLayout = lazy(
  () => import('../layouts/CategoriesRouteLayout')
);
const FavoritesRouteLayout = lazy(
  () => import('../layouts/FavoritesRouteLayout')
);

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

        {/* TODO remove this after styling implementation */}

        <Route
          path='/error'
          element={<NotFound />}
        />

        <Route
          path='/error-page'
          element={<ErrorPage />}
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
