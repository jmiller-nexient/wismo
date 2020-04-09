import * as React from 'react';
import { hot } from 'react-hot-loader';

import Layout from 'components/Layout';

const App: React.FC = () => {
    return (
            <div>
                <Layout />
            </div>
    );
};

export default hot(module)(App);
