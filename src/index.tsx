import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider, RootStoreCtxProvider } from './context';
import { LoaderProvider } from './context/loader-ctx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RootStoreCtxProvider>
      <AuthContextProvider>
        <LoaderProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </LoaderProvider>
      </AuthContextProvider>
    </RootStoreCtxProvider>
  </React.StrictMode>
);
