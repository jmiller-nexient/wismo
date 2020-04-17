import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'components/Home';
import NotFoundPage from 'components/NotFoundPage';
import OrderStatusPage from 'components/OrderStatusPage';
import TestPage from 'components/TestPage';

const Routes: React.FC<{}> = (): React.ReactElement => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/orders/:id">
      <OrderStatusPage />
    </Route>
    <Route path="/testpage">
      <TestPage />
    </Route>
    <Route>
      <NotFoundPage />
    </Route>
  </Switch>
);

export default Routes;
