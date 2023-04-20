import React, { lazy } from 'react';
import { Route, Routes } from 'react-router';

const SearchResultsPage = lazy(
  () => import('../pages/search-results/SearchResultsPage')
);

export default function SearchRouteLayout(): React.ReactElement {
  return (
    <Routes>
      <Route
        path='/:searchId'
        element={<SearchResultsPage />}
      />
    </Routes>
  );
}
