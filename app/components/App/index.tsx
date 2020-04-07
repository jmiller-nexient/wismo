import * as React from 'react';
import { hot } from 'react-hot-loader';
import {Link, Route, Switch} from 'react-router-dom';
import Layout from 'components/Layout';
import TestPage from 'components/TestPage';
import NotFoundPage from 'components/NotFoundPage';

const App: React.FC = () => {
    return (
        <div>
            <nav>
              <Link to="/">Home</Link><br/>
              <Link to="/testpage">Test Page</Link><br />
            </nav>

            <Switch>
                <Route exact path="/">
                    <Layout />
                </Route>
                <Route path="/testpage">
                    <TestPage />
                </Route>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    );
};

export default hot(module)(App);
