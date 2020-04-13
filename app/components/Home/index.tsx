import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import config from 'config';

import messages from './messages';

const Home: React.FC = (): React.ReactElement => (
  <div>
    <h1>
      <FormattedMessage {...messages.title} />
    </h1>
    <h2>This is the {config.greeting}</h2>
  </div>
);

export default Home;
