import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import LoginPage from './views/login';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={LoginPage} path="/" exact />
    </BrowserRouter>
  )
}

export default Routes;