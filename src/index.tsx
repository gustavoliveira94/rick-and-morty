import React from 'react';
import ReactDOM from 'react-dom/client';

import { ProviderGraphql } from 'core/providers/graphql';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ProviderGraphql>
      <App />
    </ProviderGraphql>
  </React.StrictMode>,
);
