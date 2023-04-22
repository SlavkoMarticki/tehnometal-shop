import React from 'react';
import { Route, Routes } from 'react-router';
import { SearchResultsPage } from '../pages';
import { ErrorBoundary, NotFound } from '../components';

export default function SearchRouteLayout(): React.ReactElement {
  return (
    <Routes>
      <Route
        path='/:searchId'
        element={
          <ErrorBoundary>
            <SearchResultsPage />
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
