import React, { lazy } from 'react';
import { Route, Routes } from 'react-router';

const CategoriesPage = lazy(
  () => import('../pages/categories/categories/CategoriesPage')
);
const SubCategoriesPage = lazy(
  () => import('../pages/categories/sub-categories/SubCategoriesPage')
);
const CategoryProductsPage = lazy(
  () => import('../pages/categories/cat-products/CategoryProductsPage')
);

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
