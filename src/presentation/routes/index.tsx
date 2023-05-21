import React from 'react';
import { Route, BrowserRouter, Routes as Switch } from 'react-router-dom';

import { Home } from 'presentation/pages';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route element={<Home />} path="/*" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
