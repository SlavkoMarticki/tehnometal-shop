import React from 'react';
import { Route, Routes } from 'react-router';
import { SearchResultsPage } from '../pages';

export default function SearchRouteLayout(): React.ReactElement {
  return (
    <Routes>
      <Route path='/:searchId' element={<SearchResultsPage />} />
    </Routes>
  );
}
