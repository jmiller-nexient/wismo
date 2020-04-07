import * as React from 'react';

import config from 'config';

import './index.less';

const Home: React.FC = () => (
  <div className="dte-home">
    <h1>Hello, WISMO!</h1>
    <h2>This is the {config.greeting}</h2>
  </div>
);

export default Home;
