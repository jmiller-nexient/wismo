import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from 'components/Layout';
import TestPage from 'components/TestPage';
import NotFoundPage from 'components/NotFoundPage';

const Routes: React.FC<{}> = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Layout />
            </Route>
            <Route path="/testpage">
                <TestPage />
            </Route>
            <Route component={NotFoundPage} />
        </Switch>
    );
};

export default Routes;
