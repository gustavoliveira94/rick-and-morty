import { render as renderComponent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { ProviderGraphql, ProviderStore } from 'core/providers';

export const render = (component: JSX.Element) => {
  return {
    ...renderComponent(
      <BrowserRouter>
        <ProviderStore>
          <ProviderGraphql>{component}</ProviderGraphql>
        </ProviderStore>
      </BrowserRouter>,
    ),
  };
};
