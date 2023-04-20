import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider, RootStoreCtxProvider } from './context';
import { LoaderProvider } from './context/loader-ctx';
import { NotificationProvider } from './context/notification-ctx';
import { GlobalLoader } from './components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.Suspense fallback={<GlobalLoader />}>
    <NotificationProvider>
      <AuthContextProvider>
        <LoaderProvider>
          <BrowserRouter>
            <RootStoreCtxProvider>
              <App />
            </RootStoreCtxProvider>
          </BrowserRouter>
        </LoaderProvider>
      </AuthContextProvider>
    </NotificationProvider>
  </React.Suspense>
);
