import React from 'react';
import ReactDOM from 'react-dom/client';

import { ProviderStore } from 'core/providers/store';
import { ProviderGraphql } from 'core/providers/graphql';
import { GlobalStyles } from 'config/styles';

import Routes from 'presentation/routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ProviderStore>
      <ProviderGraphql>
        <Routes />
      </ProviderGraphql>
    </ProviderStore>
  </React.StrictMode>,
);
