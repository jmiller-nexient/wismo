import React from 'react';
import renderer from 'react-test-renderer';

import ServiceSummary from 'components/ServiceSummary';

import { fakeServiceRequest } from 'components/TestPage/constants';
import { IntlProvider } from 'react-intl';

const serviceRequestNoProducts = {
  ...fakeServiceRequest,
  products: [],
};

describe('<ServiceSummary />', () => {
  it('should render correctly when the page loads', () => {
    const tree = renderer.create(
      <IntlProvider locale={'en'}>
        <ServiceSummary serviceRequest={fakeServiceRequest}/>
      </IntlProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render correctly when product list is empty', () => {
    const tree = renderer.create(
      <IntlProvider locale={'en'}>
        <ServiceSummary serviceRequest={serviceRequestNoProducts}/>
      </IntlProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
