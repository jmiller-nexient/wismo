import * as React from 'react';
import { hot } from 'react-hot-loader';

import Routes from 'components/Routes';
import Layout from 'components/Layout';

const App: React.FC = () => {
    return (
        <Routes>
            <div>
                <Layout />
            </div>
        </Routes>
    );
};

export default hot(module)(App);
