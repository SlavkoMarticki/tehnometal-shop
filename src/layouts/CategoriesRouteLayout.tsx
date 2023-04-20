import React from 'react';
import { Route, Routes } from 'react-router';
import {
  CategoriesPage,
  CategoryProductsPage,
  SubCategoriesPage
} from '../pages';
import { ErrorBoundary, NotFound } from '../components';

export default function CategoriesRouteLayout(): React.ReactElement {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <ErrorBoundary>
            <CategoriesPage />
          </ErrorBoundary>
        }
      />
      <Route
        path='/:categoryId'
        element={
          <ErrorBoundary>
            <SubCategoriesPage />
          </ErrorBoundary>
        }
      />

      <Route
        path='/:categoryId/:subCategoryId'
        element={
          <ErrorBoundary>
            <CategoryProductsPage />
          </ErrorBoundary>
        }
      />

      <Route
        path='*'
        element={<NotFound />}
      />
    </Routes>
  );
}
