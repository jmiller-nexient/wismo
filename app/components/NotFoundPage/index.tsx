import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

const NotFoundPage: React.FC = (): React.ReactElement => (
  <article>
    <h1>
      <FormattedMessage {...messages.message} />
    </h1>
  </article>
);

export default NotFoundPage;
