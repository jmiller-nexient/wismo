import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const MOUNT_NODE: HTMLElement = document.getElementById('root') as HTMLElement;

ReactDOM.render(
    <App />,
    MOUNT_NODE,
);
