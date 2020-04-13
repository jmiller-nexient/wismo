import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'components/Home';
import TestPage from 'components/TestPage';
import NotFoundPage from 'components/NotFoundPage';

const Routes: React.FC<{}> = (): React.ReactElement => (
  <Switch>
    <Route exact path="/">
      <Home />
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