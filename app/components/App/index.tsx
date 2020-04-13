import * as React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';

import ErrorBoundary from 'components/ErrorBoundary';
import { LanguageProvider } from 'components/LanguageProvider';
import Layout from 'components/Layout';

const App: React.FC = (): React.ReactElement => (
  <LanguageProvider locale={navigator.language}>
    <ErrorBoundary>
      <Router>
        <Layout />
      </Router>
    </ErrorBoundary>
  </LanguageProvider>
);

export default hot(module)(App);
