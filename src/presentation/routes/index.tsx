import React from 'react';
import { Route, BrowserRouter, Routes as Switch } from 'react-router-dom';

import { Layout } from 'presentation/layout';

import { Home } from 'presentation/pages';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route element={<Home />} path="/*" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
