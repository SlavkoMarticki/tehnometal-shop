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
      <Route path='/' element={<CategoriesPage />} />
      <Route path='/category/:subCategoryId' element={<SubCategoriesPage />} />
      <Route
        path='/category/:subCategoryId/:categoryProductId'
        element={<CategoryProductsPage />}
      />
    </Routes>
  );
}
