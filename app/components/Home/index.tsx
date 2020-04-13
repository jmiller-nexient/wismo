import * as React from 'react';

import config from 'config';

const Home: React.FC = (): React.ReactElement => (
  <div>
    <h1>Hello, WISMO!</h1>
    <h2>This is the {config.greeting}</h2>
  </div>
);

export default Home;
