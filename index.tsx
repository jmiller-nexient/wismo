import * as  React from 'react';
import * as ReactDOM from 'react-dom';

import App from './app/components/App';
import ErrorBoundary from './app/components/ErrorBoundary';

const MOUNT_NODE: HTMLElement = document.getElementById('root') as HTMLElement;

const render = (): void => {
  ReactDOM.render(
    <ErrorBoundary>
        <App />
    </ErrorBoundary>,
    MOUNT_NODE,
  );
};

render();
