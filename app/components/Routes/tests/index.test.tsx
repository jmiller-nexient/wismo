import React from 'react';
import { IntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';

import { translationMessages } from 'i18n';

import Home from 'components/Layout';
import NotFoundPage from 'components/NotFoundPage';
import Routes from '..';

// tslint:disable-next-line: typedef
const mountRoutes = (initialEntries: string[]) => mount(
  <IntlProvider locale="en" messages={translationMessages.en}>
    <MemoryRouter initialEntries={initialEntries} >
      <Routes />
    </MemoryRouter>
  </IntlProvider>
);

describe('<Routes />', () => {
  it('Should show home page when the path is /', () => {
    const component = mountRoutes(['/']);

    expect(component.find(Home)).toHaveLength(1);
    expect(component.find(NotFoundPage)).toHaveLength(0);
  });

  it('Should show the Not Found page when the path is not found', () => {
    const component = mountRoutes(['/unknown']);

    expect(component.find(Home)).toHaveLength(0);
    expect(component.find(NotFoundPage)).toHaveLength(1);
  });
});
