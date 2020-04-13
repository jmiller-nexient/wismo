import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from 'components/App';

const MOUNT_NODE: HTMLElement = document.getElementById('root') as HTMLElement;

const render = (): void => ReactDOM.render(<App />, MOUNT_NODE);

render();
