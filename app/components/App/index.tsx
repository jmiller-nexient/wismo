import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Link } from 'react-router-dom';
import Routes from 'components/Routes';

const App: React.FC = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link><br />
                <Link to="/testpage">Test Page</Link><br />
            </nav>
            <Routes />
        </div>
    );
};

export default hot(module)(App);
