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
import { Loader, ErrorPage, NotFound, ErrorBoundary } from '../components';
import { PrivateRoute } from '../components/routes';

export default function MainRouteLayout(): React.ReactElement {
  return (
    <>
      <Loader />
      <Routes>
        {/* routes */}
        <Route
          path='/'
          element={
            <ErrorBoundary>
              <HomePage />
            </ErrorBoundary>
          }
        />

        <Route
          path='*'
          element={<NotFound />}
        />

        <Route
          path='/cart/successful'
          element={
            <ErrorBoundary>
              <CartSuccess />
            </ErrorBoundary>
          }
        />
        <Route
          path='/about-us'
          element={
            <ErrorBoundary>
              <AboutUsPage />
            </ErrorBoundary>
          }
        />
        <Route
          path='/contact-us'
          element={
            <ErrorBoundary>
              <ContactUsPage />
            </ErrorBoundary>
          }
        />
        <Route
          path='/news'
          element={
            <ErrorBoundary>
              <NewsPage />
            </ErrorBoundary>
          }
        />
        <Route element={<PrivateRoute />}>
          <Route
            path='/profile'
            element={
              <ErrorBoundary>
                <ProfilePage />
              </ErrorBoundary>
            }
          />
        </Route>

        {/* layout routes outlets */}
        <Route
          path='/auth/*'
          element={
            <ErrorBoundary>
              <MembershipRouteLayout />
            </ErrorBoundary>
          }
        />
        <Route
          path='/search/*'
          element={
            <ErrorBoundary>
              <SearchRouteLayout />
            </ErrorBoundary>
          }
        />
        <Route
          path='/cart/*'
          element={
            <ErrorBoundary>
              <CartRouteLayout />
            </ErrorBoundary>
          }
        />
        <Route
          path='/categories/*'
          element={
            <ErrorBoundary>
              <CategoriesRouteLayout />
            </ErrorBoundary>
          }
        />
        <Route
          path='/favorites/*'
          element={
            <ErrorBoundary>
              <FavoritesRouteLayout />
            </ErrorBoundary>
          }
        />
      </Routes>
    </>
  );
}
