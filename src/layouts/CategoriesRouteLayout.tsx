import React from 'react';
import { Route, Routes } from 'react-router';
import {
  CategoriesPage,
  CategoryProductsPage,
  SubCategoriesPage
} from '../pages';

export default function CategoriesRouteLayout(): React.ReactElement {
  return (
    <Routes>
      <Route
        path='/'
        element={<CategoriesPage />}
      />
      <Route
        path='/:categoryId'
        element={<SubCategoriesPage />}
      />

      <Route
        path='/:categoryId/:subCategoryId'
        element={<CategoryProductsPage />}
      />
    </Routes>
  );
}
